import { timeData } from "../utils/consts";
import LoanDuration from "../components/LoanDuration";

export default function LoanDurationPage() {
  return (
    <>
      <LoanDuration timeData={timeData} />
    </>
  );
}
