export interface RoleInfo {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface CompanyInfo {
  name: string;
  location: string;
  logo: string;
  roles: RoleInfo[];
}
