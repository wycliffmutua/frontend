import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">What I Do</span>
      <span className="skillsDesc">
        I am a skilled and passionate web designer with experience in HTML, CSS, and JavaScript, 
        as well as design software such as Adobe Photoshop and Illustrator. I create visually 
        appealing and user-friendly websites that meet the needs of my clients.
      </span>

      <div className="skillsBars">
        <div className="skillsBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
