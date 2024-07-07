// import { ChevronDown, ChevronRight, Loader2 } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

import { useState } from "react";
import { Button } from "../../button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../collapsible";
import { EventData } from "../index";

export function ChatEvents({
  data,
  isLoading,
}: {
  data: EventData[];
  isLoading: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonLabel = isOpen ? "Hide events" : "Show events";

  const EventIcon = isOpen ? (
    <FaChevronDown className="h-4 w-4" />
  ) : (
    <FaChevronRight className="h-4 w-4" />
  );

  return (
    <div className="border-l-2 border-indigo-400 pl-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="secondary" className="space-x-2">
            {isLoading ? <LuLoader2 className="h-4 w-4 animate-spin" /> : null}
            <span>{buttonLabel}</span>
            {EventIcon}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent asChild>
          <div className="mt-4 text-sm space-y-2">
            {data.map((eventItem, index) => (
              <div className="whitespace-break-spaces" key={index}>
                {eventItem.title}
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
