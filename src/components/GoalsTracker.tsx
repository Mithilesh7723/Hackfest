import React, { useState } from 'react';
import { Target, Clock, Check, PlusCircle, X } from 'lucide-react';

interface Goal {
  id: number;
  title: string;
  dueDate: string;
  status: 'completed' | 'in-progress' | 'not-started';
  progress: number;
}

const GoalsTracker = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: 'Complete Advanced React Course',
      dueDate: '2024-06-15',
      status: 'in-progress',
      progress: 75,
    },
    {
      id: 2,
      title: 'Improve Team Communication Skills',
      dueDate: '2024-06-30',
      status: 'in-progress',
      progress: 50,
    },
    {
      id: 3,
      title: 'Master TypeScript Generics',
      dueDate: '2024-07-15',
      status: 'not-started',
      progress: 0,
    },
    {
      id: 4,
      title: 'Complete Project Documentation',
      dueDate: '2024-05-30',
      status: 'completed',
      progress: 100,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'not-started':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return status;
    }
  };

  return (
    <div className="glass-card p-1 group">
      <div className="p-6 rounded-xl relative overflow-hidden h-full">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="animate-shimmer w-full h-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-blue-300" />
              </div>
              <h2 className="text-xl font-semibold text-white">Goals Tracker</h2>
            </div>
            <button className="glass-button px-3 py-1.5 rounded-lg text-sm flex items-center text-white/80 hover:text-white">
              <PlusCircle className="w-4 h-4 mr-1.5" />
              Add Goal
            </button>
          </div>
          
          <div className="space-y-4">
            {goals.map((goal) => (
              <div 
                key={goal.id} 
                className="glass p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group/goal"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-medium">{goal.title}</h3>
                      {goal.status === 'completed' && (
                        <Check className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    
                    <div className="mt-2 flex items-center">
                      <div className="flex items-center text-white/60 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Due: {new Date(goal.dueDate).toLocaleDateString()}
                      </div>
                      
                      <div className="ml-4 flex items-center">
                        <span 
                          className={`inline-block w-2 h-2 rounded-full mr-1.5 ${getStatusColor(goal.status)}`}
                        />
                        <span className="text-white/60 text-xs">
                          {getStatusLabel(goal.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <button className="opacity-0 group-hover/goal:opacity-100 transition-opacity p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="opacity-0 group-hover/goal:opacity-100 transition-opacity p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-3 relative pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-white/60">{goal.progress}% Complete</div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${getStatusColor(goal.status)}`}
                      style={{ width: `${goal.progress}%`, transition: 'width 1s ease-in-out' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsTracker;