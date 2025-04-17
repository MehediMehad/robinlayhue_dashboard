"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface Person {
  id: string
  name: string
  location: string
  avatar: string
}

interface JobAssignmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function JobAssignmentModal({ open, onOpenChange }: JobAssignmentModalProps) {
  const [selectedPeople, setSelectedPeople] = useState<string[]>([])

  const people: Person[] = [
    { id: "1", name: "Savannah Nguyen", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "2", name: "Marvin McKinney", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "3", name: "Guy Hawkins", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "4", name: "Jacob Jones", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "5", name: "Ronald Richards", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "6", name: "Arlene McCoy", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "7", name: "Esther Howard", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
    { id: "8", name: "Bessie Cooper", location: "Atlanta, USA", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  ]

  const togglePerson = (id: string) => {
    setSelectedPeople((prev) => (prev.includes(id) ? prev.filter((personId) => personId !== id) : [...prev, id]))
  }

  const handleAssignJob = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden">

      <div className="border-b">
          <table className="w-full">
            <thead className="hidden">
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-center">Status</th>
                <th className="px-4 py-2 text-sm font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 text-xs text-gray-500">
                  <div className="truncate max-w-[100px]">Atlanta, USA</div>
                  <div className="bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-medium inline-block mt-1">
                    Pending
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1 text-xs">
                    Assign Job
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {people.map((person) => (
            <div key={person.id} className="flex items-center justify-between pl-4 pr-11 py-2 border-b">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src={person.avatar || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                  </div>
                  <span className="text-gray-700">{person.name}</span>
                </div>
              </div>
              <Checkbox checked={selectedPeople.includes(person.id)} onCheckedChange={() => togglePerson(person.id)} />
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Button className="w-full bg-green-500 hover:bg-green-600" onClick={handleAssignJob}>
            Assign Job
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}
