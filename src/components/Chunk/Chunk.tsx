import {ChunkProps} from '../App/Interfaces';
import ChunkTitle from './ChunkTitle/ChunkTitle'; 
import ChunkCarrousel from './ChunkCarrousel/ChunkCarrousel';
import CarrouselArrow from './ChunkCarrousel/CarrouselArrow/CarrouselArrow'; 

const Chunk: React.FC<ChunkProps> = props => {
  const {title, chunkData} = props; 

  return(
    <div className="chunk-wrapper">
      <section className="chunk">
        <ChunkTitle title={title} />
        <div className="wrapper">
          <ChunkCarrousel musicArray={chunkData}/>
          <CarrouselArrow  />
        </div>
      </section>
    </div>
  )
}; 
export default Chunk; 