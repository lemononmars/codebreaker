import { adventureLevels } from '$lib/data/adventure_data';

/** @type {import('./[code]').RequestHandler} */
export async function get({ params }: { params: Record<string, string> }) {

   const level = parseInt(params.level);
   const code = params.code;

   const stage = adventureLevels.find(l => l.level === level);

   if (stage && stage.code === code) {
      return {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
         body: {
            result: 'correct',
            question: stage.question,
            script: stage.script || '',
            cleanup: stage.cleanup || '',
            image: ''
         }
      };
   } else {
      return {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
         body: {
            result: 'incorrect',
            hint: 'wrong code or level'
         }
      };
   }
}
