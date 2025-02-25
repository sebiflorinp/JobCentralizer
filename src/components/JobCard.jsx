import CardInformationText from "./CardInformationText.jsx";
import { motion } from "motion/react";

function JobCard({ job }) {
  return (
    <div
      className={"flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md"}
      key={job.id}
    >
      <div className={"flex items-center justify-between"}>
        <h1 className={"text-2xl font-semibold text-blue-700"}>{job.name}</h1>
        <a href={job.details} target="_blank">
          <motion.button
            className={
              "rounded-lg bg-blue-600 p-2 px-4 text-lg text-white hover:bg-blue-700 active:bg-blue-500"
            }
            whileTap={{ scale: 0.9 }}
          >
            Detalii
          </motion.button>
        </a>
      </div>
      <div className={"flex justify-between px-4"}>
        <div>
          <CardInformationText category={"Companie"} text={job.company} />
          <CardInformationText
            category={"Locație"}
            text={job.location.map(
              (city, index) =>
                city + (index + 1 !== job.location.length ? "," : " ") + " ",
            )}
          />
          <CardInformationText
            category={"Experiență cerută"}
            text={job.experience}
          />
        </div>
        <div>
          <CardInformationText category={"Sursă"} text={job.source} />
          <CardInformationText category={"Găsit pe"} text={job.found_at} />
          <CardInformationText category={"Tipul ofertei"} text={job.job_type} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
