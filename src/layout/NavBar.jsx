import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";

function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 shadow-lg shadow-slate-900/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white">
          <IoFastFood className="h-8 w-8 text-amber-400" />
          <span className="text-lg font-semibold tracking-tight">My Recipee App</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <Link to="/services" className="transition hover:text-white">Services</Link>
          <Link to="/about" className="transition hover:text-white">About</Link>
          <Link to="/contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:inline-flex">
          Explore Recipes
        </div>

        <button type="button" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 md:hidden">
          <IoFastFood className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
