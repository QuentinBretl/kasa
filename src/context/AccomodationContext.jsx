import { createContext, useState, useEffect } from 'react';

const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
  const [accomodation, setAccomodation] = useState([]);
  const [currentAcc, setCurrentAcc] = useState(null)

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
    // NOTE: no need to spread data and item
    let current = accomodation.find((item) => item.id === id);
    setCurrentAcc(current)
    
    // FIX: this fixes being able to add a feedback after editing
    // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
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
