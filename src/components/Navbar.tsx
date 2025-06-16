
import React from "react";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

// Update menu to support react-router routes where needed
const menu = [
  { label: "Home", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { label: "Infografis", href: "/infografis" },
  { label: "Belanja", href: "/belanja" },
  { label: "Monitoring", href: "/monitoring" },
  { label: "PPID", href: "/ppid" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="w-full bg-white shadow z-20 fixed top-0 left-0">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-8 py-2">
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Logo */}
          <img
            src="/lovable-uploads/d6859c33-a797-4e12-8e49-00da0b8e3a15.png"
            alt="Logo Kelurahan Huangobotu"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            style={{ minWidth: 40 }}
            draggable={false}
          />
          {/* Judul */}
          <span className="font-black text-lg md:text-2xl text-red-700 whitespace-nowrap select-none">
            Kelurahan Huangobotu
          </span>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-3 md:space-x-6 font-medium text-sm md:text-base">
          {menu.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className={cn(
                    "text-gray-800 px-2 py-1 rounded transition-all hover:bg-red-50 hover:text-red-600",
                    (item.href === "/" 
                      ? location.pathname === "/" 
                      : location.pathname.startsWith(item.href)
                    )
                      ? "font-bold text-red-700"
                      : ""
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-800 px-2 py-1 rounded transition-all hover:bg-red-50 hover:text-red-600"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile: Dropdown hamburger */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="p-2 rounded-md border border-gray-200 bg-white hover:bg-red-50 transition-all flex items-center"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6 text-red-700" />
                <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2 w-48 rounded-md shadow-lg bg-white z-50">
              {menu.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <DropdownMenuItem asChild>
                    {item.href.startsWith("/") ? (
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-2 py-2 rounded text-gray-800 hover:bg-red-100 hover:text-red-700 w-full text-left",
                          (item.href === "/" 
                            ? location.pathname === "/" 
                            : location.pathname.startsWith(item.href)
                          )
                            ? "font-bold text-red-700"
                            : ""
                        )}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-2 py-2 rounded text-gray-800 hover:bg-red-100 hover:text-red-700 w-full text-left"
                      >
                        {item.label}
                      </a>
                    )}
                  </DropdownMenuItem>
                  {idx === 0 ? <DropdownMenuSeparator /> : null}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

