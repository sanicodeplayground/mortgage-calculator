import { financingData, COLORS } from "../utils/consts";
import PropertyFinancing from "../components/PropertyFinancing";

export default function PropertyFinancingPage() {
  return <PropertyFinancing financingData={financingData} COLORS={COLORS} />;
}
