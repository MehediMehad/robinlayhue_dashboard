"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"

export function CreateService() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
  })

  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ ...formData, image })
    // Reset form after submission
    setFormData({ name: "", price: "", duration: "", description: "" })
    setImage(null)
    setImagePreview(null)
  }

  return (
    <div className="p-5 w-[80%]">
      <h1 className="text-xl font-semibold mb-6">Create New Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <Input placeholder="Type Service name" name="name" value={formData.name} onChange={handleInputChange} />
            <Input placeholder="Type Service price" name="price" value={formData.price} onChange={handleInputChange} />
            <Input
              placeholder="Type Service duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Type Service description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="image-upload"
              className="border rounded-md h-full flex flex-col items-center justify-center cursor-pointer"
            >
              {imagePreview ? (
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Service preview"
                    className="max-h-full max-w-full object-contain"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setImage(null)
                      setImagePreview(null)
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="text-center p-8 text-muted-foreground">
                  <ImageIcon className="mx-auto h-8 w-8 mb-2" />
                  <span>Add Image</span>
                </div>
              )}
              <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full mt-4 bg-[#91D160] hover:bg-[#7db850] text-white">
          Create
        </Button>
      </form>
    </div>
  )
}
