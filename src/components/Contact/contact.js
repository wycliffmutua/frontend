import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';


const Contact = () => {
    return (                
        <section id="contactPage">
            <div id='clients'>  
                <h1 contextMenulassName="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the privilege of working with a diverse range of clients, from small startups to established businesses. My clients appreciate my attention to detail, creativity, and ability to bring their vision to life. I am committed to delivering high-quality work that exceeds their expectations and helps them achieve their goals.
                </p>


            </div>
            <div id='contact'> 
                <h1 className="contactPageTitle">Contact Me</h1>
                 <span className="contactDesc"> Please feel free to reach out to me using the contact form below to discuss any work opportunities. I look forward to connecting with you!</span>
                    <form className="contactForm">
                        <input type="text" className="name" placeholder='Your Name' />
                        <input type="email" className="email" placeholder='Your Email' />
                        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                        <button type='submit' value='Send'className="submitBtn">Submit</button>
                        <div className="links">
                            <img scr={FacebookIcon} alt="Facebook" className="link" />     
                            <img scr={TwitterIcon} alt="Twitter " className="link" />   
                            <img scr={LinkedinIcon} alt="Linkedin" className="link" />   
                            <img scr={InstagramIcon} alt="Instagram" className="link" />                    
                            
                              </div>
                    </form>
            </div>
            </ section>
    );
}

export default Contact;