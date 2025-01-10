import useSearchJobs from "../hooks/useSearchJobs.jsx";
import JobCard from "./JobCard.jsx";
import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { updatePage } from "../state/slices/infiniteScrollSlice.js";
function JobCardContainer({ searchResult }) {
  const { fetchJobs, fetchMoreJobs, isLoading, queryResult } = useSearchJobs();
  const currentSearchText = useSelector(
    (state) => state.infiniteScroll.searchText,
  );
  const currentPage = useSelector((state) => state.infiniteScroll.currentPage);

  useEffect(() => {
    console.log(currentSearchText);
    fetchJobs(currentSearchText);
  }, []);

  useEffect(() => {
    fetchMoreJobs();
  }, [currentPage]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updatePage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading],
  );

  const observer = useRef();
  return (
    <div className={"flex flex-col gap-5"}>
      {searchResult.map((job, index) => (
        <JobCard
          job={job}
          ref={searchResult.length === index + 1 ? lastPostElementRef : null}
        />
      ))}
    </div>
  );
}

export default JobCardContainer;
