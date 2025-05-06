import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart } from "./LineChart";
import { Badge } from "@/components/ui/badge";
import { BsArrowUp } from "react-icons/bs";

const ChartOverview = ({data}: {data: {totalEarn: number, totalWorker: number, totalUser: number}}) => {
  return (
    <div className="grid gap-4 max-w-[100%] ">
      <Card className="col-span-4 border-[1px] border-[#74747480] shadow-none rounded-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-[15px] font-semibold border-b-2 border-[#91D160] pb-1 text-center text-[#91D160]">
              Total Earning
            </CardTitle>
            <div className="flex justify-between items-center gap-4 py-3">
              <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                ${data.totalEarn}
              </h3>
              {/*TODO: hidden */}
              <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1 hidden">
                <span className="pr-[2px]">
                  <BsArrowUp />
                </span>
                2.63%
              </Badge>
            </div>
          </div>
          {/*TODO: Button hidden */}
          <div className="items-center gap-2 hidden"> 
            <Select defaultValue="month">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pl-2">
          <LineChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartOverview;
