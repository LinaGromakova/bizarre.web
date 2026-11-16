import {
  AboutSlide,
  EvolutionSlide,
  HiroSlide,
  InspirationSlide,
  JojoSlide,
} from '@/slides';

export const SLIDES = [
  { id: 'hiro', component: <HiroSlide /> },
  { id: 'about', component: <AboutSlide /> },
  { id: 'jojo', component: <JojoSlide /> },
  { id: 'evolution', component: <EvolutionSlide /> },
  { id: 'inspiration', component: <InspirationSlide /> },
];
