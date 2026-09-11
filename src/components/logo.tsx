import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" opacity="0.7"/>
        <path d="M12 5.5L13.63 9.4L18 9.92L14.82 12.91L15.64 17.21L12 15.19L8.36 17.21L9.18 12.91L6 9.92L10.37 9.4L12 5.5Z"/>
      </svg>
    </div>
  );
}
