import * as FiIcons from 'react-icons/fi';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const getIcon = (iconName) => {
  if (!iconName) return <FiIcons.FiStar />; // Default icon

  const IconComponent = 
    FiIcons[iconName] || 
    TbIcons[iconName] || 
    FaIcons[iconName] || 
    MdIcons[iconName];

  return IconComponent ? <IconComponent /> : <FiIcons.FiStar />;
};
