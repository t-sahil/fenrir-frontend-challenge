import { ChevronRight, Home } from 'lucide-react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="breadcrumbs">
        <span>Scan</span> <ChevronRight size={14} /> 
        <Home size={14} onClick={() => navigate('/dashboard')} style={{cursor:'pointer'}} /> 
        <ChevronRight size={14} /> <span>New Scan</span>
      </div>
      
      <div className="header-right">
        <button className="export-report-btn" onClick={()=>console.log("Export btn clicked")}>
          <span>Export Report</span>
        </button>
        <button className="stop-scan-btn" onClick={()=>console.log("Stop btn clicked")}>
          <span>Stop Scan</span>
        </button>
      </div>
    </header>
  );
};

export default Header;