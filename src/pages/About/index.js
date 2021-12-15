import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


import "./style.css";

function About() {
  useEffect(() => {
    document.title = "Zopstore | About";
  }, []);

  return (
    <>
      <div className="pagedata">
        <div>
          <h1 className="PremiumHead">Welcome to zopstore</h1>
          <hr />
          {/* <hr /> */}
          <div className="content">
            <p
              style={{
                fontSize: "21px",
                paddingRight: "10px",
                textAlign: "left",
              }}
            >
              zopstore is an online platform that helps you Buy/Sell anything at
              your college/hostel campus.
            </p>
            <p style={{ fontSize: "20px", textAlign: "left" }}>
              Currently we have opened up zopstore for popular consumption at:{" "}
              <br /> <span style={{ fontWeight: "bold" }}>DBIT Bangalore.</span>
              <br />
              <i>(we are expanding to more colleges soon..)</i>
            </p>
            <p style={{ fontSize: "20px", textAlign: "left" }}>
              <span style={{ fontSize: "25px" }}>You can use zopstore to:</span>{" "}
              <br />
              <li>
                Sell/Hand out your unessential things to your juniors/peers eg:
                Notes, Books, Stationary, Hostel essentials etc.
              </li>
              <li>
                Buy pre-owned things from your seniors/peers at a trivial cost
              </li>
              <li>Directly contact the owner through WhatsApp or Call</li>
              <li>
                Sell/Hand out your previous sem Notes, Books, Manuals, and
                almost anything to your juniors
              </li>
              <li>
                Sell/Hand out your Hostel essentials which you don't need
                anymore
              </li>{" "}
              <br />
              <span style={{ marginLeft: "-20px" }}>
                To get started, Login to zopstore and start posting you own Ads
                and buying stuff at a negligible cost.
              </span>
              <br />

              <Link style={{textDecoration:'none'}} to="/share"> <WhatsAppIcon /> Share on WhatsApp </Link>
            </p>

          </div>
          <div className="content-mobile">
            <p
              style={{
                fontSize: "20px",
                paddingRight: "10px",
                textAlign: "left",
              }}
            >
              zopstore is an online platform that helps you Buy/Sell anything at
              your college/hostel campus.
            </p>
            <p style={{ fontSize: "20px", textAlign: "left" }}>
              Currently we have opened up zopstore for popular consumption at:{" "}
              <br />{" "}
              <span style={{ fontWeight: "bold" }}>DBIT Bangalore. </span>
              <br />
              <i>(we are expanding to more colleges soon..)</i>
            </p>
            <p style={{ fontSize: "18px", textAlign: "left" }}>
              <span style={{ fontSize: "22px" }}>
                <u>You can use zopstore to:</u>
              </span>{" "}
              <br />
              <li>
                Sell/Hand out your unessential things to your juniors/peers eg:
                Notes, Books, Stationary, Hostel essentials etc.
              </li>
              <li>
                Buy pre-owned things from your seniors/peers at a trivial cost
              </li>
              <li>Directly contact the owner through WhatsApp or Call.</li>
              <li>
                Sell/Hand out your previous sem Notes, Books, Manuals, and
                almost anything to your juniors.
              </li>
              <li>
                Sell/Hand out your Hostel essentials which you don't need
                anymore.
              </li>{" "}
              <br />
              To get started, Login to zopstore and start posting you own Ads
              and buy stuff at a negligible cost. <br /> 
              <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link style={{textDecoration:'none'}} to="/share"> <WhatsAppIcon /> Share on WhatsApp </Link>
            </p>{" "}
          </div> 
          
        </div>
      </div>
    </>
  );
}

export default About;
