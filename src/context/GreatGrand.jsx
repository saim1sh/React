import React from 'react'
import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

export default function GreatGrand() {
   const greatGrandData = useContext(FamilyContext);
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Great Grandchild Component</h3>
      <p>This component also consumes the family data from the context.</p>
      <p>Name: {greatGrandData.name}</p>
    </div>
  )
}
