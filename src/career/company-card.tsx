import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { CompanyInfo, RoleInfo } from "./company-info.ts";
import ExpandingCard from "../common/expanding-card.tsx";

interface CompanyCardProps {
  company: CompanyInfo;
}

export default function CompanyCard(props: CompanyCardProps) {
  const { company } = props;
  const companyStartDate = company.roles[0].startDate;
  const companyEndDate = company.roles[company.roles.length - 1].endDate;

  const CompanyHeader = () => {
    return (
      <div className="flex items-center">
        <img
          src={`src/career/assets/${company.logo}`}
          alt={company.name}
          className="mr-4 h-auto max-h-20 w-44"
        />
        <div className={"flex-grow"}>
          <p className="text-2xl">{company.name}</p>
          <p className="opacity-60">{company.location}</p>
          <p className="opacity-60">{`${companyStartDate} - ${companyEndDate}`}</p>
          <p></p>
        </div>
      </div>
    );
  };

  const CompanyDetails = () => {
    return (
      <>
        {company.roles.map((r) => (
          <div className={"ml-4 mt-4"}>
            <p className="text-2xl">{r.title}</p>
            <p className="opacity-90">{`${r.startDate} - ${r.endDate}`}</p>
            <ul className="list-inside list-disc">
              {r.responsibilities.map((responsibility) => (
                <li>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };

  return <ExpandingCard header={<CompanyHeader />} collapsed={<CompanyDetails />} />;
}
