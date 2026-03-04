import { NavLink, useNavigate } from 'react-router-dom';
import { Grid, Folder, Shield, Calendar, Bell, Settings, HelpCircle, ChevronRight, Moon, Sun, User, LogOut } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../../../context/ThemeContext';
import './Sidebar.scss';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const userEmail = localStorage.getItem('userEmail') || 'admin@edu.com';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
    toast.success('Logged out successfully');
  };

  const handleUnderConstruction = (e: React.MouseEvent, path: string) => {
    const readyPages = ['/dashboard', '/scans'];

    if (!readyPages.includes(path)) {
      e.preventDefault();
      toast('This feature is under construction!', {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
          fontSize: '1.4rem',
          borderRadius: '10px',
        },
      });
    }
  };

  return (
    <aside className="sidebar">

      <Toaster />

      <div className="logo-section">
        <div className="logo-circle">
          <div className="inner-dot"></div>
        </div>
        <span className="logo-text">aps</span>
      </div>

      <div className="sidebar-content">
        <nav className="nav-group">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <Grid size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/projects" className="nav-item" onClick={(e) => handleUnderConstruction(e, '/projects')}>
            <Folder size={20} />
            <span>Projects</span>
          </NavLink>
          <NavLink to="/scans" className="nav-item">
            <Shield size={20} />
            <span>Scans</span>
            <div className="status-dot"></div>
          </NavLink>
          <NavLink to="/schedule" className="nav-item" onClick={(e) => handleUnderConstruction(e, '/schedule')}>
            <Calendar size={20} />
            <span>Schedule</span>
          </NavLink>
        </nav>

        <div className="divider" />
        <nav className="nav-group">
          <NavLink to="/notifications" className="nav-item" onClick={(e) => handleUnderConstruction(e, '/notifications')}>
            <Bell size={20} />
            <span>Notifications</span>
            <div className="status-dot"></div>
          </NavLink>
          <NavLink to="/settings" className="nav-item" onClick={(e) => handleUnderConstruction(e, '/settings')}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/support" className="nav-item" onClick={(e) => handleUnderConstruction(e, '/support')}>
            <HelpCircle size={20} />
            <span>Support</span>
          </NavLink>

          <div className="nav-item theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </div>

          <div className="nav-item logout-item" onClick={handleLogout}>
            <LogOut size={20} color="#ff4d4d" />
            <span style={{ color: '#ff4d4d' }}>Logout</span>
          </div>
        </nav>
      </div>

      <div className="sidebar-user" onClick={(e) => handleUnderConstruction(e, '/profile')}>
        <div className="user-info">
          <div className="avatar">
            <User size={24} className="img" />
          </div>
          <div className="details">
            <span className="email">{userEmail}</span>
            <span className="role">Security Lead</span>
          </div>
        </div>
        <ChevronRight size={18} className="chevron" />
      </div>
    </aside>
  );
};

export default Sidebar;