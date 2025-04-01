import React from 'react';
import { MessageSquare, ThumbsUp, AlertTriangle, Star } from 'lucide-react';

interface FeedbackItem {
  id: number;
  type: 'praise' | 'improvement' | 'suggestion';
  message: string;
  from: string;
  date: string;
}

const FeedbackSection = () => {
  const feedbackItems: FeedbackItem[] = [
    {
      id: 1,
      type: 'praise',
      message: 'Excellent work on the new feature implementation! Your attention to detail and code quality really stood out.',
      from: 'Sarah Chen (Manager)',
      date: '2 days ago',
    },
    {
      id: 2,
      type: 'improvement',
      message: 'Consider adding more comprehensive documentation to your pull requests to help the team understand your implementation decisions.',
      from: 'Mike Johnson (Team Lead)',
      date: '1 week ago',
    },
    {
      id: 3,
      type: 'suggestion',
      message: 'You might benefit from our upcoming workshop on advanced TypeScript patterns. I think it would complement your current skill set nicely.',
      from: 'Alex Rodriguez (CTO)',
      date: '2 weeks ago',
    },
  ];

  const getFeedbackIcon = (type: string) => {
    switch (type) {
      case 'praise':
        return (
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <ThumbsUp className="w-5 h-5 text-emerald-300" />
          </div>
        );
      case 'improvement':
        return (
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-300" />
          </div>
        );
      case 'suggestion':
        return (
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Star className="w-5 h-5 text-blue-300" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-purple-300" />
          </div>
        );
    }
  };

  return (
    <div className="glass-card p-1 group">
      <div className="p-6 rounded-xl relative overflow-hidden">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="animate-shimmer w-full h-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center mr-3">
              <MessageSquare className="w-5 h-5 text-purple-300" />
            </div>
            <h2 className="text-xl font-semibold text-white">Recent Feedback</h2>
          </div>
          
          <div className="space-y-6">
            {feedbackItems.map((item) => (
              <div 
                key={item.id} 
                className="glass p-5 rounded-xl hover:bg-white/10 transition-all duration-200 group/item"
              >
                <div className="flex">
                  {getFeedbackIcon(item.type)}
                  <div className="ml-4 flex-1">
                    <p className="text-white/90 mb-3">{item.message}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm font-medium">{item.from}</span>
                      <span className="text-white/50 text-xs">{item.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hidden buttons that show on hover */}
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end opacity-0 group-hover/item:opacity-100 transition-opacity">
                  <button className="text-white/70 hover:text-white glass px-3 py-1 rounded-lg text-xs mr-2">
                    Reply
                  </button>
                  <button className="text-white/70 hover:text-white glass px-3 py-1 rounded-lg text-xs">
                    Thank
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;