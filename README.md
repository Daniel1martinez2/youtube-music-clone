# Youtube music clone
**In this exercise I'm attempt to reinforce my react and typescript skills**

## Components
* Header
  * NavBar
    * Link
    * Search
  * Profile
* Chunk
  * ChunkTitle
  * ChunkCarrousel
    * Arrow
    * ChunkElem
## Component props
* **header**
  * *No props*
* **NavBar**
  * *links (mandatory)*: array: obj with url and title
  * *searchElem (optional)*: boolean
* **Link**
  * *children (mandatory)* string
  * *url (mandatory)*: string
* **Chunk**
  * *title (mandatory)*: obj: type (section, similarTo), text, img
  * *chunkData (mandatory)*: array: obj: type (artist, album, mix), img, title, body
* **ChunkCarrousel**
  * *chunkData (mandatory)*: array: obj: type (artist, album, mix), img, title, body
* **ChunkElem**
  * *data (mandatory)*: obj: type (section, similarTo), text, img




