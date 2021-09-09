interface MusicElem {
  type: 'artist' | 'album' | 'mix' ;
  img: string;
  title: string;
  body: string;
}; 

export type MusicElemObject = MusicElem & {
  id: number; 
}

export interface Artist {
  img: string;
  name: string;
}

//QUESTION
// interface Title{
//   type: 'section' | 'similarTo';
//   //wether is similarTo
//   artist?: Artist; 
// };  

export type Title = {
  type: 'section';
  content: string;
} | {
  type: 'similarTo';
  content: Artist; 
}; 

export interface ChunkProps {
  title: Title;
  chunkData: Array<MusicElemObject>; 
};

export interface ProfileProps {
  picture: string;
}

export interface LinkData {
  title: string;
  url: string;
}; 

export interface NavBarData {
  linkData: Array<LinkData>; 
}; 
