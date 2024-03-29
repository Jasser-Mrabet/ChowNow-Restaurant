import React from 'react'
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/chef.png";
import { FiArrowRight } from "react-icons/fi";

function HomePage() {
  return (
    <div className='home-container'>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading typing-animation'>
                Taste Joys               </h1>
                <p className='primary-text'>
                Savor our delicious dishes, crafted for you and delivered fast, ensuring every bite is pure joy                </p>
                <button className='secondary-button'>
                    Order Now <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default HomePage