import './Header.scss';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <span>Scan</span>
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