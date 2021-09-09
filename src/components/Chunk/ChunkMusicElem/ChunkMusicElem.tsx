import React, {useState} from 'react'; 
import {MusicElem} from '../../App/Interfaces'; 

const colors = ['#6dd5ed', '#f7797d', '#C6FFDD', '#FBD786', '#FF0099', '#FF4B2B', '#2ebf91', '#8360c3'];
const handleRandomColor = () => colors[Math.floor(Math.random()*colors.length)] ;


const ChunkMusicElem: React.FC<MusicElem> = props => {
  const [myColor] = useState(handleRandomColor()); 
  const {type, img, title, body} = props; 
  let imgClasses = type === 'artist' ? 'carrousel__music-element--artist': ''; 
  const classes = type === 'artist' ? 'img-elem-info--center': ''; 
  return(
    <article className="carrousel__music-element ">
      <div className="carrousel__img-wrapper">
        {type==='mix' && <div style={{backgroundColor:myColor }} className="carrousel__img-frame"  ></div>}
        <img className={imgClasses} alt="album cover" src={img}></img>
      </div>
      <h1 className={classes}>{title}</h1>
      <p className={classes}>{body}</p>
    </article>
  ); 
}; 

export default ChunkMusicElem;