import { useParams, useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { LessonCard } from "@/components/ui/LessonCard";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calculator, BookOpen, Languages, PenTool } from "lucide-react";

const subjectData = {
  maths: {
    title: "Mathematics",
    icon: <Calculator className="w-8 h-8" />,
    color: "bg-maths",
    progress: 65,
    lessons: [
      { title: "Introduction to Fractions", duration: "5 min", type: "video" as const, isCompleted: true },
      { title: "Adding Fractions", duration: "8 min", type: "video" as const, isCompleted: true },
      { title: "Fractions Practice", duration: "10 min", type: "game" as const, isCompleted: true },
      { title: "Subtracting Fractions", duration: "7 min", type: "video" as const, isCompleted: false },
      { title: "Fractions Worksheet", duration: "15 min", type: "worksheet" as const, isLocked: true },
      { title: "Mixed Numbers", duration: "6 min", type: "video" as const, isLocked: true },
    ],
  },
  reading: {
    title: "Reading",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-reading",
    progress: 42,
    lessons: [
      { title: "Phonics Basics", duration: "4 min", type: "video" as const, isCompleted: true },
      { title: "Word Matching Game", duration: "8 min", type: "game" as const, isCompleted: true },
      { title: "Story Time: The Lion", duration: "10 min", type: "video" as const, isCompleted: false },
      { title: "Reading Worksheet", duration: "12 min", type: "worksheet" as const, isLocked: true },
    ],
  },
  languages: {
    title: "SA Languages",
    icon: <Languages className="w-8 h-8" />,
    color: "bg-languages",
    progress: 28,
    lessons: [
      { title: "Zulu Greetings", duration: "5 min", type: "video" as const, isCompleted: true },
      { title: "Xhosa Numbers", duration: "6 min", type: "video" as const, isCompleted: false },
      { title: "Language Quiz", duration: "10 min", type: "game" as const, isLocked: true },
    ],
  },
  writing: {
    title: "Writing Skills",
    icon: <PenTool className="w-8 h-8" />,
    color: "bg-writing",
    progress: 55,
    lessons: [
      { title: "Letter Formation", duration: "6 min", type: "video" as const, isCompleted: true },
      { title: "Tracing Practice", duration: "10 min", type: "worksheet" as const, isCompleted: true },
      { title: "Word Building", duration: "8 min", type: "game" as const, isCompleted: false },
      { title: "Sentence Writing", duration: "12 min", type: "worksheet" as const, isLocked: true },
    ],
  },
};

const SubjectDetail = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const data = subjectData[subject as keyof typeof subjectData];

  if (!data) {
    navigate("/subjects");
    return null;
  }

  const completedLessons = data.lessons.filter((l) => l.isCompleted).length;

  return (
    <MobileFrame>
      <div className="min-h-screen pb-24 bg-background">
        {/* Header */}
        <header className={`${data.color} px-6 py-6 rounded-b-3xl`}>
          <div className="safe-area-top">
            <button
              onClick={() => navigate("/home")}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              {data.icon}
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-2xl font-extrabold">{data.title}</h1>
              <p className="text-sm opacity-90">
                {completedLessons} of {data.lessons.length} lessons completed
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-white/90 text-sm mb-2">
              <span>Progress</span>
              <span className="font-bold">{data.progress}%</span>
            </div>
            <Progress value={data.progress} className="h-2 bg-white/20" />
          </div>
        </header>

        {/* Lessons */}
        <main className="px-6 py-6">
          <h3 className="font-bold text-foreground mb-4">Lessons</h3>
          <div className="space-y-3 stagger-children">
            {data.lessons.map((lesson, index) => (
              <LessonCard
                key={index}
                {...lesson}
                onClick={() => !lesson.isLocked && navigate("/lesson")}
              />
            ))}
          </div>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default SubjectDetail;
