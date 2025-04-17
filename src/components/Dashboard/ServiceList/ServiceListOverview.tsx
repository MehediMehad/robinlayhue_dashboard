"use client";
import { useState } from "react";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/profule-tab";
import ServiceListTable from "./ServiceListTable";
import { useGetAllBookingQuery } from "@/Redux/Api/bookingApi";

const ServiceListOverview = () => {
  const ITEMS_PER_PAGE = 11; // Number of items per page
  const MAX_VISIBLE_BTN = 5; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
  ];
  // const { data: getServiceResponse, isLoading: servicesLoading } =
  // useGetAllServiceQuery(undefined);
  // console.log(getServiceResponse, servicesLoading);
  


  const { data: getResponse, isLoading } =
    useGetAllBookingQuery(queryParams); // 

    

    
  if (isLoading) return <Loading />;

  const bookings = getResponse?.data
  
  
  const totalPages = getResponse?.meta?.totalPage ?? 0;

  const openPagination = Array.isArray(bookings) && bookings.length > 1 && totalPages > 1;
  return (
    <Tabs defaultValue="Pending" className="w-full border border-[#D9D9D9] rounded-[4px] min-h-[calc(100vh-160px)] bg-white">
      
      <div className="pt-4 pb-2">
      <TabsList className="flex items-center justify-center py-4 shadow-none border-none bg-[#fff]">
        <TabsTrigger value="Pending" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7]  pb-1 text-center text-[#808080] rounded-sm px-10">Pending</TabsTrigger>
        <TabsTrigger value="Progress" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7]  pb-1 text-center text-[#808080] rounded-sm px-10">Progress</TabsTrigger>
        <TabsTrigger value="Complete" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7]  pb-1 text-center text-[#808080] rounded-sm px-10">Complete</TabsTrigger>
      </TabsList>
      </div>

      <div className="flex w-full flex-col justify-between">
      <TabsContent value="Pending" className="">
        <ServiceListTable
          bookings={bookings}
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

      <TabsContent value="Progress" className="">
        <ServiceListTable
          bookings={bookings}
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
      <TabsContent value="Complete" className="">
        <ServiceListTable
          bookings={bookings}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          openPagination={openPagination}
        />

        {/* Pagination */}
        <div className="">
        {openPagination && (
          <ReusablePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            maxVisiblePages={MAX_VISIBLE_BTN}
          />
        )}
        </div>
      </TabsContent>
      </div>

      {/* {bookings.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12">
          Data Not Found
        </div>
      )} */}
    </Tabs>
  );
};

export default ServiceListOverview;

