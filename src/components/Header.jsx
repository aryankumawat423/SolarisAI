"use client";

import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { HeaderChatbot } from './HeaderChatbot';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Effect to handle hash navigation after page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === '#contact') {
      // Small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [pathname]); // Re-run when pathname changes

  const handleChatClick = (e) => {
    e.preventDefault();
    setIsChatOpen(true);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    
    // If we're already on the home page
    if (pathname === '/') {
      // Find the contact section in the footer
      const contactSection = document.getElementById('contact');
      
      if (contactSection) {
        // Scroll to the contact section smoothly
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on a different page, navigate to the home page with the contact hash
      router.push('/#contact');
    }
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
          <a href="#" onClick={handleContactClick}>Contact</a>
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