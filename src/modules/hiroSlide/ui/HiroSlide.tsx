import { SlideNumber } from '@/shared';
import AboutBlock from './AboutBlock/AboutBlock';
import { GradientBlock } from './GradientBlock/GradientBlock';
import { NamesBlock } from './NamesBlock/NamesBlock';
import { PortraitWrapper } from './PortraitWrapper/PortraitWrapper';
import { QuiteBlock } from './QuoteBlock/QuoteBlock';
import { diamondGradientStyles } from '../styles/diamondGradient';
import clsx from 'clsx';

const HiroSlide = () => {
  return (
    <>
      <div
        className={clsx(
          'absolute inset-0 pointer-events-none z-0 opacity-20 overflow-hidden',
          diamondGradientStyles,
        )}
      ></div>
      <GradientBlock />
      <AboutBlock />
      <div className='relative ml-auto h-full flex justify-end items-center flex-1/2 z-10 pr-12'>
        <QuiteBlock />
        <PortraitWrapper />
        <NamesBlock />
      </div>
      <SlideNumber
        color='[#D50668]/80'
        number={1}
      ></SlideNumber>
    </>
  );
};
export default HiroSlide;
