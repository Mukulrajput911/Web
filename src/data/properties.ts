import propertiesData from './properties.json';

export const properties = propertiesData.properties;
export const featuredProperties = properties.filter(property => 
  propertiesData.featuredProperties.includes(property.id)
);