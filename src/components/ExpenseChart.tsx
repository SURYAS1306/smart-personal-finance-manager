import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Food & Dining', value: 450, color: '#22c55e' },
  { name: 'Shopping', value: 280, color: '#3b82f6' },
  { name: 'Transport', value: 120, color: '#f59e0b' },
  { name: 'Entertainment', value: 180, color: '#a855f7' },
  { name: 'Bills & Utilities', value: 320, color: '#ef4444' },
  { name: 'Healthcare', value: 90, color: '#06b6d4' }
];

const barData = [
  { month: 'Jan', income: 5500, expenses: 3200 },
  { month: 'Feb', income: 5500, expenses: 3100 },
  { month: 'Mar', income: 5500, expenses: 3350 },
  { month: 'Apr', income: 5500, expenses: 3000 },
  { month: 'May', income: 5500, expenses: 3240 },
  { month: 'Jun', income: 5500, expenses: 3400 }
];

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#a855f7', '#ef4444', '#06b6d4'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-foreground font-medium">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: item.color }}>
            {`${item.dataKey}: $${item.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ExpenseChart = () => {
  return (
    <div className="space-y-8">
      {/* Pie Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Expense Breakdown</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                className="animate-scale-in"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Income vs Expenses</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="income" 
                fill="#22c55e" 
                name="Income"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="expenses" 
                fill="#ef4444" 
                name="Expenses"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};