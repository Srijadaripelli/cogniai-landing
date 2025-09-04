import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Apple, Monitor, Facebook, Instagram, Mail, Share2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full"
             style={{background: "conic-gradient(from 120deg, rgba(122,63,255,0.35), transparent 60%)", filter:"blur(40px)"}}/>
      </div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>🚀 CogniAI – AI-Powered Data Analytics Platform</Badge>
          <h1 className="h1 mt-6">Turn Raw Data into <br className='hidden md:block'/> Actionable Insights — Instantly</h1>
          <p className="lead mt-6">
            Real-time AI processing, predictive insights, and no-code integration.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg"><Apple className="mr-2 h-5 w-5" /> Download for Mac</Button>
            <Button size="lg" variant="outline"><Monitor className="mr-2 h-5 w-5" /> Download for Windows</Button>
          </div>
        </div>

        <div className="relative mx-auto mt-14 h-72 w-72">
          <div className="absolute inset-0 rounded-full bg-white/[0.03] ring-1 ring-white/10" />
          <div className="absolute inset-8 rounded-full bg-white/[0.03] ring-1 ring-white/10" />
          <div className="absolute inset-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary flex items-center justify-center ring-1 ring-white/20">
            <Share2 className="h-6 w-6" />
          </div>

          <div className="absolute -left-10 top-6">
            <Badge className="bg-white/5"> <Mail className="h-4 w-4" /> Gmail <span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300 text-[10px]">Live</span></Badge>
          </div>
          <div className="absolute -right-10 top-10">
            <Badge className="bg-white/5"> X (Twitter) <span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300 text-[10px]">Live</span></Badge>
          </div>
          <div className="absolute -left-12 bottom-10">
            <Badge className="bg-white/5"> <Facebook className="h-4 w-4" /> Facebook <span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300 text-[10px]">Active</span></Badge>
          </div>
          <div className="absolute -right-12 bottom-8">
            <Badge className="bg-white/5"> <Instagram className="h-4 w-4" /> Instagram <span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300 text-[10px]">Sync</span></Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
