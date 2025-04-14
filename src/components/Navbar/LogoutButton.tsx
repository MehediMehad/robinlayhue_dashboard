import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Cookies from "js-cookie";
import { AppDispatch } from "@/Redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { logout } from "@/Redux/ReduxFunction";
interface LogoutButtonProps {
    isOpen: boolean;
  }
  
export function LogoutButton({isOpen}: LogoutButtonProps) {
    const dispatch = useDispatch<AppDispatch>();

    const route = useRouter();

    const handleLogOut = () => {
      dispatch(logout());
      Cookies.remove("accessToken");
      route.push("/login");
    };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={`elative flex items-center w-full h-11 font-semibold pr-6 py-[10px] pl-[24px] text-lg group transition-all my-3 duration-300 hover:bg-[#c04f4f1a]  ${
            isOpen ? "" : "justify-center"
          }`}
        >
          <MdLogout
            size={22}
            className="text-[#DE2100] group-hover:text-red-600 duration-300 rotate-180"
          />
          {isOpen && (
            <span className="ml-3 text-[18px] text-[#DE2100] group-hover:text-red-600  tracking-wide truncate ">
              Log Out
            </span>
          )}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Log Out
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="
            flex justify-center items-center px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-600 rounded-md"
          >Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="
            flex justify-end items-center px-4 py-3 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md"
            onClick={handleLogOut}
          >
            Yes, log out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
