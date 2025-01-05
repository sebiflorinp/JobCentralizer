import {createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function useJobs() {
    async function getCities() {
        const {data} = await supabase.rpc('get_jobs_by_cities')
        return data
    }
    return {getCities}
}

export default useJobs