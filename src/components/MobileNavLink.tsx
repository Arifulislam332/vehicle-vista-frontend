import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, User } from "lucide-react";

const MobileNavLink = () => {
  const { logout } = useAuth0();

  return (
    <div className="w-full h-full flex flex-col gap-3">
      <Link
        className="text-white flex items-center gap-2 hover:bg-white/10 p-2.5 rounded-md transition duration-300 ease-in-out"
        href="/user-profile"
      >
        <User className="text-gray" size={20} />
        Your Profile
      </Link>
      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="transition duration-300 ease-in-out flex-1 bg-green-500 hover:bg-white/10 hover:text-gray gap-2"
      >
        <LogOut size={20} /> Log Out
      </Button>
    </div>
  );
};

export default MobileNavLink;
