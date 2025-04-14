import { Card, CardContent } from "@/components/ui/card";

import { CiMoneyCheck1 } from "react-icons/ci";
import DashboardContent from "@/components/shared/DashboardContent";
import { BsArrowUp } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import ChartOverview from "@/components/Dashboard/Dashboard/ChartOverview";

export default function DashboardPage() {
  return (
    <>
      <DashboardContent>
        <div className="flex w-full flex-col border-[1px] border-[#747474] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-y-auto">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-5 md:p-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <Card className="shadow-none border-[#74747480]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col justify-between w-full space-y-2">
                      <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
                        <CiMoneyCheck1 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-[#808080] text-[1rem]">
                        Total Earning
                      </p>
                      <div className="flex justify-between items-baseline gap-1">
                        <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                          $1,245
                        </h3>
                        <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1">
                          <span className="pr-[2px]">
                            <BsArrowUp />
                          </span>
                          2.63%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none border-[#74747480]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col justify-between w-full space-y-2">
                      <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
                        <CiMoneyCheck1 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-[#808080] text-[1rem]">
                        Total Earning
                      </p>
                      <div className="flex justify-between items-baseline gap-1">
                        <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                          $1,245
                        </h3>
                        {/* <p className="rounded-md flex gap-1 items-center justify-center text-[14px] border border-[#023621] bg-[#E9FFEC] p-[1px] font-semibold text-green-800">
                          <span><BsArrowUp/></span>
                          2.63%
                        </p> */}
                        <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1">
                          <span className="pr-[2px]">
                            <BsArrowUp />
                          </span>
                          2.63%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none border-[#74747480]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col justify-between w-full space-y-2">
                      <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
                        <CiMoneyCheck1 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-[#808080] text-[1rem]">
                        Total Earning
                      </p>
                      <div className="flex justify-between items-baseline gap-1">
                        <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                          $1,245
                        </h3>
                        {/* <p className="rounded-md flex gap-1 items-center justify-center text-[14px] border border-[#023621] bg-[#E9FFEC] p-[1px] font-semibold text-green-800">
                          <span><BsArrowUp/></span>
                          2.63%
                        </p> */}
                        <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1">
                          <span className="pr-[2px]">
                            <BsArrowUp />
                          </span>
                          2.63%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none border-[#74747480]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col justify-between w-full space-y-2">
                      <div className="h-11 w-11 p-1 border rounded-full border-[#D9D9D9] flex items-center justify-center">
                        <CiMoneyCheck1 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-[#808080] text-[1rem]">
                        Total Earning
                      </p>
                      <div className="flex justify-between items-baseline gap-1">
                        <h3 className="text-4xl font-bold leading-[100%] tracking-[-3%]">
                          $1,245
                        </h3>
                        {/* <p className="rounded-md flex gap-1 items-center justify-center text-[14px] border border-[#023621] bg-[#E9FFEC] p-[1px] font-semibold text-green-800">
                          <span><BsArrowUp/></span>
                          2.63%
                        </p> */}
                        <Badge className="bg-[#E9FFEC] text-[#023621] shadow-none border-[1px] border-[#023621] hover:bg-[#E9FFEC] px-1">
                          <span className="pr-[2px]">
                            <BsArrowUp />
                          </span>
                          2.63%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
            <ChartOverview/>
          </main>
        </div>
      </DashboardContent>
    </>
  );
}
