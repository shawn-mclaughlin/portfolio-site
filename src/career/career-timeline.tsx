import CompanyCard from "./company-card.tsx";
import { getEmploymentHistory } from "./employment-history.ts";

export default function CareerTimeline() {
  const employmentHistory = getEmploymentHistory();

  return (
    <>
      {employmentHistory.map((company, index) => (
        <div className="mb-2" key={index}>
          <CompanyCard company={company} />
        </div>
      ))}
    </>
  );
}
