import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, Navigate ,useParams } from 'react-router-dom';
import Dropdown from '../components/shared/Dropdown';
import Slider from '../components/Slider';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import AccomodationContext from '../context/AccomodationContext';

function Profile() {
  const { currentAcc, getSingleAccomodation } =
    useContext(AccomodationContext);
  const [test, setTest] = useState(null)
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetching = async () => {
      await getSingleAccomodation(params.listingId);
      setTest(currentAcc)
    };
    fetching().catch(console.error)
  }, [getSingleAccomodation]);

  if(test === 'incorrect'){
    console.log('C INCORRECT')
    
    return <Navigate to="/error" />
    
  }

  if (!test) {
    <Loader />;
  } else {
    return (
      <main className='profile'>
        <Slider slides={currentAcc.pictures} />

        <section className='profile-desc'>
          <div className='profile-left-desc'>
            <h1 className='profile-title'>{currentAcc.title}</h1>
            <h2 className='profile-location'>{currentAcc.location}</h2>
            <div className='profile-tags'>
              { currentAcc.tags.map((tag, index) => (
                <p className='tag' key={index}>{tag}</p>
              ))}
            </div>
          </div>
          <div className='profile-right-desc'>
            <div className='host'>
              <p className='host-name'>{currentAcc.host.name}</p>
              <img className='host-picture' src={currentAcc.host.picture} />
            </div>
            <Rating stars={currentAcc.rating} count={5}/>
          </div>
        </section>
        <section className='full-desc'>
          <Dropdown name='Description' long={false}>
            <p className='dropdown-content'>{currentAcc.description}</p>
          </Dropdown>
          <Dropdown name='Équipements' long={false}>
            {currentAcc.equipments.map((item) => (
              <p className='dropdown-content' key={item}>
                {item}
              </p>
            ))}
          </Dropdown>
        </section>
      </main>
    );
  }
}

export default Profile;
