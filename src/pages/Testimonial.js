import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import user from "../assets/user.jpg"
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user3.jpg"


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={user} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            Chownow exceeded my expectations! Every dish was a delight, and the service was impeccable. Can't wait to return!
            </p>
          </div>
        </div>

        <div>
          <img src={user1} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Chownow is a foodie's paradise! From the warm welcome to the divine flavors, it's a must-visit
            </p>
          </div>
        </div>

        <div>
          <img src={user2} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
            Chownow made our special occasion unforgettable! Charming ambiance, diverse menu, and impeccable service. We'll be back!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}