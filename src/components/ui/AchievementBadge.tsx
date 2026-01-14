import { Star, Flame, Target, Zap, Award, BookOpen } from "lucide-react";

type BadgeType = "star" | "streak" | "perfect" | "speed" | "master" | "reader";

interface BadgeProps {
  type: BadgeType;
  count?: number;
  isEarned?: boolean;
  size?: "sm" | "md" | "lg";
}

const badgeConfig = {
  star: { icon: Star, label: "Star Learner", color: "from-gold to-warning" },
  streak: { icon: Flame, label: "7 Day Streak", color: "from-destructive to-warning" },
  perfect: { icon: Target, label: "Perfect Score", color: "from-success to-accent" },
  speed: { icon: Zap, label: "Speed Master", color: "from-primary to-accent" },
  master: { icon: Award, label: "Subject Master", color: "from-writing to-maths" },
  reader: { icon: BookOpen, label: "Bookworm", color: "from-reading to-primary" },
};

const sizeConfig = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

export const Badge = ({ type, count, isEarned = true, size = "md" }: BadgeProps) => {
  const config = badgeConfig[type];
  const Icon = config.icon;
  const sizeClass = sizeConfig[size];

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizeClass} rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center relative ${
          isEarned ? "animate-pulse-glow" : "opacity-40 grayscale"
        }`}
      >
        <Icon
          className={`${
            size === "sm" ? "w-5 h-5" : size === "md" ? "w-7 h-7" : "w-10 h-10"
          } text-white drop-shadow-md`}
        />
        {count !== undefined && count > 1 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground">
            {count}
          </div>
        )}
      </div>
      {size !== "sm" && (
        <span className="text-xs font-medium text-muted-foreground text-center">
          {config.label}
        </span>
      )}
    </div>
  );
};
