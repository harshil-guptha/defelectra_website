import React from 'react';
import { APP_CONTENT } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const Impact: React.FC = () => {
  const { impact } = APP_CONTENT;

  const data = [
    { month: 'Month 1', volume: 500 },
    { month: 'Month 2', volume: 520 },
    { month: 'Month 3', volume: 510 },
    { month: 'Month 4', volume: 245 }, // Drop
    { month: 'Month 5', volume: 230 },
    { month: 'Month 6', volume: 210 },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-brand-surface to-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="bg-brand-dark p-8 rounded-3xl border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-white font-semibold text-lg">Incoming Ticket Volume</h3>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                      <span className="text-xs text-brand-muted">Volume</span>
                   </div>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                        cursor={{ stroke: '#64748b', strokeWidth: 1 }}
                      />
                      <ReferenceLine x="Month 3" stroke="#f43f5e" strokeDasharray="3 3">
                        <Label value="Deflectra Implemented" position="top" fill="#f43f5e" fontSize={12} />
                      </ReferenceLine>
                      <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="#4f46e5" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#4f46e5', strokeWidth: 2, stroke: '#1e293b' }} 
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-sm text-brand-muted mt-6">
                  Volume drops by <span className="text-brand-primary font-bold">50%</span> immediately after implementation.
                </p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Measurable Impact
            </h2>
            
            <div className="space-y-8">
              {impact.metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between border-b border-white/10 pb-6 last:border-0">
                  <span className="text-brand-muted text-lg">{metric.label}</span>
                  <span className="text-2xl md:text-4xl font-bold text-white tracking-tight text-right">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;