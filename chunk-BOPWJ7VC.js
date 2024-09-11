import{a as A}from"./chunk-NZKCZHFJ.js";import{a as E,b as C,c as k,d as D,h as T,i as q,j as F,k as N,m as R}from"./chunk-TFPA5QCA.js";import{a as x}from"./chunk-JEOFPUAD.js";import{e as I,g as O}from"./chunk-ZARZFIJP.js";import{Cb as s,Jb as S,Na as l,Z as f,aa as y,db as c,fb as _,jb as d,nb as o,ob as i,pb as g,ub as v,vb as b}from"./chunk-VV2C2VWU.js";function w(t,r){t&1&&(o(0,"p",13),s(1,"details required"),i())}function G(t,r){if(t&1&&(o(0,"div",6),c(1,w,2,0,"p",13),i()),t&2){let p,e=b();l(),d(1,(p=e.shippingInfo.get("details"))!=null&&p.getError("required")?1:-1)}}function M(t,r){t&1&&(o(0,"p",13),s(1,"phone required"),i())}function V(t,r){if(t&1&&(o(0,"div",6),c(1,M,2,0,"p",13),i()),t&2){let p,e=b();l(),d(1,(p=e.shippingInfo.get("phone"))!=null&&p.getError("required")?1:-1)}}function B(t,r){t&1&&(o(0,"p",13),s(1,"city is required"),i())}function j(t,r){if(t&1&&(o(0,"div",6),c(1,B,2,0,"p",13),i()),t&2){let p,e=b();l(),d(1,(p=e.shippingInfo.get("city"))!=null&&p.getError("required")?1:-1)}}var W=(()=>{let r=class r{constructor(){this._FormBuilder=f(N),this._ActivatedRoute=f(I),this._OrdersService=f(A),this._Router=f(O),this._CartService=f(x),this.shippingInfo=this._FormBuilder.group({details:[null,[C.required]],phone:[null,[C.required]],city:[null,[C.required]]}),this.cartID="",this.type=""}ngOnInit(){this.paramSubscription=this._ActivatedRoute.paramMap.subscribe({next:e=>{this.cartID=e.get("id")},error:e=>{console.log(e.error.message)}})}ngOnDestroy(){this.paramSubscription?.unsubscribe(),this.subscrip1?.unsubscribe(),this.subscrip2?.unsubscribe()}checkOut(){this.type=="visa"?this.subscrip1=this._OrdersService.checkOutSession(this.cartID,this.shippingInfo.value).subscribe({next:e=>{console.log(e),e.status=="success"&&window.open(e.session.url,"_self")},error:e=>{console.log(e.error.message)}}):this.type=="cash"&&(console.log("cashhhhhhhhhh"),this.subscrip2=this._OrdersService.cashOrder(this.cartID,this.shippingInfo.value).subscribe({next:e=>{console.log(this.cartID),console.log(e),e.status=="success"&&(this._CartService.removeAllCartItems().subscribe({next:m=>{console.log(m),this._CartService.numberOfCartItems.set(0)}}),this._Router.navigate(["/allorders"]))},error:e=>{console.log(this.cartID),console.log(e.error.message)}}))}};r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=y({type:r,selectors:[["app-orders"]],standalone:!0,features:[S],decls:23,vars:6,consts:[[1,"container","w-75","mx-auto","my-5"],[1,"text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["type","text","id","details","formControlName","details",1,"form-control"],[1,"alert","alert-danger","w-100","mt-1"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["for","city"],["type","city","id","city","formControlName","city",1,"form-control"],["type","submit",1,"btn-main","my-3",3,"click","disabled"],["type","submit",1,"btn-main","my-3","ms-3",3,"click","disabled"],[1,"m-0"]],template:function(m,n){if(m&1&&(o(0,"section",0)(1,"h3",1),s(2,"Shipping Address :"),i(),o(3,"form",2),v("ngSubmit",function(){return n.checkOut()}),o(4,"div",3)(5,"label",4),s(6,"details:"),i(),g(7,"textarea",5),c(8,G,2,1,"div",6),i(),o(9,"div",3)(10,"label",7),s(11,"phone:"),i(),g(12,"input",8),c(13,V,2,1,"div",6),i(),o(14,"div",3)(15,"label",9),s(16,"city:"),i(),g(17,"input",10),c(18,j,2,1,"div",6),i(),o(19,"button",11),v("click",function(){return n.type="visa"}),s(20," Check out Visa"),i(),o(21,"button",12),v("click",function(){return n.type="cash"}),s(22," Check out Cash"),i()()()),m&2){let a,u,h;l(3),_("formGroup",n.shippingInfo),l(5),d(8,(a=n.shippingInfo.get("details"))!=null&&a.errors&&((a=n.shippingInfo.get("details"))!=null&&a.touched||(a=n.shippingInfo.get("details"))!=null&&a.dirty)?8:-1),l(5),d(13,(u=n.shippingInfo.get("phone"))!=null&&u.errors&&((u=n.shippingInfo.get("phone"))!=null&&u.touched||(u=n.shippingInfo.get("phone"))!=null&&u.dirty)?13:-1),l(5),d(18,(h=n.shippingInfo.get("city"))!=null&&h.errors&&((h=n.shippingInfo.get("city"))!=null&&h.touched||(h=n.shippingInfo.get("city"))!=null&&h.dirty)?18:-1),l(),_("disabled",n.shippingInfo.invalid),l(2),_("disabled",n.shippingInfo.invalid)}},dependencies:[R,T,E,k,D,q,F]});let t=r;return t})();export{W as OrdersComponent};
