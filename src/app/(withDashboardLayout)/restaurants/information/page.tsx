import InformationOverview from "@/components/Dashboard/Restaurant/Information/InformationOverview";
import DetailsPageHeader from "@/components/Dashboard/Restaurant/RestaurantDetails/Header";
import DashboardContent from "@/components/shared/DashboardContent";

const RestaurantInformationPage = () => {
  return (
    <DashboardContent>
      <div className="border-[1px] bg-[#D9D9D9]/20 border-[#D9D9D9] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto">
        <DetailsPageHeader />
        <InformationOverview/>
      </div>
    </DashboardContent>
  );
};

export default RestaurantInformationPage;
