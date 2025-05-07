import { useEffect, useState } from "react";
import ServiceNameCard, { TService } from "./ServiceNameCard";
import { useGetAllServiceQuery } from "@/Redux/Api/serviceApi";
import Loading from "@/components/utils/Loading";

const AllServiceName = () => {
  const { data: getUserResponse, isLoading } = useGetAllServiceQuery(undefined);

  const [services, setServices] = useState<TService[]>([]);

  useEffect(() => {
    if (Array.isArray(getUserResponse?.data)) {
      setServices(getUserResponse.data);
    }
  }, [getUserResponse]);

  // ✅ Function to update a single service in the list
  const handleServiceUpdate = (updatedService: TService) => {
    setServices((prev) =>
      prev.map((s) => (s.id === updatedService.id ? updatedService : s))
    );
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
        {services?.map((service) => (
          <div key={service.id} className="flex justify-center">
            {/* 🟡 Pass onUpdate prop to ServiceNameCard */}
            <ServiceNameCard
              service={service}
              onUpdate={handleServiceUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServiceName;



