import {cryptogram} from '$lib/data/puzzles/cryptogram'

/** @type {import('./__types/alphabet/[id]').RequestHandler} */
export async function get({ params }) {
   const {id} = params
   // TODO: make it fetch, await, etc?
   const content = cryptogram.filter(n => n.id == id)
  
   if (content.length > 0) {
     return {
       body: { content: content[0]}
     };
   }
  
   return {
     status: 404
   };
 }

