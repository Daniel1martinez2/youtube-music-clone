import { MusicElem } from '../../App/Interfaces';

import ChunkMusicElem from '../ChunkMusicElem/ChunkMusicElem'; 

const ChunkCarrousel: React.FC<{musicArray: Array<MusicElem>}> = props => {
  const {musicArray} = props; 
  return (
    <section className="chunk__carrousel">
      {musicArray.map(elem => <ChunkMusicElem key={Math.random().toString()} {...elem} />)}
    </section>
  ); 
}; 
export default ChunkCarrousel; 