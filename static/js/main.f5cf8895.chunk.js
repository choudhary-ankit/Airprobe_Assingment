(this.webpackJsonpairprobe=this.webpackJsonpairprobe||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),i=a(11),r=a.n(i),o=(a(89),a(18)),c=a(19),l=a(21),d=a(20),j=a(12),h=a(28),b=a.n(h),g=a(142),p=(a(90),a(74)),u=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:b.a.body,children:[Object(n.jsxs)(p.Carousel,{autoPlay:!0,dynamicHeight:!0,infiniteLoop:!0,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"./solar-power-plant.jpg",alt:"solar img"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"./floating-solar-plant.jpg",alt:"solar img"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"./mountain-solar-plant.jpg",alt:"solar img"})})]}),Object(n.jsxs)("div",{className:b.a.section_center,children:[Object(n.jsx)("div",{className:b.a.heading,children:Object(n.jsx)(g.a,{variant:"h4",children:"Locate Your All Assest at one place"})}),Object(n.jsxs)("div",{className:b.a.grid_arrng,children:[Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./solar-inverter.png",alt:"solar inverter"}),Object(n.jsx)(g.a,{variant:"h5",children:"Solar Inverter"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Collect data from solar inverters &",Object(n.jsx)("br",{})," MPPT strings to give accurate insights ",Object(n.jsx)("br",{}),"into your plant\u2019s performance"]})]}),Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./solar-string.png",alt:"solar string"}),Object(n.jsx)(g.a,{variant:"h5",children:"Solar pv string"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Get detailed insights in solar PV",Object(n.jsx)("br",{})," system by monitoring each string",Object(n.jsx)("br",{})," & identify anomaly instantly",Object(n.jsx)("br",{})," at the right place"]})]}),Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./temperature.png",alt:"solar weather"}),Object(n.jsx)(g.a,{variant:"h5",children:"Weather Station"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Keep track of weather conditions",Object(n.jsx)("br",{})," at your plant location to understand",Object(n.jsx)("br",{})," or predict generation loss & get ",Object(n.jsx)("br",{}),"instant alerts"]})]}),Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./electric-meter-1.png",alt:"Electric meter"}),Object(n.jsx)(g.a,{variant:"h5",children:"Energy Meter"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Monitor energy meters to make",Object(n.jsx)("br",{})," sure energy transfer happens with",Object(n.jsx)("br",{})," minimum losses, else, identify anomalies instantly"]})]}),Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./generator.png",alt:"DG Sync"}),Object(n.jsx)(g.a,{variant:"h5",children:"DG Sync"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Synchronise your solar systems with",Object(n.jsx)("br",{})," existing DG sets locally to derive the ",Object(n.jsx)("br",{}),"maximum benefit"]})]}),Object(n.jsxs)("div",{className:b.a.img_para,children:[Object(n.jsx)("img",{src:"./waterpump.png",alt:"solar pump"}),Object(n.jsx)(g.a,{variant:"h5",children:"Solar Pump"}),Object(n.jsxs)(g.a,{variant:"body2",children:["Know your pump\u2019s runtime & be aware ",Object(n.jsx)("br",{}),"about overuse & misuse. Keep track of",Object(n.jsx)("br",{})," performance & get timely alerts"]})]})]})]})]})}}]),a}(s.Component),m=a(29),_=a.n(m),x=a(145),O=a(146),v=a(147),y=a(22),f=a(75),N=a.n(f),U=a(148),w=a(152),C=a(63),S=a.n(C),D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=localStorage.getItem("loggedInUser");n.setState({LoginCoupon:e})},n.logOut=function(){localStorage.removeItem("loggedInUser"),localStorage.removeItem("UserUID"),window.location.replace("/")},n.drawerOpen=function(){n.setState({open_drawer:!0})},n.drawerClose=function(){n.setState({open_drawer:!1})},n.state={LoginCoupon:null,open_drawer:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props),Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{position:"fixed",style:{background:"linear-gradient(to right, #ff105f, #ffad06)"},children:Object(n.jsxs)(O.a,{className:_.a.text_arrng,children:[Object(n.jsx)("div",{children:Object(n.jsx)(y.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h1",children:"Airprobe"})})}),Object(n.jsx)("div",{className:_.a.fullscreen_display,children:null===this.state.LoginCoupon?Object(n.jsxs)("div",{className:_.a.signin_singup,children:[Object(n.jsx)(y.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Sing In"})}),Object(n.jsx)(y.b,{to:"/singup",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Sing Up"})})]}):Object(n.jsxs)("div",{className:_.a.route_arrng,children:[Object(n.jsx)(y.b,{to:"/tryout",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Tryout"})}),Object(n.jsx)(y.b,{to:"/dashBord",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Dashboard"})}),Object(n.jsx)(v.a,{size:"small",onClick:this.logOut,style:{color:"white",fontWeight:"bolder"},children:"Logout"})]})}),Object(n.jsxs)("div",{className:_.a.small_display,children:[Object(n.jsx)(U.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.drawerOpen,children:Object(n.jsx)(N.a,{})}),Object(n.jsx)(w.a,{variant:"persistent",anchor:"top",open:this.state.open_drawer,className:_.a.drawer_paper,children:Object(n.jsx)("div",{children:null===this.state.LoginCoupon?Object(n.jsxs)("div",{className:_.a.menu_arrng,children:[Object(n.jsxs)("div",{className:_.a.signin_singup,children:[Object(n.jsx)(y.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Sing In"})}),Object(n.jsx)(y.b,{to:"/singup",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Sing Up"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(U.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.drawerClose,children:Object(n.jsx)(S.a,{})})})]}):Object(n.jsxs)("div",{className:_.a.menu_arrng,children:[Object(n.jsxs)("div",{className:_.a.route_arrng,children:[Object(n.jsx)(y.b,{to:"/tryout",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Tryout"})}),Object(n.jsx)(y.b,{to:"/dashBord",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(g.a,{variant:"p",component:"h4",children:"Dashboard"})}),Object(n.jsx)(v.a,{size:"small",onClick:this.logOut,style:{color:"white",fontWeight:"bolder"},children:"Logout"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(U.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.drawerClose,children:Object(n.jsx)(S.a,{})})})]})})})]})]})})})}}]),a}(s.Component),I=a(53),L=a(33),k=a.n(L),z=a(149),P=a(150),T=a(56);a(101);T.a.initializeApp({apiKey:"AIzaSyDSKhrwQiRIgCJjJjjyXimTc9TTxtkD8rk",authDomain:"airprobeassingment.firebaseapp.com",databaseURL:"https://airprobeassingment.firebaseio.com",projectId:"airprobeassingment",storageBucket:"airprobeassingment.appspot.com",messagingSenderId:"674259300053",appId:"1:674259300053:web:2e242ed5ca4b4eb19bfc5c",measurementId:"G-D9P8FNJ5CP"}),T.a.firestore().settings({timestampsInSnapshots:!0});var E=T.a;a(59);var A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.login=function(){n.setState({loader:!0}),E.auth().signInWithEmailAndPassword(n.state.UserEmail,n.state.UserPass).then((function(){var e=E.auth().currentUser;E.firestore().collection("userinfo").doc(e.uid).get().then((function(t){if(t.exists){var a=t.data(),s=Number(a.LoginCount)+1;E.firestore().collection("userinfo").doc(e.uid).set({UserName:a.UserName,UserDate:a.UserDate,UserTime:a.UserTime,LoginCount:s}),setTimeout((function(){window.location.replace("/tryout"),n.setState({loader:!1})}),3e3)}})),window.localStorage.setItem("loggedInUser","Abxhdgfanh"),window.localStorage.setItem("UserUID",e.uid)})).catch((function(e){var t=e.message;n.setState({message:t})}))},n.state={UserEmail:"",UserPass:"",Count:0,message:"",loader:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:k.a.body,children:Object(n.jsx)(z.a,{className:k.a.card,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:k.a.login_div,children:Object(n.jsx)(g.a,{variant:"h4",component:"h4",className:k.a.login_btn,children:"Login"})}),Object(n.jsx)("div",{className:k.a.error_msg,children:Object(n.jsx)(g.a,{variant:"body2",style:{color:"red"},children:this.state.message})}),Object(n.jsxs)("div",{className:k.a.input_group,children:[Object(n.jsx)("input",{type:"email",className:k.a.input_field,placeholder:"Email id",name:"UserEmail",onChange:this.handleChange}),Object(n.jsx)("input",{type:"password",className:k.a.input_field,placeholder:"Password",name:"UserPass",onChange:this.handleChange}),Object(n.jsx)("button",{className:k.a.submit_btn,onClick:this.login,children:this.state.loader?Object(n.jsx)(P.a,{color:"inherit",style:{width:"25px",height:"25px"}}):"Sign In"})]})]})})})}}]),a}(s.Component),F=a(31),M=a.n(F);a(59);var R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.singup=function(){n.setState({loader:!0}),n.state.UserName.length>2?E.auth().createUserWithEmailAndPassword(n.state.UserEmail,n.state.UserPass).then((function(){var e=E.auth().currentUser,t=new Date,a=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear(),s=t.getHours()+":"+t.getMinutes();window.localStorage.setItem("UserUID",e.uid),window.localStorage.setItem("loggedInUser","Abxhdgfanh"),E.firestore().collection("userinfo").doc(e.uid).set({UserName:n.state.UserName,UserDate:a,UserTime:s,LoginCount:1}),setTimeout((function(){window.location.replace("/tryout"),n.setState({loader:!1})}),5e3)})).catch((function(e){var t=e.message;n.setState({message:t})})):n.setState({message:"Your name is less then 3 char"})},n.state={UserName:"",UserEmail:"",UserPass:"",message:"",loader:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:M.a.body,children:Object(n.jsx)(z.a,{className:M.a.card,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:M.a.login_div,children:Object(n.jsx)(g.a,{variant:"h5",component:"h4",className:M.a.login_btn,children:"Singup"})}),Object(n.jsx)("div",{className:M.a.error_msg,children:Object(n.jsx)(g.a,{variant:"body2",style:{color:"red"},children:this.state.message})}),Object(n.jsxs)("div",{className:M.a.input_group,children:[Object(n.jsx)("input",{type:"text",className:M.a.input_field,name:"UserName",placeholder:"Full Name",onChange:this.handleChange}),Object(n.jsx)("input",{type:"email",className:M.a.input_field,name:"UserEmail",placeholder:"Email id",onChange:this.handleChange}),Object(n.jsx)("input",{type:"password",className:M.a.input_field,name:"UserPass",placeholder:"Password",onChange:this.handleChange}),Object(n.jsx)("button",{className:M.a.submit_btn,onClick:this.singup,children:this.state.loader?Object(n.jsx)(P.a,{color:"inherit",style:{width:"25px",height:"25px"}}):"Register"})]})]})})})}}]),a}(s.Component),G=a(42),K=a.n(G),W=a(57),V=a(151),Y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=localStorage.getItem("loggedInUser");n.setState({LoginCoupon:e})},n.marker=function(){15===n.state.zoom?n.setState({minz:21,zoom:21,maxz:22}):!1===n.state.marker?n.setState({marker:!0}):!0===n.state.marker&&n.setState({marker:!1})},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={marker:!1,lat:12.8947913,lng:77.6054581,zoom:15,minz:15,maxz:16,open:!1,LoginCoupon:null},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.state.marker),Object(n.jsx)("div",{className:K.a.body,children:"Abxhdgfanh"===this.state.LoginCoupon?Object(n.jsxs)("div",{children:[Object(n.jsx)(W.Map,{styles:{width:"100%",height:"100%"},google:this.props.google,minZoom:this.state.minz,zoom:this.state.zoom,maxZoom:this.state.maxz,initialCenter:{lat:this.state.lat,lng:this.state.lng},onZoomChanged:this.marker,children:Object(n.jsx)(W.Marker,{draggable:!0,visible:this.state.marker,name:"India",position:{lat:this.state.lat,lng:this.state.lng},onClick:this.handleOpen})}),Object(n.jsx)(V.a,{className:K.a.modal_size,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsxs)("div",{className:K.a.modal_body,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"./airprobe.png",className:K.a.img,alt:"airprobe logo"})}),Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{variant:"body2",children:"AirProbe team carries 35+ years of cumulative experience in Solar PV industry with a mission of developing technologies to improve the performance of Solar PV assets."})})]})})]}):Object(n.jsx)("div",{className:K.a.notauthorize,children:Object(n.jsx)(g.a,{variant:"h4",children:"***You are not authorized to access this page, plz login in your account"})})})}}]),a}(s.Component),B=Object(W.GoogleApiWrapper)({apiKey:"AIzaSyCIKkhVF5OFwH5Ek-LY3vn0P33nf5G755I"})(Y),H=a(26),J=a.n(H),Z=a(76),q=a.n(Z);a(59);var Q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=localStorage.getItem("UserUID");e?(n.setState({UserUID:e}),E.firestore().collection("userinfo").doc(e).get().then((function(e){if(e.exists){var t=e.data();n.setState({UserName:t.UserName,UserDate:t.UserDate,UserTime:t.UserTime,UserCount:t.LoginCount})}}))):n.setState({UserUID:null})},n.state={UserName:"",UserDate:"",UserTime:"",UserCount:"",UserUID:null},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:J.a.body,children:null!=this.state.UserUID?Object(n.jsx)(z.a,{className:J.a.card,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:J.a.login_div,children:Object(n.jsx)("div",{className:J.a.login_btn,children:Object(n.jsx)(q.a,{style:{width:"100px",height:"100px",position:"absolute"}})})}),Object(n.jsxs)("div",{className:J.a.input_group,children:[Object(n.jsx)("input",{type:"text",className:J.a.input_field,value:"User Name:- ".concat(this.state.UserName),readOnly:!0}),Object(n.jsx)("input",{type:"text",className:J.a.input_field,value:"User Registration Date:- ".concat(this.state.UserDate),readOnly:!0}),Object(n.jsx)("input",{type:"text",className:J.a.input_field,value:"User Registration Time:- ".concat(this.state.UserTime),readOnly:!0}),Object(n.jsx)("input",{type:"text",className:J.a.input_field,value:"User Login Count:- ".concat(this.state.UserCount),readOnly:!0})]})]})}):Object(n.jsx)("div",{children:Object(n.jsx)(z.a,{className:J.a.card,children:Object(n.jsx)("div",{className:J.a.notauthorize,children:Object(n.jsx)(g.a,{variant:"h5",component:"h2",children:"***You are not authorized to access this page, plz login in your account"})})})})})}}]),a}(s.Component),X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(D,{}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:u}),Object(n.jsx)(j.a,{path:"/login",component:A}),Object(n.jsx)(j.a,{path:"/singup",component:R}),Object(n.jsx)(j.a,{path:"/tryout",component:B}),Object(n.jsx)(j.a,{path:"/dashbord",exact:!0,component:Q})]})}}]),a}(s.Component),$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(n.jsx)(y.a,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),$()},26:function(e,t,a){e.exports={body:"Dashbord_body__3xEHq",card:"Dashbord_card__1Z7bO",login_div:"Dashbord_login_div__2DQc1",login_btn:"Dashbord_login_btn__2gL3C",input_group:"Dashbord_input_group__3T_eo",input_field:"Dashbord_input_field__20DWb",notauthorize:"Dashbord_notauthorize__xMK6n"}},28:function(e,t,a){e.exports={body:"Landingpage_body__lRQ0X",section_center:"Landingpage_section_center__f6RlS",grid_arrng:"Landingpage_grid_arrng__3uMlY",img_para:"Landingpage_img_para__n-fVi",heading:"Landingpage_heading__2o4-p"}},29:function(e,t,a){e.exports={text_arrng:"Navapp_text_arrng__35p8R",route_arrng:"Navapp_route_arrng__37gaE",signin_singup:"Navapp_signin_singup__3Z2Rq",menu_arrng:"Navapp_menu_arrng__2y_UP",small_display:"Navapp_small_display__Fwggk",fullscreen_display:"Navapp_fullscreen_display__2C_lM"}},31:function(e,t,a){e.exports={body:"Singup_body__2Fm8q",card:"Singup_card__2CGaF",login_div:"Singup_login_div__CLcVm",login_btn:"Singup_login_btn__1k0Gr",input_group:"Singup_input_group__1x3Bj",input_field:"Singup_input_field__2vKEI",submit_btn:"Singup_submit_btn__3vh9S",error_msg:"Singup_error_msg__3wAzH"}},33:function(e,t,a){e.exports={body:"Login_body__1z9a1",card:"Login_card__3Pn3u",login_div:"Login_login_div__2eATa",login_btn:"Login_login_btn__1_7hw",input_group:"Login_input_group__Ff9pi",input_field:"Login_input_field__2rvkj",submit_btn:"Login_submit_btn__3ORi6",error_msg:"Login_error_msg__FTnos"}},42:function(e,t,a){e.exports={body:"Login_landingpage_body__1jOyV",modal_size:"Login_landingpage_modal_size__3Teou",modal_body:"Login_landingpage_modal_body__2-Wje",notauthorize:"Login_landingpage_notauthorize__juEcQ",img:"Login_landingpage_img__3ziIq"}},89:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.f5cf8895.chunk.js.map