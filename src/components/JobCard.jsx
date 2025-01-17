import CardInformationText from "./CardInformationText.jsx";

function JobCard({ job, ref }) {
  return (
    <div
      ref={ref}
      className={"flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md"}
      key={job.id}
    >
      <div className={"flex items-center justify-between"}>
        <h1 className={"text-2xl font-semibold text-blue-700"}>{job.name}</h1>
        <button
          className={"rounded-lg bg-blue-600 p-2 px-4 text-lg text-white"}
        >
          <a href={job.details}>Detalii</a>
        </button>
      </div>
      <div className={"flex justify-between px-4"}>
        <div>
          <CardInformationText category={"Companie"} text={job.company} />
          <CardInformationText
            category={"Locatie: "}
            text={job.location.map(
              (city, index) =>
                city + (index + 1 !== job.location.length ? "," : " ") + " ",
            )}
          />
          <CardInformationText
            category={"Experienta ceruta"}
            text={job.experience}
          />
        </div>
        <div>
          <CardInformationText category={"Sursa"} text={job.source} />
          <CardInformationText category={"Gasit pe"} text={job.found_at} />
          <CardInformationText category={"Tipul ofertei"} text={job.job_type} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
