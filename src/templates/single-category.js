import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Helmet from 'react-helmet'
import quote from  "../img/quote.png"
import BlogAuthor from '../img/fevicon.png';
import Particles from "react-tsparticles";
import ReactWOW from 'react-wow'
class Singlecategory extends Component {
  render() {
    const category = this.props.data.allWpCategory
    const posts = this.props.data.allWpPost
	console.log(posts);
	console.log(posts.edges.length);
	console.log(this.props);
    return (
      <Layout>
	  
			<Helmet>
				<title>{posts.edges[0].node.categories.nodes[0].name} Articles - QL Tech - Dubai, Abu Dhabi, UAE</title>
	<meta name="description" content="QL Tech is a Leading Digital Marketing Agency. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Dubai, Abu Dhabi, UAE."></meta>
			</Helmet>
			<div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						Article
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Article</li>
						</ul>
					</div>
			</section>
			
			
			<section className="blog-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Feature</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/guide/">Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheet</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here..."/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
		
       <div className="container bg-white article-div">
                <div className="row">
                        <div className="col-md-11">
						<div className="row justify-content-center">
                            <div className="col-lg-9 col-md-12">
                            <div className=" ">
                                <div className="row">
                                    {
                          posts.edges &&
                          posts.edges.map(
                                  prop => {
                            return (
							<ReactWOW   animation='fadeInLeft'>
				                      <div className="col-lg-6 col-md-6   article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}>
												
												{(prop.node.BlogExtra.featureImage != null) ? (<img src={prop.node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100"
                                                alt=""/>) : ('')}		
														</Link>
                                            </div>
                                            <div className="thumbnial-content">
                                                <Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title}} className="blog-title">
                                                </Link>
                                                <div className="post-date">{prop.node.date}</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={prop.node.author.node.avatar.url} alt=""/></div>
                                                    By <b>Admin</b>  
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}><span
                                                            className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></Link>
                                                        </li>
                                                        <li><Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}><span className="icon flaticon-share"></span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
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
						<div className="col-lg-3 col-md-12">
                                <div className="sidebar postion-sticky">
                                    <div className="sidebar-widget p-3 bg-light">
                                        <h6 className="sidebar-title">Category</h6>
                                        <ul className="Categary-list">
                                            {category &&
												
												category.edges &&
												category.edges.map(
												(propd,i) => {
													return (
													<>
													{(this.props.path == "/category/"+propd.node.slug+"/") ? (<li key={i} ><Link className="active" to={"/category/"+propd.node.slug+"/"}>{propd.node.name}</Link></li>) : (<li key={i} ><Link to={"/category/"+propd.node.slug}>{propd.node.name}</Link></li>)}
											
													</>
											)
												}
												)}		
										 
                                        </ul>
                                    
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
    )
  }
}

Singlecategory.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singlecategory

export const pageQuery = graphql`
  query($id: String!) {
    
	allWpPost(filter: {categories: { nodes:{ elemMatch: {id: {eq: $id}}}}}) {
    edges {
      node {
        id
        title
		slug
		categories{
			nodes {
					  id
					  name
					  slug
	  }}
	  BlogExtra {
          featureImage {
            sourceUrl
          }
        }
        
		author { 
			node {
					  name
					  description
					  avatar {
						url
					  }
					}
					}
      }
    }
  }
  allWpCategory(filter: {parentDatabaseId: {eq: 24}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			  }
  }
`
