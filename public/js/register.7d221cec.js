(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"16f8":function(e,r,s){},3419:function(e,r,s){e.exports=s.p+"img/gamepad.6060ae66.png"},"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("register")],1)},a=[],n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",{staticClass:"my-4"},[e._v("Entra al mundo Geek!")]),t("div",{attrs:{id:"register"}},[t("img",{staticClass:"mx-2",attrs:{id:"img",src:s("3419")}}),t("b-form",{on:{submit:function(r){return r.preventDefault(),e.registarUsuario()}}},[t("b-form-group",{staticClass:"my-2",attrs:{label:"Nombre Completo:"}},[t("b-form-input",{attrs:{placeholder:"Ingresa tu nombre completo"},model:{value:e.newUser.nombre_user,callback:function(r){e.$set(e.newUser,"nombre_user",r)},expression:"newUser.nombre_user"}})],1),t("b-form-group",{attrs:{label:"GameTag:",description:"¿Como quieres ser reconocido en tu leyenda?"}},[t("b-form-input",{attrs:{placeholder:"Ingresa un nametag valido"},model:{value:e.newUser.usuario_user,callback:function(r){e.$set(e.newUser,"usuario_user",r)},expression:"newUser.usuario_user"}})],1),t("b-form-group",{attrs:{label:"Correo electronico:",description:"Nunca compartiremos tus datos con terceros."}},[t("b-form-input",{attrs:{required:"",type:"email",placeholder:"Ingresa tu correo"},model:{value:e.newUser.email,callback:function(r){e.$set(e.newUser,"email",r)},expression:"newUser.email"}})],1),t("b-form-group",{attrs:{label:"Contraseña:"}},[t("b-form-input",{attrs:{type:"password",placeholder:"Ingresa una contraseña"},model:{value:e.newUser.password,callback:function(r){e.$set(e.newUser,"password",r)},expression:"newUser.password"}})],1),t("b-button",{staticClass:"mx-2 my-2",attrs:{type:"submit",variant:"primary"}},[e._v("Comenzar leyenda")]),t("b-button",{attrs:{type:"reset",variant:"danger",to:{name:"Home"}}},[e._v("Cancelar")])],1)],1)])},o=[],u=s("a18c"),i={name:"Register",data:function(){return{user:[],newUser:{nombre_user:"",usuario_user:"",password:"",email:"",role:"USER"}}},methods:{registarUsuario:function(){var e=this;this.axios.post("/register",this.newUser).then((function(r){e.user.push(r.data),e.user.nombre_user="",e.user.usuario_user="",e.user.password="",e.user.email="",e.user.role="USER",u["a"].push({name:"Login"})})).catch((function(e){console.log(e)}))}}},l=i,c=(s("ae41"),s("0c7c")),m=Object(c["a"])(l,n,o,!1,null,null,null),p=m.exports,d={name:"Register",components:{register:p}},b=d,f=Object(c["a"])(b,t,a,!1,null,null,null);r["default"]=f.exports},ae41:function(e,r,s){"use strict";var t=s("16f8"),a=s.n(t);a.a}}]);
//# sourceMappingURL=register.7d221cec.js.map