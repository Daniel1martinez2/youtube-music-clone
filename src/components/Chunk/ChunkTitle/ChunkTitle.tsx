import React, {Fragment} from 'react'; 
import {Title} from '../../App/Interfaces'; 
 
const ChunkTitle: React.FC<{title:Title}> = props => {
  const {title} = props;
  let headerContent;
  let headerClasses;  
  
  switch (title.type){
    case 'section':
      headerContent = <h1>{title.content}</h1>;     
    break;
    case 'similarTo': 
      headerClasses='chunk__header--similar-to'; 
      headerContent = (
        <Fragment>
          <img className="chunk__header-img" src={title.content.img} alt="profile" />
          <aside className="chunk__header-similar-info">
            <h4>similar to</h4>
            <h1>{title.content?.name}</h1>
          </aside>
        </Fragment>
      ); 
    break; 
    default: headerContent = <h1>Not found</h1>
  }; 
  
  return (
    <header className={`chunk__header ${headerClasses}`} >{headerContent}</header>
  ); 
}
export default ChunkTitle;