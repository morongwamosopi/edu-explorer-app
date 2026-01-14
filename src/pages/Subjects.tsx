import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { ArrowLeft, Calculator, BookOpen, Languages, PenTool } from "lucide-react";

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

const Subjects = () => {
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
            <div>
              <h1 className="text-xl font-extrabold text-foreground">All Subjects</h1>
              <p className="text-sm text-muted-foreground">Choose what to learn today</p>
            </div>
          </div>
        </header>

        <main className="px-6 py-4">
          <div className="space-y-3 stagger-children">
            {subjects.map((subject) => (
              <SubjectCard key={subject.title} {...subject} />
            ))}
          </div>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default Subjects;
