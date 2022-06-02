import React, { useState , useEffect} from "react";
import pic from "../Assets/features-2.png";
const Contact = () => {
  const [user, setuser] = useState('');
  const contactData = async () => {
    console.log('con');
    try {
      const res = await fetch("/getdata", {
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setuser(data);
      if(!res.status === 201){
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
        console.log(err);      
    }
    } 

    useEffect(() => {
      console.log('use');
      contactData();
    }, []);
  let name, value;
  const messdata = (e) => {
     name = e.target.name;
     value = e.target.value;
     const {name, email, message} = user;
     setuser({...user, name: user.name, email: user.email, message: user.message });
  }
  const postdata = async (e) =>{
    e.preventDefault();
    const data = await fetch('/contact',{
      method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }
    });
    const d = await data.json();
    console.log(d);
    
    if (data.status(422) || !d){
        window.alert('Message not sent');
    }
    else{
      window.alert('Message sent successfully');
    }
  }

  return (
    <>
      <div class="container" style={{
        height: "600px",
      }}>
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src={pic} alt="" class="img-fluid mb-3 d-none d-md-block" />
          </div>
          <div class="col-md-7 col-lg-6 ml-auto mt-5">
          <h2 style={{
              textAlign: "center",
                color: "black",
                fontFamily: "Pacifico",
                fontSize: "2.5rem",
          }}>Happy to help you!</h2>
          <br/>
            <form>
              <div class="row">
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    value={user.name}
                    autoComplete="off"
                    name="name"
                    placeholder="Name"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    value={user.email}
                    autoComplete="off"
                    name="email"
                    placeholder="Email"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-12 mb-4">
                  <textarea
                    class="input-group-text bg-white text-left border-md "
                    placeholder="Type your message here"
                    autoComplete="off"
                    onChange={messdata}
                    rows="5"
                    cols="90"
                  ></textarea>
                </div>
                <div class="form-group col-lg-6 mx-auto mb-0">
                  <a
                    href="#"
                    class="btn btn-dark btn-block py-2"
                    onClick={postdata}
                  >
                    <span class="font-weight-bold">Message</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
