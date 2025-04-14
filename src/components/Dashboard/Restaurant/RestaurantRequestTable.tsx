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


// Define the status types and their corresponding styles
const statusStyles = {
  ACTIVE: "bg-green-100 text-green-600 hover:bg-green-100",
  BLOCKED: "bg-red-100 text-red-600 hover:bg-red-100",
};

type TRestaurantTableProps = {
  admins: {
    id: string;
    email: string;
    role: string;
    createdAt: string;
    status: keyof typeof statusStyles;
  }[];
  currentPage: number;
  itemsPerPage: number;
  openPagination: boolean;
};
export default function RestaurantRequestTable({
  admins,
  currentPage,
  itemsPerPage,
  openPagination,
}: TRestaurantTableProps) {
  console.log(10, admins);

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-105px)]"
      }`}
    >
      <div className="">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[200.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">
                Restaurant Name
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
            {admins.map((admin, index) => (
              <TableRow
                key={admin.id}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                KHANAS
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  jessica.hanson@example.com{" "}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">
                  Aspen Ridge, Colorado, USA Aspen Ridge, Color...
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                  <Link href={"/restaurants/details"}>
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
      </div>
    </div>
  );
}
