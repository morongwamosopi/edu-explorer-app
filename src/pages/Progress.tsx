import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { Badge } from "@/components/ui/AchievementBadge";
import { ArrowLeft, TrendingUp, Clock, Target, Flame } from "lucide-react";

const weeklyData = [
  { day: "Mon", lessons: 3, height: 60 },
  { day: "Tue", lessons: 5, height: 100 },
  { day: "Wed", lessons: 2, height: 40 },
  { day: "Thu", lessons: 4, height: 80 },
  { day: "Fri", lessons: 6, height: 120 },
  { day: "Sat", lessons: 1, height: 20 },
  { day: "Sun", lessons: 3, height: 60 },
];

const statsCards = [
  { icon: Clock, label: "Time Spent", value: "12h 45m", color: "text-primary" },
  { icon: Target, label: "Accuracy", value: "87%", color: "text-success" },
  { icon: TrendingUp, label: "Lessons Done", value: "48", color: "text-accent" },
  { icon: Flame, label: "Day Streak", value: "7", color: "text-destructive" },
];

const allBadges = [
  { type: "star" as const, count: 12, isEarned: true },
  { type: "streak" as const, isEarned: true },
  { type: "perfect" as const, count: 5, isEarned: true },
  { type: "speed" as const, isEarned: false },
  { type: "master" as const, isEarned: false },
  { type: "reader" as const, count: 3, isEarned: true },
];

const Progress = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="min-h-screen pb-24 bg-background">
        {/* Header */}
        <header className="safe-area-top px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/home")}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-extrabold text-foreground">Your Progress</h1>
          </div>
        </header>

        <main className="px-6 space-y-6">
          {/* Stats Grid */}
          <section className="grid grid-cols-2 gap-3 stagger-children">
            {statsCards.map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-4 rounded-2xl shadow-soft"
              >
                <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Weekly Chart */}
          <section className="bg-card p-5 rounded-2xl shadow-soft animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-foreground mb-4">Weekly Activity</h3>
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyData.map((day, index) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary/30"
                    style={{
                      height: `${day.height}px`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-500"
                      style={{ height: `${(day.lessons / 6) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{day.day}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Badges */}
          <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-foreground mb-4">Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {allBadges.map((badge, index) => (
                <Badge key={index} {...badge} size="lg" />
              ))}
            </div>
          </section>

          {/* Subject Progress */}
          <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-bold text-foreground mb-4">Subject Mastery</h3>
            <div className="space-y-4">
              {[
                { name: "Mathematics", progress: 65, color: "bg-maths" },
                { name: "Reading", progress: 42, color: "bg-reading" },
                { name: "SA Languages", progress: 28, color: "bg-languages" },
                { name: "Writing Skills", progress: 55, color: "bg-writing" },
              ].map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{subject.name}</span>
                    <span className="text-muted-foreground">{subject.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${subject.color} rounded-full transition-all duration-700`}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default Progress;
