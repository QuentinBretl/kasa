import {ReactComponent as Star} from '../components/assets/star.svg'
import { useCallback, useMemo } from 'react';

function Rating({stars, count}) {

    const getColor = useCallback((index) => {
        if(index > parseInt(stars)){
            return 'lightgrey'
        } else {
            return '#FF6060'
        }
    }, [stars])

   const StarRating = useMemo(() => {
        return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map( idx => (
            <Star className ='star' key={idx} fill={getColor(idx)}/>
        ));
   }, [count, getColor])
    
    
  return (
    <div className='rating-container'>
        {StarRating}
    </div>
  )
}

export default Rating