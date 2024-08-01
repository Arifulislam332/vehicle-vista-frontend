import { useAuth0 } from "@auth0/auth0-react";
import { LogIn, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import MobileLink from "./MobileNavLink";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="hover:text-gray" />
      </SheetTrigger>
      <SheetContent className="bg-navey space-y-5 text-white">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="text-white">{user?.email}</span>
          ) : (
            <span className="text-white">Navigation</span>
          )}
        </SheetTitle>
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileLink />
          ) : (
            <Button
              onClick={async () => loginWithRedirect()}
              className="transition duration-300 ease-in-out flex-1 bg-green-500 hover:bg-white/10 hover:text-gray gap-2"
            >
              <LogIn size={20} />
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
