import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectDetail from "./pages/SubjectDetail";
import AITutor from "./pages/AITutor";
import Progress from "./pages/Progress";
import ParentPortal from "./pages/ParentPortal";
import Tutors from "./pages/Tutors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:subject" element={<SubjectDetail />} />
          <Route path="/ai-tutor" element={<AITutor />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
