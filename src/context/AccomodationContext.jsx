import { createContext, useState, useEffect } from 'react';

const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
  const [accomodation, setAccomodation] = useState([]);


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
    let singleData =  await accomodation.find((item) => item.id === id);
    if(singleData){
      return singleData
    } else {
      return false
    }
  };

  return (
    <AccomodationContext.Provider
      value={{
        accomodation,
        getSingleAccomodation,
      }}
    >
      {children}
    </AccomodationContext.Provider>
  );
};

export default AccomodationContext;
