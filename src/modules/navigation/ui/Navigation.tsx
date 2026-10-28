import { NavLink } from 'react-router';
import NAVIGATION_CONFIG from '../config/navigation.config';

const Navigation = () => {
  return (
    <nav className='flex justify-around fixed w-full h-20 z-100 py-6 uppercase font-rocknroll text-white'>
      {NAVIGATION_CONFIG.map(
        (elNav: { text: string; href: string }, idx: number) => (
          <NavLink
            key={idx}
            to={elNav.href}
            className={({ isActive }) =>
              `text-xl tracking-widest uppercase transition-all duration-300 relative 
              ${isActive ? 'text-[#F1AF09]' : 'hover:scale-105'}`
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
