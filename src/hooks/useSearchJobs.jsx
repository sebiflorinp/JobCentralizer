import { useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function useSearchJobs() {
  const filters = useSelector((state) => state.filter);
  const [isLoading, setIsLoading] = useState(false);
  const [queryResult, setQueryResult] = useState([]);

  const fetchJobs = async (jobTitle, page = 1) => {
    const jobsPerPage = 6;

    let query = supabase
      .from("Jobs")
      .select("*")
      .order("id", { ascending: false });
    if (filters.cities.length > 0) {
      query.overlaps("location", filters.cities);
    }

    if (filters.experience.length > 0) {
      query.in("experience", filters.experience);
    }

    if (filters.sources.length > 0) {
      query.in("source", filters.sources);
    }

    if (filters.jobTypes.length > 0) {
      query.in("job_type", filters.jobTypes);
    }

    if (jobTitle !== "") {
      query.ilike("name", "%" + jobTitle + "%");
    }
    setIsLoading(true);
    const { data } = await query.range(
      jobsPerPage * (page - 1),
      jobsPerPage * page - 1,
    );
    await setQueryResult(data);
    setIsLoading(false);
  };

  const fetchMoreJobs = async (filters) => {
    const jobsPerPage = 6;

    let query = supabase
      .from("Jobs")
      .select("*")
      .order("id", { ascending: false });
    if (filters.cities.length > 0) {
      query.overlaps("location", filters.cities);
      console.log(filters.cities);
    }

    if (filters.experience.length > 0) {
      query.in("experience", filters.experience);
    }

    if (filters.sources.length > 0) {
      query.in("source", filters.sources);
    }

    if (filters.jobTypes.length > 0) {
      query.in("job_type", filters.jobTypes);
    }

    if (filters.searchText !== "") {
      query.ilike("name", "%" + filters.searchText + "%");
    }

    setIsLoading(true);
    const { data } = await query.range(
      jobsPerPage * (filters.currentPage - 1),
      jobsPerPage * filters.currentPage - 1,
    );
    console.log(queryResult);
    console.log(data);
    setIsLoading(false);
    return data;
  };

  return { queryResult, fetchJobs, fetchMoreJobs, isLoading };
}

export default useSearchJobs;
