import ProfileOverview from "@/components/Dashboard/TeamManagement/ProfileOverview";
import DashboardContent from "@/components/shared/DashboardContent";

const MemberProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

 const { id } = await params;
 
  return (
    <DashboardContent>
      <div className="border-[1px] bg-[#D9D9D9]/20 border-[#D9D9D9] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto">
          <ProfileOverview profileId={id}/>
      </div>
    </DashboardContent>
  );
};

export default MemberProfilePage;
