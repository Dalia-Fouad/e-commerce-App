import{l as k,o as R,p as L,q as A,r as O,s as P}from"./chunk-F4DOWSG4.js";import{a as F}from"./chunk-JEOFPUAD.js";import{e as E}from"./chunk-ZARZFIJP.js";import{Cb as l,Db as h,Eb as S,Ja as T,Jb as W,Kb as D,Na as n,Ua as I,Z as c,aa as w,db as u,fb as p,jb as f,ka as _,kb as C,la as v,lb as g,mb as x,nb as o,ob as a,pb as m,sb as y,ub as b,vb as d}from"./chunk-VV2C2VWU.js";var V=()=>[1,2,3,4,5];function M(i,r){if(i&1&&m(0,"img",21),i&2){let s=d().$implicit,t=d(2);p("src",s,T)("alt",t.product.title)}}function j(i,r){i&1&&u(0,M,1,2,"ng-template",5)}function N(i,r){i&1&&m(0,"i",15)}function U(i,r){i&1&&m(0,"i",16)}function z(i,r){if(i&1){let s=y();o(0,"section")(1,"div",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),g(5,j,1,0,null,5,C),a()(),o(7,"div",6)(8,"div",7)(9,"h2",8),l(10),a(),o(11,"p",9),l(12),a(),o(13,"h3",10),l(14),a(),o(15,"div",11)(16,"span",12),l(17),a(),o(18,"div",13)(19,"span",14,0),l(21),a(),o(22,"Span"),g(23,N,1,0,"i",15,C),u(25,U,1,0,"i",16),a()()(),o(26,"div",17)(27,"button",18),b("click",function(){_(s);let e=d();return v(e.addCart(e.product.id))}),m(28,"i",19),l(29," Add to cart"),a(),o(30,"span")(31,"i",20),b("click",function(){_(s);let e=d();return v(e.heart.includes(e.product.id)?e.removeFromWishList(e.product.id):e.addCartToWishList(e.product.id))}),a()()()()()()()()}if(i&2){let s=d();n(4),p("options",s.customOptions),n(),x(s.product.images),n(5),h(s.product.title),n(2),h(s.product.description),n(2),h(s.product.category.name),n(3),S("",s.product.price," EGP "),n(4),S(" ",s.product.ratingsAverage,""),n(2),x(D(8,V).slice(0,s.product.ratingsAverage)),n(2),f(25,s.product.ratingsAverage%1!=0?25:-1),n(6),p("id",s.product.id)}}var ee=(()=>{let r=class r{constructor(){this._ProductsService=c(R),this._ActivatedRoute=c(E),this._CartService=c(F),this._ToastrService=c(k),this._WishlistService=c(P),this._Renderer2=c(I),this.heart=[],this.wishCount=0,this.product=null,this.itemId=null,this.customOptions={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:900,navText:["",""],items:1,nav:!1}}ngOnInit(){this.activatedRoutesubscribe=this._ActivatedRoute.paramMap.subscribe({next:t=>{this.itemId=t.get("id"),this.allsubscribe=this._ProductsService.getSpecificProducts(this.itemId).subscribe({next:e=>{this.product=e.data,console.log(e.data)},error:e=>{console.log(e.error.message)}})}}),this.wishSubscrib=this._WishlistService.getUserWishList().subscribe({next:t=>{this.wishCount=t.count;for(let e=0;e<t.data.length;e++)this.heart.push(t.data[e].id),document.getElementById(t.data[e].id)?.classList.add("text-danger")}})}ngOnDestroy(){this.allsubscribe?.unsubscribe(),this.activatedRoutesubscribe?.unsubscribe(),this.wishSubscrib?.unsubscribe()}addCart(t){this._CartService.addProductToCart(t).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message,"FreshCart"),this._CartService.numberOfCartItems.set(e.numOfCartItems)},error:e=>{console.log(e.error.message)}})}addCartToWishList(t){this._WishlistService.addToWishList(t).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message,"FreshCart"),this.heart.push(t),this._Renderer2.addClass(document.getElementById(t),"text-danger"),this.wishCount=this.wishCount+1,this._WishlistService.WishlistItemsNum.set(this.wishCount)},error:e=>{console.log(e.error.message)}})}removeFromWishList(t){this._WishlistService.removeFromWishList(t).subscribe({next:e=>{this._ToastrService.success(e.message,"FreshCart"),this.heart.splice(this.heart.indexOf(t),1),this._Renderer2.removeClass(document.getElementById(t),"text-danger"),this.wishCount=this.wishCount-1,this._WishlistService.WishlistItemsNum.set(this.wishCount)},error:e=>{console.log(e.error.message)}})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=w({type:r,selectors:[["app-details"]],standalone:!0,features:[W],decls:1,vars:1,consts:[["rate",""],[1,"container","my-5"],[1,"row","align-items-center"],[1,"col-md-4"],[3,"options"],["carouselSlide",""],[1,"col-md-8"],[1,"p-2"],[1,"fw-bold"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","mb-2"],[1,"fw-bolder"],[1,"d-flex","flex-column","align-items-end"],[1,"badge","bg-main"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half-stroke","rating-color"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn-main","w-75",3,"click"],[1,"fa","fa-plus"],[1,"fas","fa-heart","fa-lg",3,"click","id"],[1,"w-100",3,"src","alt"]],template:function(e,B){e&1&&u(0,z,32,9,"section"),e&2&&f(0,B.product?0:-1)},dependencies:[O,A,L]});let i=r;return i})();export{ee as DetailsComponent};
