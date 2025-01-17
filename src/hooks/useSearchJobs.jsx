import { useDispatch, useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import {
  updatePage,
  updateSearchParamaters,
} from "../state/slices/infiniteScrollSlice.js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function useSearchJobs() {
  const cities = useSelector((state) => state.filter.cities);
  const experience = useSelector((state) => state.filter.experience);
  const sources = useSelector((state) => state.filter.sources);
  const jobTypes = useSelector((state) => state.filter.jobTypes);
  const [isLoading, setIsLoading] = useState(false);

  const infiniteScrollSearchText = useSelector(
    (state) => state.infiniteScroll.searchText,
  );
  const infiniteScrollPage = useSelector(
    (state) => state.infiniteScroll.currentPage,
  );
  const infiniteScrollCities = useSelector(
    (state) => state.infiniteScroll.cities,
  );
  const infiniteScrollSources = useSelector(
    (state) => state.infiniteScroll.sources,
  );
  const infiniteScrollJobTypes = useSelector(
    (state) => state.infiniteScroll.jobTypes,
  );
  const infiniteScrollExperience = useSelector(
    (state) => state.infiniteScroll.experience,
  );
  const dispatch = useDispatch();
  const [queryResult, setQueryResult] = useState([]);

  const fetchJobs = async (jobTitle, page = 1) => {
    const jobsPerPage = 6;

    //dispatch(
    //updateSearchParamaters({
    // searchText: jobTitle,
    //cities,
    //experience,
    //sources,
    //jobTypes,
    //}),
    //);

    let query = supabase.from("Jobs").select("*");
    if (cities.length > 0) {
      query.overlaps("location", cities);
    }

    if (experience.length > 0) {
      query.in("experience", experience);
    }

    if (sources.length > 0) {
      query.in("source", sources);
    }

    if (jobTypes.length > 0) {
      query.in("job_type", jobTypes);
    }

    if (jobTitle !== "") {
      query.ilike("name", "%" + jobTitle + "%");
    }
    setIsLoading(true);
    const { data } = await query.range(
      jobsPerPage * (page - 1),
      jobsPerPage * page - 1,
    );
    setQueryResult(data);
    setIsLoading(false);
  };

  const fetchMoreJobs = async () => {
    const jobsPerPage = 6;

    let query = supabase.from("Jobs").select("*");
    if (infiniteScrollCities.length > 0) {
      query.overlaps("location", infiniteScrollCities);
    }

    if (infiniteScrollExperience.length > 0) {
      query.in("experience", infiniteScrollExperience);
    }

    if (infiniteScrollSources.length > 0) {
      query.in("source", infiniteScrollSources);
    }

    if (infiniteScrollJobTypes.length > 0) {
      query.in("job_type", infiniteScrollJobTypes);
    }

    if (infiniteScrollSearchText !== "") {
      query.ilike("name", "%" + infiniteScrollSearchText + "%");
    }

    setIsLoading(true);
    const { data } = await query.range(
      jobsPerPage * (infiniteScrollPage - 1),
      jobsPerPage * infiniteScrollPage - 1,
    );
    dispatch(updatePage());
    setQueryResult((prevState) => [...prevState, ...data]);
    setIsLoading(false);
  };

  return { queryResult, fetchJobs, fetchMoreJobs, isLoading };
}

export default useSearchJobs;
