"use client";
import { useState } from "react";
import { useGetAllAdminsQuery } from "@/Redux/Api/adminApi";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/profule-tab";
import ProfileTable from "./ProfileTable";

const MemberProfileTableOverview = () => {
  const ITEMS_PER_PAGE = 8; // Number of items per page
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
    <Tabs defaultValue="Pending" className="w-full  border-[#D9D9D9] rounded-[4px]">
      
      <div className="pt-4 pb-2">
      <TabsList className="flex items-center justify-center py-4 shadow-none border-none bg-[#F7F7F7]">
        <TabsTrigger value="Pending" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7]  pb-1 text-center text-[#808080] rounded-sm px-10">Pending</TabsTrigger>
        <TabsTrigger value="Complete" className="text-[15px] max-w-[197px] font-semibold bg-[#F7F7F7]  pb-1 text-center text-[#808080] rounded-sm px-10">Complete</TabsTrigger>
      </TabsList>
      </div>

      <TabsContent value="Pending" className="">
        <ProfileTable
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

      <TabsContent value="Complete" className="">
        <ProfileTable
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

export default MemberProfileTableOverview;

