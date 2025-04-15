import ServiceNameCard from "./ServiceNameCard";

const AllServiceName = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
        {data.map((_, inx) => (
          <div key={inx} className="flex justify-center">
            <ServiceNameCard/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServiceName;


