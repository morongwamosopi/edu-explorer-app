import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
}

export const MobileFrame = ({ children, className = "" }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className={`mobile-frame shadow-2xl rounded-[2.5rem] overflow-hidden border border-border/50 ${className}`}>
        {children}
      </div>
    </div>
  );
};
