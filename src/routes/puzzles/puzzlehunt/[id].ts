import {puzzleHunts} from '$lib/data/puzzles/puzzlehunt'

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }: { params: { id: number } }) {
   let {id} = params
   // TODO: make it fetch, await, etc?
  id = Number(id)
  const total: number = Object.keys(puzzleHunts).length
  id = (id+total-1)%total + 1
  
   const content = puzzleHunts.filter(n => n.id == id)
  
   if (content.length > 0) {
     return {
       body: { content: content[0]}
     };
   }
  
   return {
     status: 404
   };
 }