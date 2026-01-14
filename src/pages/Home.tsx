import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { Badge } from "@/components/ui/AchievementBadge";
import { Calculator, BookOpen, Languages, PenTool, Bell, Sparkles, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const subjects = [
  {
    title: "Mathematics",
    icon: <Calculator className="w-7 h-7" />,
    progress: 65,
    lessons: 24,
    colorClass: "text-maths",
    bgClass: "bg-maths/15",
    path: "/subjects/maths",
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-7 h-7" />,
    progress: 42,
    lessons: 18,
    colorClass: "text-reading",
    bgClass: "bg-reading/15",
    path: "/subjects/reading",
  },
  {
    title: "SA Languages",
    icon: <Languages className="w-7 h-7" />,
    progress: 28,
    lessons: 32,
    colorClass: "text-languages",
    bgClass: "bg-languages/15",
    path: "/subjects/languages",
  },
  {
    title: "Writing Skills",
    icon: <PenTool className="w-7 h-7" />,
    progress: 55,
    lessons: 15,
    colorClass: "text-writing",
    bgClass: "bg-writing/15",
    path: "/subjects/writing",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="min-h-screen pb-24 bg-background">
        {/* Header */}
        <header className="safe-area-top px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <p className="text-sm text-muted-foreground">Hello, Learner! 👋</p>
                <h2 className="font-bold text-foreground">Ready to learn?</h2>
              </div>
            </div>
            <button className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </button>
          </div>
        </header>

        <main className="px-6 space-y-6">
          {/* AI Tutor Banner */}
          <button
            onClick={() => navigate("/ai-tutor")}
            className="w-full p-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg">AI Learning Assistant</h3>
                <p className="text-sm opacity-90">Ask any question in any language!</p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-80" />
            </div>
          </button>

          {/* Badges Section */}
          <section className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-foreground">Your Achievements</h3>
              <button
                onClick={() => navigate("/progress")}
                className="text-sm text-primary font-medium hover:underline"
              >
                View all
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
              <Badge type="star" count={12} size="md" />
              <Badge type="streak" size="md" />
              <Badge type="perfect" count={5} size="md" />
              <Badge type="speed" isEarned={false} size="md" />
              <Badge type="master" isEarned={false} size="md" />
            </div>
          </section>

          {/* Subjects */}
          <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Subjects</h3>
              <button
                onClick={() => navigate("/subjects")}
                className="text-sm text-primary font-medium hover:underline"
              >
                See all
              </button>
            </div>
            <div className="space-y-3">
              {subjects.map((subject) => (
                <SubjectCard key={subject.title} {...subject} />
              ))}
            </div>
          </section>

          {/* Book a Tutor */}
          <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("/tutors")}
              className="w-full p-5 rounded-2xl bg-secondary hover:bg-secondary/80 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-foreground">Need extra help?</h3>
                <p className="text-sm text-muted-foreground">Book a live tutor session</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </section>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default Home;
