import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-82px)] mx-auto flex items-center justify-center bg-navey text-white gap-2">
      <Loader2 className="animate-spin" />
      Loading
    </div>
  );
};

export default Loading;
