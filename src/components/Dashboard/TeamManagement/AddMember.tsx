"use client";
import { Button } from "@/components/ui/button";
import ServiceImagePreviewer from "@/components/ui/core/NMImageUploader/ServiceImagePreviewer";
import ServiceImageUploader from "@/components/ui/core/NMImageUploader/ServiceImageUploader";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ShowToastify from "@/utils/ShowToastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memberSchema } from "@/validationSchema/memberSchema";
import { useCreateMemberMutation } from "@/Redux/Api/workerApi";

const AddMember = () => {
  const [addMember] = useCreateMemberMutation();
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  // Use Zod schema for form validation
  const form = useForm({
    resolver: zodResolver(memberSchema), 
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const bodyData = {
      ...formData,
    };

    try {
      // Check if imageFiles is not empty
      if (imageFiles.length > 0) {
        const formDataWithImage = new FormData();
        formDataWithImage.append("bodyData", JSON.stringify(bodyData)); // Add all form data
        formDataWithImage.append("profileImage", imageFiles[0] as File); // Add image file

        // Handle the API call with FormData
        const res = await addMember(formDataWithImage);

        if (res?.data?.success) {
          ShowToastify({
            success: res.data.message || "member created successfully!",
          });
        } else {
          ShowToastify({
            error:
              res.error &&
              // Check if the error is a FetchBaseQueryError, and then access the data property
              "data" in res.error
                ? (res.error.data as { message?: string })?.message ||
                  "An error occurred"
                : "An error occurred",
          });
        }
      } else {
        // Handle case where no image is uploaded
        ShowToastify({error: "No image upload"})
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
    }
  };

  return (
    <div className="w-[80%] p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div className="w-full flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type name here"
                        className="py-5 focus:border-[#a09f9f]  focus-visible:ring-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type email here"
                        className="py-5 focus:border-[#a09f9f] focus-visible:ring-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type password here"
                        className="py-5 focus:border-[#a09f9f]  focus-visible:ring-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type location here"
                        className="py-5 focus:border-[#a09f9f]  focus-visible:ring-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {imagePreview.length > 0 ? (
              <ServiceImagePreviewer
                imagePreview={imagePreview}
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                className=""
              />
            ) : (
              <div className="">
                <ServiceImageUploader
                  setImagePreview={setImagePreview}
                  setImageFiles={setImageFiles}
                  label="Upload Logo"
                />
              </div>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="mt-5 py-5 w-full bg-[#91D160] hover:bg-[#85c753]"
          >
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddMember;
