import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  UserCircle, 
  Building2, 
  ChevronRight, 
  CheckCircle, 
  BarChart, 
  MessageSquare, 
  LogIn,
  Sparkles,
  ChevronDown,
  LucideIcon,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<'employee' | 'admin' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Add mouse position tracking for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginType) return;
    
    setIsLoading(true);
    try {
      await login(email, password, loginType);
      navigate(loginType === 'admin' ? '/admin' : '/employee');
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track and visualize employee performance metrics in real-time"
    },
    {
      icon: MessageSquare,
      title: "360° Feedback",
      description: "Comprehensive feedback system for continuous improvement"
    },
    {
      icon: CheckCircle,
      title: "Goal Tracking",
      description: "Set, monitor, and achieve professional development goals"
    }
  ];

  if (showLogin) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-6 cosmic-bg">
        {/* Aurora Effect */}
        <div className="absolute inset-0 aurora-effect opacity-80"></div>

        {/* Nebula Effect */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-3xl animate-nebula-pulse"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </div>
        
        {/* Star field background */}
        <div className="absolute inset-0 z-0">
          {/* Small stars */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`star-${i}`}
              className={`absolute rounded-full bg-white animate-pulse-slow`}
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
          
          {/* Medium stars with glow */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`medium-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.4)',
                opacity: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
        
        {/* Animated cosmic waves */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute w-full h-[300px] bottom-0 bg-gradient-to-t from-purple-900/20 to-transparent animate-cosmic-wave"></div>
          <div className="absolute w-full h-[300px] bottom-0 bg-gradient-to-t from-indigo-900/20 to-transparent animate-cosmic-wave animation-delay-2000"></div>
          <div className="absolute w-full h-[300px] bottom-0 bg-gradient-to-t from-blue-900/20 to-transparent animate-cosmic-wave animation-delay-4000"></div>
        </div>
        
        {/* Comets */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-[150px] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent animate-comet animation-delay-2000"></div>
          <div className="absolute w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-comet animation-delay-8000"
            style={{ top: '20%' }}></div>
          <div className="absolute w-[200px] h-[4px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-comet animation-delay-6000"
            style={{ top: '70%' }}></div>
        </div>
        
        {/* Floating orbs - slowed down */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${Math.random() * 150 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(139, 92, 246, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(217, 70, 239, 0.3)'][Math.floor(Math.random() * 3)]
                } 0%, transparent 70%)`,
                animation: `blob ${Math.random() * 15 + 25}s infinite linear`,
                filter: 'blur(10px)'
              }}
            />
          ))}
        </div>
        
        {/* Interactive cosmic glow that follows cursor - slowed down transition */}
        <div 
          className="fixed w-60 h-60 rounded-full pointer-events-none z-0 animate-pulse-slow"
          style={{
            left: mousePosition.x - 120,
            top: mousePosition.y - 120,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            transform: 'translate3d(0,0,0)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
            boxShadow: '0 0 30px 10px rgba(139, 92, 246, 0.1)',
            opacity: 0.7
          }}
        />

        {/* Enhanced Glassmorphic Login Card */}
        <div className="max-w-md w-full glass-card backdrop-blur-2xl bg-white/5 border border-white/10 p-1 z-10 overflow-hidden animate-scale-in shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          {/* Shimmering border effect */}
          <div className="absolute inset-0 animated-gradient opacity-10"></div>
          
          <div className="px-8 pt-8 pb-6 relative">
            {/* Top decorative elements */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/5 opacity-20 animate-rotate" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full border border-white/5 opacity-20 animate-rotate-reverse animation-delay-2000" />
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-5 border border-white/10 animate-nebula-pulse">
                <LogIn className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white text-shadow-glow mb-1">Welcome Back</h2>
              <p className="text-sm text-white/70">Sign in to your account to continue</p>
              
              {/* Decorative sparkles */}
              <Sparkles className="absolute top-10 right-12 w-5 h-5 text-indigo-300 animate-pulse-slow" />
              <Sparkles className="absolute bottom-4 left-10 w-4 h-4 text-purple-300 animate-pulse-slow animation-delay-2000" />
            </div>

            {!loginType ? (
              <div className="space-y-5">
                <button
                  onClick={() => setLoginType('employee')}
                  className="w-full py-4 px-6 glass-button rounded-xl flex items-center justify-between group hover:bg-indigo-500/10 transition-all duration-500"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-indigo-500/20 mr-3 group-hover:animate-pulse-slow">
                      <UserCircle className="w-5 h-5 text-indigo-200" />
                    </div>
                    <span className="font-medium text-white">Employee Login</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </button>
                <button
                  onClick={() => setLoginType('admin')}
                  className="w-full py-4 px-6 glass-button rounded-xl flex items-center justify-between group hover:bg-purple-500/10 transition-all duration-500"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-purple-500/20 mr-3 group-hover:animate-pulse-slow">
                      <Building2 className="w-5 h-5 text-purple-200" />
                    </div>
                    <span className="font-medium text-white">Admin Login</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass-input focus:scale-[1.01] transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                      <div className="animate-shimmer w-full h-full transform -translate-x-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass-input focus:scale-[1.01] transition-all duration-300"
                      placeholder="••••••••"
                      required
                    />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                      <div className="animate-shimmer w-full h-full transform -translate-x-full"></div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 glass-button-primary rounded-xl text-white font-medium flex items-center justify-center relative overflow-hidden group"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <span>Sign In as {loginType === 'admin' ? 'Admin' : 'Employee'}</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setLoginType(null)}
                  className="w-full text-sm text-white/70 hover:text-white transition-colors flex items-center justify-center mt-4"
                >
                  <ChevronDown className="w-4 h-4 mr-1 transform rotate-90" />
                  Back to login options
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Enhanced Landing Page
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden min-h-screen flex flex-col">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-br from-blue-600/20 to-purple-600/20 transform -skew-y-6 origin-top-left z-0" />
          
          {/* Animated circles */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          
          {/* Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2
                }}
              />
            ))}
          </div>
          
          {/* Light beams */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 blur-lg" />
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-500/0 via-purple-500/10 to-purple-500/0 blur-lg" />
        </div>
        
        {/* Hero content */}
        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32 text-center">
            <div className="inline-flex items-center justify-center glass px-4 py-2 rounded-full mb-8 text-white/80 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-300" />
              Next Generation HR Platform
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow animate-pulse-slow">
              <span className="bg-clip-text text-transparent animated-gradient">Atom HR</span> Performance
            </h1>
            
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Transform your workplace with our intelligent performance management system
            </p>
            
            <button
              onClick={() => setShowLogin(true)}
              className="glass-button-primary px-8 py-4 rounded-xl font-medium inline-flex items-center group text-lg"
            >
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </div>

      {/* Features Section with glassmorphism cards */}
      <div className="relative z-10 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-shadow">
              Everything you need to manage performance
            </h2>
            <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto">
              Streamline your performance management process with our comprehensive suite of tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-1 group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="p-8 rounded-xl h-full relative overflow-hidden">
                    {/* Subtle shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="animate-shimmer w-full h-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-indigo-100/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;