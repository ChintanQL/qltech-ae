import React from "react"
import SimpleReactValidator from 'simple-react-validator';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
const recaptchaRef = React.createRef();
class ContactGuide extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
		
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			number: '',
			goal: '',
			crm: '',
			shown: "d-none",
			shown_new: "d-none",
			shown_captcha: "d-none"
			
		}
		this.submitForm = this.submitForm.bind(this);
		this.setTitle = this.setTitle.bind(this);
		this.setln = this.setln.bind(this);
		this.email = this.email.bind(this);
		this.number = this.number.bind(this);
		this.goal = this.goal.bind(this);
		this.crm = this.crm.bind(this);
	}
	
	setTitle(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	setln(e) {
		this.setState({
			last_name: e.target.value
		});
	}
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	number(e) {
		this.setState({
			number: e.target.value
		});
	}
	goal(e) {
		this.setState({
			goal: e.target.value
		});
	}
	crm(e) {
		this.setState({
			crm: e.target.value
		});
	}
	
	
	submitForm() {
		if (this.validator.allValid()) {
			
			var fnew = this.state.first_name.slice(0, 5);  
			var lnew = this.state.last_name.slice(0, 5);  
			
			if(fnew == lnew){
				this.setState({shown_new: "d-block"});
				setTimeout(
					function() {
						this.setState({shown_new: "d-none"});
					}
					.bind(this),
					2000
					);
				return false;
			}  
			const recaptchaValue = recaptchaRef.current.getValue();
			
			if(recaptchaValue == ''){
				
				this.setState({shown_captcha: "d-block"});
				setTimeout(
					function() {
						this.setState({shown_captcha: "d-none"});
					}
					.bind(this),
					2000
					);
				
				
				return false;
			}
			var myarr = ["free", "downloads", "offers", "DA", "PA", "affordable price", "clients", "Some example", "services", "giveaways", "goal", "example", "test", "Marketing", "traffic", "offers","Bitcoin", "ervaringen", "review", "Capsules", "Amoxicillin", "blogger", "supplier", "SEO", "backlinks", "Digital", "Marketing", "link builder", "domain authority", "Off–Page",  "Title Tag Optimization", "Meta Tag Optimization", "keyword", "SERPs"];
			
			var flag = 0;
			for(let i = 0; i < myarr.length; i++){
				if(new RegExp('\\b'+ myarr[i] +'\\b','gi').test(this.state.goal) == true){
					flag = 1;
				}
			}	
			if(flag == 1){
				this.setState({shown: "d-block"});
				setTimeout(
					function() {
						this.setState({shown: "d-none"});
					}
					.bind(this),
					2000
					);
			}
			else{
				const payload = {
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					email: this.state.email,	
					number: this.state.number,
					goal: this.state.goal,
					crm: this.state.crm,
					form_name: "Resource",
				}
				
				

				axios({
					method: 'post',
					url: 'https://steamlinedesign.com/qltech/formbucket/uae.php',
			  data: payload, // you are sending body instead
			  headers: {
			   // 'Authorization': `bearer ${token}`,
			   'Content-Type': 'multipart/form-data'
			 }, 
			}).then(function(response) {
				window.location.href = "https://www.qltech.ae/thank-you/";
			});		
		}
	} else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	}
}

render (){
	return(
		<>
		<form method="POST" id="form" action="https://script.google.com/macros/s/AKfycbz2GVpAx52RIu_6XEgvB6mWuFKnH_BbQwbshxb-mPgB6WRoj_w/exec"  >
		<div className="row justify-content-center">
		<div className="">
		<div className="row">
		<div className="col-md-6 mb-3">
		<label className="label-text">First Name</label>
		<input type="text" className="form-control" placeholder=""  name="first_name" value={this.state.first_name} onChange={this.setTitle}  required/>
		{this.validator.message('First Name', this.state.first_name, 'required|alpha')}
		</div>
		<div className="col-md-6 mb-3">
		<label className="label-text">Last Name</label>
		<input type="text" className="form-control" placeholder=""  name="last_name" value={this.state.last_name} onChange={this.setln} required/>
		{this.validator.message('Last Name', this.state.last_name, 'required|alpha')}
		</div>
		<div className="col-md-12 mb-3">
		<label className="label-text">Email</label>
		<input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="" name="email" required/>
		{this.validator.message('Email', this.state.email, 'required|email')}
		</div>
		<div className="col-md-12 mb-3">
		<label className="label-text">Phone Number</label>
		<input type="text"  value={this.state.number} onChange={this.number} className="form-control" placeholder="" name="number" required/>
		{this.validator.message('Contact Number', this.state.number, 'required|numeric|min:10|max:10')}
		</div>
		<div className="col-md-12 mb-3">
		<label className="label-text">Which CRM do you currently use?<sup>*</sup></label>
		
		<select value={this.state.crm} onChange={this.crm} name="crm" id="input_5_7" className="form-control" required><option value="" selected="selected" className="gf_placeholder">Please select one</option><option value="ZOHO">ZOHO</option><option value="Hubspot">Hubspot</option><option value="Infusionsoft">Infusionsoft</option><option value="Salesforce Pardot">Salesforce Pardot</option><option value="Marketo">Marketo</option><option value="Leadsquared">Leadsquared</option><option value="Ontraport">Ontraport</option><option value="Do not currently use a CRM">Do not currently use a CRM</option><option value="Other">Other</option></select>
		{this.validator.message('crm', this.state.crm, 'required')}
		
		</div>
		<div className="col-md-12">
		<label className="label-text">Your Goal</label>
		<textarea rows="3" onChange={this.goal} className="form-control" placeholder="" name="message" required>{this.state.goal}</textarea>
		</div>
		<div className="col-md-12 mt-3">
		<ReCAPTCHA
		ref={recaptchaRef}
		sitekey="6LdYnWsqAAAAABGf_YFPGhnRH_ltZ3el9VrbJX9D"
		/>
		</div>
		
		
		<p className={"text-danger er-msg "+this.state.shown_captcha} >Please Verify Captcha.</p>
		<input type="hidden" required className="form-control" name="url" value={this.props.url} />
		<input type="hidden" className="form-control" name="form_name" value="Resource" />
		<p  className={"text-danger er-msg "+this.state.shown} >Invalid Message.</p>
		<p  className={"text-danger er-msg "+this.state.shown_new} >First name last name are must be different.</p>
		<div className="col-md-12  mb-4 ">
		<button type="button" onClick={this.submitForm} id="guide1" className="btn-default border-0 btn-sub" value="Submit">Submit</button>
		
		</div>
		</div>
		</div>
		</div>
		
		</form>
		</>
		)
	}
}

export default ContactGuide
