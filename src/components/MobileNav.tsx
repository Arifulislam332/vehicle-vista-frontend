import { LogIn, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-navey space-y-5">
        <SheetTitle className="text-white">Navigation</SheetTitle>
        <SheetDescription className="flex">
          <Button
            onClick={async () => loginWithRedirect()}
            className="transition duration-300 ease-in-out flex-1 bg-green-500 hover:bg-white/10 hover:text-gray gap-2 tran"
          >
            <LogIn size={20} />
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
