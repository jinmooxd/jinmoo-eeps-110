import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-basalt/30 bg-basalt px-6 py-3 text-sm font-medium text-bone transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-magma focus-visible:ring-2 focus-visible:ring-ember",
        className,
      )}
    >
      <span className="mono-label text-[0.68rem]">{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
