import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Recipee</h2>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Discover easy recipes, curated meal ideas, and kitchen inspiration for every taste. Crafted to help you cook with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/services" className="transition hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Stay connected</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Follow us for recipe tips, seasonal menus, and kitchen updates.
          </p>
          <div className="mt-6 flex items-center gap-4 text-slate-300">
            <a href="#" className="transition hover:text-white" aria-label="Instagram">
              <AiOutlineInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="transition hover:text-white" aria-label="Twitter">
              <AiOutlineTwitter className="h-5 w-5" />
            </a>
            <a href="mailto:hello@recipee.com" className="transition hover:text-white" aria-label="Email">
              <AiOutlineMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950/90 px-4 py-3 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} <b>My Recipee App.</b> All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
