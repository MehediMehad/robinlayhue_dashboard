import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from 'moment';


// Define the status types and their corresponding styles
// Define status styles outside the component to avoid re-renders
const statusStyles: Record<"PROGRESSING" | "COMPLETED", string> = {
  PROGRESSING: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  COMPLETED: "bg-green-100 text-green-600 hover:bg-green-200",
};

type TRestaurantTableProps = {
  bookings: {
    id: string
    userId: string
    serviceId: string
    date: string
    description: string
    location: string
    latitude: number
    longitude: number
    isPaid: boolean
    assigns: string[]
    status: string
    createdAt: string
    updatedAt: string
    userDetails:  {
      name: string
    }
  }[];
  currentPage: number;
  itemsPerPage: number;
  openPagination: boolean;
};
export default function ProfileTable({
  bookings,
  openPagination,
}: TRestaurantTableProps) {
  console.log(10, bookings);

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-405px)]"
      }`}
    >
      <div className="">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[200.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Customer Name
              </TableHead>
              <TableHead className="w-[300.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
              Date & Time
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
            {bookings?.map((booking, index) => (
              <TableRow
                key={booking.id}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                {booking.userDetails.name}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {booking.createdAt ? moment(booking.createdAt).format('DD MMMM YYYY, hh:mm A') : ''}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  {booking.location}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                <p
                  className={`px-4 py-1 font-semibold rounded-full ${
                    statusStyles[booking.status as keyof typeof statusStyles]
                  }`}
                >
                  {booking.status}
                </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
