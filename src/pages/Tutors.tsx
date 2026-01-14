import { useNavigate } from "react-router-dom";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { BottomNav } from "@/components/ui/BottomNav";
import { ArrowLeft, Star, Video, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const tutors = [
  {
    name: "Mrs. Nkosi",
    subjects: ["Mathematics", "Science"],
    rating: 4.9,
    reviews: 124,
    experience: "8 years",
    avatar: "👩🏾‍🏫",
    available: true,
    rate: "R150/hr",
  },
  {
    name: "Mr. Van der Berg",
    subjects: ["Reading", "Writing"],
    rating: 4.8,
    reviews: 89,
    experience: "5 years",
    avatar: "👨🏻‍🏫",
    available: true,
    rate: "R120/hr",
  },
  {
    name: "Ms. Dlamini",
    subjects: ["Zulu", "Xhosa"],
    rating: 5.0,
    reviews: 67,
    experience: "10 years",
    avatar: "👩🏿‍🏫",
    available: false,
    rate: "R130/hr",
  },
  {
    name: "Mr. Patel",
    subjects: ["Mathematics", "English"],
    rating: 4.7,
    reviews: 156,
    experience: "12 years",
    avatar: "👨🏽‍🏫",
    available: true,
    rate: "R180/hr",
  },
];

const Tutors = () => {
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
              <h1 className="text-xl font-extrabold text-foreground">Book a Tutor</h1>
              <p className="text-sm text-muted-foreground">Get live help from expert tutors</p>
            </div>
          </div>
        </header>

        <main className="px-6 space-y-4">
          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
            {["All", "Maths", "Reading", "Languages", "Writing"].map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tutor Cards */}
          <div className="space-y-4 stagger-children">
            {tutors.map((tutor) => (
              <div
                key={tutor.name}
                className="bg-card p-4 rounded-2xl shadow-soft"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl">
                    {tutor.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-foreground">{tutor.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {tutor.subjects.join(" • ")}
                        </p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tutor.available
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {tutor.available ? "Available" : "Busy"}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span className="font-semibold text-foreground">{tutor.rating}</span>
                        <span className="text-muted-foreground">({tutor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {tutor.experience}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-primary">{tutor.rate}</span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 rounded-lg"
                          disabled={!tutor.available}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button
                          size="sm"
                          className="h-9 rounded-lg"
                          disabled={!tutor.available}
                        >
                          <Video className="w-4 h-4 mr-1" />
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <BottomNav />
      </div>
    </MobileFrame>
  );
};

export default Tutors;
