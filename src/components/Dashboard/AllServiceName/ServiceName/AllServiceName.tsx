import ServiceNameCard from "./ServiceNameCard";
import { useGetAllServiceQuery } from "@/Redux/Api/serviceApi";
import Loading from "@/components/utils/Loading";

const AllServiceName = () => {

  const { data: getUserResponse, isLoading } =
  useGetAllServiceQuery(undefined);
  if (isLoading) return <Loading />;

  const services = Array.isArray(getUserResponse?.data) ? getUserResponse.data : [];

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
        {services?.map((service) => (
          <div key={service.id} className="flex justify-center">
            <ServiceNameCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServiceName;


