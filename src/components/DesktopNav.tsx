import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

const DesktopNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:bg-black hover:text-white flex gap-2"
    >
      <LogIn className="text-gray" size={20} />
      Log In
    </Button>
  );
};

export default DesktopNav;
