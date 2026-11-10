import AboutSlide from '@/modules/aboutSlide/ui/AboutSlide';
import EvolutionSlide from '@/modules/evolutionSlide/ui/EvolutionSlide';
import HiroSlide from '@/modules/hiroSlide/ui';
import InspirationSlide from '@/modules/inspirationSlide/ui/InspirationSlide';
import JojoSlide from '@/modules/JojoSlide/ui/JojoSlide';

export const SLIDES = [
  { id: 'hiro', component: <HiroSlide /> },
  { id: 'about', component: <AboutSlide /> },
  { id: 'jojo', component: <JojoSlide /> },
  { id: 'evolution', component: <EvolutionSlide /> },
  { id: 'inspiration', component: <InspirationSlide /> },
];
