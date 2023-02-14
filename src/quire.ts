import * as Faker from "faker"
export class Quire {
  reportStatuses: Array<string>
  reportTypes: Array<string>
  reportTypesShort: Array<string>
  permissionLevels: Array<string>
  projectNumberFormats: Array<string>

  constructor() {
    this.reportTypes = [
      "Phase I Environmental Site Assessment",
      "Freddie Mac Phase I ESA",
      "Fannie Mae Phase I ESA",
      "HUD Phase I ESA",
      "Phase II ESA",
      "Transaction Screen",
      "RSRA",
      "Desktop Review",
      "Property Condition Assessment",
      "Fannie Mae PCA",
      "Freddie Mac PCA",
      "Proposal",
      "DCR",
      "Construction Loan Monitoring",
      "Fannie Mae Green",
      "Freddie Mac Green",
      "Fannie Mae HPB",
      "Seismic",
      "Fannie Mae Seismic",
      "Freddie Mac Seismic",
      "FCA",
      "Zoning",
      "SWPPP",
      "ACM Survey",
      "LBP Survey",
      "IAQ Survey",
      "Radon",
      "Mold",
      "Groundwater",
      "O&M",
      "MMP",
      "Health & Safety Plan",
      "SPCC Plan",
      "Cost Segregation"
    ]
    this.reportTypesShort = [
      "ESA",
      "FMAC ESA",
      "FNMA Phase I ESA",
      "HUD Phase I ESA",
      "PHII ESA",
      "TS",
      "RSRA",
      "DR",
      "PCA",
      "FNMA PCA",
      "FMAC PCA",
      "Proposal",
      "DCR",
      "CLM",
      "FNMA Green",
      "FMAC Green",
      "FNMA HPB",
      "SEI",
      "FNMA SEI",
      "FMAC SEI",
      "FCA",
      "ZON",
      "SWPPP",
      "ACM",
      "LBP",
      "IAQ",
      "RAD",
      "MOLD",
      "GW",
      "O&M",
      "MMP",
      "HASP",
      "SPCC",
      "Cost Seg"
    ]

    this.reportStatuses = [
      "Data Entry",
      "Site Visit",
      "Draft",
      "Pre-QA",
      "Final Review",
      "Final",
      "Final (Locked)"
    ]

    this.permissionLevels = [
      "Contractor",
      "Author",
      "Editor",
      "PM",
      "Admin",
      "System Admin"
    ]

    this.projectNumberFormats = [
      "XX-0000",
      "XXX-0000",
      "XXXX-000",
      "X0-XXXX0000",
      "X00-0000-X0"
    ]
  }

  fake(m:string): string {
    switch (m) {
      case "permissionLevel":
        return this.permissionLevels[Math.floor(Math.random() * this.permissionLevels.length)];
      case "reportType":
        return this.reportTypes[Math.floor(Math.random() * this.reportTypes.length)];
      case "reportTypeShort":
        return this.reportTypesShort[Math.floor(Math.random() * this.reportTypesShort.length)];
      case "reportStatus":
        return this.reportStatuses[Math.floor(Math.random() * this.reportStatuses.length)];
      case "reportName":
        return `${this.fake("projectNumber")} - ${this.fake("siteAddress")} - ${this.fake("reportTypeShort")}`
      case "reportName2":
        return `${this.fake("reportTypeShort")} - ${this.fake("siteAddress")} - ${Faker["address"]["cityName"]().toString()}, ${Faker["address"]["stateAbbr"]().toString() }`
      case "siteAddress":
        return Faker["address"]["streetAddress"]().toString()
      case "projectNumber":
        const format = this.projectNumberFormats[Math.floor(Math.random() * this.projectNumberFormats.length)]
        return this.projectNumber(format)
      default:
        return "This method has not been defined: " + m;
    }
  }

  projectNumber(format: string): string {
    let pn = ""
    for(let i = 0; i < format.length; i++){
      const charType = format[i]
      switch (charType){
        case "X":
          const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          pn += alpha[Math.floor(Math.random() * alpha.length)]
          break
        case "0":
          const digits = [0,1,2,3,4,5,6,7,8,9]
          pn += digits[Math.floor(Math.random() * digits.length)]
          break
        default:
          pn += charType
      }
    }
    return pn
  }
}