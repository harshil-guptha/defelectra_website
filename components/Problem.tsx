import React from 'react';
import { APP_CONTENT } from '../constants';
import { AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Problem: React.FC = () => {
  const { problem } = APP_CONTENT;

  const chartData = [
    { name: 'Info Gathering (Wasted)', value: 40, color: '#ef4444' }, // Red-500
    { name: 'Repeated Queries', value: 30, color: '#f59e0b' }, // Amber-500
    { name: 'Problem Solving', value: 30, color: '#22c55e' }, // Green-500
  ];

  return (
    <section id="problem" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {problem.title}
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              {problem.text}
            </p>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-red-200 font-medium text-lg">The Cost of Chaos</p>
                <p className="text-red-200/70 mt-1">{problem.stat}</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-3xl border border-white/5 shadow-xl">
             <h3 className="text-white font-semibold text-center mb-6 text-lg">Current Support Time Allocation</h3>
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                    />
                 </PieChart>
               </ResponsiveContainer>
             </div>
             <div className="text-center mt-4">
                <span className="text-sm text-brand-muted">
                  <span className="text-red-400 font-semibold">70%</span> of time is deflectable or wasted.
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;