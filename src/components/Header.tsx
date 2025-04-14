"use client";

import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import { HeaderChatbot } from './HeaderChatbot';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsChatOpen(true);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo flex items-center">
          <Sun className="h-8 w-8 mr-2 text-yellow-300" />
          <span>SolarisAI</span>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#" onClick={handleChatClick}>Chat</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>AI Chatbot Support</DialogTitle>
            <DialogDescription>
              Ask questions related to solar panel maintenance and performance.
            </DialogDescription>
          </DialogHeader>
          <HeaderChatbot />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;