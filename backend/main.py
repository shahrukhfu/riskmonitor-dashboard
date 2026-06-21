import asyncio
import os
import json
import logging
from datetime import datetime
import pandas as pd
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("FinancialRiskDetector")

app = FastAPI(title="AlphaRisk Institutional Backend")

# Enable CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Relative path from backend folder to workspace root
CSV_PATH = "../dataset.csv"

def get_risk_assessment(row):
    """
    Simulates a risk assessment based on transaction characteristics.
    """
    if row.get("isFraud", 0) == 1 or row.get("isFlaggedFraud", 0) == 1:
        return "High"
    
    amount = float(row.get("amount", 0))
    tx_type = str(row.get("type", ""))
    
    # Large transfers or payments are categorized as Medium risk
    if tx_type in ["TRANSFER", "CASH_OUT"] and amount > 500000:
        return "High"
    elif amount > 100000:
        return "Medium"
    else:
        return "Low"

async def stream_transactions(websocket: WebSocket):
    if not os.path.exists(CSV_PATH):
        error_msg = f"Dataset file not found at: {os.path.abspath(CSV_PATH)}"
        logger.error(error_msg)
        await websocket.send_json({"error": error_msg})
        return

    logger.info(f"Successfully loaded dataset from: {os.path.abspath(CSV_PATH)}")
    
    # Read the dataset in chunks to avoid high memory overhead
    chunk_size = 5000
    try:
        for chunk in pd.read_csv(CSV_PATH, chunksize=chunk_size):
            for _, row in chunk.iterrows():
                # Formulate transaction payload matching dataset columns
                tx_data = {
                    "step": int(row["step"]),
                    "type": str(row["type"]),
                    "amount": float(row["amount"]),
                    "nameOrig": str(row["nameOrig"]),
                    "oldbalanceOrg": float(row["oldbalanceOrg"]),
                    "newbalanceOrig": float(row["newbalanceOrig"]),
                    "nameDest": str(row["nameDest"]),
                    "oldbalanceDest": float(row["oldbalanceDest"]),
                    "newbalanceDest": float(row["newbalanceDest"]),
                    "isFraud": int(row["isFraud"]),
                    "isFlaggedFraud": int(row["isFlaggedFraud"]),
                    "timestamp": datetime.now().strftime("%H:%M:%S"),
                    "riskAssessment": get_risk_assessment(row)
                }
                
                await websocket.send_json(tx_data)
                # Sleep briefly to simulate real-time stream (e.g. 0.5s)
                await asyncio.sleep(0.5)
    except WebSocketDisconnect:
        logger.info("WebSocket client disconnected during streaming.")
    except Exception as e:
        logger.error(f"Error streaming data: {str(e)}")

@app.websocket("/ws/transactions")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    logger.info("Client connected to WebSocket transaction stream")
    try:
        await stream_transactions(websocket)
    except WebSocketDisconnect:
        logger.info("Client disconnected.")
    except Exception as e:
        logger.error(f"WebSocket connection error: {str(e)}")
        try:
            await websocket.close()
        except:
            pass

@app.get("/")
def read_root():
    return {"status": "nominal", "message": "AlphaRisk Backend is online"}
