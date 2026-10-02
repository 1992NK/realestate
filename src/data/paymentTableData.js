export const paymentTableData = {
  title: "Payment Table",

  importantNote:
    "Registration Amount is Fully Refundable within 30 days for Unsuccessful Applicants and Applicants not Interested after the Provisional Allotment.",

  columns: [
    {
      key: "serialNo",
      label: "S. No.",
    },
    {
      key: "areaYard",
      label: "Area In (Sq.Yd)",
    },
    {
      key: "areaMeter",
      label: "Area In (Sq.Mtr)",
    },
    {
      key: "rate",
      label: "Rate Per (Sq.Yd)",
    },
    {
      key: "registration",
      label: "Registration Amount",
    },
    {
      key: "withinFiveDays",
      label: "10% Within 5 Days",
    },
    {
      key: "withinThirtyDays",
      label: "30% within 30 Days (Bank Loan Available)",
    },
    {
      key: "clpPlan",
      label: "60% as per CLP Plan (Bank Loan Available)",
    },
    {
      key: "totalCost",
      label: "Total Cost",
    },
  ],

  rows: [
    {
      id: 1,
      serialNo: "1",
      areaYard: "127.786",
      areaMeter: "106.845",
      rate: "₹1,05,000",
      registration: "₹30,000",
      withinFiveDays: "₹13,11,753",
      withinThirtyDays: "₹40,25,259",
      clpPlan: "₹80,50,518",
      totalCost: "₹1,34,17,530",
      applyLink: "#contact",
    },
    {
      id: 2,
      serialNo: "2",
      areaYard: "161.46",
      areaMeter: "135.001",
      rate: "₹1,05,000",
      registration: "₹30,000",
      withinFiveDays: "₹16,65,330",
      withinThirtyDays: "₹50,85,990",
      clpPlan: "₹1,01,71,980",
      totalCost: "₹1,69,53,300",
      applyLink: "#contact",
    },
  ],

  additionalCharges: [
    "PLC & Govt. Charges as applicable",
    "Registration of Builder Buyer Agreement is Mandatory after Making a Total Payment of 10%",
  ],
};