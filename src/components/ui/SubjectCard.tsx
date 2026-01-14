import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  title: string;
  icon: ReactNode;
  progress: number;
  lessons: number;
  colorClass: string;
  bgClass: string;
  path: string;
}

export const SubjectCard = ({
  title,
  icon,
  progress,
  lessons,
  colorClass,
  bgClass,
  path,
}: SubjectCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="w-full bg-card rounded-2xl p-4 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-left"
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-xl ${bgClass} flex items-center justify-center`}>
          <div className={colorClass}>{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{lessons} lessons</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${bgClass} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className={`text-xs font-bold ${colorClass}`}>{progress}%</span>
          </div>
        </div>
      </div>
    </button>
  );
};
