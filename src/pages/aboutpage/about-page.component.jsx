import React from 'react';

import './about-page.styles.scss';

const AboutPage = () => (
  <div className="about-page">
    <h2 className="title">About Us</h2>
    <div className="about-image"></div>
    <div className="content">
      <h3 className="subtitle">Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate odit fugit deserunt ducimus sapiente nobis quam reiciendis cum quae doloribus facere aut debitis soluta nostrum quo molestias corporis unde placeat! Tenetur minus impedit nihil voluptate maiores aspernatur id nam voluptas culpa. Sit quam illo inventore cumque delectus consequatur. aspernatur id nam voluptas culpa. Sit quam illo inventore cumque delectus consequatur</p>
      <h3 className="subtitle">Lorem ipsum dolor</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis odio esse recusandae quae, iusto itaque, facere ea neque, doloribus quam mollitia nobis ipsam! Doloribus quas velit provident eum vel aut animi sed voluptatum itaque odit in eius omnis, ut minima hic iusto cum ab sit explicabo! Hic ipsa omnis quod esse magni dolorum numquam repellendus ea inventore molestias. Provident sit quia, unde dolore maiores sequi animi aliquid minus, repellendus, optio obcaecati labore ex eius. Velit id architecto blanditiis voluptatem.repellendus, optio obcaecati labore ex eius. Velit id architecto blanditiis voluptatem</p>
      <h3 className="subtitle">The Team</h3>
      <div className="team">
        <div className="team-item">
          <div className="image member1"></div>
          <div className="name">John Doe</div>
          <div className="job-title">Director</div>
        </div>
        <div className="team-item">
          <div className="image member2"></div>
          <div className="name">Steven Doe</div>
          <div className="job-title">Manager</div>
        </div>
        <div className="team-item">
          <div className="image member3"></div>
          <div className="name">Mark Doe</div>
          <div className="job-title">Manager</div>
        </div>
        <div className="team-item">
          <div className="image member4"></div>
          <div className="name">Hayden Doe</div>
          <div className="job-title">Designer</div>
        </div>
      </div>
    </div>

  </div>
);

export default AboutPage;