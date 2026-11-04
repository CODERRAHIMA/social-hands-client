import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-[#42512C]"
    >
      <LoaderCircle
        aria-hidden="true"
        className="h-9 w-9 animate-spin text-[#647F52]"
      />
      <p className="text-sm font-medium">Loading...</p>
    </div>
  );
}