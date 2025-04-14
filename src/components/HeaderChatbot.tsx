"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// This is a modified version of the Chatbot component that doesn't include its own Dialog
// It's meant to be used within the Header component
export const HeaderChatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I am your AI support. How can I help you?",
      sender: "ai",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      setIsLoading(true);
      setMessages([...messages, { text: newMessage, sender: "user" }]); // Optimistic update
      setNewMessage("");
      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: newMessage }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to get chatbot response');
        }
        
        const result = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: result.response, sender: "ai" },
        ]);
      } catch (error) {
        console.error("Error getting chatbot response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, I encountered an error. Please try again.",
            sender: "ai",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
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
            if (e.key === "Enter" && !isLoading) {
              handleSendMessage();
            }
          }}
          disabled={isLoading}
        />
        <Button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>
    </>
  );
};