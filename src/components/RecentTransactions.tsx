import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Car, Utensils, Home, Gamepad2, Heart } from "lucide-react";

const mockTransactions = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: -85.50,
    category: "Food",
    date: "Today",
    icon: <Utensils className="w-4 h-4" />,
    color: "text-success bg-success/10"
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: -12.25,
    category: "Transport",
    date: "Today",
    icon: <Car className="w-4 h-4" />,
    color: "text-primary bg-primary/10"
  },
  {
    id: 3,
    description: "Monthly Salary",
    amount: +5500.00,
    category: "Income",
    date: "Yesterday",
    icon: <Home className="w-4 h-4" />,
    color: "text-success bg-success/10"
  },
  {
    id: 4,
    description: "Online Shopping",
    amount: -145.99,
    category: "Shopping",
    date: "Yesterday",
    icon: <ShoppingCart className="w-4 h-4" />,
    color: "text-accent bg-accent/10"
  },
  {
    id: 5,
    description: "Netflix Subscription",
    amount: -15.99,
    category: "Entertainment",
    date: "2 days ago",
    icon: <Gamepad2 className="w-4 h-4" />,
    color: "text-warning bg-warning/10"
  },
  {
    id: 6,
    description: "Health Insurance",
    amount: -89.99,
    category: "Healthcare",
    date: "3 days ago",
    icon: <Heart className="w-4 h-4" />,
    color: "text-destructive bg-destructive/10"
  }
];

export const RecentTransactions = () => {
  return (
    <div className="space-y-4">
      {mockTransactions.map((transaction, index) => (
        <div 
          key={transaction.id}
          className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 smooth-transition animate-slide-up"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="flex items-center space-x-4">
            <Avatar className={`h-10 w-10 ${transaction.color}`}>
              <AvatarFallback className={transaction.color}>
                {transaction.icon}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-medium text-foreground">
                {transaction.description}
              </h4>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {transaction.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {transaction.date}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`font-semibold number-counter ${
              transaction.amount > 0 ? 'text-success' : 'text-foreground'
            }`}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-4">
        <button className="text-primary hover:text-primary/80 font-medium text-sm smooth-transition">
          View All Transactions →
        </button>
      </div>
    </div>
  );
};