import { useContext } from 'react';
import AccomodationItem from './AccomodationItem';
import AccomodationContext from '../context/AccomodationContext';
import { Link } from 'react-router-dom';

function Listing() {
  const { accomodation } = useContext(AccomodationContext);
  return (
    <div className='listing'>
      <>
        {accomodation.map((item) => (
          <AccomodationItem key={item.id} item={item} />
        ))}
      </>
    </div>
  );
}

export default Listing;
