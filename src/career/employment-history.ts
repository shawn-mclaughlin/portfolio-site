import { CompanyInfo } from "./company-info.ts";

export function getEmploymentHistory(): CompanyInfo[] {
  return [
    {
      name: "Scoir",
      location: "West Chester, Pa",
      logo: "scoir.png",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "January 2022",
          endDate: "Present",
          responsibilities: [
            "Developed roster integration system to synchronize student and teacher data with Scoir using Go, React, and MongoDB",
            "Implemented SSO authentication with third party vendor",
          ],
        },
      ],
    },
    {
      name: "Aveva (acquired OSIsoft in March 2021)",
      location: "Philadelphia, Pa",
      logo: "aveva.png",
      roles: [
        {
          title: "Staff Software Developer",
          startDate: "July 2020",
          endDate: "January 2022",
          responsibilities: [
            "Led a team of developers to rebuild and increase the performance of the search functionality within the company's data vizualization software",
            "Led a team to design and implement automated testing of the company's cloud platform",
            "Led a team to design and implement disaster recovery functionality for the company's cloud platform",
          ],
        },
      ],
    },
    {
      name: "eMoney Advisor",
      location: "Radnor, Pa",
      logo: "emoney.png",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "January 2020",
          endDate: "July 2020",
          responsibilities: [
            "Developed a library for translating FDX format financial data into company's proprietary data format",
            "Maintained core in frastructure of the company's financial data aggregation platform",
          ],
        },
        {
          title: "Senior Software Engineer, Tech Lead",
          startDate: "November 2018",
          endDate: "January 2020",
          responsibilities: [
            "Served as primary technical point of contact and subject matter expert for bulk file and API data aggregation team",
            "Worked closely with product owners and business to define requirements for projects",
            "Architected a new design for web API aggregators that increased testability through better separation of code dependencies and dependency injection",
            "Coordinated with fellow aggregation tech leads to redesign and scale the company's data aggregation engine",
          ],
        },
        {
          title: "Mid-Level Software Engineer",
          startDate: "August 2016",
          endDate: "November 2018",
          responsibilities: [
            "Built and maintained code to aggregate financial data via API connections and bulk file data loaders using C#, .Net, and SQL Server",
            "Wrote, deployed, and coordinated multiple large-scale data conversions in SQL server",
            "Introduced the team to more rigorous and efficient testing practices, including TDD",
            "Trained new developers, and mentored them on modern development best practices",
          ],
        },
        {
          title: "Software Engineer",
          startDate: "August 2015",
          endDate: "August 2016",
          responsibilities: [
            "Built and maintained a suite of over 900 web scrapers using C# and .Net",
            "Led an initiative to standardize documentation across the team",
            "Trained new developers and interns",
          ],
        },
      ],
    },
    {
      name: "The Vanguard Group",
      location: "Malvern, Pa",
      logo: "vanguard.png",
      roles: [
        {
          title: "Developer (Intermediate)",
          startDate: "June 2014",
          endDate: "July 2015",
          responsibilities: [
            "Developed and maintained automated UI test suite using Java and Selenium",
            "Created presentations and documents to educate employees department wide on test automation best practices",
            "Ran weekly education sessions for QA tests about coding and development",
          ],
        },
        {
          title: "Developer (Entry Level)",
          startDate: "January 2012",
          endDate: "June 2014",
          responsibilities: [
            "Developed a mid-tier order management system for use across all of our trading applications using Java",
            "Supported application elevations, including the largest code elevation in company history at the time",
            "Onboarded new developers",
          ],
        },
      ],
    },
    {
      name: "Temple University Computer Science Department",
      location: "Philadelphia, Pa",
      logo: "temple-full.png",
      roles: [
        {
          title: "Lab Associate",
          startDate: "October 2008",
          endDate: "December 2011",
          responsibilities: [
            "Provided technical support to students and faculty in the department",
            "Installed and maintained hardware and software in computer labs",
            "Tutored students in various Computer Science and IT courses",
          ],
        },
      ],
    },
  ];
}
