import React from 'react';
import PickMeals from "../assets/quality.jpg";
import ChooseMeals from "../assets/delivrey.png";
import DeliveryMeals from "../assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Quality ",
      text: "We maintain top-quality standards in every dish",
    },
    {
      image: ChooseMeals,
      title: "Orders",
      text: "Personalize your meal with our customizable options",
    },
    {
      image: DeliveryMeals,
      title: "Good Fast Deliveries",
      text: "We excel in fast deliveries. From kitchen to you  in no time",
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
        We value exceptional service. Our team ensures a pleasant dining experience from beginning to end        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((data) => (
          <div className='work-section-info' key={data.title}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
