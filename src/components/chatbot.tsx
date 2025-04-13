"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I am your AI support. How can I help you?",
      sender: "ai",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, sender: "user" },
        {
          text: "This is a dummy response. Please implement the backend logic to provide meaningful answers.",
          sender: "ai",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="rounded-full p-2 shadow-md">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Open Chatbot</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>AI Chatbot Support</DialogTitle>
            <DialogDescription>
              Ask questions related to solar panel maintenance and performance.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[300px] overflow-y-auto mb-4 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-md ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground ml-auto w-fit"
                    : "bg-secondary text-secondary-foreground mr-auto w-fit"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
