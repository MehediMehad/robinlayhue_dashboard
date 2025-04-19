"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/profule-tab";
import ProfileTable from "./ProfileTable";
import { useGetSingleWorkerMetaQuery } from "@/Redux/Api/workerApi";

const MemberProfileTableOverview = ({ profileId }: { profileId: string }) => {
  const [selectedTab, setSelectedTab] = useState<"PROGRESSING" | "COMPLETED">("PROGRESSING");
  const ITEMS_PER_PAGE = 8; // Number of items per page
  const MAX_VISIBLE_BTN = 5; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamically update queryParams based on selectedTab and currentPage
  const queryParams = [
    { name: "status", value: selectedTab },
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
  ];

  // Handle tab change
  const handleTabChange = (value: string) => {
    setSelectedTab(value as "PROGRESSING" | "COMPLETED");
  };

  // Fetch data based on queryParams
  const { data: getResponse, isLoading, refetch } = useGetSingleWorkerMetaQuery({
    profileId,  // Pass profileId
    queryParams // Pass queryParams for status, pagination
  });

  // Trigger a manual refetch when selectedTab or currentPage changes
  useEffect(() => {
    refetch();
  }, [selectedTab, currentPage, refetch]);

  if (isLoading) return <Loading />;

  const bookings: any[] = Array.isArray(getResponse?.data) ? getResponse.data : [];
  const totalPages = getResponse?.meta?.totalPage ?? 0;
  const openPagination = Array.isArray(bookings) && bookings.length > 0 && totalPages > 1;

  return (
    <Tabs
      value={selectedTab} // Bind selectedTab to Tabs value
      onValueChange={handleTabChange} // Change selectedTab on tab switch
      className="w-full border bg-white  border-[#D9D9D9] rounded-[4px]"
    >
      <div className="pt-4 pb-2">
        <TabsList className="flex items-center justify-center py-4 shadow-none border-none bg-[#fff]">
          <TabsTrigger value="PROGRESSING" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7] pb-1 text-center text-[#808080] rounded-sm px-10">
            Progressing
          </TabsTrigger>
          <TabsTrigger value="COMPLETED" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7] pb-1 text-center text-[#808080] rounded-sm px-10">
            Completed
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="PROGRESSING">
        <ProfileTable
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

      <TabsContent value="COMPLETED">
        <ProfileTable
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

      {/* {bookings.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12">
          Data Not Found
        </div>
      )} */}
    </Tabs>
  );
};

export default MemberProfileTableOverview;


