import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import GrandChildren from "./GrandChildren";

export default function Children() {
  const familyData = useContext(FamilyContext);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Family Information</h2>
        <p>This component will consume the family data from the context.</p>
        <p>Name: {familyData.name}</p>
        <p>Age: {familyData.age}</p>
        <p>Occupation: {familyData.occupation}</p>
        <p>Hobbies: {familyData.hobbies.join(", ")}</p>
      </div>
      <GrandChildren />
    </div>
  );
}
