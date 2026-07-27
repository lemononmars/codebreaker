import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
   const {title, answer} = params
  
   if (title.length > 0 && answer.length > 0) {
     return {
       body: { title, answer}
     };
   }
  
   return {
     status: 404
   };
 }