import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const DesktopNav = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={async () => loginWithRedirect()}
      variant="ghost"
      className="font-bold hover:bg-black hover:text-gray flex gap-2"
    >
      <LogIn className="text-gray" size={20} />
      Log In
    </Button>
  );
};

export default DesktopNav;
