import TopNavbar from "../Dashboard/TopNavbar";

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen">
      <TopNavbar />
      <div
        className={`border-[#6b171717] pt-5 max-h-[calc(100vh-90px)] min-h-[calc(100vh-90px)] overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}