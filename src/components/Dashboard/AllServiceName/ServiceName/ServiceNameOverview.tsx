"use client";
import { useGetAllAdminsQuery } from "@/Redux/Api/adminApi";
import Loading from "@/components/utils/Loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllServiceName from "./AllServiceName";
import CreateService from "../CreateService/CreateService";
// import { CreateService } from "../CreateService/CreateService";

const RestaurantOverview = () => {
  const ITEMS_PER_PAGE = 11; // Number of items per page

  const queryParams = [
    { name: "limit", value: ITEMS_PER_PAGE },
  ];

  const { data: getUserResponse, isLoading } =
    useGetAllAdminsQuery(queryParams);

  if (isLoading) return <Loading />;

  const admins = getUserResponse?.data ?? [];
  return (
    <Tabs
      defaultValue="All Service Name"
      className="w-full h-[82vh] bg-white border border-[#D9D9D9] overflow-y-scroll rounded-[4px]"
    >
      <div className="pt-4 pb-2">
        <TabsList className="px-5 py-4 bg-white shadow-none border-none">
          <TabsTrigger
            value="All Service Name"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            All Service Name
          </TabsTrigger>
          <TabsTrigger
            value="Create Service"
            className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10"
          >
            Create Service
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="All Service Name">
        <AllServiceName />
      </TabsContent>

      <TabsContent value="Create Service">
        <CreateService />
      </TabsContent>

      {admins.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12">
          Data Not Found
        </div>
      )}
    </Tabs>
  );
};

export default RestaurantOverview;
