import { CharacterImg } from './CharacterImg';
import { MangaPanels } from './MangaPanels';

export const CollageWrapper = () => {
  return (
    <div className='relative w-full max-w-140 mx-auto my-2 lg:my-0 flex items-center justify-center'>
      <MangaPanels />
      <CharacterImg />
    </div>
  );
};
