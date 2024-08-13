import Link from "next/link";
import { Button } from "./ui/button";

const CustomError = ({ message }: { message: string }) => {
  return (
    <div className="h-[calc(100vh-82px)] mx-auto flex flex-col items-center justify-center bg-navey gap-5">
      <h2 className="text-white font-bold">{message}. Please try again</h2>
      <Link href="/">
        <Button className="transition duration-300 ease-in-out bg-green-500 hover:bg-white/10 hover:text-gray gap-2">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default CustomError;
