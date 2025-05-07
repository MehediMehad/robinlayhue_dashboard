import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TService } from "./ServiceNameCard";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ShowToastify from "@/utils/ShowToastify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { serviceSchemaUpdate } from "@/validationSchema/serviceSchema";
import { Edit2Icon } from "lucide-react";
import UpdateImagePreviewer from "./UpdateImagePreviewer";
import UpdateImageUploader from "./UpdateImageUploader";
import { updateService } from "@/services/service";

export function EditServiceModal({ service }: { service: TService }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>(
    service.image ? [service.image] : [] // Set the default image preview if it exists
  );

  const form = useForm({
    resolver: zodResolver(serviceSchemaUpdate),
    defaultValues: {
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration,
      image: service.image,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const bodyData = {
      ...formData,
      price: parseFloat(String(formData.price || "0")),
    };

    try {
      if (imageFiles.length > 0 || imagePreview.length > 0) {  // Check if there's an image to upload
        const formDataWithImage = new FormData();
        formDataWithImage.append("bodyData", JSON.stringify(bodyData));

        if (imageFiles.length > 0) {
          formDataWithImage.append("serviceImage", imageFiles[0]);
        }

        const res = await updateService(formDataWithImage, service.id);

        if (res?.success) {
          ShowToastify({
            success: res.message || "Service updated successfully!",
          });
          setIsModalOpen(false);
          form.reset();
        } else {
          ShowToastify({
            error: res?.message || "An error occurred",
          });
        }
      } else {
        ShowToastify({ error: "No image uploaded" });
      }
    } catch (err) {
      console.error("❌ Submission Error:", err);
      ShowToastify({ error: "Something went wrong. Check console." });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <button onClick={() => setIsModalOpen(true)}
        className="z-[3] absolute top-10 right-2 p-1 bg-gray-500/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Edit2Icon size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="w-full flex flex-col space-y-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[#3a3a3a] text-sm">Name</Label>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Type Name"
                          className="py-5 focus:border-[#a09f9f] focus-visible:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[#3a3a3a] text-sm">Description</Label>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Type Description"
                          className="py-5 focus:border-[#a09f9f] focus-visible:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[#3a3a3a] text-sm">Price</Label>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Type Price"
                          className="py-5 focus:border-[#a09f9f] focus-visible:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[#3a3a3a] text-sm">Duration (e.g., 1.30 hours)</Label>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="e.g., 1.30 hours"
                          className="py-5 focus:border-[#a09f9f] focus-visible:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {imagePreview.length > 0 ? (
                <UpdateImagePreviewer
                  imagePreview={imagePreview}
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                />
              ) : (
                <UpdateImageUploader
                  setImagePreview={setImagePreview}
                  setImageFiles={setImageFiles}
                  label="Upload Logo"
                />
              )}
            </div>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-5 py-5 w-full bg-[#91D160] hover:bg-[#85c753]"
            >
              {isSubmitting ? "Updating..." : "Update"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
