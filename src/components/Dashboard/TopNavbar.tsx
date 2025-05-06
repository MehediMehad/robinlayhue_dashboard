import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopNavbar = () => {
  return (
    <div className="mx-auto">
      <header className="flex min-h-[90px] max-h-[90px] items-center justify-end border-b border-[#74747480] ">
        {/* Profile Details */}
        <div className="flex items-center gap-2 mr-2 cursor-pointer px-5 max-h-11">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Default</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="font-bold text-4 text-primary">Admin</p>
            <p className="text-muted-foreground text-[#747474]">Admin</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNavbar;
