import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 transition font-medium ${
      isActive
        ? "bg-white text-slate-950 shadow-sm shadow-slate-950/10"
        : "text-slate-200 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 shadow-lg shadow-slate-900/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-3 text-white">
          <IoFastFood className="h-8 w-8 text-amber-400" />
          <span className="text-lg font-semibold tracking-tight">My Recipee App</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-3 text-sm md:flex">
          <NavLink end to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 md:hidden"
        >
          <IoFastFood className="h-6 w-6 text-amber-400" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-white/10 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
          <nav className="flex flex-col gap-2 px-6 py-4 text-sm">
            <NavLink end to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default NavBar;
