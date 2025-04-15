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

type TCustomerTableProps = {
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
export default function CustomerTable({
  admins,
  currentPage,
  itemsPerPage,
  openPagination,
}: TCustomerTableProps) {
  console.log(10, admins);

  return (
    <div
      className={`border-[#D9D9D9] bg-white ${
        openPagination ? "" : "min-h-[calc(100vh-105px)]"
      }`}
    >
      <div className="flex px-10 pb-4">
        <h1 className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#91D160] pb-1 text-center text-[#91D160] p-5">All Customer List</h1>
      </div>

      <div className="">
        <Table className="w-full">
          <TableHeader className="border-none" style={{ height: "60px" }}>
            <TableRow className="">
              <TableHead className="w-[300.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">Customer Name</TableHead>
              <TableHead className="w-[300.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">Email</TableHead>
              <TableHead className="w-[355.6666666666667px] text-[#262626] text-[16px] px-0 font-semibold">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {admins.map((admin, index) => (
              <TableRow
                key={admin.id}
                className="border-b h-12 hover:bg-[#414141]/5 duration-300"
              >
                <TableCell className="text-[#414141] text-[16px]  px-0">
                  {admin.role}
                </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">jessica.hanson@example.com </TableCell>
                <TableCell className="text-[#414141] text-[16px] px-0">Aspen Ridge, Colorado, USA Aspen Ridge, Color...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
