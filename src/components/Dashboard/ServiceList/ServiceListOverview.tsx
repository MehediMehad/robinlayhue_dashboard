"use client"
import { useEffect, useState } from "react";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/profule-tab";
import ServiceListTable, { TBooking } from "./ServiceListTable";
import { useGetAllBookingQuery } from "@/Redux/Api/bookingApi";

const ServiceListOverview = () => {
  const [selectedTab, setSelectedTab] = useState<"PENDING" | "PROGRESSING" | "COMPLETED">("PENDING");
  const ITEMS_PER_PAGE = 11; // Number of items per page
  const MAX_VISIBLE_BTN = 5; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamically update queryParams based on selectedTab and currentPage
  const queryParams = [
    { name: "status", value: selectedTab },
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
  ];

  // Handle tab change
  const handleTabChange = (value: "PENDING" | "PROGRESSING" | "COMPLETED") => {
    setSelectedTab(value);
  };

  // Fetch data based on queryParams
  const { data: getResponse, isLoading, refetch } = useGetAllBookingQuery(queryParams);

  // Trigger a manual refetch when selectedTab or currentPage changes
  useEffect(() => {
    refetch();
  }, [selectedTab, currentPage, refetch]);

  if (isLoading) return <Loading />;

  const bookings: TBooking[] = Array.isArray(getResponse?.data) ? getResponse.data : [];
  
  const totalPages = getResponse?.meta?.totalPage ?? 0;
  

  const openPagination = Array.isArray(bookings) && bookings.length > 1 && totalPages > 1;
  

  return (
    <Tabs
      value={selectedTab} // Bind selectedTab to the active tab
      onValueChange={(value) => handleTabChange(value as "PENDING" | "PROGRESSING" | "COMPLETED")} // Update selectedTab when the tab changes
      className="w-full border border-[#D9D9D9] rounded-[4px] min-h-[calc(100vh-160px)] bg-white"
    >
      <div className="pt-4 pb-2">
        <TabsList className="flex items-center justify-center py-4 shadow-none border-none bg-[#fff]">
          <TabsTrigger
            value="PENDING"
            className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7] pb-1 text-center text-[#808080] rounded-sm px-10"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value="PROGRESSING"
            className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7] pb-1 text-center text-[#808080] rounded-sm px-10"
          >
            Progressing
          </TabsTrigger>
          <TabsTrigger
            value="COMPLETED"
            className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7] pb-1 text-center text-[#808080] rounded-sm px-10"
          >
            Complete
          </TabsTrigger>
        </TabsList>
      </div>
      

      <div className="flex w-full flex-col justify-between">
        {/* Pending Tab Content */}
        <TabsContent value="PENDING">
          <ServiceListTable
          selectedTab={selectedTab}
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

        {/* Progress Tab Content */}
        <TabsContent value="PROGRESSING">
          <ServiceListTable
          selectedTab={selectedTab}
            bookings={bookings ?? []}
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

        {/* Complete Tab Content */}
        <TabsContent value="COMPLETED">
          <ServiceListTable
          selectedTab={selectedTab}
            bookings={bookings ?? []}
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
      </div>
    </Tabs>
  );
};

export default ServiceListOverview;
