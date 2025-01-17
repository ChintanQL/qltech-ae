import React, { Component } from "react"
import { Link, StaticQuery , graphql} from 'gatsby';
import Isotope from "isotope-layout/js/isotope";
import PropTypes from 'prop-types';
import Particles from "react-tsparticles";
import Layout from '../components/Layout'
import ReactWOW from 'react-wow'
import port_1 from '../img/portfolio/1.jpg'
import port_2 from '../img/portfolio/2.jpg'
import port_3 from '../img/portfolio/3.jpg'
import port_4 from '../img/portfolio/4.jpg'
import port_5 from '../img/portfolio/5.jpg'
import port_6 from '../img/portfolio/6.jpg'
import port_7 from '../img/portfolio/7.jpg'
import port_8 from '../img/portfolio/8.jpg'

import Helmet from 'react-helmet'
class FilterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
  }
  
  componentDidMount() {
    if (typeof window !== "undefined") {
	var link = document.getElementById('Allcss');
    link.click();
	
	document.querySelectorAll('.work-thumbnial').forEach(function(button) {
		var classList = button.className.split(/\s+/);
		
		for (var i = 0; i < classList.length; i++) {
			if(classList[i].indexOf(",") != -1){
				classList[i].split(",").forEach(function(item){
				   button.classList.add(item);
				});
			}
		}
	});
	}
  }

  // Click Function
  onFilterChange = (newFilter,id) => {
	 
	  
	document.querySelectorAll('.flt').forEach(function(button) {	
		button.classList.remove('menu-active');
	});
	document.querySelector("#"+id).classList.add('menu-active');  
	  
    if (this.iso === undefined) {
      this.iso = new Isotope('#grid-container', {
        itemSelector: '.grid-item',
        layoutMode: "masonry",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer2'
        }
      });
    }
    if(newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  }

  render() {
    const posts = this.props.data.allWpWork;
    const category = this.props.data.allWpCategory;
    return(
      // Filter Buttons
	  <Layout>
	  	<Helmet>
		<title>Our Work | Agile software & digital marketing company UAE, Dubai, Abu Dhabi- QL Tech</title>
		<meta name="title" content="Our Work | Agile software & digital marketing company UAE, Dubai, Abu Dhabi- QL Tech"></meta>
		<meta name="description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +971 58 924 6249"></meta>
		 <meta name="keywords" content="QL Tech works, Our works, Portfolio, QL tech portfolio, digital marketing works, Agile development, SEO services, case studies"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Our Work | Agile software & digital marketing company UAE, Dubai, Abu Dhabi- QL Tech"></meta>
		<meta property="og:description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +971 58 924 6249"></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Our Work | Agile software & digital marketing company UAE, Dubai, Abu Dhabi- QL Tech"></meta>
		<meta property="twitter:description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +971 58 924 6249"></meta>
		</Helmet>
	 <div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="breadcumbs-and-title-section">
			
			<div className="container text-center">
				<span className="section-subheading-heading">Work</span> 
				<h1 className="section-heading">
            Success stories
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Home</Link> \</li>
					<li>Work</li>
				</ul>
			</div>
		</section>
		<section className="work-section-1 bg-white">
        <div className="container text-center">
            <ul id="filters" className="isotop-sorting-menu ">
                <li><a href="javascript:void(0)" id="Allcss" onClick={() => {this.onFilterChange("*","Allcss")}} className="menu-active Allcss flt" >All</a></li>
				 {category && category.edges.map(
                        (cats,i) => {
				 return ( 
					 <li><a href="javascript:void(0)" id={"cls"+i} onClick={() => {this.onFilterChange(cats.node.slug,"cls"+i)}} className="flt" dangerouslySetInnerHTML={{ __html: cats.node.name}}  ></a></li>

				 )})}   

			  
               
            </ul>
        </div>
		<div className="main-panel">
              <div className="container">
                <div className="grid" id="grid-container">
					<div className="grid-sizer2"></div>
					<div className="gutter-sizer"></div>
                     {posts && posts && posts.edges.map(
                        prop => {
							var str = "";
                          prop.node.categories.nodes.map(item => { str+= " "+item.slug+" "; })
							return (    
                                    <>
									<ReactWOW   animation='fadeInLeft'>
								<div className={ 'grid-item    work-thumbnial '+str } >
                        <div className="work-thumbnail-image">
                            
								{(prop.node.work.mainImage != "") ? (<img src={prop.node.work.mainImage.sourceUrl} className="img-fluid" alt=""/>) : ('')}
                        </div>
                        <div className="work-thumbnail-details">
                            <p className="work-title">{prop.node.work.title}</p>
                            <p className="label-text">{prop.node.work.shortDescprition}</p>
                            
							
							<Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
							
                        </div>
                    </div>
                    </ReactWOW>
                    </>
								
								
                                      )
                                    }
                                )}
					
                     
                </div>
            </div>
        </div>		
		
        </section>
		
	</Layout>
    )
	
  }
}

FilterGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const Work = () => (
	
	<StaticQuery
    query = {graphql`
      query{
        allWpWork{
                        edges {
                          node {
                            id
							slug
                            work {
                              mainImage {
                                sourceUrl
                              }
                              title
                              shortDescprition
                            }
							categories {
                              nodes {
							  id
                              name
							  slug
                            }
                            }
                          }
                        }
                      }
		allWpCategory(filter: {slug: {regex: "/work/"}}, sort: {fields: databaseId, order: ASC}) {	
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
  render={(data, count) => <FilterGrid data={data} count={count} />}
  />
	
	
)

export default Work





/*export default () => (
  <StaticQuery
    query = {graphql`
      query FilterGridQuery {
        allMarkdownRemark (
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: {templateKey: {eq: "recipe"}}}
          ) {
        edges{
          node{
            id
            frontmatter {
               title
               date
               description
               image {
                 childImageSharp {
                   resize(width: 1500, height: 1500) {
                     src
                   }
                   fluid(maxWidth: 786) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `}
  render={(data, count) => <FilterGrid data={data} count={count} />}
  />

)*/
