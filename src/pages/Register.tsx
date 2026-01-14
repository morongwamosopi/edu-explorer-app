import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff, User, GraduationCap } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"learner" | "parent" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent) => {
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
        <form onSubmit={handleRegister} className="flex-1 flex flex-col py-8 stagger-children">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Create account</h1>
          <p className="text-muted-foreground mb-6">Start your learning journey today</p>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole("learner")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                role === "learner"
                  ? "border-primary bg-primary/5 shadow-soft"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <GraduationCap className={`w-8 h-8 mx-auto mb-2 ${role === "learner" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${role === "learner" ? "text-primary" : "text-muted-foreground"}`}>
                I'm a Learner
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRole("parent")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                role === "parent"
                  ? "border-primary bg-primary/5 shadow-soft"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <User className={`w-8 h-8 mx-auto mb-2 ${role === "parent" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${role === "parent" ? "text-primary" : "text-muted-foreground"}`}>
                I'm a Parent
              </span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Full Name</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 rounded-xl bg-muted/50 border-0 text-base px-4 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email</label>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 rounded-xl bg-muted/50 border-0 text-base px-4 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
          </div>

          <Button
            type="submit"
            disabled={!role}
            className="w-full h-14 text-base font-bold rounded-xl shadow-soft hover:shadow-card mt-8 transition-all duration-300 disabled:opacity-50"
          >
            Create Account
          </Button>

          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-primary font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </MobileFrame>
  );
};

export default Register;
