import { NavLink } from 'react-router';
import NAVIGATION_CONFIG from '../config/navigation.config';

const Navigation = () => {
  return (
    <nav className='flex justify-around'>
      {NAVIGATION_CONFIG.map(
        (elNav: { text: string; href: string }, idx: number) => (
          <NavLink
            key={idx}
            to={elNav.href}
            className={({ isActive }) => (isActive ? 'text-red-500' : '')}
          >
            {elNav.text}
          </NavLink>
        ),
      )}
    </nav>
  );
};
export default Navigation;
