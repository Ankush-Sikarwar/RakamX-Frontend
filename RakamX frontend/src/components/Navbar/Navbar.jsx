import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { menuItems } from "../nav-menu-items/nav-menu-items";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  console.log("navbar rendered")
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between backdrop-blur-md px-4 md:px-8 py-4 bg-black">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-gray-50 font-semibold text-2xl">
        <a href="/" aria-label="RakamX Home" className="hover:text-blue-500 transition-colors duration-500">
          RakamX
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center ml-25">
        <Menu setActive={setActive}>
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} item={item.item} setActive={setActive} active={active}>
              {item.children?.map((child, cidx) => (
                <ProductItem
                  key={cidx}
                  src={child.src}
                  title={child.title}
                  description={child.description}
                  href={child.href}
                />
              ))}
            </MenuItem>
          ))}
        </Menu>
      </div>

   
      <div className="hidden md:flex items-center gap-4">
        <button className="rounded-full px-4 py-2 font-semibold border-2 border-transparent transition-all duration-500 text-gray-50 hover:bg-gray-50 hover:text-gray-900 hover:bg-clip-padding hover:bg-origin-border hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500">
          <a href="/login">Login</a>
        </button>
        <HoverBorderGradient as="button">
          <a href="/signup">Get Started</a>
        </HoverBorderGradient>
      </div>

   
      <button
        className="md:hidden text-gray-50"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

  
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full mt-1 bg-black text-gray-50 shadow-lg md:hidden">
        
          <div className="flex flex-col divide-y divide-gray-800">
            {menuItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActive(active === item.item ? null : item.item)}
                  className="w-full text-left px-6 py-4 grid font-semibold hover:bg-gray-800"
                >
                  {item.item}
                </button>
                {active === item.item && item.children && (
                  <div className="flex flex-col bg-gray-900">
                    {item.children.map((child, cidx) => (
                      <a
                        key={cidx}
                        href={child.href}
                        className="px-8 py-2 text-gray-300 hover:text-gray-50 hover:bg-gray-800 transition"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
   
            <div className="px-6 py-4 flex flex-col space-y-3 bg-gray-900">
              <a
                href="/login"
                className="block w-full text-center rounded-full px-4 py-2 font-semibold border-2 border-transparent hover:bg-gray-50 hover:text-gray-900 transition"
              >
                Login
              </a>
              
              <div>
                {mobileOpen? <a href="/signup" className=" block w-full text-center rounded-full px-4 py-2 font-semibold border-2 border-transparent hover:bg-gray-50 hover:text-gray-900 transition">
                  Get Started
                </a> : <HoverBorderGradient as="div" className="w-full">
                <a href="/signup" className="block w-full text-center px-4 py-2 font-semibold">
                  Get Started
                </a>
              </HoverBorderGradient> }
              
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar;