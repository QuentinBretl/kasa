import {ReactComponent as Star} from '../components/assets/star.svg'
import { useMemo } from 'react';

function Rating({stars, count}) {

    const getColor = (index) => {
        if(index > parseInt(stars)){
            return 'lightgrey'
        } else {
            return '#FF6060'
        }
    }

   const StarRating = useMemo(() => {
        return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map( idx => (
            <Star className ='star' key={idx} fill={getColor(idx)}/>
        ));
   }, [count])
    
    
  return (
    <div className='rating-container'>
        {StarRating}
    </div>
  )
}

export default Rating