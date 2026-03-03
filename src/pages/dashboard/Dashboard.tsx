import ScanTable from "./ScanTable";
import StatsBar from "./StatsBar";
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <StatsBar />
      <ScanTable />
    </div>
  );
};

export default Dashboard; 