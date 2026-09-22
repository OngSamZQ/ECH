import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/optimized/logo_ech-160.webp";
import { navItems } from "../constants";

const projectLinks = [
  { href: "/project#MainCon", label: "Main Contractor" },
  { href: "/project#Tiling", label: "Tiling" },
  { href: "/project#Plumbing", label: "Plumbing & Sanitary" },
  { href: "/project#MinorSewer", label: "Minor Sewer" },
];

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownButton = useRef(null);
  const mobileButton = useRef(null);
  const mobileDropdownButton = useRef(null);
  const location = useLocation();

  const closeMenus = () => {
    setMobileDrawerOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  useEffect(closeMenus, [location.key]);

  useEffect(() => {
    const updateHeight = () => {
      document.documentElement.style.setProperty("--nav-height", navRef.current.offsetHeight + "px");
    };
    const observer = new ResizeObserver(updateHeight);
    observer.observe(navRef.current);
    updateHeight();
    const clickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setDropdownOpen(false);
      if (!navRef.current?.contains(event.target)) {
        setMobileDrawerOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("pointerdown", clickOutside);
    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", clickOutside);
      document.documentElement.style.removeProperty("--nav-height");
    };
  }, []);

  const handleEscape = (event) => {
    if (event.key !== "Escape") return;
    if (mobileDropdownOpen) {
      setMobileDropdownOpen(false);
      mobileDropdownButton.current?.focus();
    } else if (mobileDrawerOpen) {
      setMobileDrawerOpen(false);
      mobileButton.current?.focus();
    } else if (dropdownOpen) {
      setDropdownOpen(false);
      dropdownButton.current?.focus();
    }
  };

  return (
    <nav ref={navRef} aria-label="Main navigation" onKeyDown={handleEscape}
      className="sticky top-0 z-50 py-3 bg-white/95 backdrop-blur-lg"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeMenus(); }}>
      <a href="#main-content" onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById("main-content");
        main.focus();
        main.scrollIntoView();
      }} className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-3 focus:z-50">Skip to content</a>
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center gap-3">
          <Link to="/" aria-label="Eng Chin Hang home" className="flex items-center min-w-0" onClick={closeMenus}>
            <img className="h-[69px] w-[69px] mr-2 shrink-0" src={logo} width="160" height="162" alt="" />
            <div className="min-w-0 tracking-tight text-[#6C2E93]">
              <p lang="zh" className="text-base sm:text-2xl">永進行(號)建築私人有限公司</p>
              <p className="text-xs sm:text-base text-black">ENG CHIN HANG CONSTRUCTION PTE LTD</p>
            </div>
          </Link>
          <ul className="hidden lg:flex font-bold text-xl gap-8 shrink-0 text-[#6C2E93]">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.label === "Projects" ? (
                  <div ref={dropdownRef}>
                    <button ref={dropdownButton} type="button" onClick={() => setDropdownOpen((value) => !value)}
                      aria-expanded={dropdownOpen} aria-controls="desktop-projects" className="hover:underline">Projects</button>
                    <ul id="desktop-projects" hidden={!dropdownOpen} className="absolute right-0 mt-2 bg-white shadow-lg rounded-md">
                      {projectLinks.map((project) => (
                        <li key={project.href}><Link to={project.href} onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">{project.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ) : <Link to={item.href} onClick={closeMenus} className="hover:underline">{item.label}</Link>}
              </li>
            ))}
          </ul>
          <button ref={mobileButton} type="button" className="lg:hidden shrink-0 p-2 text-[#6C2E93]"
            aria-label={mobileDrawerOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileDrawerOpen} aria-controls="mobile-navigation"
            onClick={() => { setMobileDrawerOpen((value) => !value); setMobileDropdownOpen(false); }}>
            {mobileDrawerOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <div id="mobile-navigation" hidden={!mobileDrawerOpen}
          className="absolute top-full left-0 right-0 z-20 p-6 lg:hidden bg-[#6C2E93] text-white max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="py-3">
                {item.label === "Projects" ? (
                  <>
                    <button ref={mobileDropdownButton} type="button" aria-expanded={mobileDropdownOpen}
                      aria-controls="mobile-projects" onClick={() => setMobileDropdownOpen((value) => !value)}>Projects</button>
                    <ul id="mobile-projects" hidden={!mobileDropdownOpen} className="mt-2 bg-purple-800 p-2 rounded-md">
                      {projectLinks.map((project) => (
                        <li key={project.href}><Link to={project.href} onClick={closeMenus} className="block px-4 py-2 hover:bg-purple-600">{project.label}</Link></li>
                      ))}
                    </ul>
                  </>
                ) : <Link to={item.href} onClick={closeMenus}>{item.label}</Link>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
