import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


function Share() {
const [num, setNum] = useState();

const Getnum = ((e) => setNum(e.target.value))
  useEffect(() => {
    document.title = "Zopstore | Share";
  }, []);

  return (
    <> <br/><br/><br/><br/><br/><br/>

      <div style={{textAlign:"center"}}>
      <WhatsAppIcon style={{ fontSize: 35 }} />
          <h4>Share Zopstore on WhatsApp </h4> <hr />
      <textarea style={{resize:'none'}} onChange={((e) => setNum(e.target.value))} rows="1" cols="25" maxLength="10" placeholder=" Enter Phone Number" autofocus="autofocus"  type="number">
          </textarea>
        <a
        style={{
        textDecoration: "none",
        color: "#29BB89",
        marginTop: "-20px",
        padding: "0",}}
        href={`http://wa.me/+91-${num}?text=https://zopstore.live`}>
         <br/>
        <Button variant="contained" color="primary">Send Link</Button>
        </a>
       
      </div>
    </>
  );
}

export default Share;
