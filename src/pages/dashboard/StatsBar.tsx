import { Ban, MoveDown, MoveUp, SearchAlert, TriangleAlert, RotateCw } from 'lucide-react';
import './StatsBar.scss';

const StatsBar = () => {
  const statsArray = [
    { label: "Org", value: "Project X" },
    { label: "Owner", value: "Nammagiri" },
    { label: "Total Scans", value: 100 },
    { label: "Scheduled", value: 1000 },
    { label: "Rescans", value: 100 },
    { label: "Failed Scans", value: 100 },
  ];

  const severityStats = [
    {
      type: "Critical",
      value: 86,
      icon: Ban,
      trendIcon: MoveUp,
      trendColor: "#bb075a", 
      trendText: "+2% increase than yesterday",
      className: "critical"
    },
    {
      type: "High",
      value: 16,
      icon: TriangleAlert,
      trendIcon: MoveUp,
      trendColor: "#bb075a",
      trendText: "+0.9% increase than yesterday",
      className: "high"
    },
    {
      type: "Medium",
      value: 26,
      icon: TriangleAlert,
      trendIcon: MoveDown,
      trendColor: "#2f7850", 
      trendText: "+0.9% decrease than yesterday",
      className: "medium"
    },
    {
      type: "Low",
      value: 16,
      icon: SearchAlert,
      trendIcon: MoveUp,
      trendColor: "#bb075a",
      trendText: "+0.9% increase than yesterday",
      className: "low"
    }
  ];

  return (
    <div className="stats-bar-main">
      <div className="details">
        <div className="stats-info-group">
          {statsArray.map((item, index) => (
            <div key={index} className="stat-item">
              <span className="label">{item.label}:</span>
              <span className="value">{item.value}</span>
              {index !== statsArray.length - 1 && <div className="divider" />}
            </div>
          ))}
        </div>
        
        <div className="refresh-data">
          <RotateCw size={16} /> 
          <span>10 mins ago</span>
        </div>
      </div>

      <div className="severity-card-section">
        {severityStats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trendIcon;

          return (
            <div className="severity-card" key={index}>
              <div className="heading">
                <span className="severity-type">{stat.type} Severity</span>
                <div className={`image-wrapper ${stat.className}`}>
                  <Icon strokeWidth={2.5} size={18} />
                </div>
              </div>
              
              <div className="data">
                <span className="data-value">{stat.value}</span>
                <div className="trend-group">
                  <TrendIcon size={12} color={stat.trendColor} strokeWidth={3} />
                  <span className="trend-text" style={{ color: stat.trendColor }}>
                    {stat.trendText}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBar;