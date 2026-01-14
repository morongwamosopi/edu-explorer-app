import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12 bg-gradient-to-b from-background via-background to-secondary/30">
        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-center justify-center animate-scale-in">
          <div className="w-40 h-40 mb-6 animate-float">
            <img
              src={logo}
              alt="Synergy Digital Academy"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight text-center">
            Synergy
            <br />
            Digital
            <br />
            Academy
          </h1>
        </div>

        {/* Actions Section */}
        <div className="w-full space-y-4 stagger-children pb-8">
          <Button
            onClick={() => navigate("/login")}
            className="w-full h-14 text-base font-bold rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
          >
            Login
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/register")}
            className="w-full h-14 text-base font-bold rounded-xl border-2 border-foreground/20 hover:bg-secondary transition-all duration-300"
          >
            Register
          </Button>
          <button
            onClick={() => navigate("/home")}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
          >
            Continue as a guest
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Splash;
