import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteEventDialog({id}: {id: string}) {
    const handleDeleteEvent = async () => {
        try {
            const res = await fetch(`http://localhost:8000/upcoming-events/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) {
                toast.error("Unable to delete the event. Please try again.");
                return;
            }
            toast.success("Event deleted successfully.");
        } catch {
            toast.error("Unable to delete the event. Please try again.");
            return;
        }
        redirect("/manage-events");
    };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="outline"
            className="flex-1 sm:flex-none h-11 w-full justify-center rounded-xl border-red-200 bg-white px-4 py-1 sm:py-0 font-semibold text-red-700 shadow-sm transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-800 focus-visible:border-red-300 focus-visible:ring-red-500/30 sm:w-auto lg:w-full"
          >
            <Trash className="h-4 w-4" />
            Delete
          </Button>
        }
      />
      <AlertDialogContent className="gap-0 overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white p-0 shadow-2xl shadow-[#26351F]/15">
        <AlertDialogHeader className="flex flex-col justify-center items-center gap-3 px-5 py-6 text-center sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700 ring-1 ring-inset ring-red-100">
            <Trash className="h-5 w-5" />
          </div>
          <AlertDialogTitle className="text-xl font-bold tracking-tight text-[#26351F]">
            Delete this event?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm leading-6 text-slate-600">
            Are you sure you want to delete this event? This action cannot be
            undone and will also remove all volunteer registrations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-0 mb-0 border-t border-[#E5E9DF] bg-[#F7F9F4] px-5 py-4 sm:px-6">
          <AlertDialogCancel className="h-10 rounded-xl border-[#E5E9DF] px-5 font-semibold text-slate-600 hover:bg-white hover:text-[#344222]">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteEvent}
            className="h-10 rounded-xl bg-red-700 px-5 font-semibold text-white shadow-sm transition-colors hover:bg-red-800"
          >
            <Trash className="h-4 w-4" />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
