(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){e.exports=a(42)},26:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(14),r=a.n(l),o=(a(26),a(15)),i=a(16),c=a(17),u=a(19),m=a(18),d=(a(10),a(11),a(8)),h=a.n(d);h.a.initializeApp({apiKey:"AIzaSyBnB8dZjvXD4Ze8-X7LNspLZC6dIgV5Wzw",authDomain:"school-aa57c.firebaseapp.com",databaseURL:"https://school-aa57c.firebaseio.com",projectId:"school-aa57c",storageBucket:"school-aa57c.appspot.com",messagingSenderId:"552355200282",appId:"1:552355200282:web:116df200afcb10be5980a3"});var p=h.a,f=(a(13),function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("section",{className:"add-item",style:{padding:"30px 18px",height:"250px"}},s.a.createElement("form",null,s.a.createElement("h2",{style:{fontWeight:"bold",marginBottom:"15px"}},"Add Students"," & ","Teachers"),s.a.createElement("input",{type:"text",name:"username",placeholder:"Name of Group",onChange:e.handleChange,value:e.username}),s.a.createElement("input",{type:"text",name:"student",placeholder:"Students/Teachers Name",onChange:e.handleChange,value:e.student}),s.a.createElement("button",{style:{fontSize:"15px"},onClick:e.handleSubmit},"Add Student"))),s.a.createElement("section",{className:"display-item"},s.a.createElement("div",{className:"wrapper",style:{display:"flex",flexWrap:"wrap",justifyContent:"left"}},e.items.map((function(t){return s.a.createElement("ul",null,(e.filter===t.name||e.all)&&[s.a.createElement("li",{key:t.id},s.a.createElement("h3",null,t.title),t.kids.map((function(a){return s.a.createElement("p",null,a.student,s.a.createElement("button",{onClick:function(){return e.removeItem("/".concat(t.title,"/").concat(a.id))}},"Remove"))})))])})))))}),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).helpName=function(e){return"All Students"===e?"students":"All Teachers"==e?"teachers":"class"},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=p.database().ref("Fac").child(e.state.username),n={student:e.state.student,user:e.state.username};a.push(n),e.setState({student:"",username:""})},e.handleLogin=function(t){t.preventDefault(),console.log("here"),console.log(e.state.user,e.state.password),console.log(e.state.admins);var a=e.state.admins;for(var n in a)e.state.user===a[n].user&&e.state.password===a[n].password&&e.setState({login:!0})},e.removeItem=function(e){p.database().ref("/Fac/".concat(e)).remove()},e.changeFilter=function(t){return"all"===t?e.setState({all:!0}):e.setState({filter:t,all:!1}),!1},e.state={student:"",username:"",items:[],filter:"class",all:!1,user:"",password:"",admins:[],login:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref("Fac").on("value",(function(t){var a=t.val(),n=[],s=function(t){p.database().ref("Fac").child(t).on("value",(function(a){var s=a.val(),l=[];for(var r in s)l.push({id:r,student:s[r].student,user:s[r].user});var o=e.helpName(t);n.push({title:t,name:o,kids:l})}))};for(var l in a)s(l);console.log(n),e.setState({items:n})})),p.database().ref("Login").on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({id:s,user:a[s].usersname,password:a[s].password});console.log(n),e.setState({admins:n})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",null,"  \ud83d\udcd6 Thomas Jefferson Elementary School"),s.a.createElement("button",{style:{fontWeight:"bold",fontSize:"12px",width:"140px",marginRight:"20px",marginLeft:"50px"},type:"button",onClick:function(){return e.changeFilter("students")}},"Display Students"),s.a.createElement("button",{style:{fontWeight:"bold",fontSize:"12px",width:"140px",marginRight:"20px"},type:"button",onClick:function(){return e.changeFilter("teachers")}},"Display Teachers"),s.a.createElement("button",{style:{fontWeight:"bold",fontSize:"12px",width:"140px",marginRight:"20px"},type:"button",onClick:function(){return e.changeFilter("class")}},"Display Classes"),s.a.createElement("button",{style:{fontWeight:"bold",fontSize:"12px",width:"140px",marginRight:"20px"},type:"button",onClick:function(){return e.changeFilter("all")}},"Display All"))),s.a.createElement("div",null,this.state.login&&[s.a.createElement(f,{username:this.state.username,student:this.state.student,items:this.state.items,filter:this.state.filter,all:this.state.all,handleChange:this.handleChange,handleSubmit:this.handleSubmit,removeItem:this.removeItem})]),s.a.createElement("div",null,!this.state.login&&[s.a.createElement("section",{className:"add-item",style:{marginLeft:"39vw",marginTop:"100px",padding:"30px 18px",height:"250px"}},s.a.createElement("form",null,s.a.createElement("h2",{style:{fontWeight:"bold",marginBottom:"15px"}},"Welcome!"),s.a.createElement("input",{type:"text",name:"user",placeholder:"Username",onChange:this.handleChange,value:this.state.user}),s.a.createElement("input",{type:"text",name:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password}),s.a.createElement("button",{style:{fontSize:"15px"},onClick:this.handleLogin},"Login")))]))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2d4b2354.chunk.js.map