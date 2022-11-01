import { createContext, useState, useEffect } from 'react';

const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
  const [accomodation, setAccomodation] = useState([]);
  let [currentAcc, setCurrentAcc] = useState(null);

  useEffect(() => {
    fetchAccomodation();
  }, []);

  // Fetch Accomodation
  const fetchAccomodation = async () => {
    const response = await fetch(`../data/logements.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setAccomodation(data);
  };

  const getSingleAccomodation = async (id) => {
    return await accomodation.find((item) => item.id === id);
  };

  return (
    <AccomodationContext.Provider
      value={{
        accomodation,
        currentAcc,
        getSingleAccomodation,
      }}
    >
      {children}
    </AccomodationContext.Provider>
  );
};

export default AccomodationContext;
