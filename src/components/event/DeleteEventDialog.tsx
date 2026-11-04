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
import { cn } from "cn";

export function DeleteEventDialog({
  id,
  triggerClassName,
}: {
  id: string;
  triggerClassName?: string;
}) {
    const handleDeleteEvent = async () => {
        const res = await fetch(`http://localhost:8000/upcoming-events/${id}`, {
            method: "DELETE"
        })
        await res.json();
        redirect("/upcoming-events");
    };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="outline"
            className={cn("flex-1 sm:flex-none", triggerClassName)}
          >
            <Trash className="h-4 w-4" />
            Delete
          </Button>
        }
      />
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Event?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this event? This action cannot be
            undone and will also remove all volunteer registrations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteEvent}>
            <Trash size={16} />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
