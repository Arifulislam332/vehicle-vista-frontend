import { LogIn, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-navey space-y-5">
        <SheetTitle className="text-white">Navigation</SheetTitle>
        <SheetDescription className="flex">
          <Button className="transition duration-300 ease-in-out flex-1 bg-green-500 hover:bg-white/10 gap-2 tran">
            <LogIn className="" size={20} />
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
