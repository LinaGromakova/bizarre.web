import { NavLink } from 'react-router';
import NAVIGATION_CONFIG from '../config/navigation.config';
import { useState } from 'react';
import clsx from 'clsx';
import { NavigationAnimate } from './NavigationAnimate/NavigationAnimate';

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className='fixed w-full md:h-10 z-300 uppercase font-rocknroll text-accent mt-0 md:mt-2 mb-1.5'>
      <button
        type='button'
        className='relative z-20 md:hidden text-xl tracking-widest drop-shadow-violet flex justify-center left-1/2 -translate-x-1/2'
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <NavigationAnimate text='MENU' />
      </button>
      <div
        className={clsx(
          'w-full flex items-center transition-all duration-300 ease-out origin-top',
          'md:static md:h-auto md:flex-row md:justify-around md:bg-transparent md:backdrop-blur-none md:pb-0 md:gap-y-0 md:scale-y-100 md:opacity-100 md:pointer-events-auto',

          'fixed inset-0 z-10 h-dvh bg-main/95 backdrop-blur-md flex-col justify-center gap-y-10 pb-12',
          menuIsOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        {NAVIGATION_CONFIG.map(
          (elNav: { text: string; href: string }, idx: number) => (
            <NavLink
              key={idx}
              to={elNav.href}
              onClick={() => setMenuIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl md:text-xl tracking-widest uppercase transition-all duration-300 relative hover:scale-105 will-change-transform flex items-center gap-2 ${
                  isActive
                    ? 'drop-shadow-violet scale-110 md:scale-100 cursor-default'
                    : 'opacity-80 md:opacity-100 hover:opacity-100'
                }`
              }
            >
              <NavigationAnimate text={elNav.text} />
            </NavLink>
          ),
        )}
      </div>
    </nav>
  );
};

export default Navigation;
