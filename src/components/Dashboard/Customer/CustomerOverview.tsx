"use client";
import { useState } from "react";
import Loading from "@/components/utils/Loading";
import ReusablePagination from "@/components/utils/ReusablePagination";
import CustomerTable from "./CustomerTable";
import { useGetAllUsersQuery } from "@/Redux/Api/userApi";

const CustomerOverview = () => {
  const ITEMS_PER_PAGE = 11; // Number of items per page
  const MAX_VISIBLE_BTN = 5; // Maximum number of visible pagination buttons
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = [
    { name: "page", value: currentPage },
    { name: "limit", value: ITEMS_PER_PAGE },
  ];

  const { data: getUserResponse, isLoading } =
    useGetAllUsersQuery(queryParams);

    console.log({getUserResponse});
    

  if (isLoading) return <Loading />;

  const admins = Array.isArray(getUserResponse?.data)
    ? getUserResponse.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        location: user.location,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }))
    : [];
  
  const totalPages = getUserResponse?.meta?.totalPage ?? 0;
  const openPagination = Array.isArray(admins) && admins.length > 0 && totalPages > 1;
  return (
    <div className="w-full h-[82vh] bg-white border border-[#D9D9D9] rounded-[4px]">
      <div className="">
        <CustomerTable
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
      </div>

      {Array.isArray(admins) && admins.length === 0 && (
        <div className="text-center text-[#929292] text-[28px] py-12">
          Data Not Found
          <textarea></textarea>
        </div>
      )}
    </div>
  );
};

export default CustomerOverview;
