import { useGetMeQuery } from "@/Redux/Api/userApi";
import LoadingSkeleton from "./utils/LoadingSkeleton";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import supperAdminPic from "@/assests/suuperadmin.png";


const UserInfoCard = () => {
    const { data: userInfo, isLoading } = useGetMeQuery(undefined);

  return (
    <div>
              {isLoading ? (
          <LoadingSkeleton/>
        ) : (
          <Link
            href={"/profile"}
            className="flex items-center gap-2 mr-2 cursor-pointer"
          >
            <Avatar className="h-9 w-9 border">
              <AvatarImage
                src={
                  userInfo?.data?.profileImage !== ""
                    ? supperAdminPic.src
                    : userInfo?.data?.profileImage
                }
              />
              <AvatarFallback>Default</AvatarFallback>
            </Avatar>
            <div className="text-xs">
              <p className="font-medium">{userInfo.data.name}</p>
              <p className="text-muted-foreground">{userInfo.data.role}</p>
            </div>
          </Link>
        )}
    </div>
  );
};

export default UserInfoCard;