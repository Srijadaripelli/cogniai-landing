import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary" />
          <span className="font-semibold">CogniAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-surface-300">
          <Link href="#home">Home</Link>
          <Link href="#work">Work</Link>
          <Link href="#features">Expertise</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Testimonial</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
}
