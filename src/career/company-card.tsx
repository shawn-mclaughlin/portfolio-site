interface RoleInfo {
    title:string
    startDate: string
    endDate: string
    responsibilities:string[]
}

interface CompanyInfo {
    name: string
    location: string
    logo: string
    roles: RoleInfo[]
}

interface CompanyCardProps {
    companyInfo:CompanyInfo
}

export default function CompanyCard(props:CompanyCardProps) {
    const {companyInfo} = props

    return (
        <div className="flex">
            <img src={companyInfo.logo} alt="junk"/>
        </div>
    )
}