import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Users, 
  LogOut, 
  Star, 
  X, 
  PlusCircle, 
  LineChart, 
  BarChart4, 
  UserCircle, 
  MessageSquare, 
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  position: string;
  performance: number;
  lastReview: string;
}

interface ReviewModalProps {
  employee: Employee;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

interface FeedbackModalProps {
  employee: Employee;
  onClose: () => void;
  onSubmit: (type: string, feedback: string) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ employee, onClose, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(rating, comment);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="glass-card max-w-md w-full p-1 animate-scale-in">
        <div className="rounded-xl p-6 relative overflow-hidden">
          {/* Shimmering border effect */}
          <div className="absolute inset-0 animated-gradient opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                  <UserCircle className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Review {employee.name}</h3>
              </div>
              <button 
                onClick={onClose} 
                className="text-white/70 hover:text-white rounded-full hover:bg-white/10 p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Performance Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        rating >= value ? 'text-yellow-400 scale-110' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <Star className={`w-6 h-6 ${rating >= value ? 'fill-yellow-400' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Review Comments</label>
                <div className="relative">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input focus:scale-[1.01] transition-all duration-300"
                    rows={4}
                    placeholder="Provide detailed feedback on performance..."
                    required
                  />
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="animate-shimmer w-full h-full transform -translate-x-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 glass-button rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 glass-button-primary rounded-lg flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedbackModal: React.FC<FeedbackModalProps> = ({ employee, onClose, onSubmit }) => {
  const [type, setType] = useState('praise');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(type, feedback);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="glass-card max-w-md w-full p-1 animate-scale-in">
        <div className="rounded-xl p-6 relative overflow-hidden">
          {/* Shimmering border effect */}
          <div className="absolute inset-0 animated-gradient opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <MessageSquare className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Feedback for {employee.name}</h3>
              </div>
              <button 
                onClick={onClose} 
                className="text-white/70 hover:text-white rounded-full hover:bg-white/10 p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Feedback Type</label>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input focus:scale-[1.01] transition-all duration-300 appearance-none"
                  >
                    <option value="praise">Praise</option>
                    <option value="improvement">Area for Improvement</option>
                    <option value="general">General Feedback</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-white/50 pointer-events-none" />
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="animate-shimmer w-full h-full transform -translate-x-full"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Feedback Message</label>
                <div className="relative">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input focus:scale-[1.01] transition-all duration-300"
                    rows={4}
                    placeholder="Share your constructive feedback..."
                    required
                  />
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="animate-shimmer w-full h-full transform -translate-x-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 glass-button rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 glass-button-primary rounded-lg flex items-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: '1',
      name: 'John Doe',
      position: 'Software Engineer',
      performance: 92,
      lastReview: '2024-03-01',
    },
    {
      id: '2',
      name: 'Jane Smith',
      position: 'Product Manager',
      performance: 88,
      lastReview: '2024-02-28',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      position: 'UX Designer',
      performance: 95,
      lastReview: '2024-03-05',
    },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleReviewSubmit = (rating: number, comment: string) => {
    if (selectedEmployee) {
      const updatedEmployees = employees.map((emp) =>
        emp.id === selectedEmployee.id
          ? {
              ...emp,
              performance: rating * 20, // Convert 5-star rating to percentage
              lastReview: new Date().toISOString().split('T')[0],
            }
          : emp
      );
      setEmployees(updatedEmployees);
      // In a real application, you would make an API call here
      console.log(`Review submitted for ${selectedEmployee.name}:`, { rating, comment });
    }
  };

  const handleFeedbackSubmit = (type: string, feedback: string) => {
    if (selectedEmployee) {
      // In a real application, you would make an API call here
      console.log(`Feedback submitted for ${selectedEmployee.name}:`, { type, feedback });
    }
  };

  // Generate a performance color based on score
  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-500';
    if (score >= 75) return 'bg-blue-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 blur-lg" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-500/0 via-purple-500/10 to-purple-500/0 blur-lg" />
      </div>

      <nav className="glass border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-semibold text-white">Admin Dashboard</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center text-white/80 hover:text-white glass-button py-1.5 px-3 rounded-lg my-auto text-sm"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 flex items-center">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <div className="text-sm text-white/70">Total Employees</div>
              <div className="text-2xl font-semibold text-white">{employees.length}</div>
            </div>
          </div>
          
          <div className="glass-card p-6 flex items-center">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mr-4">
              <BarChart4 className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="text-sm text-white/70">Average Performance</div>
              <div className="text-2xl font-semibold text-white">
                {Math.round(employees.reduce((sum, emp) => sum + emp.performance, 0) / employees.length)}%
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 flex items-center">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mr-4">
              <LineChart className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <div className="text-sm text-white/70">Reviews Completed</div>
              <div className="text-2xl font-semibold text-white">
                {employees.filter(emp => emp.lastReview).length}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card mb-8">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-indigo-300" />
                Employee Overview
              </h2>
              <button className="glass-button-primary px-4 py-2 rounded-lg text-sm flex items-center">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Employee
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                      Last Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                            <UserCircle className="w-5 h-5 text-indigo-300" />
                          </div>
                          <div className="text-sm font-medium text-white">{employee.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white/80">{employee.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-white/10 rounded-full h-2 mr-2 max-w-[100px]">
                            <div
                              className={`h-full rounded-full ${getPerformanceColor(employee.performance)}`}
                              style={{ width: `${employee.performance}%` }}
                            />
                          </div>
                          <span className="text-sm text-white/80">{employee.performance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {employee.lastReview}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowReviewModal(true);
                          }}
                          className="text-indigo-300 hover:text-indigo-100 glass-button rounded-lg px-3 py-1 text-xs"
                        >
                          Review
                        </button>
                        <button
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowFeedbackModal(true);
                          }}
                          className="text-purple-300 hover:text-purple-100 glass-button rounded-lg px-3 py-1 text-xs"
                        >
                          Feedback
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Recent Activities Section */}
        <div className="glass-card">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-indigo-300" />
              Recent Activities
            </h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="glass p-4 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 
                      ${i % 3 === 0 ? 'bg-indigo-500/20' : i % 3 === 1 ? 'bg-purple-500/20' : 'bg-blue-500/20'}`}>
                      {i % 3 === 0 ? (
                        <Star className="w-5 h-5 text-yellow-300" />
                      ) : i % 3 === 1 ? (
                        <MessageSquare className="w-5 h-5 text-purple-300" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-emerald-300" />
                      )}
                    </div>
                    <div>
                      <p className="text-white/90">
                        {i % 3 === 0 
                          ? "You submitted a performance review for Jane Smith" 
                          : i % 3 === 1 
                          ? "You provided feedback to Mike Johnson" 
                          : "John Doe completed his quarterly goals"}
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        {i % 3 === 0 ? "2 hours ago" : i % 3 === 1 ? "Yesterday" : "3 days ago"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showReviewModal && selectedEmployee && (
        <ReviewModal
          employee={selectedEmployee}
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleReviewSubmit}
        />
      )}

      {showFeedbackModal && selectedEmployee && (
        <FeedbackModal
          employee={selectedEmployee}
          onClose={() => setShowFeedbackModal(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default AdminDashboard;