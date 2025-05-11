import { useState } from 'react';
import { navLinks } from '../utils/constants';
import clsx from 'clsx';
import CloseIcon from '../assets/icons/close-icon';
import RightArrowIcon from '../assets/icons/right-arrow-icon';

const Navbar = () => {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-black relative flex items-center justify-between px-4 py-4 md:px-12">
      <div className="flex items-center">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" width={240} height={75} />
        </a>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden flex-wrap md:flex md:gap-8">
        {navLinks.map((link) => (
          <li
            key={link.href}
            onMouseEnter={() => setHoveredHref(link.href)}
            onMouseLeave={() => setHoveredHref(null)}
            className={clsx(
              'transition-opacity duration-300 ease-in-out',
              hoveredHref && hoveredHref !== link.href ? 'opacity-50' : 'opacity-100'
            )}
          >
            <a
              href={link.href}
              className={clsx(
                'nav-link-underline pb-2 text-white transition-colors duration-300 ease-in-out',
                hoveredHref === link.href && 'text-brand-gold'
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMenu}
          className="z-50 cursor-pointer rounded-md p-2 text-white transition-colors duration-300 ease-in-out focus:outline-none"
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex h-6 w-6 flex-col items-center justify-around">
            <span
              className={clsx(
                'block h-0.5 w-full bg-white transition-all duration-300 ease-in-out',
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-full bg-white transition-all duration-300 ease-in-out',
                isMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-full bg-white transition-all duration-300 ease-in-out',
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={handleToggleMenu}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-menu"
        className={clsx(
          'bg-brand-black fixed inset-y-0 right-0 z-40 flex w-3/4 max-w-xs transform flex-col p-6 shadow-xl transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={handleToggleMenu}
            className="cursor-pointer rounded-md p-2 text-white transition-colors duration-300 ease-in-out focus:outline-none"
            aria-label="Zamknij menu"
          >
            <CloseIcon />
          </button>
        </div>
        <ul className="flex flex-col gap-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-brand-gold flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-4 text-lg text-white transition-colors duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                <RightArrowIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
