// import { User2 } from "lucide-react";
import { FaRegUser } from "react-icons/fa";

import Image from "next/image";

export default function ChatAvatar({ role }: { role: string }) {
  if (role === "user") {
    return (
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        <FaRegUser className="h-4 w-4 text-black" />
      </div>
    );
  }

  return (
    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow">
      <Image
        className="rounded-md"
        src="/logo2.png"
        alt="Llama Logo"
        width={24}
        height={24}
        priority
      />
    </div>
  );
}
