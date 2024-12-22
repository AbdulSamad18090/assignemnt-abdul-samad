import React, { useEffect, useState } from "react";
import {
  Home,
  Code2,
  Cloud,
  FileQuestion,
  Settings,
  Phone,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const SideNav = () => {
  const [hash, setHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#repositories", icon: <Home size={20} />, label: "Repositories" },
    { href: "#reviews", icon: <Code2 size={20} />, label: "AI Code Review" },
    { href: "#security", icon: <Cloud size={20} />, label: "Cloud Security" },
    {
      href: "#how-to-use",
      icon: <FileQuestion size={20} />,
      label: "How to Use",
    },
    { href: "#settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  useEffect(() => {
    const getHashFromURL = () => {
      const currentHash = window.location.hash;
      setHash(currentHash.replace("#", ""));
    };

    getHashFromURL();
    window.addEventListener("hashchange", getHashFromURL);

    return () => {
      window.removeEventListener("hashchange", getHashFromURL);
    };
  }, []);

  return (
    <div>
      {/* Small top bar for small screens */}
      <div className="md:hidden fixed top-0 z-50 w-full flex items-center justify-between gap-2 border-b p-3 text-xl text-gray-700 bg-white rounded-lg">
        <img src="/images/Frame 9.png" alt="logo" />
        {/* Toggle button - fixed to top */}
        <button
          className="text-2xl transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <LuMenu />}
        </button>
      </div>

      {/* Background Overlay (shown when sidebar is open on small screens) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)} // Close the sidebar when overlay is clicked
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed w-full md:w-64 h-2/3 md:h-screen overflow-y-auto custom-scrollbar bg-white p-4 pt-0 flex flex-col transition-all duration-300 z-20
          md:left-0 md:top-0 md:border-r border-b
          ${isOpen ? "top-0" : "-top-full"} 
          md:transform-none`}
      >
        {/* Logo and User Section */}
        <div className="static md:sticky top-0 z-10 bg-white md:pt-4 pt-20 border-b">
          <div className="hidden md:flex items-center justify-between gap-2 mb-6">
            <img src="/images/Frame 9.png" alt="logo" />
          </div>

          {/* User Selector */}
          <button className="w-full flex items-center justify-between p-2 mb-6 border-2 hover:bg-gray-100 rounded-lg">
            <span className="truncate">UtkarshDhairyaPa...</span>
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 min-h-32 overflow-y-auto custom-scrollbar">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-lg 
                  ${
                    hash === item.href.replace("#", "")
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="border-t pt-4 space-y-1">
          <a
            href="#support"
            className={`flex items-center gap-3 p-2 rounded-lg ${
              hash === "support"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Phone size={20} />
            <span>Support</span>
          </a>
          <button className="w-full flex items-center gap-3 p-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
