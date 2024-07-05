import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      // emptyStateComponent={InfoCard}
      // showIngestForm={true}
      // showIntermediateStepsToggle={true}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "What are some ways of doing retrieval in LangChain.js?"'
      }
      // emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    />
  );
}
