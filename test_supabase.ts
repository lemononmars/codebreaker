import { from } from './src/lib/supabase';
async function test() {
    const { data, error } = await from('puzzlehunt').select('*').limit(1);
    console.log({data, error});
}
test();
