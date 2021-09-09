import { MusicElemObject } from '../../App/Interfaces';

import ChunkMusicElem from '../ChunkMusicElem/ChunkMusicElem'; 

const ChunkCarrousel: React.FC<{musicArray: Array<MusicElemObject>}> = props => {
  const {musicArray} = props; 
  return (
    <section className="chunk__carrousel">
      {musicArray.map(elem => <ChunkMusicElem key={elem.id} {...elem} />)}
    </section>
  ); 
}; 
export default ChunkCarrousel; 