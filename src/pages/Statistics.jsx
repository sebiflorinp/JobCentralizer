import useStatisticsData from "../hooks/useStatisticsData.jsx";
import { useEffect } from "react";

function Statistics() {
  const {
    jobsPerCityData,
    jobsPerTypeData,
    jobsPerSourceData,
    jobsPerExperienceData,
  } = useStatisticsData();

  useEffect(() => {
    console.log(jobsPerCityData);
    console.log(jobsPerTypeData);
    console.log(jobsPerSourceData);
    console.log(jobsPerExperienceData);
  }, [
    jobsPerCityData,
    jobsPerTypeData,
    jobsPerSourceData,
    jobsPerExperienceData,
  ]);
  return (
    <div>
      <p>Statistics</p>
    </div>
  );
}

export default Statistics;
