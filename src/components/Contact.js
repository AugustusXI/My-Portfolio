import React from "react";

const Contact = () => {
  return (
    <section id="contactMe" className="container">
      <div className="wrapper">
        <form className="form">
          <input type="text" className="name formEntry" placeholder="Name" />
        </form>
        <div className="pageTitle title">Sign Up </div>
        <div className="secondaryTitle title">
          Please fill this form to sign up.
        </div>
        <input type="text" className="email formEntry" placeholder="Email" />
        <textarea
          className="message formEntry"
          placeholder="Message"
        ></textarea>
        <input type="checkbox" className="termsConditions" value="Term" />
        <label for="terms">
          I Accept the <span>Terms of Use</span> &<span>Privacy Policy</span>.
        </label>
        <button className="submit formEntry">Submit</button>
      </div>
    </section>
  );
};

export default Contact;

{
  /* // <section id="contactMe" className="container">
      //   <div>
      //     <h2>Let's work together!</h2>
      //     <a className="link" href="mailto:landonaugust@protonmail.com">
      //       Email
      //     </a>
      //   </div>
      // </section> */
}
