import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut, User } from "lucide-react";

const UserMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold hover:text-gray">
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-navey border-gray text-white">
        <DropdownMenuItem className="hover:bg-white/10 p-2.5 rounded-md transition duration-300 ease-in-out">
          <Link className="flex items-center gap-2 " href="/user-profile">
            <User className="text-gray" size={20} />
            Your Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="transition duration-300 ease-in-out  bg-green-500 hover:bg-white/10 hover:text-gray gap-2"
          >
            <LogOut size={20} /> Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
