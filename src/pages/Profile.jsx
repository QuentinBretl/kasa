import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import AccomodationContext from '../context/AccomodationContext';

function Profile() {
  const { accomodation, getSingleAccomodation } =
    useContext(AccomodationContext);

  const [currentAcc, setCurrentAcc] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const acc = await getSingleAccomodation(params.listingId);
      setCurrentAcc(acc);
    })();
    setLoading(false);
    return () => {
      <div>{currentAcc.title}</div>;
    };
  }, []);

  if (loading) {
    return <div>CA CHARGE FRERE ATTENDS</div>;
  }
  return (
    <main className='profile'>
      <Slider images />
      <section className='profile-desc'>
        <div className='profile-left-desc'>
          <h1 className='profile-title'>{console.log(currentAcc)}</h1>
          <h2 className='profile-location'></h2>
        </div>
        <div className='profile-right-desc'>
          <div className='host'>
            <p className='host-name'></p>
            <p className='host-picture'></p>
          </div>
          <div className='rating'></div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
