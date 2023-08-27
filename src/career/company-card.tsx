import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { CompanyInfo, RoleInfo } from "./company-info.ts";

interface CompanyCardProps {
  company: CompanyInfo;
}

export default function CompanyCard(props: CompanyCardProps) {
  const [expanded, setExpanded] = useState(false);

  const { company } = props;
  const companyStartDate = company.roles[0].startDate;
  const companyEndDate = company.roles[company.roles.length - 1].endDate;

  const renderRole = (role: RoleInfo) => {
    return (
      <div className={"ml-4 mt-4"}>
        <p className="text-2xl antialiased">{role.title}</p>
        <p className="antialiased opacity-90">{`${role.startDate} - ${role.endDate}`}</p>
        <ul className="list-inside list-disc">
          {role.responsibilities.map((responsibility) => (
            <li>{responsibility}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="rounded-md border bg-white p-4 shadow-lg">
      <div className="flex items-center">
        <img
          src={`src/career/assets/${company.logo}`}
          alt={company.name}
          className="mr-4 h-auto max-h-20 w-44"
        />
        <div className={"flex-grow"}>
          <p className="text-2xl antialiased">{company.name}</p>
          <p className="antialiased opacity-60">{company.location}</p>
          <p className="antialiased opacity-60">{`${companyStartDate} - ${companyEndDate}`}</p>
          <p></p>
        </div>
        <div
          className=" flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
          onClick={() => setExpanded(!expanded)}
        >
          <FaAngleDown
            className={`duration-600 transition-transform ease-in ${expanded && "rotate-180"}`}
          />
        </div>
      </div>
      <div
        className={`duration-600 overflow-hidden transition-all ease-in ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        {company.roles.map((r) => renderRole(r))}
      </div>
    </div>
  );
}
