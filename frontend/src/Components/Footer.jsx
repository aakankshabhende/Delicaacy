import React, { useRef } from "react";
import emailjs from "emailjs-com";

// Using style as inline CSS for Delicaacy heading
const style = {
  color: "black",
  "font-family": "Sacramento",
  "font-style": "bold",
  "font-size": "3.5rem",
};

const Footer = () => {
  var date = new Date();
  var year = date.getFullYear(); // To get current year
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs // To send Subscription email to user
      .sendForm(
        "service_kfqmavc",
        "template_0slc70d",
        form.current,
        "mPv8BzMqq9aVzTSEL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <footer class="mastfoot pb-5 section-padding bg-grey pb-0">
        <br />
        <div class="inner container">
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-widget pr-lg-5 pr-0">
                <h3 style={style}>Delicaacy</h3>
                <p style={{ color: "black" }}>
                  A property built with every modern comfort you could ask for,
                  with a grand business center, a beautifully decorated lobby
                  and the best multi-cuisine restaurant that serves Chinese,
                  Indian, Continental and Tandoor cuisine.
                </p>
                <nav class="nav nav-mastfoot justify-content-start">
                  <a class="nav-link" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="nav-link" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="nav-link" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-widget px-lg-5 px-0">
                <h4 style={{ color: "black" }}>Open Hours</h4>
                <ul style={{ color: "black" }} class="list-unstyled open-hours">
                  <li class="d-flex justify-content-between">
                    <span>Mon - Sat </span>
                    <span>11:00 AM - 10:00 PM</span>
                  </li>

                  <li class="d-flex justify-content-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="footer-widget pl-lg-5 pl-0">
                <h4 style={{ color: "black" }}>Newsletter</h4>
                <p style={{ color: "black" }}>
                  Subscribe for our Updates through email!
                </p>
                <div class="rounded border">
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="input-group">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        name="user_email"
                        aria-describedby="button-addon1"
                        class="form-control border-0 shadow-0"
                        required
                      />
                      <div class="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          class="btn btn-link"
                        >
                          <i class="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="col-md-12 d-flex align-items-center">
              <br />
              <p style={{ color: "black" }} class="mx-auto text-center mb-0">
                Made with ❤️ by &nbsp;
                <a
                  style={{
                    textDecoration: "none",
                    color: "purple",
                  }}
                  href="https://aakanksha.is-a.dev/"
                >
                  Aakanksha
                </a>
                &nbsp;| Copyright {year}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
