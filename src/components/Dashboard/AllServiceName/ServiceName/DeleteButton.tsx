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
import { useDeleteServiceMutation } from "@/Redux/Api/serviceApi";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

interface DeleteButtonProps {
  serviceId: string;
}

export function DeleteButton({serviceId }: DeleteButtonProps) {
  const [deleteService, {isLoading}] = useDeleteServiceMutation();

  const handleDelete = async () => {
    try {
      await deleteService(serviceId).unwrap();
      toast.success("Service deleted successfully");
    } catch (error) {
      toast.error("Failed to delete service");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
        className="z-[3] absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        title="Delete service"
      >
        <Trash2 size={16} />
      </button> 
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Service</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this service? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="flex justify-center items-center px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-600 rounded-md">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="flex justify-end items-center px-4 py-3 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md"
          >
            Yes, Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
