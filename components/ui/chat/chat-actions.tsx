import { FaRegCirclePause } from "react-icons/fa6";
import { IoRefresh } from "react-icons/io5";


import { Button } from "../button";
import { ChatHandler } from "./chat.interface";

export default function ChatActions(
  props: Pick<ChatHandler, "stop" | "reload"> & {
    showReload?: boolean;
    showStop?: boolean;
  },
) {
  return (
    <div className="space-x-4">
      {props.showStop && (
        <Button variant="outline" size="sm" onClick={props.stop} className="text-black hover:bg-[#f0f0f0]">
          <FaRegCirclePause className="mr-2 h-4 w-4" />
          Stop generating
        </Button>
      )}
      {props.showReload && (
        <Button variant="outline" size="sm" onClick={props.reload} className="text-black hover:bg-[#f0f0f0]">
          <IoRefresh className="mr-2 h-4 w-4" />
          Regenerate
        </Button>
      )}
    </div>
  );
}
