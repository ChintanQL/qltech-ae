import React,{Component} from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
class Calendly extends React.Component {
  
  constructor(props) {
		super(props);
		
  
		this.state = {
          url: 'https://calendly.com/qltechau/discovery-meeting',
         
        
		}
	 
	  
	  
	  
	}
  
  
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
	
	
	if(this.props.location.search != ""){
		var p = this.props.location.search.replace('?','');
		const myArray = p.split("&");
		var n = myArray[0].split("=");
		var name = n[1];
		var p = myArray[1].split("=");
		var phone = p[1];
		var e = myArray[2].split("=");
		var email = e[1];
		var url ="https://calendly.com/qltechau/discovery-meeting/?name="+name+"&location="+phone+"&email="+email;
		this.setState({url: url});
	}
	
	
	
	
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
    return (
      <Layout>
	    <Helmet>
		<title>Schedule a CALL  | Web development & marketing agency UAE, Abu Dhabi, Dubai- QL Tech</title>
		<meta name="title" content="Schedule a CALL  | Web development & marketing agency UAE, Abu Dhabi, Dubai- QL Tech"></meta>
		<meta name="description" content="QL Tech is a Leading Digital Marketing Agency. Our Services Include Web Development, Website Design, CRM Services, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Dubai, Abu Dhabi, UAE."></meta>
       </Helmet>
	    <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={this.state.url}
            style={{ minWidth: '320px', height: '650px' }} />
        </div>
      </Layout>
    );
  }
}

export default Calendly
