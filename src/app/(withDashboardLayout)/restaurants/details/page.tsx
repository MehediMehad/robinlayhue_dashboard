import AllMenuListSection from "@/components/Dashboard/Restaurant/RestaurantDetails/AllMenuListSection";
import DetailsPageHeader from "@/components/Dashboard/Restaurant/RestaurantDetails/Header";
import RatingsAndReviews from "@/components/Dashboard/Restaurant/RestaurantDetails/RatingsAndReviews";
import SpecialOfferSection from "@/components/Dashboard/Restaurant/RestaurantDetails/SpecialOfferSection";
import DashboardContent from "@/components/shared/DashboardContent";

const DetailsPage = () => {
  return (
    <DashboardContent>
      <div className="border-[1px] bg-[#D9D9D9]/20 border-[#D9D9D9] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto">
        <DetailsPageHeader />
        <main className="grid grid-rows-3 h-full px-2">
          <SpecialOfferSection/>
          <AllMenuListSection/>
          <RatingsAndReviews/>
          
        </main>
      </div>
    </DashboardContent>
  );
};

export default DetailsPage;
