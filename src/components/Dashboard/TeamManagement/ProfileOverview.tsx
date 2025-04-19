"use client"
import { useGetSingleWorkerQuery } from "@/Redux/Api/workerApi";
import MemberProfileHeader from "./MemberProfileHeader";
import MemberProfileTableOverview from "./MemberProfileTableOverview";

const ProfileOverview = ({profileId}: {profileId: string}) => {
  // Fetch the worker data using the query
  const { data: workerData, isLoading } = useGetSingleWorkerQuery(profileId); // Pass profileId to the query
  
  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  console.log(workerData);


  return (
    <div>
      <MemberProfileHeader workerData={workerData} />
      <MemberProfileTableOverview profileId={profileId}/>
    </div>
  );
};

export default ProfileOverview;
