(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",[e("login")],1)},r=[],o=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"container"},[e("h1",{staticClass:"my-4"},[s._v("Iniciar Sesion")]),e("b-form",{on:{submit:s.login}},[e("b-form-group",{staticClass:"col-md-6 my-5",attrs:{label:"GamerTag:"}},[e("b-form-input",{attrs:{placeholder:"Ingresa tu gamertag"},model:{value:s.usuario.usuario_user,callback:function(a){s.$set(s.usuario,"usuario_user",a)},expression:"usuario.usuario_user"}})],1),e("b-form-group",{staticClass:"col-md-6",attrs:{label:"Contraseña:"}},[e("b-form-input",{attrs:{type:"password",placeholder:"Ingresa tu contraseña"},model:{value:s.usuario.password,callback:function(a){s.$set(s.usuario,"password",a)},expression:"usuario.password"}})],1),e("b-button",{staticClass:"mx-2 my-4",attrs:{type:"submit",variant:"success"}},[s._v("Iniciar sesion")]),e("b-button",{attrs:{to:{name:"Register"},variant:"primary"}},[s._v("Registrarse")])],1),""!==s.mensaje?e("div",[e("p",[s._v(s._s(s.mensaje))])]):s._e()],1)},n=[],i=e("b956"),u=e("2f62"),c={name:"Login",data:function(){return{usuario:{usuario_user:"",password:""},mensaje:""}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["d"])(["obtenerUsuario"])),Object(u["b"])(["guardarUsuario","leerToken","cerrarSesion"])),{},{login:function(){var s=this;this.axios.post("/login",this.usuario).then((function(a){var e=a.data.token;s.guardarUsuario(e)})).catch((function(a){console.log(a.response),s.mensaje=a.response}))}})},l=c,m=e("0c7c"),b=Object(m["a"])(l,o,n,!1,null,null,null),p=b.exports,d={name:"Login",components:{login:p}},g=d,f=Object(m["a"])(g,t,r,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=login.348c647d.js.map