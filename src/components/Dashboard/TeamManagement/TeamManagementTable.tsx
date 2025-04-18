import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MdDelete } from "react-icons/md";


type TRestaurantTableProps = {
  bookings: {
    id: string
    name: string
    image: string
    location: string
    email: string
    createdAt: string
    updatedAt: string
  }[];
  currentPage: number;
  itemsPerPage: number;
  openPagination: boolean;
};
export default function TeamManagementTable({
  bookings,
  openPagination,
}: TRestaurantTableProps) {

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-240px)]"
      }`}
    >
      <div className="relative">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[200.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Technician Name
              </TableHead>
              <TableHead className="w-[300.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Email
              </TableHead>
              <TableHead className="w-[355.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Location
              </TableHead>
              <TableHead className="w-[100px] text-[#262626] text-[16px] px-0 font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {bookings.map((booking, index) => (
              <TableRow
                key={index}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                {booking.name}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {booking.email}{" "}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {booking.location || "Not Provide"}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                  <Link href={`/team-management/technician/${booking.id}`}>
                    <Button
                      className="text-[#2972FF] py-0 h-1"
                      variant={"link"}
                    >
                      View
                    </Button>
                  </Link>

                  <button>
                    <MdDelete className="text-red-500 hover:text-red-600 mt-[2px]" size={20}/>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {bookings.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12 absolute top-20 left-[40%]">
          Data Not Found
        </div>
      )}
      </div>
    </div>
  );
}
