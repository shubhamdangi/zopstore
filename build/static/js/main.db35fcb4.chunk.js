(this.webpackJsonpsoci=this.webpackJsonpsoci||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),i=n.n(s),r=(n(116),n(117),n(22)),o=n.n(r),l=n(37),j=n(7),d=n(171),b=(n(119),n(38)),p=b.a.initializeApp({apiKey:"AIzaSyDJnIJkNS2dYnzTSFmDIWrOzrDDHzffyXE",authDomain:"zopstore.firebaseapp.com",projectId:"zopstore",storageBucket:"zopstore.appspot.com",messagingSenderId:"893970050692",appId:"1:893970050692:web:fb29f707b6d9dddb631cd1"}).firestore(),u=b.a.auth(),x=b.a.storage(),h=new b.a.auth.GoogleAuthProvider,m=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.signInWithPopup(h).then((function(e){console.log(e.user),t=e.user})).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n(2),g=Object(c.createContext)(),f=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(O.jsx)(g.Provider,{value:{user:[a,s]},children:e.children})},y=n.p+"static/media/sig.742d042f.jpg";function v(){var e=Object(j.a)(Object(c.useContext)(g).user,2),t=(e[0],e[1]),n=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:(n=e.sent)&&t(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"signin",children:Object(O.jsx)(d.a,{onClick:n,children:Object(O.jsx)("img",{src:y,alt:".",style:{width:"220px",height:"45px",borderRadius:"100px",border:"3px solid #333333"}})})})}var w=n(49),C=n(173),S=n(151),N=n(147),k=n(95),I=n(84),A=n.n(I),T=n(175),D=n(185),z=n(10),B=n(69),F=n(184),P=n(174),L=n(148),R=n(82),H=n.n(R),U=n(72),E=n.n(U),W=(n(128),n(83)),M=n.n(W);function J(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}n(46);var Y=Object(C.a)((function(e){return{modal:{display:"flex",alignItems:"center",margin:e.spacing(1),justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[15],margin:e.spacing(.5),padding:e.spacing(2,3,1)},root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var q=function(){var e=Y(),t=a.a.useState(!1),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(j.a)(Object(c.useContext)(g).user,2),o=r[0],l=(r[1],Object(c.useState)("")),u=Object(j.a)(l,2),h=u[0],m=u[1],f=Object(c.useState)(""),y=Object(j.a)(f,2),C=y[0],I=y[1],R=Object(c.useState)(""),U=Object(j.a)(R,2),W=U[0],q=U[1],G=Object(c.useState)(""),V=Object(j.a)(G,2),Q=V[0],K=V[1],_=Object(c.useState)(""),X=Object(j.a)(_,2),Z=X[0],$=X[1],ee=Object(c.useState)(null),te=Object(j.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(0),se=Object(j.a)(ae,2),ie=se[0],re=se[1],oe=Object(c.useState)(!0),le=Object(j.a)(oe,2),je=(le[0],le[1],a.a.useState(!1)),de=Object(j.a)(je,2),be=de[0],pe=de[1],ue=Y(),xe=function(){i(!1)},he=Object(z.a)({root:{color:B.a[400],"&$checked":{color:B.a[600]}},checked:{}})((function(e){return Object(O.jsx)(D.a,Object(w.a)({color:"default"},e))})),me=new Date,Oe=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][me.getMonth()]+" "+me.getDate()+" \xb7 "+me.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return Object(O.jsx)("div",{children:o?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"see",style:{textAlign:"center",padding:"25px",margin:"auto"},children:Object(O.jsxs)(d.a,{style:{alignItems:"center",textAlign:"center",border:"3px solid #e8cb48",borderRadius:"15px",backgroundColor:"#14406d"},variant:"contained",color:"primary",onClick:function(){i(!0)},children:["Publish your own ad \xa0 ",Object(O.jsx)(H.a,{})]})}),Object(O.jsx)(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:s,style:{margin:"auto"},onClose:xe,closeAfterTransition:!0,BackdropComponent:N.a,BackdropProps:{timeout:500},children:Object(O.jsx)(k.a,{in:s,children:Object(O.jsxs)("div",{className:e.paper,children:[Object(O.jsxs)("div",{className:"composeTop",children:[Object(O.jsx)("p",{className:"blankSpace",style:{margin:"0",padding:"0",color:"white"},children:"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"}),Object(O.jsxs)("p",{style:{display:"flex",textAlign:"center",margin:"0",padding:"0",fontWeight:"bold",justifyContent:"space-between"},children:["CREATE YOUR AD"," ",Object(O.jsx)("span",{style:{float:"right"},children:Object(O.jsx)("button",{style:{border:"none",borderRadius:"30%"},type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:xe,children:Object(O.jsx)(E.a,{})})})]})]}),Object(O.jsx)("p",{id:"transition-modal-description"}),Object(O.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),ne){var t=J(10);x.ref("images/".concat(t,".jpg")).put(ne).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);re(t)}),(function(e){console.log(e)}),(function(){x.ref("images").child("".concat(t,".jpg")).getDownloadURL().then((function(e){p.collection("posts").add({timestamp:b.a.firestore.FieldValue.serverTimestamp(),time:Z,price:W,contact:Q,title:h,caption:C,photoUrl:e,username:o.email.replace("@gmail.com",""),profileUrl:o.photoURL})})),I(""),m(""),q(""),K(""),re(0),ce(null)}))}},className:e.root,style:{margin:"0",padding:"0"},children:[Object(O.jsxs)("div",{class:"form-group",style:{margin:"0",padding:"0"},children:[Object(O.jsx)("label",{for:"exampleFormControlTextarea1"}),Object(O.jsx)("p",{style:{margin:"0",padding:"0"},children:"Title*"}),Object(O.jsx)("textarea",{value:h,style:{margin:"0",padding:"3px",resize:"none"},onChange:function(e){return m(e.currentTarget.value)},name:"title",maxlength:"40",class:"form-control",id:"exampleFormControlTextarea1",rows:"1",placeholder:"Product Title or Name"})]}),Object(O.jsxs)("div",{class:"form-group",style:{margin:"0",padding:"0"},children:[Object(O.jsx)("label",{for:"exampleFormControlTextarea1"}),Object(O.jsx)("p",{style:{margin:"0",padding:"0"},children:"Description*"}),Object(O.jsx)("textarea",{value:C,onChange:function(e){return I(e.currentTarget.value)},name:"caption",style:{resize:"none"},maxlength:"90",class:"form-control",id:"exampleFormControlTextarea1",rows:"1",placeholder:"Enter Poduct Description"})]}),Object(O.jsxs)("div",{class:"form-group",style:{margin:"0",padding:"0"},children:[Object(O.jsx)("label",{for:"exampleFormControlTextarea1"}),Object(O.jsx)("p",{style:{margin:"0",padding:"0"},children:"\u20b9 Price*"}),Object(O.jsxs)("div",{className:"priceDiv",style:{display:"flex",justifyContent:"left"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("input",{value:W,style:{margin:"0 3vw 0 0",width:"20vh",padding:"3px"},onChange:function(e){return q(e.currentTarget.value)},name:"price",autocomplete:"off",maxlength:"5",class:"form-control",id:"exampleFormControlTextarea1",rows:"1",placeholder:"Set Price in \u20b9"})}),Object(O.jsx)(T.a,{style:{marginRight:"0"},control:Object(O.jsx)(he,{onChange:function(){q("FREE")},name:"checkedG"}),label:"Donate for Free."})]})]}),Object(O.jsxs)("div",{class:"form-group",style:{margin:"0",padding:"0 0 6px 0"},children:[Object(O.jsx)("label",{for:"exampleFormControlTextarea1"}),Object(O.jsx)("p",{style:{margin:"0",padding:"0"},children:"Contact Number*"}),Object(O.jsx)("input",{value:Q,style:{margin:"0",width:"40vh",padding:"3px"},onChange:function(e){return K(e.currentTarget.value)},name:"contact",autocomplete:"off",maxlength:"10",class:"form-control",id:"exampleFormControlTextarea1",rows:"1",placeholder:"Enter Contact Number"})]}),Object(O.jsxs)("div",{className:"composeBottom",children:[Object(O.jsxs)("div",{className:"compose__file",style:{display:"flex",justifyContent:"space-evenly",padding:"0 3vw 0 0",alignItems:"center"},children:[Object(O.jsx)(d.a,{children:Object(O.jsx)("label",{htmlFor:"fileinput",children:Object(O.jsx)(M.a,{})})}),Object(O.jsx)("input",{id:"fileinput",type:"file",cursor:"pointer",accept:"image/*",onChange:function(e){if(e.target.files[0]){ce(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]),n=document.getElementById("imagePreview");n.src=t,n.style.display="block"}},style:{display:"none"}}),Object(O.jsxs)("p",{id:"simple-modal-description",style:{color:"red",margin:"0 0 8px 0"},children:["image size should be ",Object(O.jsx)("u",{children:"Less than 500 KB*"})]})]}),Object(O.jsx)("div",{className:"uploadBtn",style:{textAlign:"right",paddingTop:"10px"},children:Object(O.jsxs)(d.a,{onClick:function(){$(Oe),setTimeout(xe(),5e3),pe(!0)},style:{border:"1.8px solid #14406d",borderRadius:"15px"},variant:"contained",color:"secondary",type:"submit",disabled:!(C&&ne&&h&&W&&Q),children:["Upload ",0!=ie?ie:""," ",Object(O.jsx)(A.a,{})]})})]}),Object(O.jsx)("div",{className:"composeImage",children:Object(O.jsx)("img",{id:"imagePreview",alt:"demo"})})]})]})})}),Object(O.jsx)("div",{className:ue.root,children:Object(O.jsx)(L.a,{in:be,style:{display:"flex",justifyContent:"center",padding:"10px 0 15px 0"},children:Object(O.jsx)(F.a,{action:Object(O.jsx)(P.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){pe(!1)},children:Object(O.jsx)(E.a,{fontSize:"inherit"})}),children:"Ad Posted Successfully! But it may take few Seconds to appear, Do Not refresh or go back till you see your Ad below."})})})]}):Object(O.jsx)(v,{})})},G=n(17),V=n(85),Q=n.n(V),K=Object(C.a)((function(e){var t;return{toTop:(t={zIndex:2,position:"fixed",bottom:"2vh",backgroundColor:"#DCDCDC",color:"black","&:hover, &.Mui-focusVisible":{transition:"0.3s",color:"#397BA6",backgroundColor:"#DCDCDC"}},Object(G.a)(t,e.breakpoints.up("xs"),{right:"5%",backgroundColor:"rgb(220,220,220,0.7)"}),Object(G.a)(t,e.breakpoints.up("lg"),{right:"3%"}),t)}})),_=function(e){var t=e.showBelow,n=K(),a=Object(c.useState)(!t),s=Object(j.a)(a,2),i=s[0],r=s[1],o=function(){window.pageYOffset>t?i||r(!0):i&&r(!1)};return Object(c.useEffect)((function(){if(t)return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}})),Object(O.jsx)("div",{children:i&&Object(O.jsx)(P.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:n.toTop,"aria-label":"to top",component:"span",children:Object(O.jsx)(Q.a,{})})})},X=(n(130),n.p+"static/media/zopstore2.09ac0ffa.png"),Z=n(15),$=n(176),ee=n(178),te=n(177),ne=(n(131),Object(C.a)((function(e){return{modal:{display:"flex",alignItems:"center",margin:e.spacing(1),justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[15],margin:e.spacing(.5),padding:e.spacing(2,3,1)},root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})));function ce(){ne();var e=a.a.useState(!1),t=Object(j.a)(e,2),n=(t[0],t[1],Object(j.a)(Object(c.useContext)(g).user,2)),s=n[0],i=n[1],r=Object(c.useState)(""),b=Object(j.a)(r,2),p=(b[0],b[1],Object(c.useState)("")),u=Object(j.a)(p,2),x=(u[0],u[1],Object(c.useState)("")),h=Object(j.a)(x,2),f=(h[0],h[1],Object(c.useState)("")),y=Object(j.a)(f,2),v=(y[0],y[1],Object(c.useState)("")),C=Object(j.a)(v,2),S=(C[0],C[1],Object(c.useState)(null)),N=Object(j.a)(S,2),k=(N[0],N[1],Object(c.useState)(0)),I=Object(j.a)(k,2),A=(I[0],I[1],Object(c.useState)(!0)),T=Object(j.a)(A,2),F=(T[0],T[1],a.a.useState(!1)),P=Object(j.a)(F,2);P[0],P[1],ne();Object(z.a)({root:{color:B.a[400],"&$checked":{color:B.a[600]}},checked:{}})((function(e){return Object(O.jsx)(D.a,Object(w.a)({color:"default"},e))}));var L=new Date;L.getMonth(),L.getDate(),L.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});var R=a.a.useState(!1),H=Object(j.a)(R,2),U=H[0],E=H[1],W=function(){E(!1)},M=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:(t=e.sent)&&i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:s?null:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{style:{cursor:"pointer"},onClick:function(){E(!0)},children:"Publish Free Ad"}),Object(O.jsxs)($.a,{open:U,onClose:W,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(te.a,{id:"alert-dialog-title",children:"You must Sign in to publish an Ad"}),Object(O.jsx)(ee.a,{children:Object(O.jsx)(d.a,{onClick:function(){W(),M()},color:"primary",autoFocus:!0,children:"Sign In"})})]})]})})}function ae(){var e=Object(Z.f)(),t=Object(j.a)(Object(c.useContext)(g).user,2),n=t[0],a=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:(t=e.sent)&&a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{class:"nav1",children:[Object(O.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(O.jsx)("div",{class:"nav-header",children:Object(O.jsx)("div",{class:"nav-title",children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("p",{style:{textDecoration:"none",display:"flex",alignItems:"center",margin:"0",padding:"0"},children:Object(O.jsx)("img",{src:X,className:"logo",alt:"logo"})})})})}),Object(O.jsx)("div",{class:"nav-btn",children:Object(O.jsxs)("label",{for:"nav-check",children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]})}),Object(O.jsxs)("div",{class:"nav-links",children:[n?Object(O.jsxs)("div",{className:"userIn",style:{display:"inline-flex",textAlign:"right",marginRight:"1rem",padding:"5px 0 0 0"},children:[Object(O.jsxs)("p",{style:{margin:"3px 5px 0 0",padding:"0",color:"#54e346"},children:[Object(O.jsx)("span",{style:{color:"white",marginLeft:"10px"},children:"Hey!"})," ",n.email.replace("@gmail.com","").toLowerCase()," "]}),Object(O.jsx)("img",{className:"dp",style:{borderRadius:"50px"},src:n.photoURL})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"pc-none",children:Object(O.jsx)("p",{style:{marginTop:"-35px",color:"#14406d"},children:"."})}),Object(O.jsx)("span",{children:"\xa0"})," ",Object(O.jsx)(d.a,{style:{borderRadius:35,backgroundColor:"#21b6ae",padding:"5px 15px",fontSize:"15px",fontWeight:"bold",marginTop:"0px",marginBottom:"8px",border:"1px solid white"},variant:"contained",onClick:s,children:"Login"})," ",Object(O.jsx)("span",{children:"\xa0"})," "]}),Object(O.jsx)("h5",{className:"publish-mobile",children:Object(O.jsxs)("li",{className:"fields",style:{listStyleType:"none"},children:[" ",Object(O.jsx)(ce,{})]})}),Object(O.jsx)("h5",{className:"publish-pc",children:Object(O.jsxs)("li",{style:{listStyleType:"none"},children:[" ",Object(O.jsx)(ce,{})]})}),Object(O.jsx)("a",{href:"/premium",onClick:e.reload,activeClassName:"current",children:Object(O.jsxs)("li",{className:"fields",style:{listStyleType:"none"},children:[" ","Join Premium"]})}),Object(O.jsx)("a",{href:"/about",onClick:e.reload,activeClassName:"current",children:Object(O.jsxs)("li",{className:"fields2",style:{listStyleType:"none"},children:[" ","About"]})})]})]})})}var se=n.p+"static/media/banner.b2cdfbe1.jpg",ie=n.p+"static/media/banner2.0cf43a7a.jpg";n(135);function re(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"banner-container",children:[Object(O.jsx)("div",{className:"banner1-container",children:Object(O.jsx)("img",{src:se,className:"banner1",alt:"..."})}),Object(O.jsx)("div",{className:"banner2-container",children:Object(O.jsx)("img",{src:ie,className:"banner2",alt:"..."})})]})})}n(136);function oe(){return Object(O.jsxs)("div",{className:"footer-div",style:{height:"150px",width:"100%",textAlign:"center",background:"#14406d",paddingBottom:"100px",marginTop:"auto",position:"sticky",top:"100%"},children:[Object(O.jsxs)("p",{style:{color:"white",paddingTop:"13px"},children:[Object(O.jsx)("a",{style:{textDecoration:"none",color:"white",fontSize:"18px"},href:"https://twitter.com/ishubhamdangi",children:Object(O.jsx)("i",{class:"fab fa-twitter"})})," ","\xa0 \xa0",Object(O.jsxs)("a",{style:{textDecoration:"none",color:"white",fontSize:"18px"},href:"https://www.linkedin.com/in/ishubhamdangi/",children:[Object(O.jsx)("i",{class:"fab fa-linkedin-in"})," ",Object(O.jsx)("br",{})]}),Object(O.jsxs)("a",{style:{textDecoration:"none",color:"white",fontSize:"18px"},href:"/about",children:[" ","About"]})," ","\xa0"," ",Object(O.jsxs)("a",{style:{textDecoration:"none",color:"white",fontSize:"18px"},href:"/contact",children:[" ","Contact"]})," ","\xa0"," ",Object(O.jsxs)("a",{style:{textDecoration:"none",color:"white",fontSize:"18px"},href:"/faq",children:[" ","FAQ"]})," ",Object(O.jsx)("br",{}),"zopstore \xa9 2021 ",Object(O.jsx)("br",{}),"A Shubham Dangi Production"]})," "]})}n(137);n(138);var le=n(87),je=n.n(le),de=n(88),be=n.n(de),pe=n(89),ue=n.n(pe),xe=n(90),he=n.n(xe),me=n(179),Oe=n(74),ge=n.n(Oe),fe=a.a.forwardRef((function(e,t){return Object(O.jsx)(me.a,Object(w.a)({direction:"up",ref:t},e))}));function ye(e){var t=e.profileUrl,n=e.username,s=e.id,i=e.photoURL,r=e.title,o=e.caption,l=e.price,b=e.contact,u=(e.comments,e.time),h=a.a.useState(!1),m=Object(j.a)(h,2),f=m[0],y=m[1],v=Object(j.a)(Object(c.useContext)(g).user,2),w=v[0],C=(v[1],Object(c.useState)("Call to make an offer")),S=Object(j.a)(C,2),N=S[0],k=S[1],I=Object(c.useState)("Call to make an offer"),A=Object(j.a)(I,2),z=(A[0],A[1],Object(c.useState)(!1)),B=Object(j.a)(z,2),F=B[0],L=B[1],R=function(){y(!1)};var H=function(){L(!1)},U=" ";U=w?w.email.replace("@gmail.com","").toLowerCase():"no user";return Object(O.jsx)("div",{className:"container ",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-4 product",children:Object(O.jsxs)("div",{class:"card",style:{width:"18em"},children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{class:"dp",src:t,alt:"dp"}),Object(O.jsxs)("div",{className:"nameTime",children:[Object(O.jsxs)("p",{style:{margin:"0",padding:"0",color:"black"},children:["@",n]}),Object(O.jsx)("h6",{style:{margin:"0",padding:"0",color:"grey",fontSize:"0.9rem"},children:u})]})]}),w&&n===U?Object(O.jsxs)("div",{children:[Object(O.jsx)(P.a,{onClick:function(){L(!0)},children:Object(O.jsx)(je.a,{})}),Object(O.jsxs)($.a,{open:F,TransitionComponent:fe,keepMounted:!0,onClose:H,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(O.jsx)(te.a,{id:"alert-dialog-slide-title",children:"Are you sure you want to Delete this Ad?"}),Object(O.jsxs)(ee.a,{children:[Object(O.jsx)(d.a,{onClick:H,children:"Cancel"}),Object(O.jsx)(d.a,{onClick:function(){x.refFromURL(i).delete().then((function(){console.log("delete succesful from storage")})).catch((function(e){console.log(e)})),p.collection("posts").doc(s).delete().then((function(){console.log("delete succesful from firestore")})).catch((function(e){console.log("firestore del err is ".concat(e))}))},color:"secondary",children:"Delete"})]})]})]}):Object(O.jsx)(T.a,{style:{margin:"0 2px 0 0",padding:"0"},control:Object(O.jsx)(D.a,{icon:Object(O.jsx)(be.a,{}),checkedIcon:Object(O.jsx)(ue.a,{}),name:"checkedH"})})]}),Object(O.jsx)("img",{class:"postPhoto",src:i,alt:r}),Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsxs)("div",{className:"price",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(O.jsx)("div",{className:"price1",style:{alignItems:"center"},children:Object(O.jsx)("h6",{class:"card-title",style:{fontSize:"22px"},children:"FREE"===l?Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)("p",{style:{margin:"2px 0 0 0",color:"green"},children:l})," ",Object(O.jsx)(he.a,{style:{color:"green"}})]}):Object(O.jsxs)("p",{style:{margin:"0",padding:"0"},children:["\u20b9 ",l]})})}),w?Object(O.jsx)("a",{style:{textDecoration:"none",color:"#29BB89",marginTop:"-20px",padding:"0"},href:"http://wa.me/+91-".concat(b,"?text=Hey,%20Saw%20your%20Ad%20on%20zopstore!,%20I'm%20interested%20to%20buy%20your%20product.%20"),children:Object(O.jsx)(ge.a,{})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{onClick:function(){y(!0)},style:{textDecoration:"none",color:"#29BB89",marginTop:"-20px",padding:"0",cursor:"pointer"},children:Object(O.jsx)(ge.a,{})})," ",Object(O.jsxs)($.a,{open:f,onClose:R,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(te.a,{id:"alert-dialog-title",children:"Please Login to send a WhatsApp message to the owner."}),Object(O.jsx)(ee.a,{children:Object(O.jsx)(d.a,{onClick:R,color:"primary",children:"Close"})})]})," "]})]}),Object(O.jsxs)("div",{className:"title-caption",style:{alignItems:"left",marginLeft:"-21px",paddingLeft:"0"},children:[Object(O.jsx)("p",{style:{textTransform:"uppercase",marginBottom:"0",color:"black"},children:r}),Object(O.jsx)("p",{style:{color:"black"},children:o})]}),Object(O.jsx)("div",{className:"mao",style:{placeItems:"center",textAlign:"center"},children:w?Object(O.jsx)("button",{style:{border:"none",focus:""},children:Object(O.jsx)("a",{className:"btn btn-primary btn-xlg",href:"tel:".concat(b),children:"Click to Call User"})}):Object(O.jsx)("button",{type:"button",onClick:function(){k("Sign in to Call User")},class:"btn btn-outline-info btn-lg btn-block",children:N})})]})]})})})})}n(139);var ve=n(91),we=n.n(ve),Ce=n(180),Se=n(183);function Ne(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(j.a)(s,2),r=i[0],o=i[1],l=Object(c.useState)(!0),d=Object(j.a)(l,2),b=d[0],u=d[1],x=Object(c.useState)(!1),h=Object(j.a)(x,2),m=h[0],g=h[1],f=12*r;Object(c.useEffect)((function(){p.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]);var y=n.slice(f,f+12).map((function(e){var t=e.id,n=e.post;return Object(O.jsx)("div",{className:"fee",children:Object(O.jsx)(ye,{id:t,profileUrl:n.profileUrl,title:n.title,time:n.time,price:n.price,contact:n.contact,username:n.username,photoURL:n.photoUrl,caption:n.caption,comments:n.comments},t)})})),v=Math.ceil(n.length/12);return setTimeout((function(){u(!1)}),3e3),setTimeout((function(){g(!0)}),8e3),Object(O.jsxs)("div",{className:"feedFull",children:[Object(O.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex"},children:b?Object(O.jsx)(Se.a,{sx:{display:"flex"},children:Object(O.jsx)(Ce.a,{})}):null}),Object(O.jsxs)("div",{className:"feed ",children:[y,m?Object(O.jsx)("div",{className:"pagiArea",children:Object(O.jsx)(we.a,{previousLabel:"<",nextLabel:">",pageCount:v,onPageChange:function(e){var t=e.selected;o(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})}):null]})]})}var ke=function(){return Object(O.jsxs)("div",{className:"home",style:{backgroundColor:"#f7f7f2",minHeight:"100vh"},children:[Object(O.jsx)(re,{}),Object(O.jsx)(q,{}),Object(O.jsx)(Ne,{}),Object(O.jsx)(_,{showBelow:550})]})},Ie=(n(140),n.p+"static/media/premium2.6a91deee.png"),Ae=n(59),Te=n.n(Ae),De=n(47);var ze=function(){var e;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"pagedata",children:[Object(O.jsxs)("div",{className:"PremiumHead",children:[Object(O.jsx)("img",{src:Ie,alt:"Premium-image",className:"PremiumImage"}),Object(O.jsx)("h4",{children:"Get a Premium membership"}),Object(O.jsx)("hr",{}),Object(O.jsx)("h4",{children:"Become a Premium member for just "}),Object(O.jsx)("span",{style:{fontSize:"60px"},children:"\u20b949/year"})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)(De.b,{to:"/premium/apply",children:Object(O.jsx)(d.a,(e={variant:"contained"},Object(G.a)(e,"variant","outlined"),Object(G.a)(e,"style",{backgroundColor:"#95E1D3"}),Object(G.a)(e,"children","Get zopstore Premium"),e))}),Object(O.jsx)("br",{})," ",Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{className:"benefits",style:{textAlign:"center"},children:[Object(O.jsx)("h1",{children:"Premium Benefits"}),Object(O.jsxs)("div",{style:{textAlign:"match-parent",margin:"0 auto"},children:[Object(O.jsxs)("p",{style:{alignItems:"center"},children:[Object(O.jsx)(Te.a,{})," Get FLAT 10% Off on all products"]}),Object(O.jsxs)("p",{style:{alignItems:"center"},children:[Object(O.jsx)(Te.a,{})," Premium Badge on all your Ads"]}),Object(O.jsxs)("p",{style:{alignItems:"center"},children:[Object(O.jsx)(Te.a,{})," Feature your ads on the top feed"]}),Object(O.jsxs)("p",{style:{alignItems:"center"},children:[Object(O.jsx)(Te.a,{})," Early access to occasional sales"]})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{})]})]})]})})};n(141);var Be=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"pagedata",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"PremiumHead",children:"Welcome to zopstore"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("p",{style:{fontSize:"21px",paddingRight:"10px",textAlign:"left"},children:"zopstore is an online platform that helps you Buy/Sell anything at your college/hostel campus."}),Object(O.jsxs)("p",{style:{fontSize:"20px",textAlign:"left"},children:["Currently we have opened up zopstore for popular consumption at:"," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"DBIT Bangalore."}),Object(O.jsx)("br",{}),Object(O.jsx)("i",{children:"(we are expanding to more colleges soon..)"})]}),Object(O.jsxs)("p",{style:{fontSize:"20px",textAlign:"left"},children:[Object(O.jsx)("span",{style:{fontSize:"25px"},children:"You can use zopstore to:"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"Sell/Hand out your unessential things to your juniors/peers eg: Notes, Books, Stationary, Hostel essentials etc."}),Object(O.jsx)("li",{children:"Buy pre-owned things from your seniors/peers at a trivial cost"}),Object(O.jsx)("li",{children:"Directly contact the owner through WhatsApp or Call"}),Object(O.jsx)("li",{children:"Sell/Hand out your previous sem Notes, Books, Manuals, and almost anything to your juniors"}),Object(O.jsx)("li",{children:"Sell/Hand out your Hostel essentials which you don't need anymore"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{marginLeft:"-20px"},children:"To get started, Login to zopstore and start posting you own Ads and buying stuff at a negligible cost."})]})]}),Object(O.jsxs)("div",{className:"content-mobile",children:[Object(O.jsx)("p",{style:{fontSize:"20px",paddingRight:"10px",textAlign:"left"},children:"zopstore is an online platform that helps you Buy/Sell anything at your college/hostel campus."}),Object(O.jsxs)("p",{style:{fontSize:"20px",textAlign:"left"},children:["Currently we have opened up zopstore for popular consumption at:"," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"DBIT Bangalore. "}),Object(O.jsx)("br",{}),Object(O.jsx)("i",{children:"(we are expanding to more colleges soon..)"})]}),Object(O.jsxs)("p",{style:{fontSize:"18px",textAlign:"left"},children:[Object(O.jsx)("span",{style:{fontSize:"22px"},children:Object(O.jsx)("u",{children:"You can use zopstore to:"})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"Sell/Hand out your unessential things to your juniors/peers eg: Notes, Books, Stationary, Hostel essentials etc."}),Object(O.jsx)("li",{children:"Buy pre-owned things from your seniors/peers at a trivial cost"}),Object(O.jsx)("li",{children:"Directly contact the owner through WhatsApp or Call."}),Object(O.jsx)("li",{children:"Sell/Hand out your previous sem Notes, Books, Manuals, and almost everything to your juniors."}),Object(O.jsx)("li",{children:"Sell/Hand out your Hostel essentials which you don't need anymore."})," ",Object(O.jsx)("br",{}),"To get started, Login to zopstore and start posting you own Ads and buy stuff at a negligible cost."]})," ",Object(O.jsx)("br",{})]})]})})})},Fe=(n(142),n.p+"static/media/contact-us.39969ce0.png");var Pe=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"pagedata",children:Object(O.jsxs)("div",{className:"PremiumHead",children:[Object(O.jsx)("img",{src:Fe,alt:"Premium-image",className:"PremiumImage"})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("h4",{children:"Contact Us"}),Object(O.jsx)("hr",{}),Object(O.jsx)("a",{style:{textDecoration:"none"},href:"mailto:contact.zopstore@gmail.com",children:Object(O.jsx)("h3",{children:"contact.zopstore@gmail.com"})}),Object(O.jsx)("br",{})," ",Object(O.jsx)("hr",{})]})})})},Le=n(181),Re=n(92),He=n.n(Re),Ue=n(93),Ee=n.n(Ue),We=n(182),Me=n.p+"static/media/faq.fadea36a.png",Je=(n(143),Object(C.a)({root:{height:300,flexGrow:1,maxWidth:800,textAlign:"center"},label:{fontSize:"200px"}}));function Ye(){var e=Je();return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("img",{src:Me,alt:"faq-image",className:"FaqImage"}),Object(O.jsx)("div",{className:"faq",children:Object(O.jsxs)(Le.a,{className:e.root,defaultCollapseIcon:Object(O.jsx)(He.a,{}),defaultExpandIcon:Object(O.jsx)(Ee.a,{}),children:[Object(O.jsx)(We.a,{nodeId:"1",label:Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"What are the products I can sell ?"}),children:Object(O.jsx)(We.a,{nodeId:"2",label:"You can sell things which are unessential to you like Notes, Books, Manuals of old semester, Hostel essentials which you don't use anymore like a chair, bucket, weights(Dumbbells), or almost anything. "})}),Object(O.jsx)(We.a,{nodeId:"3",label:Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Is there any shipping facility ?"}),children:Object(O.jsx)(We.a,{nodeId:"4",label:"No, there is no shipping on any product, You have to contact the owner of the product and make the deal. "})}),Object(O.jsx)(We.a,{nodeId:"4",label:Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Can I return the product ?"}),children:Object(O.jsx)(We.a,{nodeId:"5",label:"You have to contact the seller regarding that, zopstore is only responsible for connecting the seller and the buyer. "})}),Object(O.jsx)(We.a,{nodeId:"6",label:Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Is there an online payment option ?"}),children:Object(O.jsx)(We.a,{nodeId:"7",label:"No, As of now we dont have any online payment gateway you have to contact the seller and pay him/her accordingly, But we will soon have an online payment gateway for online payments. "})}),Object(O.jsx)(We.a,{nodeId:"8",label:Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"How do I become a premium member ?"}),children:Object(O.jsx)(We.a,{nodeId:"9",label:" Just go to the 'Join Premium' > 'Get Zopstore Premium' and submit the form with required details then you will receive an Email with the payment details and once your payment is verified you will be promoted to a premium member  "})})]})})]})}n(144);var qe=Object(C.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));var Ge=function(){var e=qe(),t=Object(c.useState)(!0),n=Object(j.a)(t,2),a=n[0],s=n[1];return setTimeout((function(){s(!1)}),1500),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"gform",children:[Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"pc",children:[Object(O.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",paddingTop:"50px"},children:a?Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(Ce.a,{})}):null}),Object(O.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScD0MSoSD87D3uJfxgbPmnvsIH7xsv4Ye5kDVFA3C46BfcAJA/viewform?embedded==true",width:"750",height:"725",scrolling:"no",frameborder:"0",marginheight:"0",marginwidth:"0",children:"Loading\u2026"})]}),Object(O.jsxs)("div",{className:"mobile",children:[Object(O.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",paddingTop:"50px"},children:a?Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(Ce.a,{})}):null}),Object(O.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScD0MSoSD87D3uJfxgbPmnvsIH7xsv4Ye5kDVFA3C46BfcAJA/viewform?embedded==true",width:"330",height:"820",scrolling:"no",frameborder:"0",marginheight:"0",marginwidth:"0",children:"Loading\u2026"})]})]})})};var Ve=function(){return Object(O.jsx)(f,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(De.a,{children:[Object(O.jsx)(ae,{}),Object(O.jsxs)(Z.c,{children:[Object(O.jsx)(Z.a,{exact:!0,path:"/",children:Object(O.jsx)(ke,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/premium",children:Object(O.jsx)(ze,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/premium/apply",children:Object(O.jsx)(Ge,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/publish",children:Object(O.jsx)(ce,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/about",children:Object(O.jsx)(Be,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/contact",children:Object(O.jsx)(Pe,{})}),Object(O.jsx)(Z.a,{exact:!0,path:"/faq",children:Object(O.jsx)(Ye,{})})]})]}),Object(O.jsx)(oe,{})]})})};i.a.render(Object(O.jsx)(Ve,{}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.db35fcb4.chunk.js.map