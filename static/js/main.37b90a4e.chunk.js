(this["webpackJsonpreact-example"]=this["webpackJsonpreact-example"]||[]).push([[0],{57:function(e,t,a){e.exports=a.p+"static/media/avatar.709c02e7.jpg"},68:function(e,t,a){e.exports=a(80)},73:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),s=(a(73),a(15)),c=a(12),o=a(19),u=a(17),m=(a(74),a(42)),d=a(26),f=a(27),h=function(e){return{type:"SET",value:e}},p=a(114),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).decrement=function(){if(!(n.state.value<=0)){n.setState({value:n.state.value-1,logger:function(){console.log(n.state.value)}});var e=n.state.value-1;n.props.setValue(e)}},n.increment=function(){n.setState(Object(m.a)(Object(m.a)({},n.state),{},{value:n.state.value+1})),console.log(n.state);var e=n.state.value+1;n.props.setValue(e)},n.evaluate=function(){return n.state.value>=0&&n.state.value<=5?"lower-number":n.state.value>=6&&n.state.value<=12?"right-number":"upper-number"},n.state={value:e.value?e.value:0,name:"name_"},n.increment2=n.increment2.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"increment2",value:function(){this.setState({value:1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Contador:",r.a.createElement("span",{className:this.evaluate(this.state.value)},this.state.value)),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:this.increment},"Incrementar"),r.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:this.decrement},"Decrementar"))}}]),a}(r.a.Component);var E=Object(f.b)(null,(function(e){return{setValue:function(t){return e(h(t))}}}))(v),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).filterBy=function(e){var t=e.target.value,a=n.state.students.filter((function(e){return e.first_name.includes(t)}));n.setState({students:a}),n.props.onFilter(a.length)},n.reset=function(){n.searchValue.current.value="",n.setState({students:n.props.students}),n.props.onFilter(n.props.students.length)},n.state={students:e.students,searchVal:""},n.searchValue=r.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Cantidad de estudiantes:",this.props.students.length),r.a.createElement("div",null,r.a.createElement("label",null,"Buscar alumno:"),r.a.createElement("input",{type:"text",ref:this.searchValue,onChange:this.filterBy}),r.a.createElement("button",{onClick:this.reset},"Reset")),r.a.createElement("ul",null,this.state.students.map((function(e){return r.a.createElement("li",{key:e.id},"Nombre:",e.first_name,", Apellido: ",e.last_name)}))))}}]),a}(r.a.Component),g=a(14),j=a(18),O=a(118),_=a(120),y=a(121),C=a(123),S=a(122),k=a(81),z=a(119),B=a(130),N=a(57),w=a.n(N),x=a(129),T=Object(O.a)({root:{minWidth:345,marginLeft:"10%",marginTop:"10%"},large:{width:100,height:100,marginLeft:"30%"},text:{float:"right"}}),A=function(e){var t,a=T();return r.a.createElement(x.a,{appear:!0,in:!0,classNames:"student-transition",timeout:300},r.a.createElement(z.a,{item:!0},r.a.createElement(_.a,{className:a.root},r.a.createElement(y.a,null,r.a.createElement(B.a,{className:a.large,alt:"avatar",src:w.a}),r.a.createElement(S.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h7",component:"h4"},"Nombre: ",e.studentData.first_name),r.a.createElement(k.a,{gutterBottom:!0,variant:"h7",component:"h4"},"Apellido: ",e.studentData.surname))),r.a.createElement(C.a,null,r.a.createElement(p.a,(t={size:"small",className:a.text,color:"primary"},Object(g.a)(t,"color","primary"),Object(g.a)(t,"href","/alumnos2/".concat(e.studentData.id)),t),"Ver m\xe1s")))))},V=a(128),D=a(124),L=a(125),F=function(e){return{type:"ADD_STUDENT",student:e}},G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).filterBy=function(e){if(e.target.value){var t=n.state.students.filter((function(t){return t.first_name.includes(e.target.value)}));n.setState({students:t,searchValue:e.target.value}),n.updateParent(t.length)}else n.reset()},n.updateParent=function(e){n.props.onFilter(e)},n.reset=function(){n.setState({students:n.props.students,searchValue:""}),n.props.onFilter(n.props.students.length)},n.saveStudent=function(){var e={id:n.state.students.length,first_name:n.state.name,surname:n.state.surname};n.setState({students:[].concat(Object(j.a)(n.state.students),[e])}),n.props.persist(e)},n.handerOnChange=function(e){e.target.value&&(n.setState(Object(g.a)({},e.target.name,e.target.value)),console.log(n.state))},n.state={students:e.students,searchValue:"",name:"",surname:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{id:"filled-basic",label:"Buscar",variant:"filled",value:this.state.searchValue,onChange:this.filterBy,InputProps:{endAdornment:r.a.createElement(D.a,{position:"start"},r.a.createElement(L.a,null,"search"))}}),r.a.createElement(z.a,{justify:"flex-end"},r.a.createElement(V.a,{id:"filled-basic",label:"Nombre",name:"name",InputProps:{endAdornment:r.a.createElement(D.a,{position:"start"},r.a.createElement(L.a,null,"person"))},onChange:this.handerOnChange}),r.a.createElement(V.a,{style:{marginLeft:"5%"},id:"filled-basic",label:"Apellido",name:"surname",onChange:this.handerOnChange}),r.a.createElement(p.a,{style:{marginLeft:"2%",marginTop:"-50px;"},color:"primary",onClick:this.saveStudent,onKeyUp:this.saveStudent,variant:"contained"},"Agregar")),r.a.createElement(z.a,{container:!0,spacing:3,alignItems:"flex-start"},this.state.students.map((function(e){return r.a.createElement(A,{key:e.id,studentData:e})}))))}}]),a}(r.a.Component);var P=Object(f.b)((function(e){return{students:e.students}}),(function(e){return{persist:function(t){return e(F(t))}}}))(G),I=[{id:0,first_name:"Alejandro",last_name:"Sobko",dni:44647702},{id:1,first_name:"Laura",last_name:"Perez",dni:35302288},{id:2,first_name:"Candela",last_name:"Gomez",dni:57490871},{id:3,first_name:"Emiliano",last_name:"Gonzalez",dni:66005465},{id:4,first_name:"Camila",last_name:"Rodriguez",dni:65212571},{id:5,first_name:"Sebastian",last_name:"Hernandez",dni:54101823},{id:6,first_name:"Ezequiel",last_name:"Blabla",dni:57238635},{id:7,first_name:"Melina",last_name:"Foo",dni:34251397},{id:8,first_name:"Gustavo",last_name:"Bar",dni:64530537},{id:9,first_name:"Jos\xe9",last_name:"Baz",dni:40073217}],R=a(35),J=a(10),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).redirect=function(){e.props.history.push("/contador")},e.state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.redirect},"Redirect")}}]),a}(r.a.Component),M=Object(J.g)(U),W=a(2),q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).isLogg=function(){return!0},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.component,n=Object(W.a)(t,["component"]);return r.a.createElement(J.b,Object.assign({},n,{render:function(t){return e.isLogg()?r.a.createElement(a,t):r.a.createElement(J.a,{to:"/"})}}))}}]),a}(r.a.Component),H=function(e){e.component,Object(W.a)(e,["component"])},K=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"User Name :asd"))};var $=Object(f.b)((function(e){return{value:e.value}}))((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Bienvenido"),r.a.createElement("h3",null,"El ultimo valor del contador es ",e.value))})),Q=function(){return r.a.createElement("div",null,"No encontrado")},X=a(126),Y=a(127),Z=function(){return r.a.createElement("div",null,r.a.createElement(X.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement(z.a,{justify:"space-between",container:!0,spacing:24},r.a.createElement(z.a,{item:!0},r.a.createElement(k.a,{variant:"h6"},r.a.createElement(p.a,{color:"inherit",href:"#/"},r.a.createElement(L.a,null,"home")))),r.a.createElement(z.a,{item:!0},r.a.createElement(p.a,{color:"inherit",href:"#/contador",right:!0},"Contador"),r.a.createElement(p.a,{color:"inherit",href:"#/alumnos2"},"Alumnos"))))))},ee=function(e){return r.a.createElement("div",{className:"container"},e.children," ")},te=function(){return r.a.createElement("div",null,"aaaaaa")},ae=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateTotal=function(t){e.setState({total:t})},e.state={total:I.length,isLogg:!0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(R.a,null,r.a.createElement(Z,null),r.a.createElement("h3",null,"Total mostrado:",this.state.total),r.a.createElement(J.d,null,"     ",r.a.createElement(J.b,{exact:!0,path:"/",component:$}),r.a.createElement(J.b,{path:"/contador",component:E}),"  ",r.a.createElement(J.b,{path:"/alumnos"},r.a.createElement(b,{students:I,onFilter:this.updateTotal})),r.a.createElement(J.b,{exact:!0,path:"/alumnos2",render:function(){return r.a.createElement(P,{students:I,onFilter:e.updateTotal})}}),r.a.createElement(J.b,{path:"/alumnos2/:id",component:te()}),r.a.createElement(J.b,{path:"/container",render:function(){return r.a.createElement(ee,null," ",r.a.createElement(P,{students:I,onFilter:e.updateTotal})," ")}})," ",r.a.createElement(H,{path:"/user-profile",isLogg:this.state.isLogg,component:K}),r.a.createElement(q,{path:"/private",component:K}),r.a.createElement(J.b,{path:"/redirectExample",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(J.b,{component:Q}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(31),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.value;default:return e}},le=[{id:0,first_name:"Alejandro",surname:"Sobko",dni:44647702},{id:1,first_name:"Laura",surname:"Perez",dni:35302288},{id:2,first_name:"Candela",surname:"Gomez",dni:57490871},{id:3,first_name:"Emiliano",surname:"Gonzalez",dni:66005465},{id:4,first_name:"Camila",surname:"Rodriguez",dni:65212571},{id:5,first_name:"Sebastian",surname:"Hernandez",dni:54101823},{id:6,first_name:"Ezequiel",surname:"Blabla",dni:57238635},{id:7,first_name:"Melina",surname:"Foo",dni:34251397},{id:8,first_name:"Gustavo",surname:"Bar",dni:64530537},{id:9,first_name:"Jos\xe9",surname:"Baz",dni:40073217}],ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STUDENT":return[].concat(Object(j.a)(e),[t.student]);default:return e}},se=Object(ne.b)({value:re,students:ie}),ce=Object(ne.c)(se);i.a.render(r.a.createElement(f.a,{store:ce},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.37b90a4e.chunk.js.map