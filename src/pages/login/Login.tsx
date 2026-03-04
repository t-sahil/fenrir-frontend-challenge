import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Eye, EyeOff } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './Login.scss';

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    const savedUser = localStorage.getItem('registeredUser');
    const user = savedUser ? JSON.parse(savedUser) : null;

    if (isLogin) {
      if (user && user.email === formData.email && user.password === formData.password) {

        localStorage.setItem('userEmail', formData.email); 
        localStorage.setItem('isAuthenticated', 'true');
        
        toast.success('Welcome back!');
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        toast.error('Invalid email or password.');
      }
    } else {
      localStorage.setItem('registeredUser', JSON.stringify(formData));
      localStorage.setItem('userEmail', formData.email); 
      localStorage.setItem('isAuthenticated', 'true');
      
      toast.success('Account created successfully!');
      setTimeout(() => navigate('/dashboard'), 1000);
    }
  };

  const handleUnderConstruction = (e: React.MouseEvent) => {
    e.preventDefault();
    toast('This feature is under construction', {
      style: {
        background: '#333',
        color: '#fff',
        borderRadius: '10px',
      },
    });
  };

  return (
    <div className="login-page">
      <Toaster />
      
      <div className="info-section">
        <div className="logo-group">
          <div className="logo-circle"><div className="inner-dot"></div></div>
          <span className="logo-text">aps</span>
        </div>

        <div className="info-content">
          <h1>Expert level Cybersecurity in <span>hours</span> not weeks.</h1>
          
          <div className="features-list">
            <p className="section-title">What's included</p>
            <div className="feature-item">
              <Check size={18} className="check-icon" />
              <span>Effortlessly spider and map targets to uncover hidden security flaws</span>
            </div>
            <div className="feature-item">
              <Check size={18} className="check-icon" />
              <span>Deliver high-quality, validated findings in hours, not weeks.</span>
            </div>
            <div className="feature-item">
              <Check size={18} className="check-icon" />
              <span>Generate professional, enterprise-grade security reports automatically.</span>
            </div>
          </div>
        </div>

        <div className="trust-rating">
          <div className="trust-header">
            <span className="star">★</span> Trustpilot
          </div>
          <p>Rated 4.5/5.0 <span>(100k+ reviews)</span></p>
        </div>
      </div>

      <div className="form-section">
        <div className="login-card">
          <h2>{isLogin ? 'Log in' : 'Sign up'}</h2>
          <p className="subtitle">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </p>
          
          <form onSubmit={handleAuth} className="input-main">
            <div className="input-group">
              {!isLogin && (
                <div className="name-row">
                  <input 
                    type="text" placeholder="First name*" required 
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Last name*" required 
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              )}
              
              <input 
                type="email" placeholder="Email address*" required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              
              <div className="password-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password (8+ characters)*" 
                  required 
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button" 
                  className="eye-btn" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <label className="terms-checkbox">
                <input type="checkbox" required />
                <span>
                  I agree to Aps's 
                  <a href="#" onClick={handleUnderConstruction}> Terms & Conditions</a> and 
                  acknowledge the 
                  <a href="#" onClick={handleUnderConstruction}> Privacy Policy</a>
                </span>
              </label>
            )}

            <button type="submit" className="btn-primary">
              {isLogin ? 'Log in' : 'Create account'}
            </button>
          </form>

          <div className="divider-text">OR</div>

          <div className="social-login">
            <button type="button" className="social-btn apple" onClick={handleUnderConstruction}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Apple" 
              />
            </button>
            <button type="button" className="social-btn google" onClick={handleUnderConstruction}>
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
              />
            </button>
            <button type="button" className="social-btn meta" onClick={handleUnderConstruction}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                alt="Meta" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};