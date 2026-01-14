import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { ArrowLeft, ChevronRight, Bell, CreditCard, Settings, LogOut, Lightbulb, TrendingUp, Clock } from "lucide-react";

const ParentPortal = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Bell, label: "Notifications", description: "Manage alerts", onClick: () => {} },
    { icon: CreditCard, label: "Subscription", description: "Premium plan active", onClick: () => {} },
    { icon: Settings, label: "Settings", description: "Account preferences", onClick: () => {} },
    { icon: LogOut, label: "Sign Out", description: "Log out of account", onClick: () => navigate("/") },
  ];

  return (
    <MobileFrame>
      <div className="min-h-screen pb-24 bg-background">
        {/* Header */}
        <header className="safe-area-top px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-b-3xl">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate("/home")}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-extrabold">Parent Portal</h1>
          </div>

          {/* Child Profile */}
          <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
              👧
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg">Thandi's Progress</h2>
              <p className="text-sm opacity-90">Grade 4 • Active learner</p>
            </div>
            <button className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              Switch
            </button>
          </div>
        </header>

        <main className="px-6 py-6 space-y-6">
          {/* AI Insights */}
          <section className="bg-gradient-to-br from-gold/10 to-warning/10 border border-gold/20 p-5 rounded-2xl animate-slide-up">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">AI Learning Insight</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thandi is struggling with fractions. We recommend trying the 
                  <span className="font-semibold text-primary"> "Visual Fractions" </span>
                  lesson to help build understanding.
                </p>
                <button className="mt-3 text-sm font-semibold text-primary hover:underline">
                  View Recommended Lesson →
                </button>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="grid grid-cols-3 gap-3 stagger-children">
            <div className="bg-card p-4 rounded-xl shadow-soft text-center">
              <TrendingUp className="w-5 h-5 text-success mx-auto mb-2" />
              <p className="text-lg font-extrabold text-foreground">87%</p>
              <p className="text-xs text-muted-foreground">Avg Score</p>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-soft text-center">
              <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-lg font-extrabold text-foreground">2.5h</p>
              <p className="text-xs text-muted-foreground">This Week</p>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-soft text-center">
              <span className="text-xl block mb-1">🔥</span>
              <p className="text-lg font-extrabold text-foreground">7</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-foreground mb-3">Recent Activity</h3>
            <div className="space-y-2">
              {[
                { subject: "Maths", lesson: "Adding Fractions", time: "Today, 2:30 PM", score: "4/5 ⭐" },
                { subject: "Reading", lesson: "Story: The Lion", time: "Today, 11:00 AM", score: "Complete ✓" },
                { subject: "Writing", lesson: "Letter Formation", time: "Yesterday", score: "5/5 ⭐" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                    {activity.subject === "Maths" ? "🔢" : activity.subject === "Reading" ? "📚" : "✏️"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">{activity.lesson}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className="text-xs font-medium text-success whitespace-nowrap">{activity.score}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Menu Items */}
          <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-foreground mb-3">Account</h3>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden divide-y divide-border">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              ))}
            </div>
          </section>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default ParentPortal;
