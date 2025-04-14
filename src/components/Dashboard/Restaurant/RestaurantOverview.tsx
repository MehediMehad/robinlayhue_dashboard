"use client";
import { useState } from "react";
import { useGetAllAdminsQuery } from "@/Redux/Api/adminApi";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import RestaurantTable from "./RestaurantTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantRequestTable from "./RestaurantRequestTable";

const RestaurantOverview = () => {
  const ITEMS_PER_PAGE = 11; // Number of items per page
  const MAX_VISIBLE_BTN = 5; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
  ];

  const { data: getUserResponse, isLoading } =
    useGetAllAdminsQuery(queryParams);

  if (isLoading) return <Loading />;

  const admins = getUserResponse?.data ?? [];
  const totalPages = getUserResponse?.meta?.totalPage ?? 0;
  const openPagination = admins.length > 0 && totalPages > 1;
  return (
    <Tabs defaultValue="restaurant" className="w-full h-[82vh] bg-white border border-[#D9D9D9] rounded-[4px]">
      
      <div className="pt-4 pb-2">
      <TabsList className="px-10 py-4 bg-white shadow-none border-none">
        {/* <h1 className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#023621] pb-1 text-center text-[#023621] p-5">
          Restaurant List
        </h1> */}
        <TabsTrigger value="restaurant" className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10">Restaurant List</TabsTrigger>
        <TabsTrigger value="request" className="text-[15px] max-w-[197px] font-semibold border-b-2 border-[#808080] pb-1 text-center text-[#808080] rounded-none px-10">Join Request</TabsTrigger>
      </TabsList>
      </div>

      <TabsContent value="restaurant" className="">
        <RestaurantTable
          admins={admins}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          openPagination={openPagination}
        />

        {/* Pagination */}
        {openPagination && (
          <ReusablePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            maxVisiblePages={MAX_VISIBLE_BTN}
          />
        )}
      </TabsContent>

      <TabsContent value="request" className="">
        <RestaurantRequestTable
          admins={admins}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          openPagination={openPagination}
        />

        {/* Pagination */}
        {openPagination && (
          <ReusablePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            maxVisiblePages={MAX_VISIBLE_BTN}
          />
        )}
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
