import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
<<<<<<< HEAD
import Dropdown from '../components/shared/Dropdown';
import Slider from '../components/Slider';
import Loader from '../components/Loader';
=======
import Dropdown from '../components/shared/Dropdown'
import Slider from '../components/Slider';
import Loader from '../components/Loader'
>>>>>>> 06c4b0f277f460afefe21e68e1c86a0632f0eb4e
import AccomodationContext from '../context/AccomodationContext';

function Profile() {
  const { accomodation, currentAcc, getSingleAccomodation } =
    useContext(AccomodationContext);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetching = async () => {
<<<<<<< HEAD
      console.log(currentAcc);
      await getSingleAccomodation(params.listingId);
    };
    fetching().catch(console.error);
  }, [getSingleAccomodation]);

  if (!currentAcc) {
    <Loader />;
  } else {
    return (
      <main className='profile'>
        <Slider slides={currentAcc.pictures} />
=======
      console.log(currentAcc)
      await getSingleAccomodation(params.listingId);
    }
    fetching().catch(console.error)
    
    
  }, [getSingleAccomodation]);

  if (!currentAcc) {

    <Loader />
  } else {
    return (
      <main className='profile'>
        <Slider images={currentAcc.pictures} />
>>>>>>> 06c4b0f277f460afefe21e68e1c86a0632f0eb4e
        <section className='profile-desc'>
          <div className='profile-left-desc'>
            <h1 className='profile-title'>{currentAcc.title}</h1>
            <h2 className='profile-location'>{currentAcc.location}</h2>
          </div>
          <div className='profile-right-desc'>
            <div className='host'>
              <p className='host-name'>{currentAcc.host.name}</p>
              <img className='host-picture' src={currentAcc.host.picture} />
            </div>
            <div className='rating'></div>
          </div>
<<<<<<< HEAD
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
=======
          
        </section>
        <section className='full-desc'>
            <Dropdown name='Description' long={false}>
            <p className='dropdown-content'>
            {currentAcc.description}
            </p>
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
   
  
>>>>>>> 06c4b0f277f460afefe21e68e1c86a0632f0eb4e

export default Profile;
