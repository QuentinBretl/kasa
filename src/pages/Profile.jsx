import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import Dropdown from '../components/shared/Dropdown';
import Slider from '../components/Slider';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import AccomodationContext from '../context/AccomodationContext';

function Profile({ children }) {
  const { accomodation, currentAcc, noMatch, getSingleAccomodation } =
    useContext(AccomodationContext);
  const [singleAcc, setSingleAcc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSingleAcc = async () => {
      let data = await getSingleAccomodation(params.listingId);
      if(noMatch){
        setLoading(false)
      }
      if (data) {
          setSingleAcc(data);
        }
    }; 
    try{
      fetchSingleAcc();
      console.log(noMatch);
    } catch(error){
      console.log("po bon")
    }
    
    if (!singleAcc) return;
    else {
      setLoading(false);
    }
  }, [accomodation, singleAcc, params.listingId]);

  if (loading) {
    return <Loader />;
  }

  return (
    noMatch ? <Navigate to="/error" /> : (<main className='profile'>
      <Slider slides={singleAcc.pictures} />

      <section className='profile-desc'>
        <div className='profile-left-desc'>
          <h1 className='profile-title'>{singleAcc.title}</h1>
          <h2 className='profile-location'>{singleAcc.location}</h2>
          <div className='profile-tags'>
            {singleAcc.tags.map((tag, index) => (
              <p className='tag' key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className='profile-right-desc'>
          <div className='host'>
            <p className='host-name'>{singleAcc.host.name}</p>
            <img className='host-picture' src={singleAcc.host.picture} />
          </div>
          <Rating stars={singleAcc.rating} count={5} />
        </div>
      </section>
      <section className='full-desc'>
        <Dropdown name='Description' long={false}>
          <p className='dropdown-content'>{singleAcc.description}</p>
        </Dropdown>
        <Dropdown name='Équipements' long={false}>
          {singleAcc.equipments.map((item) => (
            <p className='dropdown-content' key={item}>
              {item}
            </p>
          ))}
        </Dropdown>
      </section>
    </main>)
  )
}
// }

export default Profile;
