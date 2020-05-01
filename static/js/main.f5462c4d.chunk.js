(this.webpackJsonpsklep=this.webpackJsonpsklep||[]).push([[0],{15:function(e,t,r){e.exports=r(28)},20:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(8),o=r.n(c),l=(r(20),r(2)),i=r(3),s=r(6),u=r(5),m=r(4),p=(r(27),function(e){return"$"+Number(e.toFixed(2)).toLocaleString()+" "}),d=r(1),f=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"componentWillMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return a.a.createElement("div",{className:"col-md-4 mb-4",key:t.id},a.a.createElement("div",{className:"thumbnail text-center bg-secondary"},a.a.createElement("a",{href:"#".concat(t.id),onClick:function(){return e.props.addToCart(e.props.cartItems,t)}},a.a.createElement("img",{src:"products/".concat(t.sku,"_2.jpg"),alt:t.title}),a.a.createElement("p",null,t.title)),a.a.createElement("div",null,a.a.createElement("b",null,p(t.price)),a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.addToCart(e.props.cartItems,t)}},"Add To Card"))))}));return a.a.createElement("div",{className:"row"},t)}}]),r}(n.Component),E=Object(m.b)((function(e){return{products:e.products.filteredItems,cartItems:e.cart.items}}),{fetchProducts:function(){return function(e){fetch("http://localhost:8000/products").then((function(e){return e.json()})).catch((function(e){return fetch("db.json").then((function(e){return e.json()})).then((function(e){return e.products}))})).then((function(t){e({type:"FETCH_PRODUCTS",payload:t}),console.log(t)}))}},addToCart:function(e,t){return function(r){var n=Array.from(e),a=!1;return n.forEach((function(e){e.id===t.id&&(a=!0,e.count++)})),a||n.push(Object(d.a)(Object(d.a)({},t),{},{count:1})),localStorage.setItem("cartItems",JSON.stringify(n)),r({type:"ADD_TO_CART",payload:{cartItems:n}})}}})(f),h=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-4"},"".concat(this.props.filteredProducts.length," products found.")),a.a.createElement("div",{className:"col-md-4"},a.a.createElement("label",null,"Order by",a.a.createElement("select",{className:"form-control",value:this.props.sort,onChange:function(t){return e.props.sortProducts(e.props.filteredProducts,t.target.value)}},a.a.createElement("option",{value:""},"Select"),a.a.createElement("option",{value:"lowestprice"},"Lowest to highest"),a.a.createElement("option",{value:"highestprice"},"Highest to lowest")))),a.a.createElement("div",{className:"col-md-4"},a.a.createElement("label",null," Filter Size",a.a.createElement("select",{className:"form-control",value:this.props.size,onChange:function(t){return e.props.filterProducts(e.props.products,t.target.value)}},a.a.createElement("option",{value:""},"ALL"),a.a.createElement("option",{value:"x"},"XS"),a.a.createElement("option",{value:"s"},"S"),a.a.createElement("option",{value:"m"},"M"),a.a.createElement("option",{value:"l"},"L"),a.a.createElement("option",{value:"xl"},"XL"),a.a.createElement("option",{value:"xxl"},"XXL")))))}}]),r}(n.Component),v=Object(m.b)((function(e){return{products:e.products.items,filteredProducts:e.products.filteredItems,size:e.products.size,sort:e.products.sort}}),{filterProducts:function(e,t){return function(r){r({type:"FILTER_PRODUCTS_BY_SIZE",payload:{size:t,items:""===t?e:e.filter((function(e){return e.availableSizes.indexOf(t.toUpperCase())>=0}))}})}},sortProducts:function(e,t){return function(r){console.log(e);var n=Array.from(e);console.log(n),""!==t?n.sort((function(e,r){return"lowestprice"===t?e.price>r.price?1:-1:e.price<r.price?1:-1})):n.sort((function(e,t){return e.id>t.id?1:-1})),r({type:"ORDER_PRODUCTS_BY_PRICE",payload:{sort:t,items:n}})}}})(h),O=0,b=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return a.a.createElement("div",{className:"alert alert-info"},0===t.length?" Basket is empty":a.a.createElement("div",null," You have ",t.length," products in the basket",a.a.createElement("div",null,a.a.createElement("ul",null,t.map((function(t){return a.a.createElement("li",{key:O++},a.a.createElement("b",null,t.title," "),"X ",t.count/2," = ",p(t.price*t.count/2),a.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.removeFromCart(e.props.cartItems,t)}},"X"))}))),"Total: ",p(t.reduce((function(e,t){return e+t.price*t.count/2}),0)))))}}]),r}(n.Component),y=Object(m.b)((function(e){return{cartItems:e.cart.items}}),{removeFromCart:function(e,t){return function(r){var n=Array.from(e).filter((function(e){return e.id!==t.id}));return localStorage.setItem("cartItems",JSON.stringify(n)),r({type:"REMOVE_FROM_CART",payload:{cartItems:n}})}}})(b),g=r(7),j=r(14),C={items:[],filteredItems:[],size:"",sort:""},I={items:[]},_=Object(g.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{items:t.payload,filteredItems:t.payload});case"FILTER_PRODUCTS_BY_SIZE":return Object(d.a)(Object(d.a)({},e),{},{filteredItems:t.payload.items,size:t.payload.size});case"ORDER_PRODUCTS_BY_PRICE":return Object(d.a)(Object(d.a)({},e),{},{filteredItems:t.payload.items,sort:t.payload.sort});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":case"REMOVE_FROM_CART":return{items:t.payload.cartItems};default:return e}}}),S={};localStorage.getItem("cartItems")&&(S.cart={items:JSON.parse(localStorage.getItem("cartItems"))});var R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,T=Object(g.e)(_,S,R(Object(g.a)(j.a))),N=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return a.a.createElement(m.a,{store:T},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Ecommerce Shopping Cart Application"),a.a.createElement("hr",null),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-8"},a.a.createElement(v,null),a.a.createElement("hr",null),a.a.createElement(E,null)),a.a.createElement("div",{className:"col-md-4"},a.a.createElement(y,null)))))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f5462c4d.chunk.js.map