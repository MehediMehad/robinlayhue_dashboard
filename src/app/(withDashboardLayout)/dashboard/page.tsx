import DashboardOverview from "@/components/Dashboard/Dashboard/DashboardOverview";
import DashboardContent from "@/components/shared/DashboardContent";

export default function DashboardPage() {
  return (
    <>
      <DashboardContent>
        <div className="flex w-full flex-col border-[1px] border-[#747474] rounded-sm max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-y-auto">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-5 md:p-5">
            <DashboardOverview/>
          </main>
        </div>
      </DashboardContent>
    </>
  );
}
