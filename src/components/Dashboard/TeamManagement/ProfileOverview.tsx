"use client"
import { useGetSingleWorkerQuery } from "@/Redux/Api/workerApi";
import MemberProfileHeader from "./MemberProfileHeader";
import MemberProfileTableOverview from "./MemberProfileTableOverview";
import Loading from "@/components/utils/Loading";

const ProfileOverview = ({profileId}: {profileId: string}) => {
  // Fetch the worker data using the query
  const { data: workerData, isLoading } = useGetSingleWorkerQuery(profileId); // Pass profileId to the query
  
  // Handle loading state
  if (isLoading) return <Loading/>



  return (
    <div>
      <MemberProfileHeader workerData={workerData} />
      <MemberProfileTableOverview profileId={profileId}/>
    </div>
  );
};

export default ProfileOverview;
