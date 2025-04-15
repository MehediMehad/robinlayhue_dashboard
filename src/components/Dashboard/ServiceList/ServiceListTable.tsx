import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  
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
  export default function ServiceListTable({
    admins,
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
              {[1,,1,1,1,1,1,1,1,11,1,1,1,1,1,].map((admin, index) => (
                <TableRow
                  key={index}
                  className="border-b h-12 hover:bg-[#414141]/5 duration-300"
                >
                  <TableCell className="text-[#414141] text-[16px]  px-0">
                  KHANAS45
                  </TableCell>
                  <TableCell className="text-[#414141] text-[16px] px-0">
                  16 July 2023, 12:35 AM
                  </TableCell>
                  <TableCell className="text-[#414141] text-[16px] px-0">
                    Aspen Ridge, Colorado, USA ...
                  </TableCell>
                  <TableCell className="text-[#414141] text-[16px] flex items-center px-0">
                      <p className="px-4 py-1 text-[#FFC107] bg-[#F9F0D7] rounded-full">Pending</p>
                  </TableCell>
                  <TableCell className="text-[#414141] text-[16px] px-0">
                    <Button className="bg-[#91D160] hover:bg-[#7db850] h-7 py-2 px-4 border border-[#747474]">Assign Job </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  