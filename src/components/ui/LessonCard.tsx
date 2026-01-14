import { Play, FileText, Gamepad2, Lock, Check } from "lucide-react";

type LessonType = "video" | "worksheet" | "game";

interface LessonCardProps {
  title: string;
  duration: string;
  type: LessonType;
  isLocked?: boolean;
  isCompleted?: boolean;
  onClick?: () => void;
}

const typeConfig = {
  video: { icon: Play, label: "Video", color: "text-reading bg-reading/10" },
  worksheet: { icon: FileText, label: "Worksheet", color: "text-writing bg-writing/10" },
  game: { icon: Gamepad2, label: "Game", color: "text-success bg-success/10" },
};

export const LessonCard = ({
  title,
  duration,
  type,
  isLocked = false,
  isCompleted = false,
  onClick,
}: LessonCardProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`w-full flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft transition-all duration-300 ${
        isLocked
          ? "opacity-60 cursor-not-allowed"
          : "hover:shadow-card hover:scale-[1.02] active:scale-[0.98]"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${config.color}`}>
        {isLocked ? (
          <Lock className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Icon className="w-5 h-5" />
        )}
      </div>
      <div className="flex-1 text-left">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${config.color}`}>
            {config.label}
          </span>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
      </div>
      {isCompleted && (
        <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center animate-bounce-in">
          <Check className="w-4 h-4 text-success-foreground" />
        </div>
      )}
    </button>
  );
};
