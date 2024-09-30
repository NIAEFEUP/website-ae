import React from 'react';
import { Feature } from "@/types/feature";

const FeatureComponent: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div>
    {typeof feature.icon === 'string' ? (
      <img src={feature.icon} alt={feature.title} />
    ) : (
      feature.icon
    )}
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
);

export default FeatureComponent;
