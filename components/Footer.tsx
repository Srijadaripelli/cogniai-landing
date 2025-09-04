export default function Footer(){
  return (
    <footer className="border-t border-white/5">
      <div className="container py-12 text-sm text-surface-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-primary" />
            <span>CogniAI</span>
          </div>
          <div className="opacity-80">© 2025 CogniAI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
