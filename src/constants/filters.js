import { projects } from '@/data/projects';

// Group categories by their type
const categoriesByType = projects.reduce((acc, project) => {
  const { category, categoryType } = project;
  
  if (!acc[categoryType]) {
    acc[categoryType] = new Set();
  }
  acc[categoryType].add(category);
  
  return acc;
}, {});

// Convert Sets to Arrays for easy mapping
export const FILTER_CATEGORIES = {
  DEVELOPMENT: Array.from(categoriesByType.DEVELOPMENT || []),
  OTHER: Array.from(categoriesByType.OTHER || [])
};