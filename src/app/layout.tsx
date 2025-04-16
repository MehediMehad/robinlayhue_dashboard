import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/Redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
// import ReduxProvider from "@/components/Redux/ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="relative">
        <ReduxProvider>
          {
            children
          }
        </ReduxProvider>
        <ToastContainer/>
        </div>
      </body>
    </html>
  );
}
