import { Columns3, ListFilter, Plus, Search } from 'lucide-react';
import { MOCK_SCANS } from '../../data/mockData';
import { useState } from 'react';
import './ScanTable.scss';

const ScanTable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredScans = MOCK_SCANS.filter((scan) => {
        const search = searchTerm.toLowerCase();
        return (
        scan.name.toLowerCase().includes(search) || 
        scan.type.toLowerCase().includes(search)
        );
    });

  return (
    <div className="table-container">
    <div className="table-controls">
      <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input 
          type="text" 
          placeholder="Search scans by name or type..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      
      <div className="actions">
          <button className="btn-secondary" onClick={() => alert('Filter clicked')}>
          <ListFilter size={18} /> Filter
          </button>
          <button className="btn-secondary" onClick={() => alert('Column settings clicked')}>
          <Columns3 size={18} /> Column
          </button>
          <button className="btn-primary" onClick={() => alert('Create new scan')}>
          <Plus size={18} /> New scan
          </button>
      </div>
    </div>

    <div className="table-scroll-area">
      <table className="scan-table">
        <thead>
          <tr>
            <th>Scan Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Progress</th>
            <th className="text-center">Vulnerability</th>
            <th>Last Scan</th>
          </tr>
        </thead>
        <tbody>
          { filteredScans.length > 0 ? (
              filteredScans.map((scan) => (
                <tr key={scan.id}>
                  <td className="bold">{scan.name}</td>
                  <td className="text-secondary">{scan.type}</td>
                  <td>
                    <span className={`status-badge ${scan.status.toLowerCase()}`}>
                      {scan.status}
                    </span>
                  </td>
                  <td>
                    <div className="progress-wrapper">
                      <div className="progress-bar">
                        <div 
                          className={`fill ${scan.status.toLowerCase()}`} 
                          style={{ width: `${scan.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{scan.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <div className="vulnerability-badges">
                        {Object.entries(scan.vulnerabilities).map(([key, value]) => {
                        if (value === 0) return null;
                        return (
                            <span key={key} className={`v-badge ${key}`}>
                            {value}
                            </span>
                        );
                        })}
                    </div>
                  </td>
                  <td className="text-secondary">{scan.lastScan}</td>
                </tr>
              ))
          ) : (
            <tr>
                <td colSpan={6} className="no-data-cell">
                  No matches found for "{searchTerm}"
                </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ScanTable;