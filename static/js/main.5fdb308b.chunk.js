(this.webpackJsonpossystem=this.webpackJsonpossystem||[]).push([[0],{65:function(e){e.exports=JSON.parse('[{"id":"218102","title":"iPhone 12","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://condenast-media.gcdn.co/glamour/607080f47050450f53e637a2a411ac97.png/5609f2a4/o/w960","price":"100","photo":""},{"id":"218101","title":"iPhone XR","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668","price":"100","photo":""},{"id":"218100","title":"iPhone 8","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://skay.ua/54839-thickbox_default/apple-iphone-8-64gb-gold.jpg","price":"100","photo":""},{"id":"218099","title":"iPhone 7","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://i.citrus.ua/imgcache/size_500/uploads/shop/6/c/6cbbf7c3490f5fcfb9c09809c48053be.jpg","price":"200","photo":""},{"id":"218098","title":"iPhone SE","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://i.citrus.ua/upload/medialibrary/45c/hero_static_large.jpg","price":"130","photo":""}]')},82:function(e,t,a){e.exports=a(99)},91:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(20),i=a(17),s=a(134),m=a(19),u=a(40),d=a(16),p=function(e){return{type:"CHANGE_USER",value:e}},E=function(){return{type:"REMOVE_PRODUCTS"}},h=function(e){return{type:"DELETE_PRODUCT",value:e}},g=function(e){return{type:"ADD_PRODUCT",value:e}},_=a(65),v=localStorage.data,f=v&&v.length>0?JSON.parse(v):[],b={products:[].concat(Object(u.a)(_),Object(u.a)(f)),user:"admin"},N=Object(m.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER":return Object(d.a)(Object(d.a)({},e),{},{user:t.value});case"DELETE_PRODUCT":return Object(d.a)(Object(d.a)({},e),{},{products:Object(u.a)(e.products).filter((function(e){return e.id!==t.value}))});case"REMOVE_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:[]});case"ADD_PRODUCT":return Object(d.a)(Object(d.a)({},e),{},{products:[].concat(Object(u.a)(e.products),[t.value])});default:return Object(d.a)({},e)}})),O=a(11),y=a(43),j=a(32),k=a(131),C=a(126),w=a(132),P=a(129),B=a(130),U=a(69),x=a.n(U),S=(a(91),Object(k.a)((function(e){return{form:{"& .MuiTextField-root":{margin:e.spacing(1),boxShadow:"0 0 15px 0 rgba(0,0,0,0.1)"}}}}))),D=Object(o.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{addNewProduct:Object(m.a)(g,e)}}))((function(e){var t=e.addNewProduct,a=e.products,c=e.user,l=Object(n.useState)({id:"",title:"",description:"",imgUrl:"",price:"",photo:""}),o=Object(j.a)(l,2),i=o[0],s=o[1],m=i.title,u=i.description,p=i.imgUrl,E=i.price,h="".concat(a.length+1),g=function(e){var t,a=e.target,n=a.name,r=a.value;s(Object(d.a)(Object(d.a)({},i),{},(t={},Object(y.a)(t,n,r),Object(y.a)(t,"id",h),t)))},_=function(e){e.preventDefault(),t(i),function(){var e=localStorage.data,t=e?JSON.parse(e):[];t.push(i),localStorage.setItem("data",JSON.stringify(t))}(),s({id:"",title:"",description:"",imgUrl:"",price:""})},v=S();return r.a.createElement("div",{className:"newProduct"},"admin"!==c?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h2",color:"secondary",gutterBottom:!0},"Sorry but You can`t add products !!!")):r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h4",gutterBottom:!0},"Add new Product"),r.a.createElement("div",{className:"newProduct__formBlock"},r.a.createElement("form",{onSubmit:function(e){return _(e)},className:v.form,autoComplete:"off"},r.a.createElement(w.a,{name:"title",label:"Title",variant:"outlined",value:m,onChange:g,required:!0}),r.a.createElement(w.a,{name:"price",label:"Price",variant:"outlined",type:"number",value:E,onChange:g,className:"form__input",required:!0}),r.a.createElement(w.a,{name:"description",label:"Description",variant:"outlined",multiline:!0,rows:4,type:"text",value:u,onChange:g,fullWidth:!0,required:!0}),r.a.createElement("label",{className:"form__label"},"Upload photo:",r.a.createElement("input",{type:"file",onChange:function(e){var t=new FileReader,a=e.target.files[0];t.onloadend=function(){s(Object(d.a)(Object(d.a)({},i),{},{photo:a,imgUrl:t.result,id:h}))},t.readAsDataURL(a)},className:"form__input--none"}),r.a.createElement(P.a,{color:"primary","aria-label":"upload picture",component:"span"},r.a.createElement(x.a,null)),"or write Image address here:"),r.a.createElement("div",null,r.a.createElement(w.a,{name:"imgUrl",variant:"outlined",title:"image URL",type:"url",value:p,onChange:g})),r.a.createElement(B.a,{variant:"contained",color:"primary",className:"form__button",type:"submit"},"Send")))))})),T=a(71),R=a(137),A=a(135),F=a(70),J=a.n(F),L=(a(93),Object(o.b)(null,(function(e){return{setUser:Object(m.a)(p,e)}}))((function(e){var t=e.setUser,a=Object(n.useState)(null),c=Object(j.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),m=Object(j.a)(s,2),u=m[0],d=m[1],p=Boolean(l),E=function(){o(null)},h={top:u?"0":"-100%"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mobile",style:h},r.a.createElement("ul",{className:"mobile__list",style:h},r.a.createElement("li",{className:"mobile__item"},r.a.createElement(i.c,{to:"/",exact:!0,className:"mobile__link mobile__link--active",onClick:function(){return d(!u)}},"Home")),r.a.createElement("li",{className:"mobile__item"},r.a.createElement(i.c,{to:"/catalog",className:"mobile__link",onClick:function(){return d(!u)}},"Catalog")),r.a.createElement("li",{className:"mobile__item"},r.a.createElement(i.c,{to:"/addProduct",className:"mobile__link",onClick:function(){return d(!u)}},"Add new product")))),r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{to:"/",className:"header__logo-link"},r.a.createElement("img",{src:"images/logo.png",className:"header__logo",alt:"Logo"})),r.a.createElement("nav",{className:"header__nav nav"},r.a.createElement("ul",{className:"nav__list",style:h},r.a.createElement("li",{className:"nav__item"},r.a.createElement(i.c,{to:"/",exact:!0,className:"nav__link nav__link--active"},"Home")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(i.c,{to:"/catalog",className:"nav__link nav__link--active"},"Catalog")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(i.c,{to:"/addProduct",className:"nav__link"},"Add new product"))),r.a.createElement("div",{className:"nav__button"},r.a.createElement(P.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return d(!u)}},r.a.createElement(J.a,null))),r.a.createElement("div",{className:"nav__button"},r.a.createElement(P.a,{"aria-label":"account of current user","aria-controls":"menu-appBar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},r.a.createElement(A.a,null))),r.a.createElement(T.a,{id:"menu-appBar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:E},r.a.createElement(R.a,{onClick:function(){t("admin"),E()}},"Admin"),r.a.createElement(R.a,{onClick:function(){t("user"),E()}},"User")))))}))),M=a(133),I=(a(95),Object(o.b)((function(e){return{user:e.user}}),(function(e){return{delProduct:Object(m.a)(h,e)}}))((function(e){var t=e.id,a=e.title,n=e.description,c=e.imgUrl,l=e.price,o=e.user,i=e.delProduct;return r.a.createElement("div",{className:"card"},r.a.createElement("button",{type:"button",className:"admin"===o?"card__removeProduct":"card__removeProduct--none",onClick:function(){return i(t)}},r.a.createElement("img",{src:"images/x.png",alt:"remove button"})),r.a.createElement(M.a,{className:"card__imageBox"},r.a.createElement("img",{className:"card__image",src:c,alt:a})),r.a.createElement(M.a,{className:"card__infoBox infoBox"},r.a.createElement(M.a,{className:"infoBox__heading"},r.a.createElement(C.a,{variant:"h4"},a)),r.a.createElement(M.a,{className:"infoBox__id"},r.a.createElement(C.a,{variant:"overline"},"id:",t)),r.a.createElement(M.a,{className:"infoBox__description"},r.a.createElement(C.a,{variant:"body1"},n)),r.a.createElement(M.a,{className:"infoBox__price"},r.a.createElement(C.a,{variant:"h5"},"$".concat(l)))))}))),H=(a(96),Object(o.b)((function(e){return{products:e.products}}),null)((function(e){var t=e.products;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement(M.a,{className:"catalog__error"},r.a.createElement(C.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Sorry, but the directory is empty..."),r.a.createElement(C.a,{variant:"body1",color:"primary",gutterBottom:!0},"You can add a new product ",r.a.createElement(i.c,{to:"/addProduct"},r.a.createElement(B.a,{variant:"contained",color:"primary"},"here")))):r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"catalog__products"},t.map((function(e){return r.a.createElement(I,Object.assign({key:e.id},e))})))))}))),$=(a(97),Object(o.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{removeAllProducts:Object(m.a)(E,e)}}))((function(e){var t=e.products,a=e.user,c=e.removeAllProducts,l="".concat("admin"===a?"-750px":"-550px"),o=Object(n.useState)(l),i=Object(j.a)(o,2),s=i[0],m=i[1],u=t.length,d=t.reduce((function(e,t){return e+ +t.price}),0),p=u>0?(d/u).toFixed(2):0,E={display:"admin"===a?"inline-block":"none"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mobileSiteBar"},r.a.createElement(C.a,{variant:"h6"},"".concat(u," "),"products in catalog."),r.a.createElement(C.a,{variant:"h6"},"Total price ="," $".concat(d)),r.a.createElement(C.a,{variant:"h6"},"Average price ="," $".concat(p)),r.a.createElement(B.a,{style:E,variant:"contained",color:"secondary",type:"button",onClick:function(){return{type:"REMOVE_PRODUCTS"}}},"Delete all products")),r.a.createElement("div",{style:{right:s},className:"siteBar",onMouseEnter:function(){return m(null)},onMouseLeave:function(){return m(l)}},r.a.createElement("div",{className:"siteBar__heading"},r.a.createElement(C.a,{variant:"h4"},"Info")),r.a.createElement("div",{className:"siteBar__info"},r.a.createElement("div",{className:"siteBar__item"},r.a.createElement(C.a,{variant:"h6"},"Quantity of goods:"),r.a.createElement("p",{className:"siteBar__itemText"},u)),r.a.createElement("div",{className:"siteBar__item"},r.a.createElement(C.a,{variant:"h6"},"Total price:"),r.a.createElement("p",{className:"siteBar__itemText"},"$".concat(d))),r.a.createElement("div",{className:"siteBar__item"},r.a.createElement(C.a,{variant:"h6"},"Average price:"),r.a.createElement("p",{className:"siteBar__itemText"},"$".concat(p))),r.a.createElement(B.a,{style:E,variant:"contained",color:"secondary",type:"button",onClick:function(){return c()}},"Delete all products"))))}))),q=(a(98),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"newPage"},r.a.createElement(L,null),r.a.createElement($,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/catalog"},r.a.createElement(H,null)),r.a.createElement(O.a,{path:"/addProduct"},r.a.createElement(D,null)))))});l.a.render(r.a.createElement(o.a,{store:N},r.a.createElement(i.a,{basename:"ossystem"},r.a.createElement(s.b,{injectFirst:!0},r.a.createElement(q,null)))),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.5fdb308b.chunk.js.map