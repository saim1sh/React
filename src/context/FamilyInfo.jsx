import Children from './Children';
import { FamilyContext } from './FamilyContext';

export default function FamilyInfo() {
  const data ={
      name:"John Doe",
      age: 35,
      occupation: "Software Engineer",
      hobbies: ["Coding", "Hiking", "Cooking"],
   }

  return (
    <FamilyContext.Provider value={data}>
      <Children/>
    </FamilyContext.Provider>
  )
}
