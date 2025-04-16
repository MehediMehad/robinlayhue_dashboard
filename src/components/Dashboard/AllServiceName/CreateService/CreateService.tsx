"use client";
import { Button } from "@/components/ui/button";
import ServiceImagePreviewer from "@/components/ui/core/NMImageUploader/ServiceImagePreviewer";
import ServiceImageUploader from "@/components/ui/core/NMImageUploader/ServiceImageUploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateServiceMutation } from "@/Redux/Api/serviceApi";
import ShowToastify from "@/utils/ShowToastify";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";

const CreateService = () => {
  const [addService, { data, error }] = useCreateServiceMutation();
  console.log(data, error);

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitErrorHandler<FieldValues> = async (formData) => {
    const bodyData ={
      ...formData,
      price: "jj" //parseFloat(formData.price)
    }
    try {
      // Check if imageFiles is not empty
      if (imageFiles.length > 0) {
        const formDataWithImage = new FormData();
        formDataWithImage.append("bodyData", JSON.stringify(bodyData)); // Add all form data
        formDataWithImage.append("serviceImage", imageFiles[0] as File); // Add image file
        console.log(Object.fromEntries(formDataWithImage));

        // Handle the API call with FormData
        const res = await addService(formDataWithImage);
        console.log(29, res);
        console.log("An error occurred", res?.data?.message );
        
        if (res?.data?.success) {
          ShowToastify({ success: res.data.message || 'Service created successfully!'});
        }else{
          ShowToastify({ error:  "An error occurred"});
        }
        
       

      } else {
        // Handle case where no image is uploaded
        console.log("No image uploaded");
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
                    {/* <FormLabel>Name</FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type Name"
                        className="py-5 focus:border-[#a09f9f]  focus-visible:ring-ring"
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
                    {/* <FormLabel>Description</FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
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
                    {/* <FormLabel>Name</FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type Price"
                        className="py-5 focus:border-[#a09f9f]  focus-visible:ring-ring"
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
                    {/* <FormLabel>Duration</FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        placeholder="Type Duration"
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
          <Button disabled={isSubmitting} type="submit" className="mt-5 py-5 w-full bg-[#91D160] hover:bg-[#85c753]">
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateService;
