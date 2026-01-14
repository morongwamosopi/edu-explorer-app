import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <MobileFrame>
      <div className="min-h-screen flex flex-col px-6 py-8 bg-background">
        {/* Header */}
        <div className="safe-area-top">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex-1 flex flex-col justify-center py-8 stagger-children">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Welcome back!</h1>
          <p className="text-muted-foreground mb-8">Login to continue learning</p>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email</label>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-xl bg-muted/50 border-0 text-base px-4 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 rounded-xl bg-muted/50 border-0 text-base px-4 pr-12 focus-visible:ring-2 focus-visible:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline text-right w-full"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-base font-bold rounded-xl shadow-soft hover:shadow-card mt-8 transition-all duration-300"
          >
            Login
          </Button>

          <p className="text-center text-muted-foreground mt-6">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-primary font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </MobileFrame>
  );
};

export default Login;
