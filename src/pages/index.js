import React from "react"
import { withPrefix, Link } from "gatsby"
import Helmet from 'react-helmet'
import ReactWOW from 'react-wow'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import $ from "jquery";
import Layout from '../components/Layout'
import Particles from "react-tsparticles";
import home_section from '../img/home/home-section-1-img.png';
import home_section_bg from '../img/home/home-section-1-img-background.png';
import about_us from '../img/about-us.png';
import pro_1 from '../img/Inbound-Methodology.png';
import pro_2 from '../img/Integrated-Thinking-or-Systems-Thinking-3.png';
import pro_3 from '../img/OKR.png';
import pro_4 from '../img/sostac.png';
import ico_4 from '../img/icon-4.png';
import ico_3 from '../img/icon-3.png';
import ico_2 from '../img/icon-2.png';
import LazyLoad from 'react-lazyload';
import ClientSlider from '../components/Home/ClientSlider'
import HomeService from '../components/Home/HomeService'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeBlog from '../components/Home/HomeBlog'
import HomePartner from '../components/Home/HomePartner'
import HomeWork from '../components/Home/HomeWork'
const IndexPage = () => (
    <Layout>
    
        <Helmet>
        <title>Web Development & Digital Marketing Agency Dubai, Abu Dhabi, UAE</title>
        <meta name="title" content="QL Tech is a Leading Web Development Agency & Digital Marketing Agency Dubai. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing &amp; More In Dubai, Abu Dhabi, UAE."></meta>
         <meta name="keywords" content="web design firms, Web Design Agency, Web Design Compnay"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Web Development & Digital Marketing Agency Dubai, Abu Dhabi, UAE"></meta>
        <meta property="og:description" content="QL Tech is a Leading Web Development Agency & Digital Marketing Agency Dubai. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing &amp; More In Dubai, Abu Dhabi, UAE."></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="Web Development & Digital Marketing Agency Dubai, Abu Dhabi, UAE"></meta>
        <meta property="twitter:description" content="QL Tech is a Leading Web Development Agency & Digital Marketing Agency Dubai. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing &amp; More In Dubai, Abu Dhabi, UAE."></meta>
        </Helmet>
        
        <div className="bg">
        <div className="area-bg">
            <Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
    <section className="home-section-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <ReactWOW  delay='0.3s' animation='fadeInUp'>
                    <h1 className="heading-main text-center">
                        <span className="d-block">Expert Caretakers to help </span> 
                       <Typewriter
                          options={{
                            strings: ['Make digital work', 'Engage and wow customers','Get ready for the next','Embrace analytics'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                    </h1>
                    </ReactWOW>
                    
                </div>
            </div>
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-lg-8 col-md-10 col-md-offset-1 col-xs-12">
                    <div className="home-parallax-layers" id="home-parallax-layers">
                    <ReactWOW  delay='0.3s' animation='fadInUp'>
                        <Tilt  className="welcome-mockup text-center   Tilt"  >
                            <img data-src={home_section} className="img-fluid d-inline Tilt-inner lazyload" alt="" />
                        </Tilt>
                    </ReactWOW> 
                        <ReactWOW  delay='0.9s' animation='fadeInUp'>
                        <div className="welcome-mockup-bg" 
                            data-wow-delay="0.9s">
                            <img data-src={home_section_bg}  className="img-fluid d-inline lazyload" alt="" />
                        </div>
                        </ReactWOW> 
                    </div>
                </div>
            </div>
        </div>
    </section>
    <LazyLoad height={100} >
    <section className="home-trust-list-section bg-white">
        <div className="container">
            <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10  col-sm-10">
                         <h6 className="section-heading-2 text-center mb-3">
                            Trusted By
                        </h6>
                         <ClientSlider />
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </LazyLoad>
    <LazyLoad height={200} >
    <HomeService />
    </LazyLoad>
    <LazyLoad height={300} >
    <HomeAboutUs />
    </LazyLoad>
    <LazyLoad height={200} >
    <ReactWOW   animation='fadeIn'>
     <section className="home-process-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mb-4">
                        <span className="sub-heading d-block text-center mb-0">Our Processes</span>
                   <ReactWOW   animation='fadeIn'>
                   <h2 className="section-heading text-center  ">
                        Pillars of our Success</h2>
                    </ReactWOW>    
                </div>
            </div>
            <ReactWOW   animation='fadeIn'> 
            <div className="row clearfix">
                <div className="process-block one col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="inner-box  d-inline-block">
                    <div className="inner-box  d-inline-block">
                        <div className="icon-box  ">
                            <span className="icon text-center"><img data-src={pro_2} className="img-fluid lazyload" alt=""/></span>
                        </div>
                        <h3>Integrated Thinking</h3>
                        <div className="number"></div>
                    </div>
                    </div>
                </div>
                 <div className="process-block-two two col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="inner-box d-inline-block">
                        <div className="icon-box  d-lg-none d-block text-center ">
                            <span className="icon text-center"><img data-src={pro_4} className="img-fluid lazyload  d-inline" alt=""/></span>
                        </div>
                        <div className="number"></div>
                        <h3>SOSTAC</h3>
                        <div className="icon-box  d-lg-block d-none  text-center">
                            <span className="icon text-center "><img data-src={pro_4} className="img-fluid lazyload  d-inline" alt=""/></span>
                        </div>
                    </div>
                </div>
                 <div className="process-block three col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="inner-box  d-inline-block" >
                        <div className="icon-box  ">
                            <span className="icon text-center"><img data-src={pro_3} className="img-fluid lazyload  d-inline" alt=""/></span>
                        </div>
                        <h3>OKR</h3>
                        <div className="number"></div>
                    </div>
                </div>
                <div className="process-block-two four col-lg-3 col-md-6 col-sm-6 text-center">
                <div className="inner-box d-inline-block">
                            <div className="icon-box  d-lg-none d-block text-center ">
                                <span className="icon text-center"><img data-src={pro_1} className="img-fluid lazyload  d-inline" alt=""/></span>
                            </div>
                            <div className="number"></div>
                            <h3>Inbound Methodology</h3>
                            <div className="icon-box  d-lg-block d-none  text-center">
                                <span className="icon text-center "><img data-src={pro_1} className="img-fluid lazyload  d-inline" alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
                
        </ReactWOW>
        </div>
    </section>
    </ReactWOW>
    </LazyLoad>
    <LazyLoad height={200} >
    <HomeWork />
    </LazyLoad>
    <LazyLoad height={200} >
    <HomeTestimonial />
    </LazyLoad>
    <LazyLoad height={200} >
    <HomeBlog />
    </LazyLoad>
    <LazyLoad height={200} >
    <HomePartner />
    </LazyLoad>
    </Layout>
)

export default IndexPage
