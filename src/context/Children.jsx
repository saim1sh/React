import React from 'react'
import { FamilyContext } from './FamilyContext';
import { useContext } from 'react';

export default function Children() {
  const familyData = useContext(FamilyContext);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Family Information</h2>
      <p>This component will consume the family data from the context.</p>
      <p>Name: {familyData.name}</p>
      <p>Age: {familyData.age}</p>
      <p>Occupation: {familyData.occupation}</p>
      <p>Hobbies: {familyData.hobbies.join(", ")}</p>
    </div>
  )
}
