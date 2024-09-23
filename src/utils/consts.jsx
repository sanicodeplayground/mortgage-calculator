export const startDate = new Date("2023-08-01");
export const currentDate = new Date("2024-09-22");
export const endDate = new Date("2048-08-01");

export const elapsedDuration = currentDate - startDate;
export const remainingDuration = endDate - currentDate;

export const elapsedYears = elapsedDuration / (365 * 24 * 60 * 60 * 1000);
export const remainingYears = remainingDuration / (365 * 24 * 60 * 60 * 1000);

export const timeData = [
  { name: "Elapsed", years: elapsedYears },
  { name: "Remaining", years: remainingYears },
];

export const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export const propertyPrice = 223000;
export const loanAmount = 182000;
export const deposit = 41000;

export const financingData = [
  { name: "Loan", value: loanAmount },
  { name: "Deposit", value: deposit },
];

// Calculate total interest
export const monthlyPayment = 1001.07;
export const totalPayments = monthlyPayment * 12 * 25;
export const totalInterest = totalPayments - loanAmount;

export const interestData = [
  { name: "Principal", value: loanAmount },
  { name: "Interest", value: totalInterest },
];
