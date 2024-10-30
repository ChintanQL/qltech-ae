import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'
import Contact from '../components/Contact/Contact'
import expert from '../img/expert.png';
import career from '../img/career-b.png';
import Helmet from 'react-helmet'
import Particles from "react-tsparticles";

const IndexPage = () => (
	<Layout>
		<Helmet>
		<title>Contact Us | Web design & Marketing agency Dubai, Abu Dhabi- QL Tech</title>
		<meta name="title" content="Contact Us | Web design & Marketing agency  United Arab Emirates - QL Tech"></meta>
		<meta name="description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		 <meta name="keywords" content="contact ql tech, ql tech contact page, contact ql perth, web design contact company, perth marketing agency, social media marketing agency, crm business consultant, help desk ql tech"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Contact Us | Web design & Marketing agency Dubai, Abu Dhabi- QL Tech"></meta>
		<meta property="og:description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Contact Us | Web design & Marketing agency Dubai, Abu Dhabi- QL Tech"></meta>
		<meta property="twitter:description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		</Helmet>
		<div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="breadcumbs-and-title-section">
            
           <div className="container text-center">
			   <span className="sub-heading">Connect With Us</span>
               <h1 className="section-heading">
                   We'd love to hear from you! 
               </h1>
               <ul className="breadcrumbs">
                   <li> <Link to="/">Home</Link> \</li>
                   <li>Contact Us</li>
               </ul>
           </div>
		</section>
		<section className="contact-us-section-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6  mb-4">
						<div className="card text-center">
							<div className="card-body">
								<span className="card-icon   ">
									
									<img src={expert} className="img-fluid" />
								</span>
								<h6 className="card-title  mb-4">Talk to our experts</h6>
								<p className="label-text mb-4">Need assistance? You are just an e-mail away. Drop a line at  
										<a href="mailto:support@qltech.com.au" className="nav-link m-0 p-0">support@qltech.com.au</a>

								</p>
								<div className="row justify-content-center">
									
									<div className="col-md-5">
										<p className="section-heading-3 mb-0">UAE</p>
										<a href="tel:+971 58 924 6249"  className="nav-link">+971 58 924 6249</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4">
							<div className="card text-center pb-4">
								<div className="card-body">
									<span className="card-icon   ">
										<img src={career} className="img-fluid" />
										
									</span>
									<h6 className="card-title  mb-4">Career</h6>
									<p className="label-text  mb-4">Ready to take on the challenge?  </p>

								   <Link to="/career/" className="btn btn-default mt-0 mb-4"> Go to career section</Link>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
		<section className="contact-us-section-3">
			<div className="container">
				<div className="main-panel">
					<h2 className="section-heading-2 mb-4  pb-4 text-center">Our Office</h2>
					<div className="row justify-content-center">
						<div className="col-md-5 mb-4 d-flex">
							<div className="card">
								<div className="row ">
									<div className="col-lg-12 mb-4">
											
											
											<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14384.753515279004!2d55.7862283!3d25.6650494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5c58b2c7313a7%3A0x5f33458fe1260dcc!2sPackme%20Mena%20Fz%20LLC%2C%20Compass%20Building%20%2CAl%20Shohada%20Road%20AL%20Hamra%20Industrial%20Zone-FZ%20-%20Ras%20al%20Khaimah!5e0!3m2!1sen!2sin!4v1729601792459!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
									</div>
									<div className="col-lg-12 text-left">
										<div className="card-body">
											<p className="card-title mb-1">United Arab Emirates Office (Headquarters)</p>
											<p className="label-text">FOAM1573, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates</p>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>
		</section>
		<section className="form-section ">
				<div className="container">
					<div className="main-panel">
						<h2 className="section-heading-2 text-center mb-4"><span className=" sub-heading d-block mb-2" >Contact Us</span> How Can We Help You?</h2>
						<Contact />
					</div>
				</div>
		</section>
	</Layout>
)

export default IndexPage
