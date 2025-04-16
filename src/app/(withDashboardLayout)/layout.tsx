import Navbar from "@/components/Navbar/Navbar";
import ReduxProvider from "@/Redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto">
<ReduxProvider>
      <div className="flex max-w-[1440px] mx-auto">
        <Navbar />
        <div
          className="w-full overflow-y-auto "
          // style={{ height: "calc(100vh - 64px)" }}
        >
          <>{children}</>
          <ToastContainer />
        </div>
      </div>
      </ReduxProvider>
    </main>
  );
}


