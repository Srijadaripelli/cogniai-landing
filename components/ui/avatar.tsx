import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
export function Avatar({ className, src, alt }: { className?: string; src: string; alt: string }) {
  return (
    <div className={cn("relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10", className)}>
      <Image src={src} alt={alt} fill sizes="40px" className="object-cover" />
    </div>
  );
}
