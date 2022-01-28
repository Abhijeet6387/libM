(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(11),l=s.n(n),o=(s(40),s(3)),r=(s(41),s.p+"static/media/logo.be6b2014.png"),i=s(6),j=s(0);function b(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-transparent",children:[Object(j.jsxs)("h4",{className:"navbar-brand",href:"/",style:{color:"white",fontFamily:"inherit"},children:[Object(j.jsx)("img",{src:r,alt:"logo"}),"Library Management System"]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon",children:Object(j.jsx)("i",{className:"fa fa-navicon"})})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsx)("li",{className:"nav-item hover-link",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/home",children:[Object(j.jsx)("i",{className:"fa fa-fw fa-home"}),"Home"]})}),Object(j.jsx)("li",{className:"nav-item hover-link",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/books",children:[Object(j.jsx)("i",{className:"fa fa-fw fa-book"}),"Books"]})}),localStorage.getItem("my_token")?Object(j.jsx)("li",{className:"nav-item hover-link",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/profile",children:[Object(j.jsx)("i",{className:"fa fa-fw fa-user"}),"Profile"]})}):Object(j.jsx)("li",{className:"nav-item hover-link",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/signin",children:[Object(j.jsx)("i",{className:"fa fa-fw fa-sign-in"}),"Sign In"]})})]})})]})})})}s.p;function d(){return Object(j.jsx)("div",{className:"card container",style:{height:"600px",overflow:"auto"},children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{children:"What is a Library Management System ?"}),Object(j.jsx)("section",{children:"A Library Management System is a software built to handle the primary housekeeping functions of a library. Libraries rely on library management systems to manage asset collections as well as relationships with their members. Library management systems help libraries keep track of the books and their checkouts, as well as members\u2019 subscriptions and profiles. Library management systems also involve maintaining the database for entering new books and recording books that have been borrowed with their respective due dates."}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"Importance of LMS"}),Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"A library management system is the most proficient and easy to use system for managing all the processes involved in a Library in the most effective ways."}),Object(j.jsx)("li",{children:"This system will reduce all the manual work and the whole process can be managed just through single clicks and edits."}),Object(j.jsx)("li",{children:"There will be no headache and doubtfulness of storing the data securely and searching the records of any individual afterward."}),Object(j.jsx)("li",{children:"Any book seeker can rent a book just by signing in with their details, and return it with the date of returning."}),Object(j.jsx)("li",{children:"The staff can also facilitate themselves with some extra authorizations and privileges. Only, one person is required to take care of the whole system, without any chances of mistakes."})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:" Key Features"}),Object(j.jsxs)("section",{children:["A library Management System does the following tasks :",Object(j.jsx)("br",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Maintaining stock : This is a very important feature of all library software. With the help of library system we can maintain the stocks such as books,newspapers, magazines more efficiently. With the help of this feature our manual works have reduced to a great extent. This feature can also be termed as cataloging. This feature also helps in editing or deleting the data, if required."}),Object(j.jsx)("li",{children:"Classification of stocks : The stocks can be classified as per author name, publication, category, price , location of book (i.e shelf or rack id)."}),Object(j.jsx)("li",{children:"Search : The LMS provides search option to the librarians which makes their work fast and easy. Librarian can search stock in seconds."}),Object(j.jsx)("li",{children:"Report : LMS audits the entire library in no time and generate reports accordingly, which makes the work of a librarian very easy."}),Object(j.jsx)("li",{children:"Manages demands : It keeps records of the demand by the members of those item that are currently unavailable."})]})]})]})})}var h=s(29),u=s.n(h),m=s(67),O=s(7),f=s.n(O);function x(e){var t=Object(a.useState)([]),s=Object(o.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)(""),r=Object(o.a)(l,2),b=r[0],d=r[1],h=Object(a.useState)(""),O=Object(o.a)(h,2),x=O[0],p=O[1],g=Object(a.useState)(""),v=Object(o.a)(g,2),N=v[0],y=v[1],k=Object(a.useState)(""),w=Object(o.a)(k,2),S=w[0],C=w[1],I=Object(a.useState)(""),A=Object(o.a)(I,2),E=A[0],B=A[1],L=Object(a.useState)(!0),P=Object(o.a)(L,2),D=P[0],T=P[1],M=Object(a.useState)(null),W=Object(o.a)(M,2),F=W[0],_=W[1],q=Object(a.useState)(!1),H=Object(o.a)(q,2),U=H[0],Y=H[1],z=Object(a.useState)(!1),R=Object(o.a)(z,2),J=R[0],V=R[1],K=function(){return Y(!1)},$=function(){return V(!1)};Object(a.useEffect)((function(){G()}),[]);var G=function(){f.a.get("/books/getbook").then((function(e){n(e.data)})).catch((function(e){console.log(e)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"card container",children:[Object(j.jsx)("div",{className:"card-body table-responsive ",children:0===c.length?Object(j.jsx)("p",{children:"Sorry, Books are currently unavailable !"}):Object(j.jsxs)("div",{className:"table-wrapper",children:[Object(j.jsx)("div",{className:"table-title",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-8",children:Object(j.jsx)("h4",{className:"float-left",children:"Book List"})}),Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsxs)("div",{className:"search-box",children:[Object(j.jsx)("i",{className:"fa fa-wh fa-search"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Search"})]})})]})}),Object(j.jsx)("div",{style:{overflow:"auto",height:"400px"},children:Object(j.jsxs)("table",{className:"table table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"S.No"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Author"}),Object(j.jsx)("th",{scope:"col",children:"Subject"}),Object(j.jsx)("th",{scope:"col",children:"Availability"}),Object(j.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(j.jsx)("tbody",{className:"getbooks",children:c.map((function(t,s){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:s+1}),Object(j.jsx)("td",{children:t.Name}),Object(j.jsx)("td",{children:t.Author}),Object(j.jsx)("td",{children:t.Subject}),Object(j.jsx)("td",{children:"true"===t.Availability.toString()?Object(j.jsx)("i",{className:" fa fa-wh fa-light fa-check-circle",style:{marginLeft:"25px"}}):Object(j.jsx)("i",{className:"fa fa-wh fa-times",style:{marginLeft:"25px"}})}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"actions",children:[e.userInfo&&!e.userInfo.isPatron?Object(j.jsx)("i",{className:"fa fa-fw fa-pencil",onClick:function(){return function(e){_(e._id),d(e.Name),p(e.Author),y(e.Subject),Y(!0)}(t)},title:"Update"}):Object(j.jsx)("i",{className:"fa fa-fw fa-pencil disabled",title:"Disabled"}),e.userInfo&&!e.userInfo.isPatron?Object(j.jsx)("i",{className:"fa fa-fw fa-trash",onClick:function(){return function(e){f.a.delete("/books/deletebook/"+e).then((function(){window.confirm("Are you sure?")&&(alert("Book is Deleted Successfully!"),G())})).catch((function(e){console.log(e)}))}(t._id)},title:"Delete"}):Object(j.jsx)("i",{className:"fa fa-fw fa-trash disabled",title:"Disabled"}),Object(j.jsx)("i",{className:"fa fa-wh fa-eye",onClick:function(){return function(e){_(e._id),d(e.Name),p(e.Author),y(e.Subject),T(e.Availability.toString()),V(!0),C(e.Ownername),B(e.Expirydate)}(t)},title:"View"})]})})]})}))})]})})]})}),!e.userInfo||e.userInfo.isPatron?Object(j.jsxs)("button",{type:"button",className:"btn btn-success",disabled:!0,children:[Object(j.jsx)("i",{className:"fa fa-fw fa-plus"}),"Add Book"]}):Object(j.jsx)("button",{type:"button",className:"btn btn-success",children:Object(j.jsxs)(i.b,{className:"addbook",to:"/addbook",style:{textDecoration:"none"},children:[Object(j.jsx)("i",{className:"fa fa-fw fa-plus"}),"Add Book"]})}),Object(j.jsx)("p",{className:"text-muted",style:{fontSize:"4px"},children:"Click on the eye button in actions to view the details of the book and issue it!"})]}),Object(j.jsxs)(m.a,{show:U,onHide:K,children:[Object(j.jsx)(m.a.Header,{className:"modalhead",children:Object(j.jsx)(m.a.Title,{children:"Edit Book "})}),Object(j.jsxs)(m.a.Body,{children:[Object(j.jsx)("p",{className:"text-muted",children:Object(j.jsx)("small",{children:"Please fill up the changes to update!"})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===b||""===x||""===N||null===F?alert("Please fill the details"):(console.log(b,x,N),f.a.post("/books/updatebook/"+F,{Name:b,Author:x,Subject:N}).then((function(e){alert("Book Updated Successfully!"),console.log(e.data),d(""),p(""),y(""),_(null),K(),G()})).catch((function(e){console.log(e)})))},className:"container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:b,placeholder:"Enter Name",onChange:function(e){d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Author"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:x,placeholder:"Enter Author's Name",onChange:function(e){p(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Subject"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:N,placeholder:"Enter Subject",onChange:function(e){y(e.target.value)}})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",style:{float:"right"},children:"Submit"}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:K,children:"Close"})]})]})]}),Object(j.jsxs)(m.a,{show:J,onHide:$,children:[Object(j.jsx)(m.a.Header,{className:"modalhead",children:Object(j.jsx)(m.a.Title,{children:"View Book"})}),Object(j.jsxs)(m.a.Body,{children:[Object(j.jsxs)("div",{className:"row ml-5",children:[Object(j.jsxs)("p",{className:"col",children:[" Name: ",b]}),Object(j.jsxs)("p",{className:"col",children:[" Subject: ",N]})]}),Object(j.jsxs)("div",{className:"row ml-5",children:[Object(j.jsxs)("p",{className:"col",children:[" Author: ",x]}),Object(j.jsx)("p",{className:"col",children:"true"===D?"Availability: Yes":"Availability: No"})]}),Object(j.jsxs)("div",{className:"row ml-5",children:[Object(j.jsx)("p",{className:"col",children:"false"===D?"Issued By: ".concat(S):"Issued By: N/A"}),Object(j.jsx)("p",{className:"col",children:"false"===D?"Issued Till: ".concat(u()(E).format("YYYY-MM-DD")):"Issued Till: N/A"})]}),Object(j.jsx)("button",{type:"button",className:"btn btn-success btn-sm float-right",disabled:"false"===D,children:Object(j.jsx)(i.b,{to:"true"===D?"/issuebook/"+F:"",style:{color:"white",textDecoration:"none"},children:"Issue Book"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:$,children:"Close"})]})]})]})}function p(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),l=Object(o.a)(n,2),r=l[0],i=l[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),h=d[0],u=d[1];return Object(j.jsx)("div",{className:"card container cardhw",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{children:"Add Book"}),Object(j.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),""===s||""===r||""===h?alert("Please fill the details"):f.a.post("/books/addbook",{Name:s,Author:r,Subject:h}).then((function(e){alert("book added")})).catch((function(e){console.log(e)})),c(""),i(""),u("")},className:"container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Book Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"addbook",placeholder:"Enter Book's Name",value:s,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Author"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"addauthor",placeholder:"Enter Author's Name",value:r,onChange:function(e){i(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Subject"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"addsubject",placeholder:"Enter Subject",value:h,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("button",{type:"submit",className:"btn btn-success btn-block mt-4 mb-4",children:[Object(j.jsx)("i",{className:"fa fa-fw fa-plus"}),"Add"]})]})]})})}var g=s(10),v=s(2);function N(e){var t=Object(a.useState)({email:"",password:""}),s=Object(o.a)(t,2),c=s[0],n=s[1],l=function(e){n(Object(v.a)(Object(v.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"card container cardhw",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"text-center",children:"Login"}),Object(j.jsxs)("form",{autocomplete:"off",onSubmit:function(e){var t;e.preventDefault(),t=c.email,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?""===c.password?alert("Password cannot be empty"):f.a.post("/users/login",c).then((function(e){alert(e.data.message),console.log(e.data),localStorage.setItem("my_token",e.data.token)})).catch((function(e){alert(e.message),console.log(e)})).finally((function(){n({email:"",password:""}),window.location.href="/home"})):alert("Enter the valid email")},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Email",value:c.email,name:"email",onChange:l})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"form-control",type:"password",placeholder:"Enter Password",name:"password",value:c.password,onChange:l,required:!0})]}),Object(j.jsxs)("small",{children:["Don't have a account yet?",Object(j.jsx)(i.b,{to:"/signup",style:{textDecoration:"none"},children:Object(j.jsx)("b",{children:" Sign Up"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-sm float-right",children:"Submit"})]})]})})}function y(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),l=Object(o.a)(n,2),r=l[0],b=l[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),u=h[0],m=h[1],O=Object(a.useState)(!0),x=Object(o.a)(O,2),p=x[0],g=x[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),y=N[0],k=N[1];return Object(j.jsx)("div",{className:"card container cardhw",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"text-center",children:"Register "}),Object(j.jsxs)("form",{autocomplete:"off",onSubmit:function(e){e.preventDefault(),""===s||""===r||""===u||""===y?alert("Please fill the details"):f.a.post("/users/register",{name:s,email:r,password:u,isPatron:p,contact:y}).then((function(e){alert("User added successfully"),window.location.href="/signin"})).catch((function(e){console.log(e)})),c(""),b(""),m(""),g(!0),k("")},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Name",value:s,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{className:"form-control",type:"email",placeholder:"Enter Email",value:r,onChange:function(e){b(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"form-control",type:"password",placeholder:"Enter Password",id:"password",value:u,onChange:function(e){m(e.target.value)},required:!0})]}),Object(j.jsx)("div",{className:"form-check",children:Object(j.jsxs)("label",{className:"form-check-label float-right",for:"checkpatron",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",checked:p,onChange:function(e){g(!p)},id:"checkpatron"}),"Are you a Patron ?"]})}),Object(j.jsxs)("div",{className:"form-group mt-4",children:[Object(j.jsx)("label",{children:"Contact"}),Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter Contact",value:y,onChange:function(e){k(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("small",{children:["Already have an account?",Object(j.jsx)(i.b,{to:"/signin",style:{textDecoration:"none"},children:Object(j.jsx)("b",{children:" Sign In"})})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-sm float-right",children:"Submit"})]})]})]})})}var k=s(4);function w(e){var t=Object(a.useState)(""),s=Object(o.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)(""),r=Object(o.a)(l,2),i=r[0],b=r[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),u=h[0],m=h[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),p=x[0],g=x[1],v=Object(k.g)().id;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"card container",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{children:"Issue Book"}),Object(j.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),console.log(c),console.log(i),console.log(u),console.log(p),""===c||""===i||""===u||""===p?alert("Please fill the details"):f.a.post("/books/issuebook/"+v,{Ownername:c,Ownercontact:i,Issuedate:u,Expirydate:p}).then((function(e){alert("book issued"),n(""),b(""),m(""),g("")})).catch((function(e){console.log(e)}))},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Owner's Name"}),Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter your name",onChange:function(e){console.log(e.target.value),n(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Contact Number"}),Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter contact number",onChange:function(e){console.log(e.target.value),b(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Issue Date"}),Object(j.jsx)("input",{className:"form-control",type:"date",onChange:function(e){console.log(e.target.value),m(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Expiry Date"}),Object(j.jsx)("input",{className:"form-control",type:"date",onChange:function(e){console.log(e.target.value),g(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-sm float-right",children:"Submit"})]})]})})})}var S=s.p+"static/media/user2.8f76b1e3.png";function C(e){return Object(j.jsxs)("div",{className:"card container",children:[Object(j.jsx)("h4",{className:"pt-4",children:"Welcome to LibM, User!"}),Object(j.jsxs)("div",{className:"card-body row",children:[Object(j.jsx)("div",{className:"col-md-5 col-lg-4",children:Object(j.jsx)("img",{className:"card-img-top",src:S,alt:"user",style:{height:"200px",width:"auto",marginBottom:"10px",marginLeft:"40px"}})}),Object(j.jsxs)("div",{className:"col-md-7 col-lg-8",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsx)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:"Name"}),Object(j.jsx)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:"Email"}),Object(j.jsx)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:"Role"}),Object(j.jsx)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:"Contact"})]})}),Object(j.jsx)("div",{className:"col",children:e.userInfo&&Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:[" ",e.userInfo.name]}),Object(j.jsxs)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:[" ",e.userInfo.email]}),Object(j.jsxs)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:[" ",e.userInfo.isPatron?"Patron":"Librarian"]}),Object(j.jsxs)("li",{className:"list-group-item",style:{fontWeight:"bold"},children:[" ",e.userInfo.contact]})]})})]}),Object(j.jsx)("div",{className:"row ml-3 mt-3",children:Object(j.jsx)("button",{className:"btn btn-outline-success btn-block",type:"button",style:{borderRadius:"20px",borderColor:"green"},onClick:function(){!0===window.confirm("Are you sure?")&&(localStorage.removeItem("my_token"),alert("Logged Out!"),window.location.href="/home")},children:"Logout"})})]})]})]})}var I=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),s=t[0],c=t[1];Object(a.useEffect)((function(){localStorage.getItem("my_token")&&n()}),[localStorage.getItem("my_token")]);var n=function(){f.a.get("/users/getInfo",{headers:{Authorization:"Bearer "+localStorage.getItem("my_token")}}).then((function(e){return c(e.data.info)})).catch((function(e){return console.log(e)}))};return console.log(s),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(k.c,{children:[Object(j.jsx)(k.a,{path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(k.a,{path:"/home",element:Object(j.jsx)(d,{})}),Object(j.jsx)(k.a,{path:"/books",element:Object(j.jsx)(x,{userInfo:s})}),Object(j.jsx)(k.a,{path:"/addbook",element:Object(j.jsx)(p,{userInfo:s})}),Object(j.jsx)(k.a,{path:"/issuebook/:id",element:Object(j.jsx)(w,{userInfo:s})}),Object(j.jsx)(k.a,{path:"/signin",element:Object(j.jsx)(N,{})}),Object(j.jsx)(k.a,{path:"/signup",element:Object(j.jsx)(y,{})}),Object(j.jsx)(k.a,{path:"/profile",element:Object(j.jsx)(C,{userInfo:s})})]})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),A()}},[[64,1,2]]]);
//# sourceMappingURL=main.d690ba68.chunk.js.map