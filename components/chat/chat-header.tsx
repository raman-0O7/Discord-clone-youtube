import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";

interface ChatHeaderProps {
  serverId : string;
  name : string;
  type: "conversation" | "channel";
  imageUrl? : string;
}

export const ChatHeader = ({
  serverId,
  name,
  imageUrl,
  type
} : ChatHeaderProps) => {
  return (
    <div className="flex items-center text-md font-semibold px-3 h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId}/>
      {type === "channel" && (
        <Hash 
          className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"
        />
      )}
      <p className="font-semibold text-black text-md dark:text-white">
        {name}
      </p>
      </div>
  )
}