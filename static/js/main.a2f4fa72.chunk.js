(this.webpackJsonpossystem=this.webpackJsonpossystem||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":"4","title":"iPhone 12","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://condenast-media.gcdn.co/glamour/607080f47050450f53e637a2a411ac97.png/5609f2a4/o/w960","price":"100","photo":""},{"id":"3","title":"iPhone XR","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668","price":"100","photo":""},{"id":"2","title":"iPhone 8","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://skay.ua/54839-thickbox_default/apple-iphone-8-64gb-gold.jpg","price":"100","photo":""},{"id":"1","title":"iPhone 7","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://i.citrus.ua/imgcache/size_500/uploads/shop/6/c/6cbbf7c3490f5fcfb9c09809c48053be.jpg","price":"200","photo":""},{"id":"0","title":"iPhone SE","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://i.citrus.ua/upload/medialibrary/45c/hero_static_large.jpg","price":"130","photo":""}]')},28:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(3),c=a(0),l=a.n(c),i=a(14),o=a.n(i),s=a(9),m=a(22),u=a(8),d=a(2),p=(a(37),a(12)),_=a(17),h=(a(38),function(e){var t=e.addProduct,a=e.products,n=e.user,i=Object(c.useState)({id:"",title:"",description:"",imgUrl:"",price:"",photo:""}),o=Object(_.a)(i,2),s=o[0],m=o[1],u=s.title,d=s.description,h=s.imgUrl,E=s.price,g=a.length,f=function(e){var t,a=e.target,n=a.name,c=a.value;m(Object(r.a)(Object(r.a)({},s),{},(t={},Object(p.a)(t,n,c),Object(p.a)(t,"id",g),t)))};return l.a.createElement("div",{className:"newProduct"},"admin"!==n?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"newProduct__heading--error"},"Sory but You can`t add products !!!")):l.a.createElement("div",null,l.a.createElement("h2",{className:"newProduct__heading"},"Add new Product"),l.a.createElement("div",{className:"newProduct__formBlock"},l.a.createElement("form",{className:"newProduct__form form",onSubmit:function(e){return function(e){e.preventDefault(),t(s),m({id:"",title:"",description:"",imgUrl:"",price:""})}(e)}},l.a.createElement("label",{className:"form__lable"},"Title:",l.a.createElement("input",{name:"title",className:"form__input",placeholder:"Title",type:"text",value:u,onChange:function(e){return f(e)},required:!0})),l.a.createElement("label",{className:"form__lable"},"Description:",l.a.createElement("input",{name:"description",className:"form__input",placeholder:"Description",type:"text",value:d,onChange:function(e){return f(e)},required:!0})),l.a.createElement("label",{className:"form__lable"},"Price:",l.a.createElement("input",{name:"price",className:"form__input",placeholder:"Product price",type:"number",value:E,onChange:function(e){return f(e)},required:!0})),l.a.createElement("label",{className:"form__lable"},"Upload photo:",l.a.createElement("input",{name:"photo",className:"form__input",type:"file",onChange:function(e){return function(e){var t=new FileReader,a=e.target.files[0];t.onloadend=function(){m(Object(r.a)(Object(r.a)({},s),{},{photo:a,imgUrl:t.result,id:g}))},t.readAsDataURL(a)}(e)}})),l.a.createElement("p",{className:"form__or"},"or write Image adress here"),l.a.createElement("label",{className:"form__lable"},"Image adress:",l.a.createElement("input",{name:"imgUrl",className:"form__input",placeholder:"image URL",type:"url",value:h,onChange:function(e){return f(e)}})),l.a.createElement("button",{className:"form__button",type:"submit"},"Send")))))}),E=(a(39),function(e){var t=e.user,a=e.changeUser;return l.a.createElement("div",{className:"header"},l.a.createElement(u.b,{to:"/",className:"header__logo-link"},l.a.createElement("img",{src:"/images/logo.png",className:"header__logo",alt:"Logo"})),l.a.createElement("nav",{className:"header__nav nav"},l.a.createElement("ul",{className:"nav__list nav__list--none"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(u.c,{to:"/",exact:!0,className:"nav__link nav__link--active"},"Home")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(u.c,{to:"/catalog",className:"nav__link nav__link--active"},"Catalog")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(u.c,{to:"/addProduct",className:"nav__link"},"Add new product"))),l.a.createElement("button",{type:"button",className:"nav__button nav__button--active"},"Menu"),l.a.createElement("select",{value:t,onChange:function(e){return a(e.target.value)}},l.a.createElement("option",{value:"admin"},"Admin"),l.a.createElement("option",{value:"user"},"user"))))}),g=(a(41),a(42),function(e){var t=e.id,a=e.title,n=e.description,r=e.imgUrl,c=e.price,i=e.user,o=e.deleteProduct;return l.a.createElement("div",{className:"card"},l.a.createElement("button",{type:"button",className:"admin"===i?"card__removeProduct":"card__removeProduct--none",onClick:function(){return o(t)}},l.a.createElement("img",{src:"../images/x.png",alt:"remove button"})),l.a.createElement("div",{className:"card__imgBlock"},l.a.createElement("img",{className:"card__image",src:r,alt:a})),l.a.createElement("div",{className:"card__infoBlock"},l.a.createElement("div",{className:"card__heading"},l.a.createElement("h2",{className:"card__header"},a)),l.a.createElement("div",{className:"card__info"},l.a.createElement("p",{className:"card__description"},n),l.a.createElement("p",{className:"card__id"},t)),l.a.createElement("div",{className:"card__priceBlock"},l.a.createElement("p",{className:"card__price"},"$".concat(c)))))}),f=function(e){var t=e.products,a=e.user,n=e.deleteProduct;return l.a.createElement("div",{className:"catalog"},l.a.createElement("div",{className:"catalog__products"},t.map((function(e){return l.a.createElement(g,Object.assign({key:e.id},e,{user:a,deleteProduct:n}))}))))},b=(a(43),function(e){var t=e.products,a=e.user,n=e.removeProducts,r=Object(c.useState)("admin"===a?"-800px":"-600px"),i=Object(_.a)(r,2),o=i[0],s=i[1];Object(c.useEffect)((function(){return s("admin"===a?"-800px":"-600px")}),[a]);var m=t.length,u=t.reduce((function(e,t){return e+ +t.price}),0),d=m>0?(u/m).toFixed(2):0;return l.a.createElement("div",{style:{right:o},className:"sitebar",onMouseEnter:function(){return s(null)},onMouseLeave:function(){return s("admin"===a?"-800px":"-600px")}},l.a.createElement("div",{className:"sitebar__heading"},l.a.createElement("h1",null,"Info")),l.a.createElement("div",{className:"sitebar__info"},l.a.createElement("div",{className:"sitebar__item"},l.a.createElement("h3",{className:"sitebar__itemHeading"},"Quantity of goods:"),l.a.createElement("p",{className:"sitebar__itemText"},m)),l.a.createElement("div",{className:"sitebar__item"},l.a.createElement("h3",{className:"sitebar__itemHeading"},"Total price:"),l.a.createElement("p",{className:"sitebar__itemText"},"$".concat(u))),l.a.createElement("div",{className:"sitebar__item"},l.a.createElement("h3",{className:"sitebar__itemHeading"},"Average price:"),l.a.createElement("p",{className:"sitebar__itemText"},"$".concat(d))),l.a.createElement("button",{type:"button",className:"admin"===a?"sitebar__button":"sitebar__button--none",onClick:function(){return n()}},"Delete all products")))}),v={products:a(27),user:"admin"},N=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER":return Object(r.a)(Object(r.a)({},e),{},{user:t.value});case"DELETE_PRODUCT":return Object(r.a)(Object(r.a)({},e),{},{products:Object(n.a)(e.products).filter((function(e){return e.id!==t.value}))});case"REMOVE_PRODUCTS":return Object(r.a)(Object(r.a)({},e),{},{products:[]});case"ADD_PRODUCT":return Object(r.a)(Object(r.a)({},e),{},{products:[].concat(Object(n.a)(e.products),[t.value])});default:return Object(r.a)({},e)}})),O=function(e){return{type:"CHANGE_USER",value:e}},P=function(){return{type:"REMOVE_PRODUCTS"}},j=function(e){return{type:"DELETE_PRODUCT",value:e}},y=function(e){return{type:"ADD_PRODUCT",value:e}},w=Object(m.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{addProduct:Object(s.a)(y,e),deleteProduct:Object(s.a)(j,e),removeProducts:Object(s.a)(P,e),changeUser:Object(s.a)(O,e)}}))((function(e){var t=e.products,a=e.user,n=e.changeUser,r=e.deleteProduct,c=e.removeProducts,i=e.addProduct;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"newPage"},l.a.createElement(E,{user:a,changeUser:n}),l.a.createElement(b,{products:t,user:a,removeProducts:c}),l.a.createElement(d.a,{path:"/catalog",render:function(){return l.a.createElement(f,{products:t,user:a,deleteProduct:r})}}),l.a.createElement(d.a,{path:"/addProduct",render:function(){return l.a.createElement(h,{addProduct:i,products:t,user:a})}})))}));o.a.render(l.a.createElement(m.a,{store:N},l.a.createElement(u.a,null,l.a.createElement(w,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.a2f4fa72.chunk.js.map