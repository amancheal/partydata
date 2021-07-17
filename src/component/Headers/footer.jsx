import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import imag from '../../asset/pdp.png';

function Footer(){
    return(
        <React.Fragment>
            <footer className="bg-dark text-center text-white">

  <div className="container p-4">
    <section className="mb-4">



      <a className="btn btn-outline-light btn-floating mx-2" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>


      <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>


      <a className="btn btn-outline-light btn-floating mx-2" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>


      <a className="btn btn-outline-light btn-floating mx-2" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>


      <a className="btn btn-outline-light btn-floating mx-2" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

    </section>

    <section className="">
      <form action="">

        <div class="row d-flex justify-content-center">
        <div className='col-auto'>
                <span className=''>
            <ReactRoundedImage image={imag}
                               imageWidth="48"
                                imageHeight="48"
                                roundedSize="9"
                                roundedColor="white"
                                />
            </span>
         </div>
          <div class="col-auto">
            <p class="pt-2">
              <em style={{color:'white', fontSize:'1em'}} >  Sign up for our newsletter</em>
            </p>
          </div>

        </div>

      </form>
    </section>

    <section className="mb-4">
      <p>
       The Party Data by PDP (Peeople's Democratic Party) system is used for managing the citizens
      </p>
         <p>
      and their community to get more information and understaning browse through the application
      </p>
       <p>
        and get answers to your questions
      </p>
    </section>



  </div>

  <div className="text-center p-3" style={{backgroundColor: 'green'}}>
    © 2021 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">Party-Data</a>
  </div>

</footer>
        </React.Fragment>
    )
}

export default Footer;
