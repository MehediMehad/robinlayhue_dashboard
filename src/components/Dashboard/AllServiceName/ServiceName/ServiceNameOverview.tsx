"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllServiceName from "./AllServiceName";
import CreateService from "../CreateService/CreateService";

const RestaurantOverview = () => {
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
    </Tabs>
  );
};

export default RestaurantOverview;
