import {ChunkProps} from './Interfaces'; 

export const links = [
  {title: 'Home', url: '/'},
  {title: 'Explore', url: '/'},
  {title: 'Library', url: '/'},
];

const imgLinks = [
  'https://i.scdn.co/image/ab676161000051743d43e8bcb7eb7ad1dae465d9',
  'https://lh3.googleusercontent.com/B8fkqNL8e98At1A2oJn1gKdb8G9DHTlIJqFCnc9xqaxjG_VXX8dvh5HziW0hZhLfKtiMkbdNE9SCD54=w544-h544-l90-rj',
  'https://lh3.googleusercontent.com/pWO2rD8Q-ewDGhzt6_WU4ML9IVEdSxys8ENJMKr1msKrGC1PDIFycSNbwhoT9zoDdTp4X7ioo2T42S0=w544-h544-l90-rj',
  'https://lh3.googleusercontent.com/V9k95muSbDYxAxQ04GvraEgIQsKsqzbOWxSo3hj9ddSybnnh3TES26COji03lE3GHd461HGquHWOVLs=w544-h544-p-l90-rj',
  'https://lh3.googleusercontent.com/ShlhVR8hvvEMlTzof_OfxyEmPYd8YXef2CHIM0javLMj8ERHiyV6Ba2gzl8Ofs0gPQwenSuBsKuJvAvg=w544-h544-l90-rj',
  'https://lh3.googleusercontent.com/13x_XpDtZKAUKw2brz0wjCbcYyTgw0VpSP8wLgfYALwde9pTPW4s_bss_ODTvMgK1DNLrJ2NBejhI4w=w544-h544-p-l90-rj'

]; 

//TEST
export const testChunk: ChunkProps = {
  title: {type: 'section', content: 'Your Favorites'},
  chunkData: [
    {type:'artist', img:imgLinks[0], title:'Videoclub ', body:'20.2M Subscribers', id: Math.random()},
    {type:'mix', img:imgLinks[1], title:'Mix for you', body:'Billie, cage the elephant, foo fighters', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'artist', img:imgLinks[3], title:'Bad bunny', body:'35.5M subscribers', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
  
  ],
}; 
export const testChunk2: ChunkProps = {
  title: {type: 'similarTo', content: {img:imgLinks[5], name:'Sum 41'}},
  chunkData: [
    {type:'mix', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'album', img:imgLinks[4], title:'Re:Re:', body:'ASIAN KUNG-FU GENERATION', id: Math.random()},
    {type:'mix', img:imgLinks[1], title:'Mix for you', body:'Billie, cage the elephant', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'artist', img:imgLinks[3], title:'Bad bunny', body:'35.5M subscribers', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
    {type:'album', img:imgLinks[2], title:'Happier than ever (edit)', body:'single • Billie Eilish', id: Math.random()},
  ],
}; 