import { NavLink } from 'react-router';
import NAVIGATION_CONFIG from '../config/navigation.config';

const Navigation = () => {
  return (
    <nav className='flex justify-around fixed w-full h-10  z-300 uppercase font-rocknroll text-accent my-1.5'>
      {NAVIGATION_CONFIG.map(
        (elNav: { text: string; href: string }, idx: number) => (
          <NavLink
            key={idx}
            to={elNav.href}
            className={({ isActive }) =>
              `text-xl tracking-widest uppercase transition-all duration-300 relative hover:scale-105 will-change-transform
              ${isActive ? 'drop-shadow-violet' : ''}`
            }
          >
            — {elNav.text} —
          </NavLink>
        ),
      )}
    </nav>
  );
};
export default Navigation;
