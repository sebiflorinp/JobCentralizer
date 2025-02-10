import useStatisticsData from "../hooks/useStatisticsData.jsx";
import BarChart from "./../components/BarChart.jsx";

function Statistics() {
  const {
    jobsPerCityData,
    jobsPerTypeData,
    jobsPerSourceData,
    jobsPerExperienceData,
  } = useStatisticsData();

  return (
    <div>
      <BarChart label={"Anunturi per locatie"} data={jobsPerCityData} />
    </div>
  );
}

export default Statistics;
