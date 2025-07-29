import React from 'react';
import TravelSlider from './TravelSlider';

function AppDisplayImage() {
  const sliderItems = [
    {
      id: 1,
      backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
      name: 'Switzerland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
    {
      id: 2,
      backgroundImage: 'https://i.ibb.co/jrRb11q/img2.jpg',
      name: 'Finland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
    {
      id: 3,
      backgroundImage: 'https://i.ibb.co/NSwVv8D/img3.jpg',
      name: 'Iceland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
    {
      id: 4,
      backgroundImage: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
      name: 'Australia',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
    {
      id: 5,
      backgroundImage: 'https://i.ibb.co/jTQfmTq/img5.jpg',
      name: 'Netherlands',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
    {
      id: 6,
      backgroundImage: 'https://i.ibb.co/RNkk6L0/img6.jpg',
      name: 'Ireland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      textColor: 'white',
    },
  ];

  return (
    <div>
      <TravelSlider items={sliderItems} />
    </div>
  );
}

export default AppDisplayImage;