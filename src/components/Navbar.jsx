import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo_ech.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile dropdown
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-w border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-[69px] w-[69px] mr-2" src={logo} alt="Logo" />
            <span className="tracking-tight" style={{ color: "#6C2E93" }}>
              <div>
                <p className="text-2xl line-clamp-1">永進行(號)建築私人有限公司</p>
                <p className="text-base text-black line-clamp-1">
                  ENG CHIN HANG CONSTRUCTION PTE LTD
                </p>
              </div>
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex font-bold text-xl ml-14 space-x-16" style={{ color: "#6C2E93" }}>
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                {item.label === "Projects" ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={toggleDropdown}
                      className="hover:border-b-2 hover:border-yellow-500 transition duration-300"
                    >
                      {item.label}
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                        <ul>
                          <li>
                            <Link
                              to="/project#MainCon"
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={closeDropdown}
                            >
                              Main Contractor
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/project#Tiling"
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={closeDropdown}
                            >
                              Tiling
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/project#Plumbing"
                              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                              onClick={closeDropdown}
                            >
                              Plumbing & Sanitary
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/project#MinorSewer"
                              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                              onClick={closeDropdown}
                            >
                              Minor Sewer
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="hover:border-b-2 hover:border-yellow-500 transition duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end" style={{ color: "#6C2E93" }}>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden" style={{ backgroundColor: "#6C2E93" }}>
            <ul style={{ color: "white" }}>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.label === "Projects" ? (
                    <>
                      <button
                        onClick={toggleMobileDropdown}
                        className="hover:border-b-2 hover:border-yellow-500 transition duration-300"
                      >
                        {item.label}
                      </button>
                      {mobileDropdownOpen && (
                        <ul className="mt-2 bg-purple-800 p-2 rounded-md">
                          <li>
                            <Link
                              to="/project#MainCon"
                              className="block px-4 py-2 hover:bg-purple-600"
                              onClick={() => {
                                setMobileDropdownOpen(false);
                                closeNavbar();
                              }}
                            >
                              Main Contractor
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/project#Tiling"
                              className="block px-4 py-2 hover:bg-purple-600"
                              onClick={() => {
                                setMobileDropdownOpen(false);
                                closeNavbar();
                              }}
                            >
                              Tiling
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/project#Plumbing"
                              className="block px-4 py-2 hover:bg-purple-600"
                              onClick={() => {
                                setMobileDropdownOpen(false);
                                closeNavbar();
                              }}
                            >
                              Plumbing & Sanitary
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/project#MinorSewer"
                              className="block px-4 py-2 hover:bg-purple-600"
                              onClick={() => {
                                setMobileDropdownOpen(false);
                                closeNavbar();
                              }}
                            >
                              Minor Sewer
                            </Link>
                          </li>

                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:border-b-2 hover:border-yellow-500 transition duration-300"
                      onClick={closeNavbar}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;






