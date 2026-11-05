import { Outlet } from 'react-router';
import EvolutionSlide from '../evolutionSlide/ui/EvolutionSlide';
import AboutSlide from '../aboutSlide/ui/AboutSlide';
import JojoSlide from '../JojoSlide/ui/JojoSlide';
import HiroSlide from '../hiroSlide/ui';

const HomePage = () => {
  return (
    <div className='relative h-dvh w-full flex flex-col justify-center overflow-hidden bg-main px-10 pb-5 pt-10'>
      <Outlet />
      {/* <HiroSlide></HiroSlide> */}
      {/* <AboutSlide></AboutSlide> */}
      {/* <JojoSlide></JojoSlide> */}
      <EvolutionSlide></EvolutionSlide>
    </div>
  );
};

export default HomePage;
