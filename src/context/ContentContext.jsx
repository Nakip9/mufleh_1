import { createContext, useContext, useState, useEffect } from 'react';
import * as defaultData from '../data/edit_data';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    company_info: defaultData.COMPANY_INFO,
    contact_info: defaultData.CONTACT_INFO,
    social_links: defaultData.SOCIAL_LINKS,
    destinations: defaultData.allDestinations, // Use full list for management
    popular_destinations: defaultData.popularDestinations,
    testimonials: defaultData.testimonials,
    faqs: defaultData.faqs,
    services: defaultData.allServices
  });
  
  const [loading, setLoading] = useState(true);

  // Function to refresh content from API
  const refreshContent = async () => {
    try {
      const response = await fetch('/api/content/get');
      const result = await response.json();

      if (result.success && result.data) {
        // Merge API data with default data
        // We only override if the API returns non-empty data for that key
        setContent(prev => {
          const newContent = { ...prev };
          Object.keys(result.data).forEach(key => {
            // Check if the data is valid (non-empty object or array)
            const val = result.data[key];
            const isValid = Array.isArray(val) ? val.length > 0 : Object.keys(val || {}).length > 0;
            
            if (isValid) {
               // Special handling for destinations separation if needed
               // For now, we map 'destinations' from DB to 'allDestinations' in state
               if (key === 'destinations') {
                 newContent.destinations = val;
                 // We can also auto-generate popular destinations from the first few
                 newContent.popular_destinations = val.slice(0, 5).map(d => ({
                   name: d.name,
                   image: d.image,
                   price: d.price,
                   category: d.description ? d.description.substring(0, 20) + '...' : 'عام'
                 }));
               } else {
                 newContent[key] = val;
               }
            }
          });
          return newContent;
        });
      }
    } catch (err) {
      console.error("Failed to fetch dynamic content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
