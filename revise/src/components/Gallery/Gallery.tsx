import { useCallback, useState } from 'react'
import { sculptureList } from '@constants/';

const Gallery = (): JSX.Element => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;

  const handleClickPrev =  useCallback(() => {
    setIndex(index - 1);
  }, [index]);

  const handleClickNext = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index]

  return (
    <div className="container-gallery">
      <button onClick={handleClickPrev} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleClickNext} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <div className="show-more">
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
      </div>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </div>
  );
}

export default Gallery;