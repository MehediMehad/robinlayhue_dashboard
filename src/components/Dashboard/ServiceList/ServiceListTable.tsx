import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useAddAssignMutation } from "@/Redux/Api/bookingApi";
import ShowToastify from "@/utils/ShowToastify";
import Loading from "@/components/utils/Loading";
import { useGetAllWorkerQuery } from "@/Redux/Api/workerApi";

export interface TBooking {
  id: string;
  status: "PENDING" | "PROGRESSING" | "COMPLETED";
  location: string;
  details: string;
  paid: boolean;
  date: string;
  name: string;
  email: string;
  serviceName: string;
  serviceImage: string;
  serviceTime: string;
}

// Define status styles outside the component to avoid re-renders
const statusStyles = {
  PENDING: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
  PROGRESSING: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  COMPLETED: "bg-green-100 text-green-600 hover:bg-green-200",
};

interface ServiceListTableProps {
  bookings: TBooking[];
  openPagination: boolean;
  currentPage: number;
  itemsPerPage: number;
  selectedTab: "PENDING" | "PROGRESSING" | "COMPLETED";
}

export default function ServiceListTable({
  selectedTab,
  bookings,
  openPagination,
}: ServiceListTableProps) {
  console.log(11, bookings);

  const [addAssign] = useAddAssignMutation();
  const { data: workers, isLoading: workersLoading } =
    useGetAllWorkerQuery(undefined);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);

  // Open the assignment modal for the selected booking
  const openAssignmentModal = useCallback((bookingId: string) => {
    setSelectedBookingId(bookingId);
    setSelectedAssignees([]);
    setAssignmentModalOpen(true);
  }, []);

  // Toggle assignee selection (Add or remove assignee)
  const toggleAssignee = (assigneeId: string) => {
    setSelectedAssignees((prev) =>
      prev.includes(assigneeId)
        ? prev.filter((id) => id !== assigneeId)
        : [...prev, assigneeId]
    );
  };

  // Handle job assignment
  const handleAssignJob = async () => {
    if (!selectedBookingId || selectedAssignees.length === 0) {
      ShowToastify({
        error: "No booking ID or assignees selected",
      });
      return;
    }

    try {
      const payload = {
        bookingId: selectedBookingId,
        assigns: selectedAssignees,
      };
      const result = await addAssign(payload).unwrap();
      ShowToastify({
        success: result.message || "Booking updated successfully!",
      });

      // Reset state and close the modal
      setAssignmentModalOpen(false);
      setSelectedBookingId(null);
      setSelectedAssignees([]);
    } catch (error: any) {
      ShowToastify({
        error: error?.data?.message || "Failed to assign job",
      });
    }
  };

  // Render loading spinner if workers are being fetched
  if (workersLoading) return <Loading />;

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-220px)]"
      }`}
    >
      <Table className="w-full">
        <TableHeader className="border-none" style={{ height: "60px" }}>
          <TableRow>
            <TableHead className="w-[140.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Customer Name
            </TableHead>
            <TableHead className="w-[250.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Date & Time
            </TableHead>
            <TableHead className="w-[250.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Location
            </TableHead>
            <TableHead className="w-[130px] text-[#262626] text-[16px] px-0 font-semibold">
              Status
            </TableHead>
            {selectedTab === "PENDING" && (
              <TableHead className="w-[100px] text-[#262626] text-[16px] px-0 font-semibold">
                Action
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow
              key={booking.id}
              className="border-b h-12 hover:bg-[#414141]/5 duration-300"
            >
              <TableCell className="text-[#414141] text-[16px] px-0">
                {booking.name}
              </TableCell>
              <TableCell className="text-[#414141] text-[16px] px-0">
                {booking.date}
              </TableCell>
              <TableCell className="text-[#414141] text-[16px] px-0">
                {booking.location}
              </TableCell>
              <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                <p
                  className={`px-4 py-1 font-semibold rounded-full ${
                    statusStyles[booking.status]
                  }`}
                >
                  {booking.status}
                </p>
              </TableCell>
              {selectedTab === "PENDING" && (
                <TableCell className="text-[#414141] text-[16px] px-0">
                  <Button
                    className="bg-[#91D160] hover:bg-[#6fa149] text-white text-xs py-1 h-auto"
                    onClick={() => openAssignmentModal(booking.id)}
                  >
                    Assign Job
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {bookings.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12">
          {selectedTab} Data Not Found
        </div>
      )}

      {/* Assignment Modal */}
      <Dialog open={assignmentModalOpen} onOpenChange={setAssignmentModalOpen}>
        <DialogContent className="max-w-md p-0 pt-10 overflow-hidden">
          <div className="max-h-[400px] overflow-y-auto">
            {workers?.data?.map((assignee: any) => (
              <div
                key={assignee.id}
                className="flex items-center justify-between px-4 py-3 border-b"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={assignee.image || "/placeholder.svg"}
                      alt={assignee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-gray-700">{assignee.name}</span>
                </div>
                <Checkbox
                  checked={selectedAssignees.includes(assignee.id)}
                  onCheckedChange={() => toggleAssignee(assignee.id)}
                />
              </div>
            ))}
          </div>
          <div className="p-4">
            <Button
              className="w-full bg-[#91D160] hover:bg-[#6fa149]"
              onClick={handleAssignJob}
              disabled={selectedAssignees.length === 0}
            >
              Assign Job
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
