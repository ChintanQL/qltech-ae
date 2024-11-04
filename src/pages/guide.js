import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from "react-tsparticles";
import event_thumb from '../img/events/event-thumbnial.jpg';
import Helmet from 'react-helmet'
import ReactWOW from 'react-wow'
const guide = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpGuide{
				edges {
				  node {
					id
					title
					slug
					content
					BlogExtra {
            featureImage{
						  sourceUrl
					  }
					  postedBy
					}
					date(formatString: "D MMMM,Y")
				  }
				}
			}
			allWpCategory(filter: {parentDatabaseId: {eq: 25}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			}
      }
    `}
    render={data => (
		<Layout>
			<Helmet>
				<title>Guide | Handy Resources Guides - QL Tech</title>
				<meta name="title" content="Guide | Handy Resources Guides - QL Tech"></meta>
	    <meta name="description" content="QL Tech is a Leading Digital Marketing Agency. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Dubai, Abu Dhabi, UAE."></meta>
			</Helmet>
			<div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						<span className="section-subheading-heading">Guides</span>
						<h1 className="section-heading">
						Handy Resources
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Guides</li>
						</ul>
					</div>
			</section>
			<section className="guide-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Featured</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				 <div className="container bg-white">
                <div className="row justify-content-center">
                        <div className="col-md-11 ">
                     <div className="row  justify-content-center">
                        <div className="col-lg-12 col-md-12">
                        <div className="row">
						              {data &&
				data.allWpGuide &&
				data.allWpGuide.edges &&
				data.allWpGuide.edges.map(
                prop => {
					return (
						<ReactWOW   animation='fadeInLeft'>
						<div className="col-md-6 col-sm-6">
                            <div className="grid">
                                <div className=" guide-thumbnial">
                                    <div className="guide-image" style={{"background-image":"url("+  prop.node.BlogExtra.featureImage.sourceUrl +")"}}>
								
                                    </div>
                                   
                                    <Link to={"/guide/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title+' <i class="fa fa-long-arrow-right ml-1"></i>'}} className="guide-text">
									 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </ReactWOW>
						
						)
                }
                )}	
						
						
                        
                    </div>
                    </div>
					
                    </div>
                    </div>
                    </div>
            </div>
        </div>
       
           
        </div>
    </section>
		</Layout>
    )}
  />
)

export default guide
