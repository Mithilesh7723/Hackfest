import React from 'react';
import { BarChart3, Target, MessageSquare, Trophy, TrendingUp, Sparkles, Search } from 'lucide-react';
import PerformanceOverview from './PerformanceOverview';
import GoalsTracker from './GoalsTracker';
import FeedbackSection from './FeedbackSection';
import MetricsCard from './MetricsCard';

const Dashboard = () => {
  return (
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white text-shadow mb-2">Performance Dashboard</h1>
            <p className="text-white/70">Track your progress and receive feedback</p>
          </div>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/50" />
              </div>
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="glass-input pl-10 pr-4 py-2 rounded-lg w-full sm:w-auto"
              />
            </div>
            
            <button className="glass-button-primary px-4 py-2 rounded-lg flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Request Feedback
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Performance Score"
            value="92"
            icon={<Trophy className="w-6 h-6 text-emerald-300" />}
            trend="+5%"
          />
          <MetricsCard
            title="Goals Completed"
            value="8/10"
            icon={<Target className="w-6 h-6 text-blue-300" />}
            trend="+2"
          />
          <MetricsCard
            title="Feedback Received"
            value="24"
            icon={<MessageSquare className="w-6 h-6 text-purple-300" />}
            trend="+12"
          />
          <MetricsCard
            title="Growth Score"
            value="88"
            icon={<TrendingUp className="w-6 h-6 text-amber-300" />}
            trend="+3%"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PerformanceOverview />
          <GoalsTracker />
        </div>

        <FeedbackSection />
      </div>
    </div>
  );
};

export default Dashboard;