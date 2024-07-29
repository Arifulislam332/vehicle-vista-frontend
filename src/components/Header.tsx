import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="border-b-2 border-b-gray bg-black h-[82px] flex items-center">
      <div className="text-white flex justify-between container mx-auto items-center">
        <Link href="/" className="text-2xl font-bold flex gap-2">
          Vehicle<span className="text-green-500">Vista</span>
        </Link>

        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
