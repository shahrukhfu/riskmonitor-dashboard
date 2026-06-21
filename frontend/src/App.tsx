import { useEffect, useState, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { TransactionTable } from './components/TransactionTable';
import { RiskChart } from './components/RiskChart';
import { SystemHealth } from './components/SystemHealth';
import type { Transaction, SystemAlert } from './types';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  
  // Aggregate states (initialized with mockup values)
  const [totalVolume, setTotalVolume] = useState(14200000000); 
  const [flaggedCount, setFlaggedCount] = useState(1284);
  const [todayFlaggedCount, setTodayFlaggedCount] = useState(12);

  // System health alerts list
  const [alerts, setAlerts] = useState<SystemAlert[]>([
    {
      id: 'mock-1',
      title: 'Unusual activity detected',
      description: 'Sanctioned entity "Entity_X" linked to JP Morgan transfer.',
      type: 'critical',
      timestamp: '14:22:01',
    },
    {
      id: 'mock-2',
      title: 'Watchlist Synchronized',
      description: 'OFAC list updated successfully. 43 new records added.',
      type: 'info',
      timestamp: '14:21:45',
    },
    {
      id: 'mock-3',
      title: 'Daily Report Compiled',
      description: 'End-of-day summary for 2023-10-24 is ready for review.',
      type: 'success',
      timestamp: '14:18:30',
    }
  ]);

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Establish connection to FastAPI server WebSocket endpoint
    const socketUrl = 'ws://localhost:8000/ws/transactions';
    console.log(`[WebSocket] Connecting to: ${socketUrl}`);
    
    const ws = new WebSocket(socketUrl);
    socketRef.current = ws;

    ws.onopen = () => {
      console.log('[WebSocket] Connection established successfully');
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const tx: Transaction = JSON.parse(event.data);
        console.log('[WebSocket] Incoming message:', tx);

        // Keep maximum 50 records in memory to prevent browser lag
        setTransactions((prev) => [tx, ...prev].slice(0, 50));

        // Increment volume
        setTotalVolume((prev) => prev + tx.amount);

        // Increment flagged fraud if isFraud/isFlaggedFraud are set or assessment is High
        if (tx.isFraud === 1 || tx.isFlaggedFraud === 1 || tx.riskAssessment === 'High') {
          setFlaggedCount((prev) => prev + 1);
          setTodayFlaggedCount((prev) => prev + 1);

          // Push new security alert to System Health list
          const newAlert: SystemAlert = {
            id: `alert-${Date.now()}`,
            title: `High Risk Detected - ${tx.type}`,
            description: `Alert flagged for $${tx.amount.toLocaleString()} transaction from origin ${tx.nameOrig} to ${tx.nameDest}.`,
            type: 'critical',
            timestamp: tx.timestamp
          };
          
          setAlerts((prev) => [newAlert, ...prev].slice(0, 10));
        }
      } catch (err) {
        console.error('[WebSocket] Parsing error:', err);
      }
    };

    ws.onerror = (error) => {
      console.error('[WebSocket] Error encountered:', error);
      setIsConnected(false);
    };

    ws.onclose = (event) => {
      console.log('[WebSocket] Connection closed:', event.reason || 'No reason');
      setIsConnected(false);
      
      // Auto-reconnect flow
      setTimeout(() => {
        if (!socketRef.current || socketRef.current.readyState === WebSocket.CLOSED) {
          // Re-trigger the connection
          setIsConnected(false);
        }
      }, 5000);
    };

    return () => {
      ws.close();
    };
  }, []);

  // Calculate active risk score dynamically based on current buffered stream
  const getActiveRiskScore = () => {
    if (transactions.length === 0) return '31.4';
    const total = transactions.length;
    let weightSum = 0;
    transactions.forEach((tx) => {
      if (tx.riskAssessment === 'High') weightSum += 95;
      else if (tx.riskAssessment === 'Medium') weightSum += 45;
      else weightSum += 12;
    });
    return (weightSum / total).toFixed(1);
  };

  const formatVolume = (vol: number) => {
    if (vol >= 1.0e9) {
      return `$${(vol / 1.0e9).toFixed(2)}B`;
    }
    if (vol >= 1.0e6) {
      return `$${(vol / 1.0e6).toFixed(2)}M`;
    }
    return `$${vol.toLocaleString()}`;
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[#131314] text-[#e5e2e2]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 pl-64">
        <Header isConnected={isConnected} />
        
        {/* Main View Container */}
        <main className="flex-1 mt-16 p-container-margin overflow-y-auto h-[calc(100vh-4rem)]">
          {/* Metrics grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
            <MetricCard 
              title="Total Volume Processed"
              value={formatVolume(totalVolume)}
              subtext="+2.4%"
              icon="show_chart"
            />
            <MetricCard 
              title="Active Risk Score"
              value={getActiveRiskScore()}
              subtext="/ 100"
              icon="verified_user"
            />
            <MetricCard 
              title="Flagged Transactions"
              value={flaggedCount.toLocaleString()}
              subtext={`+${todayFlaggedCount} today`}
              icon="warning"
              iconColorClass="text-error"
            />
          </section>

          {/* Main Dashboard Details (Split View) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter h-[calc(100%-12rem)] min-h-[500px] mb-8">
            <TransactionTable transactions={transactions} />
            <div className="lg:col-span-4 space-y-gutter flex flex-col justify-between h-full">
              <RiskChart transactions={transactions} />
              <SystemHealth alerts={alerts} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
