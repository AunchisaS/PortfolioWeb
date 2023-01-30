import React,{ useState } from "react";
import "./contact.css"

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    message:''
  }

  const[formDetails,setFormDetails] = useState(formInitialDetails);
  const[buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}


  const handleSubmit = () => {

  }
  
  return (
    <section id='contact' >
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} action="">
        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
        <textarea  value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
        <button type="submit"><span>{buttonText}</span></button>
        {
          status.massage&&<p className={status.success === false ? "danger" : "success"}>{status.message}</p>
        }
      </form>
    </section>
  )
}

export default Contact