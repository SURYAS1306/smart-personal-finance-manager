import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Budget {
  category: string;
  spent: number;
  limit: number;
  color: string;
}

interface BudgetOverviewProps {
  budgets: Budget[];
}

export const BudgetOverview = ({ budgets }: BudgetOverviewProps) => {
  const getColorClasses = (color: string, percentage: number) => {
    if (percentage >= 90) return "text-destructive";
    if (percentage >= 75) return "text-warning";
    
    switch (color) {
      case 'success': return "text-success";
      case 'primary': return "text-primary";
      case 'warning': return "text-warning";
      case 'accent': return "text-accent";
      default: return "text-primary";
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-destructive";
    if (percentage >= 75) return "bg-warning";
    return "bg-success";
  };

  return (
    <div className="space-y-6">
      {budgets.map((budget, index) => {
        const percentage = (budget.spent / budget.limit) * 100;
        const remaining = budget.limit - budget.spent;
        
        return (
          <div 
            key={budget.category} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-foreground">{budget.category}</h4>
              <Badge 
                variant="outline" 
                className={`${getColorClasses(budget.color, percentage)} border-current`}
              >
                ${budget.spent} / ${budget.limit}
              </Badge>
            </div>
            
            <Progress 
              value={percentage} 
              className="h-2 bg-muted"
            />
            
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-muted-foreground">
                {percentage.toFixed(1)}% used
              </span>
              <span className={`font-medium ${remaining >= 0 ? 'text-success' : 'text-destructive'}`}>
                ${remaining >= 0 ? remaining : Math.abs(remaining)} {remaining >= 0 ? 'left' : 'over'}
              </span>
            </div>
          </div>
        );
      })}
      
      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <h4 className="font-semibold text-primary mb-2">Budget Summary</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Total Budget:</span>
            <div className="font-semibold text-foreground">
              ${budgets.reduce((sum, b) => sum + b.limit, 0)}
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Total Spent:</span>
            <div className="font-semibold text-foreground">
              ${budgets.reduce((sum, b) => sum + b.spent, 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};