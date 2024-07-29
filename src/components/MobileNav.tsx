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
          <Button
            variant="ghost"
            className="font-bold flex-1 gap-2 text-white hover:text-white hover:bg-white/10"
          >
            <LogIn className="text-gray" size={20} />
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
