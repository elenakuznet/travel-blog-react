import { useState } from 'react';
import Lottie from 'lottie-react'; // Use Lottie instead of Player
import './Explore.css';
import globeAnimation from '../../assets/globe-animation-2.json'; // Make sure this path is correct
import Button from '../../components/shared/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const destinations = ['Paris', 'Tokyo', 'New York', 'Rome', 'Sydney', 'Bali', 'Cairo', 'Barcelona'];

const Explore = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setSelectedDestination(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * destinations.length);
      setSelectedDestination(destinations[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (

    <SectionWrapper>
    
        <SectionHeader title={'Where Should You Go Next?'} />
        <div className="explore">
              <div className='globe__wrapper'>
              
              <div className="globe-container">
                    <Lottie
                      animationData={globeAnimation} // Use Lottie component with animationData prop
                      autoplay={isSpinning}
                      loop={isSpinning}
                      style={{ height: '300px', width: '300px' }} // Adjust the size
                    />
                  </div>

                  <Button className="spin-btn" onClick={spinWheel} disabled={isSpinning}>
                    {isSpinning ? 'Spinning...' : 'Spin the Globe!'}
                  </Button>
              </div>
              {/* Globe Animation */}
              

              {selectedDestination && !isSpinning && (
                <div className="destination-result">
                  <h2 className="destination">Your next destination is: {selectedDestination}!</h2>
                </div>
              )}
        </div>      
    </SectionWrapper>
  );
};

export default Explore;
