import{a as F}from"./chunk-YT3NGYPD.js";import{a as O}from"./chunk-NZKCZHFJ.js";import"./chunk-ZARZFIJP.js";import{Cb as n,Db as y,Eb as d,Ja as S,Jb as A,Na as a,Pb as o,Qb as b,Rb as m,Z as f,aa as g,db as x,e as C,fb as E,jb as _,kb as I,lb as v,mb as u,nb as e,ob as t,oc as P,pb as h,pc as w,vb as s}from"./chunk-VV2C2VWU.js";var B=(r,l)=>l._id;function D(r,l){r&1&&(e(0,"div",10),n(1,"Paid"),t())}function $(r,l){r&1&&(e(0,"div",24),n(1,"Not Paid"),t())}function G(r,l){if(r&1&&n(0),r&2){let i=s().$implicit;d(" ",i.product.title.split(" ",3).join(" "),"")}}function j(r,l){if(r&1&&n(0),r&2){let i=s().$implicit;d(" ",i.product.title,"")}}function U(r,l){if(r&1&&(e(0,"div",17),h(1,"img",25),e(2,"p",9),x(3,G,1,1)(4,j,1,1),t(),e(5,"p",26),n(6),o(7,"currency"),t(),e(8,"p",26),n(9),t(),e(10,"p",26),n(11),o(12,"currency"),t()()),r&2){let i=l.$implicit;a(),E("src",i.product.imageCover,S),a(2),_(3,i.product.title.length>2?3:4),a(3),d("price : ",m(7,5,i.price,"GBP"),""),a(3),d("quntity: ",i.count,""),a(2),d("subtotal: ",m(12,8,i.count*i.price,"GBP"),"")}}function M(r,l){if(r&1&&n(0),r&2){let i=s().$implicit;d(" ",i.product.title.split(" ",3).join(" "),"")}}function N(r,l){if(r&1&&n(0),r&2){let i=s().$implicit;d(" ",i.product.title,"")}}function R(r,l){if(r&1&&(e(0,"tr",21)(1,"td",27)(2,"div",28),h(3,"img",25),e(4,"p",9),x(5,M,1,1)(6,N,1,1),t()()(),e(7,"td"),n(8),o(9,"currency"),t(),e(10,"td"),n(11),t(),e(12,"td"),n(13),o(14,"currency"),t()()),r&2){let i=l.$implicit;a(3),E("src",i.product.imageCover,S),a(2),_(5,i.product.title.length>2?5:6),a(3),d(" ",m(9,5,i.price,"GBP"),""),a(3),y(i.count),a(2),y(m(14,8,i.count*i.price,"GBP"))}}function k(r,l){r&1&&(e(0,"div",10),n(1,"Delivered"),t())}function z(r,l){r&1&&(e(0,"div",24),n(1,"Not Delivered"),t())}function q(r,l){if(r&1&&(e(0,"div",4)(1,"div",5)(2,"h2",6),n(3),t(),e(4,"div",7)(5,"h6",8),n(6),o(7,"currency"),t(),e(8,"h6",9),x(9,D,2,0,"div",10)(10,$,2,0),t()()(),e(11,"div",11)(12,"div",12)(13,"div",13)(14,"h5",14),n(15,"User Info"),t(),e(16,"div",15)(17,"h6",9),n(18),t(),e(19,"h6",9),n(20),t(),e(21,"h6",9),n(22),t()()(),e(23,"div",13)(24,"h5",14),n(25,"Shipping Adress"),t(),e(26,"div",15)(27,"h6",9),n(28),t(),e(29,"h6",9),n(30),t(),e(31,"h6",9),n(32),t()()(),e(33,"div",13)(34,"h5",14),n(35,"Payment Info"),t(),e(36,"div",15)(37,"h6",9),n(38),t(),e(39,"h6",9)(40,"span",9),n(41,"taxPrice:"),t(),n(42),o(43,"currency"),t(),e(44,"h6",9),n(45),o(46,"currency"),t(),e(47,"h6",9),n(48),o(49,"date"),t()()()(),h(50,"hr"),e(51,"div",16),v(52,U,13,11,"div",17,B),t(),e(54,"table",18)(55,"thead")(56,"tr")(57,"th",19),n(58,"Product"),t(),e(59,"th",20),n(60,"Price"),t(),e(61,"th",20),n(62,"Quntity"),t(),e(63,"th",20),n(64,"Subtotal"),t()()(),e(65,"tbody"),v(66,R,15,11,"tr",21,B),t()()(),e(68,"div",22)(69,"h6",9)(70,"span",23),n(71,"Order Date :"),t(),n(72),o(73,"date"),t(),e(74,"h6",9),x(75,k,2,0,"div",10)(76,z,2,0),t()()()),r&2){let i=l.$implicit,c=l.$index,p=s();a(3),d("Order ID : ",i._id,""),a(3),d("Total Price : ",m(7,15,i.totalOrderPrice,"GBP"),""),a(3),_(9,i.isPaid?9:10),a(9),d("Name: ",i.user.name,""),a(2),d("Email : ",i.user.email,""),a(2),d("Email : ",i.user.phone,""),a(6),d("City : ",i.shippingAddress.city,""),a(2),d("Details : ",i.shippingAddress.details,""),a(2),d("Phone : ",i.shippingAddress.phone,""),a(6),d("paymentType : ",i.paymentMethodType,""),a(4),d(" ",m(43,18,i.taxPrice,"GBP")," "),a(3),d("shipping Price : ",m(46,21,i.shippingPrice,"GBP"),""),a(3),d("paid At : ",i.paidAt?b(49,24,i.paidAt):"not yet",""),a(4),u(p.allOrders[c].cartItems),a(14),u(p.allOrders[c].cartItems),a(6),d(" ",b(73,26,i.createdAt),""),a(3),_(75,i.isDelivered?75:76)}}var X=(()=>{let l=class l{constructor(){this._OrdersService=f(O),this._AuthService=f(F),this.allOrders=[],this.allOrdersReverse=[],this.subscribe=new C}ngOnInit(){this.subscribe=this._OrdersService.getUserOrder(this._AuthService.getUserData()).subscribe({next:c=>{this.allOrders=c,this.allOrdersReverse=this.allOrders.reverse()}})}ngOnDestroy(){this.subscribe.unsubscribe()}};l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=g({type:l,selectors:[["app-allorders"]],standalone:!0,features:[A],decls:7,vars:0,consts:[[1,"orders"],[1,"container","my-5"],[1,"text-center","my-3","fw-bold","text-main"],[1,"row","g-4","mb-5"],[1,"card","p-0","border-main","border-3"],[1,"card-header","d-flex","justify-content-between","align-items-center","flex-wrap"],[1,"h6"],[1,"d-flex","flex-wrap"],[1,"me-2","fw-semibold"],[1,""],[1,"badge","bg-main"],[1,"card-body"],[1,"row","my-3","justify-content-between","gy-3"],[1,"col-md-3"],[1,"text-main"],[1,"ms-2"],[1,"d-sm-none"],[1,"d-flex","align-items-start","w-100","flex-column","my-3"],[1,"table","table-striped","text-center","d-none","d-sm-table"],["scope","col",1,"text-start"],["scope","col"],[1,"text-center"],[1,"card-footer","text-body-secondary","d-flex","flex-wrap","justify-content-between","align-items-center"],[1,"fw-semibold"],[1,"badge","bg-warning"],["height","60px;","width","60px;","alt","...",1,"me-2","border","rounded-2",3,"src"],[1,"my-0"],[1,"w-25","align-self-center"],[1,"d-flex","align-items-center","w-100","flex-wrap"]],template:function(p,T){p&1&&(e(0,"section",0)(1,"div",1)(2,"h1",2),n(3,"Orders"),t(),e(4,"div",3),v(5,q,77,28,"div",4,I),t()()()),p&2&&(a(5),u(T.allOrdersReverse))},dependencies:[w,P]});let r=l;return r})();export{X as AllordersComponent};