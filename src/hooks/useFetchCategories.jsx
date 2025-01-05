import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function useFetchCategories(category) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: supabaseData, error: supabaseError } = await supabase.rpc(
        "get_jobs_by_" + category,
      );
      if (supabaseError) {
        setError(supabaseError);
      } else {
        setData(supabaseData);
      }
      console.log(supabaseData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
}

export default useFetchCategories;
