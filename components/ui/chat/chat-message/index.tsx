// import { Check, Copy } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { Message } from "ai";
import { Fragment } from "react";
import { Button } from "../../button";
import { useCopyToClipboard } from "../hooks/use-copy-to-clipboard";

import ChatAvatar from "./chat-avatar";

import Markdown from "./markdown";

type ContentDisplayConfig = {
  order: number;
  component: JSX.Element | null;
};

function ChatMessageContent({
  message,
  isLoading,
}: {
  message: Message;
  isLoading: boolean;
}) {
  const contents: ContentDisplayConfig[] = [
    {
      order: 0,
      component: <Markdown content={message.content} />,
    },
  ];

  return (
    <div className="flex-1 gap-4 flex flex-col">
      {contents
        .sort((a, b) => a.order - b.order)
        .map((content, index) => (
          <Fragment key={index}>{content.component}</Fragment>
        ))}
    </div>
  );
}

export default function ChatMessage({
  chatMessage,
  isLoading,
}: {
  chatMessage: Message;
  isLoading: boolean;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  return (
    <div className="flex items-start gap-2 pt-5">
      <ChatAvatar role={chatMessage.role} />
      <div className="group flex flex-1 justify-between text-black px-2">
        <ChatMessageContent message={chatMessage} isLoading={isLoading} />
        <Button
          onClick={() => copyToClipboard(chatMessage.content)}
          size="icon"
          variant="ghost"
          className="h-8 w-8 opacity-0 group-hover:opacity-100 text-black hover:bg-[#f0f0f0]"
        >
          {isCopied ? (
            <FaCheck className="h-4 w-4" />
          ) : (
            <GoCopy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
