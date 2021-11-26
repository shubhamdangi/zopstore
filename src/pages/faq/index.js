import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import FaqImage from "./faq.png";
import "./style.css";

const useStyles = makeStyles({
  root: {
    height: 300,
    flexGrow: 1,
    maxWidth: 800,
    textAlign: "center",
  },
  label: {
    fontSize: "200px",
  },
});

export default function FileSystemNavigator() {
  useEffect(() => {
    document.title = "Zopstore | FAQs";
  }, []);

  const classes = useStyles();

  return (
    <div className="main">
      <img src={FaqImage} alt="faq-image" className="FaqImage" />
      <div className="faq">
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem
            nodeId="1"
            label={
              <span style={{ fontWeight: "bold" }}>
                What are the products I can sell ?
              </span>
            }
          >
            <TreeItem
              nodeId="2"
              label="You can sell things which are unessential to you like Notes, Books, Manuals of old semester, Hostel essentials which you don't use anymore like a chair, bucket, weights(Dumbbells), or almost anything. "
            />
          </TreeItem>
          <TreeItem
            nodeId="3"
            label={
              <span style={{ fontWeight: "bold" }}>
                Is there any shipping facility ?
              </span>
            }
          >
            <TreeItem
              nodeId="4"
              label="No, there is no shipping on any product, You have to contact the owner of the product and make the deal. "
            />
          </TreeItem>
          <TreeItem
            nodeId="4"
            label={
              <span style={{ fontWeight: "bold" }}>
                Can I return the product ?
              </span>
            }
          >
            <TreeItem
              nodeId="5"
              label="You have to contact the seller regarding that, zopstore is only responsible for connecting the seller and the buyer. "
            />
          </TreeItem>
          <TreeItem
            nodeId="6"
            label={
              <span style={{ fontWeight: "bold" }}>
                Is there an online payment option ?
              </span>
            }
          >
            <TreeItem
              nodeId="7"
              label="No, As of now we dont have any online payment gateway you have to contact the seller and pay him/her accordingly, But we will soon have an online payment gateway for online payments. "
            />
          </TreeItem>
          <TreeItem
            nodeId="8"
            label={
              <span style={{ fontWeight: "bold" }}>
                How do I become a premium member ?
              </span>
            }
          >
            <TreeItem
              nodeId="9"
              label=" Just go to the 'Join Premium' > 'Get Zopstore Premium' and submit the form with required details then you will receive an Email with the payment details and once your payment is verified you will be promoted to a premium member  "
            />
          </TreeItem>
        </TreeView>
      </div>
    </div>
  );
}
