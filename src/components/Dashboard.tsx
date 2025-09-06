import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, TrendingUp, TrendingDown, Wallet, Target, Receipt, PieChart } from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { RecentTransactions } from "./RecentTransactions";
import { BudgetOverview } from "./BudgetOverview";
import { AddExpenseModal } from "./AddExpenseModal";

// Mock data for demonstration
const mockStats = {
  totalBalance: 8420.50,
  monthlyIncome: 5500.00,
  monthlyExpenses: 3240.75,
  savings: 2259.25
};

const mockBudgets = [
  { category: "Food", spent: 450, limit: 600, color: "success" },
  { category: "Shopping", spent: 280, limit: 300, color: "warning" },
  { category: "Transport", spent: 120, limit: 150, color: "primary" },
  { category: "Entertainment", spent: 180, limit: 200, color: "accent" }
];

export const Dashboard = () => {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const savingsRate = ((mockStats.savings / mockStats.monthlyIncome) * 100);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Financial Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your spending, reach your goals
            </p>
          </div>
          <Button 
            onClick={() => setIsAddExpenseOpen(true)}
            className="gradient-primary text-primary-foreground hover:opacity-90 smooth-transition shadow-lg"
            size="lg"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Add Expense
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <Card className="financial-card animate-scale-in border-primary/20 hover:border-primary/40 smooth-transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground number-counter">
              ${mockStats.totalBalance.toLocaleString()}
            </div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="financial-card animate-scale-in border-success/20 hover:border-success/40 smooth-transition" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground number-counter">
              ${mockStats.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-xs text-success flex items-center mt-1">
              Steady income stream
            </p>
          </CardContent>
        </Card>

        <Card className="financial-card animate-scale-in border-warning/20 hover:border-warning/40 smooth-transition" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground number-counter">
              ${mockStats.monthlyExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              59% of income
            </p>
          </CardContent>
        </Card>

        <Card className="financial-card animate-scale-in border-accent/20 hover:border-accent/40 smooth-transition" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Savings Rate</CardTitle>
            <Target className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground number-counter">
              {savingsRate.toFixed(1)}%
            </div>
            <Badge className="mt-1 bg-success/10 text-success border-success/20">
              Excellent!
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Expense Chart */}
        <div className="lg:col-span-2">
          <Card className="financial-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-primary" />
                  Expense Analytics
                </CardTitle>
                <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ExpenseChart />
            </CardContent>
          </Card>
        </div>

        {/* Budget Overview */}
        <div>
          <Card className="financial-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Target className="w-5 h-5 mr-2 text-success" />
                Budget Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BudgetOverview budgets={mockBudgets} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card className="financial-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <Receipt className="w-5 h-5 mr-2 text-accent" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RecentTransactions />
        </CardContent>
      </Card>

      {/* Add Expense Modal */}
      <AddExpenseModal 
        isOpen={isAddExpenseOpen} 
        onClose={() => setIsAddExpenseOpen(false)} 
      />
    </div>
  );
};