import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function useStatisticsData() {
  const [jobsPerCityData, setJobsPerCityData] = useState();
  const [jobsPerTypeData, setJobsPerTypeData] = useState();
  const [jobsPerSourceData, setJobsPerSourceData] = useState();
  const [jobsPerExperienceData, setJobsPerExperienceData] = useState();

  useEffect(() => {
    const prepareData = async (
      labelColumnName,
      countColumnName,
      functionName,
      setDataFunction,
    ) => {
      const { data, error } = await supabase.rpc(functionName);

      let totalCount = 0;
      let minimumAmount = 0;
      let temporaryData = {
        labels: [],
        values: [],
      };

      // Calculate how much data is needed to pass the 3% threshold
      data.forEach((dataObject) => {
        totalCount += dataObject[countColumnName];
      });
      minimumAmount = (totalCount / 100) * 3;

      // Add all data with a share of less than 3% as "Other"
      let otherCount = 0;
      data.forEach((dataObject) => {
        if (dataObject[countColumnName] < minimumAmount) {
          otherCount += dataObject[countColumnName];
        } else {
          temporaryData = {
            labels: [...temporaryData.labels, dataObject[labelColumnName]],
            values: [...temporaryData.values, dataObject[countColumnName]],
          };
        }
      });

      // Add the other category if there are any jobs there
      if (otherCount !== 0) {
        temporaryData = {
          labels: [...temporaryData.labels, "Other"],
          values: [...temporaryData.values, otherCount],
        };
      }

      setDataFunction(temporaryData);
    };

    prepareData("city", "job_count", "get_jobs_by_cities", setJobsPerCityData);
    prepareData(
      "job_type",
      "job_count",
      "get_jobs_by_type",
      setJobsPerTypeData,
    );
    prepareData(
      "source",
      "job_count",
      "get_jobs_by_source",
      setJobsPerSourceData,
    );
    prepareData(
      "experience",
      "job_count",
      "get_jobs_by_experience",
      setJobsPerExperienceData,
    );
  }, []);

  return {
    jobsPerCityData,
    jobsPerTypeData,
    jobsPerSourceData,
    jobsPerExperienceData,
  };
}

export default useStatisticsData;
