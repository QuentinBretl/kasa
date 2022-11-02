import { useState, useEffect, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Dropdown from '../components/shared/Dropdown';
import Slider from '../components/Slider';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import AccomodationContext from '../context/AccomodationContext';

function Profile({ children }) {
  const { accomodation } =
    useContext(AccomodationContext);
  const [singleAcc, setSingleAcc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noMatch, setNoMatch] = useState(false)
  
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if(noMatch){
      setLoading(false)
    }
    const fetchSingleAcc = async () => { 
      if(accomodation.length ===0 ){
        return
      }else{
        let data = await accomodation.find((item) => item.id === params.listingId)
        if(!data){
          setNoMatch(true)
        } else {
          setSingleAcc(data)
        }
      }
    }
      fetchSingleAcc();
    
    if (!singleAcc) return;
    else {
      setLoading(false);
    }
  }, [accomodation, singleAcc, params.listingId, noMatch]);

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
            <img className='host-picture' src={singleAcc.host.picture} alt=''/>
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
