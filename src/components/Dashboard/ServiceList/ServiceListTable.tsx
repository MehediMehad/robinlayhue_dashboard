import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useAddAssignMutation } from "@/Redux/Api/bookingApi";
import ShowToastify from "@/utils/ShowToastify";
import Loading from "@/components/utils/Loading";
import { useGetAllWorkerQuery } from "@/Redux/Api/workerApi";

// Define the status types and their corresponding styles
const statusStyles = {
  PENDING: "bg-green-100 text-green-600 hover:bg-green-100",
  PROGRESS: "bg-red-100 text-red-600 hover:bg-red-100",
  COMPLETED: "bg-red-100 text-red-600 hover:bg-red-100",
};

interface ServiceListTableProps {
  bookings: any;
  openPagination: any;
  currentPage: number;
  itemsPerPage: number;
}

export default function ServiceListTable({
  bookings,
  openPagination,
}: ServiceListTableProps) {
  const [addAssign] = useAddAssignMutation();
  const { data: getResponse, isLoading } = useGetAllWorkerQuery(undefined);
  if (isLoading)  <Loading />;

  const workers = getResponse?.data;

  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);

  const openAssignmentModal = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setSelectedAssignees([]);
    setAssignmentModalOpen(true);
  };

  const toggleAssignee = (assigneeId: string) => {
    setSelectedAssignees((prev) =>
      prev.includes(assigneeId)
        ? prev.filter((id) => id !== assigneeId)
        : [...prev, assigneeId]
    );
  };

  const handleAssignJob = async () => {
    if (!selectedBookingId || selectedAssignees.length === 0) {
      ShowToastify({
        error: "No booking ID or assignees selected",
      });
      return;
    }

    try {
      // Create the payload in the required format
      const payload = {
        bookingId: selectedBookingId,
        assigns: selectedAssignees,
      };

      const result = await addAssign(payload).unwrap();

      // Close the modal after successful assignment
      setAssignmentModalOpen(false);

      ShowToastify({
        success: result.message || "Booking updated successfully!",
      });

      // Optionally reset the selected state
      setSelectedBookingId(null);
      setSelectedAssignees([]);
    } catch (error: any) {
      ShowToastify({
        error: error.data.message|| "Failed to assign job",
      });
    }
  };

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-220px)]"
      }`}
    >
      <div className="">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[140.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Customer Name
              </TableHead>
              <TableHead className="w-[200.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Date & Time
              </TableHead>
              <TableHead className="w-[300.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Location
              </TableHead>
              <TableHead className="w-[120px] text-[#262626] text-[16px] px-0 font-semibold">
                Status
              </TableHead>
              <TableHead className="w-[100px] text-[#262626] text-[16px] px-0 font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {bookings.map((booking: any, index: number) => (
              <TableRow
                key={index}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                  {booking.name}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {/* 16 July 2023, 12:35 AM */}
                  {booking.date}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {/* Aspen Ridge, Colorado, USA ... */}
                  {booking.location}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                  <p className="px-4 py-1 text-[#FFC107] bg-[#F9F0D7] rounded-full">
                    {booking.status}
                  </p>
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {/* <Button className="bg-[#91D160] hover:bg-[#7db850] h-7 py-2 px-4 border border-[#747474]" onClick={() => setOpen(true)}>Open Job Assignment</Button>
                  <JobAssignmentModal open={open} onOpenChange={setOpen} /> */}
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 h-auto"
                    onClick={() => openAssignmentModal(booking.id)}
                  >
                    Assign Job
                  </Button>

                  <Dialog
                    open={assignmentModalOpen}
                    onOpenChange={setAssignmentModalOpen}
                  >
                    <DialogContent className="max-w-md p-0 overflow-hidden">
                      <div className="max-h-[400px] overflow-y-auto">
                        {workers?.map((assignee: any) => (
                          <div
                            key={assignee.id}
                            className="flex items-center justify-between px-4 py-3 border-b"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                  src={assignee.avatar || "/placeholder.svg"}
                                  alt={assignee.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-gray-700">
                                {assignee.name}
                              </span>
                            </div>
                            <Checkbox
                              checked={selectedAssignees.includes(assignee.id)}
                              onCheckedChange={() =>
                                toggleAssignee(assignee.id)
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <Button
                          className="w-full bg-green-500 hover:bg-green-600"
                          onClick={handleAssignJob}
                        >
                          Assign Job
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
