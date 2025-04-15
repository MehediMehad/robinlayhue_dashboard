import MemberProfileHeader from "@/components/Dashboard/TeamManagement/MemberProfileHeader";
import MemberProfileTableOverview from "@/components/Dashboard/TeamManagement/MemberProfileTableOverview";
import DashboardContent from "@/components/shared/DashboardContent";

const MemberProfilePage = () => {
  return (
    <DashboardContent>
      <div className="border-[1px] bg-[#D9D9D9]/20 border-[#D9D9D9] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto">
        <MemberProfileHeader />
        <MemberProfileTableOverview/>
      </div>
    </DashboardContent>
  );
};

export default MemberProfilePage;
