import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-[#42512C] dark:text-white mt-22">
      <Spinner className="h-9 w-9 text-[#647F52] dark:text-white" />
      <p className="text-sm font-medium" aria-hidden="true">
        Loading...
      </p>
    </div>
  );
}