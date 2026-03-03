import { useParams, Link } from 'react-router-dom';

export const ScanDetail = () => {
  const { id } = useParams();

  return (
    <div className="detail-page">
      <Link to="/dashboard">Back to Dashboard</Link>
      <h2>Scan Details: {id}</h2>
      <div className="status-banner">
        Scanning in progress...
      </div>
    </div>
  );
};