"use client";

import React from 'react';
import { Sun, Mail, Phone, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="flex items-center">
            <Sun className="h-6 w-6 mr-2" />
            About SolarisAI
          </h3>
          <p>Your intelligent AI assistant for optimizing solar energy systems and maximizing efficiency.</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a
                href="https://www.solarpowerworldonline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Energy Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.energy.gov/eere/solar/solar-energy-technologies-office"
                target="_blank"
                rel="noopener noreferrer"
              >
                U.S. Solar Initiatives
              </a>
            </li>
            <li>
              <a
                href="https://www.seia.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Industry Association
              </a>
            </li>
            <li>
              <a
                href="https://www.nrel.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Renewable Energy Lab
              </a>
            </li>
            <li>
              <a
                href="https://www.cleanenergycouncil.org.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clean Energy Council
              </a>
            </li>
          </ul>
        </div>

        <div id="contact" className="footer-section">
          <h3>Contact Us</h3>
          <p className="flex items-center mb-2">
            <Mail className="h-5 w-5 mr-2" />
            <span>contact@solarisai.com</span>
          </p>
          <p className="flex items-center mb-2">
            <Phone className="h-5 w-5 mr-2" />
            <span>9116839273</span>
          </p>
          <a href="mailto:aryankumawat423@gmail.com">
            <button className="btn-solar mt-4">Get in Touch</button>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 SolarisAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
