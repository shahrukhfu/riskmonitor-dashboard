export interface Transaction {
  step: number;
  type: string;
  amount: number;
  nameOrig: string;
  oldbalanceOrg: number;
  newbalanceOrig: number;
  nameDest: string;
  oldbalanceDest: number;
  newbalanceDest: number;
  isFraud: number;
  isFlaggedFraud: number;
  // Augmented properties
  timestamp: string;
  riskAssessment: 'Low' | 'Medium' | 'High';
}

export interface MetricState {
  totalVolume: number;
  activeRiskScore: number;
  flaggedCount: number;
  todayFlaggedCount: number;
}

export interface SystemAlert {
  id: string;
  title: string;
  description: string;
  type: 'critical' | 'info' | 'success';
  timestamp: string;
}
