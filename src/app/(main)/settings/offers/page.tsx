import { ArrowRight, Building2, Calendar, CheckCircle, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const OFFERS = [
  {
    id: 1,
    company: "Meta Korea",
    position: "Senior Software Engineer",
    date: "2024.03.24",
    status: "New",
    offerType: "Direct Interview",
    salary: "Negotiable",
  },
  {
    id: 2,
    company: "Samsung Electronics",
    position: "AI Specialist / Team Lead",
    date: "2024.03.22",
    status: "Reviewed",
    offerType: "Talent Scout",
    salary: "Top Tier",
  },
  {
    id: 3,
    company: "Woowa Brothers",
    position: "Technical Architect",
    date: "2024.03.15",
    status: "Expired",
    offerType: "Direct Proposal",
    salary: "Standard+",
  },
];

export default function ReceivedOffersPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">받은 제안</h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium opacity-60">
          귀하의 역량을 알아본 기업들로부터 도착한 프리미엄 채용 제안입니다.
        </p>
      </div>

      <div className="space-y-4">
        {OFFERS.map((offer) => (
          <Card
            key={offer.id}
            className="relative group p-8 rounded-[2.5rem] bg-surface/50 border-border/10 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center gap-8 overflow-hidden"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
              <Mail className="w-8 h-8 text-primary shadow-2xl" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold italic tracking-tight uppercase group-hover:text-primary transition-colors">
                  {offer.company}
                </h3>
                <Badge
                  variant={offer.status === "New" ? "default" : "outline"}
                  className="rounded-full px-3 py-0.5 text-[10px] uppercase font-bold tracking-widest border-none"
                >
                  {offer.status}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground/80">
                <span className="flex items-center gap-2">
                  <Building2 size={14} className="text-primary" /> {offer.position}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {offer.date}
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-secondary" /> {offer.offerType}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="px-6 py-4 rounded-2xl bg-primary text-white text-sm font-bold shadow-xl shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 min-w-[140px] justify-center"
              >
                제안 상세보기 <ArrowRight size={16} />
              </button>
              {offer.status === "New" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl opacity-50" />
              )}
            </div>

            {/* Status Indicator */}
            <div className="absolute top-4 right-8">
              <div className="flex items-center gap-1.5 opacity-30 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                <CheckCircle size={10} />{" "}
                {offer.status === "Expired" ? "Offer Expired" : "Active Proposal"}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
