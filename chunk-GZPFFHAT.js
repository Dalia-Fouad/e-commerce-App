import{l as k}from"./chunk-TFPA5QCA.js";import{Bc as f,Cb as d,Db as c,Ja as p,Jb as M,Na as l,T as v,Y as g,Z as h,aa as x,e as b,fb as u,ka as S,la as w,lb as y,mb as _,nb as i,ob as t,pb as m,sb as C,ub as E,vb as B,wc as I}from"./chunk-VV2C2VWU.js";var F=(()=>{let e=class e{constructor(a){this._HttpClient=a}getAllBrands(){return this._HttpClient.get(`${f.baseUrl}/api/v1/brands`)}getSpecificBrand(a){return this._HttpClient.get(`${f.baseUrl}/api/v1/brands/${a}`)}};e.\u0275fac=function(r){return new(r||e)(g(I))},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var $=(n,e)=>e._id;function j(n,e){if(n&1){let s=C();i(0,"div",19),E("click",function(){let r=S(s).$implicit,o=B();return w(o.getid(r._id))}),i(1,"div",20),m(2,"img",21),i(3,"h4",22),d(4),t()()()}if(n&2){let s=e.$implicit;l(2),u("src",s.image,p)("alt",s.name)("title",s.name),l(2),c(s.name)}}var q=(()=>{let e=class e{constructor(){this._BrandsService=h(F),this.brandId=0,this.brandsList=[],this.brand={},this.brandSub=new b,this.brandSub2=new b}ngOnInit(){this.brandSub=this._BrandsService.getAllBrands().subscribe({next:a=>{this.brandsList=a.data}})}ngOnDestroy(){this.brandSub.unsubscribe(),this.brandSub2.unsubscribe()}getid(a){this.brandSub2=this._BrandsService.getSpecificBrand(a).subscribe({next:r=>{this.brand=r.data,console.log(r.data)}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=x({type:e,selectors:[["app-brand"]],standalone:!0,features:[M],decls:35,vars:5,consts:[[1,"container","my-4"],[1,"text-main","fw-bolder","my-5","text-center"],[1,"row","g-3"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"col-sm-6","col-md-4","col-lg-3"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5","fw-bold"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"fw-semibold","text-main"],[1,"fw-semibold"],[1,"bg-white","w-50","mx-auto","d-block",3,"src","alt","title"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger"],[1,"modal-dialog"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"col-sm-6","col-md-4","col-lg-3",3,"click"],[1,"mx-2","border","text-center","rounded-3","product","cursor-pointer","card","h-100"],[1,"bg-white","w-100",3,"src","alt","title"],[1,"fw-semibold","card-body"]],template:function(r,o){r&1&&(i(0,"section")(1,"div",0)(2,"h2",1),d(3,"All Brands "),t(),i(4,"div",2),y(5,j,5,4,"div",3,$),t()(),i(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h1",8),d(12,"Brand"),t(),m(13,"button",9),t(),i(14,"div",10)(15,"h4",11),d(16),t(),i(17,"p",12),d(18),t(),m(19,"img",13),t(),i(20,"div",14)(21,"button",15),d(22,"Close"),t()()()()(),i(23,"div",4)(24,"div",16)(25,"div",6)(26,"div",7)(27,"h1",17),d(28,"Brand"),t(),m(29,"button",9),t(),i(30,"div",10),d(31," ... "),t(),i(32,"div",14)(33,"button",18),d(34,"Close"),t()()()()()()),r&2&&(l(5),_(o.brandsList),l(11),c(o.brand.name),l(2),c(o.brand.slug),l(),u("src",o.brand.image,p)("alt",o.brand.name)("title",o.brand.name))},dependencies:[k]});let n=e;return n})();export{q as BrandComponent};