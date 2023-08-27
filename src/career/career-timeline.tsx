import CompanyCard from "./company-card.tsx";
import { getEmploymentHistory } from "./employment-history.ts";

export default function CareerTimeline() {
  const employmentHistory = getEmploymentHistory();

  return (
    <>
      {employmentHistory.map((company) => (
        <div className="mb-2">
          <CompanyCard company={company} />
        </div>
      ))}
    </>
  );
}
