import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ScanDetail.scss';

export const ScanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate('/dashboard')}>
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="id-card">
        <span className="label">Scan ID:</span>
        <h1 className="scan-id">#{id}</h1>
      </div>
      
      <p className="status-text">
        Detailed technical logs
      </p>
    </div>
  );
};