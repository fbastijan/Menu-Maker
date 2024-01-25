(function(){"use strict";var a={7772:function(a,e,t){var o=t(9242),l=t(3396);const i={class:"navbar navbar-expand-lg bg-body-tertiary"},s={class:"container-fluid"},n=(0,l._)("a",{class:"navbar-brand",href:"#"},"Menu Maker",-1),r=(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c={class:"navbar-nav"},v={class:"nav-link",href:"#"},p={class:"nav-link",href:"#"},u={class:"navbar-nav ms-auto"},m={class:"nav-link active","aria-current":"page",href:"#"},b={class:"nav-link",href:"#"},h=(0,l._)("a",{class:"nav-link",href:"#"},"Odjava",-1);function g(a,e,t,o,g,_){const y=(0,l.up)("router-link"),f=(0,l.up)("BackgroundImages"),w=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("nav",i,[(0,l._)("div",s,[n,r,(0,l._)("div",d,[(0,l._)("div",c,[(0,l._)("a",v,[(0,l.Wm)(y,{to:"/",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("a",p,[(0,l.Wm)(y,{to:"/menucreator",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Make your menu")])),_:1})])]),(0,l._)("div",u,[(0,l._)("a",m,[(0,l.Wm)(y,{to:"/login",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Login")])),_:1})]),(0,l._)("a",b,[(0,l.Wm)(y,{to:"/register",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),h])])])]),(0,l.Wm)(f),(0,l.Wm)(w)])}var _=t(7139);const y={class:"menu-container",ref:"menuContainer"};function f(a,e,t,o,i,s){return(0,l.wg)(),(0,l.iD)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.gridItems,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"background-image",style:(0,_.j5)({top:a.top,left:a.left})},null,4)))),128))],512)}t(560);var w={data(){return{gridItems:[],windowHeight:window.innerHeight}},mounted(){this.generateGrid(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},methods:{generateGrid(){const a="https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand",e=Math.floor(window.innerHeight/100),t=Math.ceil(window.innerWidth/100),o=[];for(let l=0;l<e;l++)for(let e=0;e<t;e++)o.push({top:100*l+"px",left:100*e+"px",backgroundImage:a});this.gridItems=o},handleResize(){this.generateGrid()}},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},j=t(89);const k=(0,j.Z)(w,[["render",f]]);var z=k,x={name:"App",components:{BackgroundImages:z}};const D=(0,j.Z)(x,[["render",g]]);var C=D,M=t(2483);const P={class:"container"},K={class:"row justify-content-center mt-5"},G={class:"col-9"},H={class:"card custom-card shadow",style:{"border-radius":"25px"}},I={class:"card-body"},O=(0,l._)("h1",{class:"card-title text-center display-2"}," Restaurant Menu Generator ",-1),U=(0,l._)("p",{class:"card-text display-5 m-5"}," Welcome to our restaurant menu generator app. Create beautiful and customized menus for your restaurant with ease. Use our intuitive interface to add dishes, set prices, and showcase your culinary offerings in style. ",-1),B=(0,l._)("a",{href:"#",class:"btn custom-btn btn-primary btn-lg m-5"},"Get started!",-1);function S(a,e,t,o,i,s){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",P,[(0,l._)("div",K,[(0,l._)("div",G,[(0,l._)("div",H,[(0,l._)("div",I,[O,U,(0,l.Wm)(n,{to:"/menucreator",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[B])),_:1})])])])])])])}var V={name:"Home_view"};const T=(0,j.Z)(V,[["render",S]]);var W=T;const E={class:"container"},R={class:"row justify-content-center mt-5"},A={class:"col-9"},L={class:"card custom-card shadow",style:{"border-radius":"25px"}},Y={class:"card-body"},q=(0,l.uE)('<h1 class="card-title text-center display-2"> Restaurant Menu Generator </h1><div class="form-floating mb-3 mx-3"><input type="name" class="form-control" id="floatingInput" placeholder="name"><label for="floatingInput">Your Menu Name</label></div><h3 class="card-title text-center mb-3"> Definiranje kategorija </h3>',3),Z={class:"row ms-3"},N={class:"col"},F=(0,l._)("h3",{class:"h3 mb-3 text-center"},"Pića",-1),J={class:"input-group mb-3"},Q={class:"mb-3"},$=(0,l._)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Kategorije",-1),X={class:"col"},aa=(0,l._)("h3",{class:"h3 mb-3 text-center"},"Hrana",-1),ea={class:"input-group mb-3"},ta={class:"mb-3"},oa=(0,l._)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Kategorije",-1),la={class:"col"},ia=(0,l._)("h3",{class:"h3 mb-3 text-center"},"Ostalo",-1),sa={class:"input-group mb-3"},na={class:"mb-3"},ra=(0,l._)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Kategorije",-1),da=(0,l._)("a",{href:"#",class:"btn custom-btn btn-primary btn-lg m-5"},"Započni Menu!",-1);function ca(a,e,t,i,s,n){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",E,[(0,l._)("div",R,[(0,l._)("div",A,[(0,l._)("div",L,[(0,l._)("div",Y,[q,(0,l._)("div",Z,[(0,l._)("div",N,[F,(0,l._)("div",J,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"Kategorija","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[0]||(e[0]=a=>s.piceGumb=a)},null,512),[[o.nr,s.piceGumb]]),(0,l._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=a=>n.addKat("pice",s.piceGumb))}," Dodaj ")]),(0,l._)("div",Q,[$,(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[2]||(e[2]=a=>s.kategorije.pice=a)},"\r\nAlkoholna pića\r\nBezalkoholna pića\r\nGazirana Bezalkoholna pića\r\nKava",512),[[o.nr,s.kategorije.pice]])])]),(0,l._)("div",X,[aa,(0,l._)("div",ea,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"Kategorija","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[3]||(e[3]=a=>s.hranaGumb=a)},null,512),[[o.nr,s.hranaGumb]]),(0,l._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[4]||(e[4]=a=>n.addKat("hrana",s.hranaGumb))}," Dodaj ")]),(0,l._)("div",ta,[oa,(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[5]||(e[5]=a=>s.kategorije.hrana=a)},"\r\nPredjelo\r\nGlavno Jelo\r\nDesert",512),[[o.nr,s.kategorije.hrana]])])]),(0,l._)("div",la,[ia,(0,l._)("div",sa,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"Kategorija","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[6]||(e[6]=a=>s.ostaloGumb=a)},null,512),[[o.nr,s.ostaloGumb]]),(0,l._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[7]||(e[7]=a=>n.addKat("ostalo",s.ostaloGumb))}," Dodaj ")]),(0,l._)("div",na,[ra,(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[8]||(e[8]=a=>s.kategorije.ostalo=a)},null,512),[[o.nr,s.kategorije.ostalo]])])])]),(0,l.Wm)(r,{to:"/menu/dobarBarPula/1",style:{"text-decoration":"none",color:"inherit"}},{default:(0,l.w5)((()=>[da])),_:1})])])])])])])}var va={name:"Menu_creator",methods:{addKat(a,e){this.kategorije[a]?this.kategorije[a]=this.kategorije[a]+"\n"+e:this.kategorije[a]=e}},data(){return{kategorije:{pice:"Alkoholna pića\nBezalkoholna pića\nGazirana Bezalkoholna pića\nKava",hrana:"Predjelo\nGlavno jelo\nDesert",ostalo:""},hranaGumb:"",ostaloGumb:"",piceGumb:""}}};const pa=(0,j.Z)(va,[["render",ca]]);var ua=pa,ma=t.p+"img/MenuStock.e12b7d16.png";const ba=(0,l.uE)('<div class="container" data-v-10c733d3><div class="row justify-content-center mt-5" data-v-10c733d3><div class="col-9" data-v-10c733d3><div class="card custom-card shadow" style="border-radius:25px;" data-v-10c733d3><h5 class="card-header" data-v-10c733d3>Register</h5><div class="card-body" data-v-10c733d3><div class="row d-flex align-items-center" data-v-10c733d3><div class="col" data-v-10c733d3><h1 class="card-title display-5 mb-5" data-v-10c733d3> Lets get you started! </h1><div class="form-floating mb-3" data-v-10c733d3><input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" data-v-10c733d3><label for="floatingInput" data-v-10c733d3>Email address</label></div><div class="form-floating mb-3" data-v-10c733d3><input type="username" class="form-control" id="floatingInput" placeholder="username" data-v-10c733d3><label for="floatingInput" data-v-10c733d3>Username</label></div><div class="form-floating mb-3" data-v-10c733d3><input type="password" class="form-control" id="floatingPassword" placeholder="Password" data-v-10c733d3><label for="floatingPassword" data-v-10c733d3>Password</label></div><div class="form-floating" data-v-10c733d3><input type="password" class="form-control" id="floatingPassword2" placeholder="Password" data-v-10c733d3><label for="floatingPassword" data-v-10c733d3>Confirm Password</label></div><a href="#" class="btn custom-btn-2 btn-primary btn-lg mt-5" data-v-10c733d3>Register</a></div><div class="col" data-v-10c733d3><img src="'+ma+'" alt="" class="img-fluid" data-v-10c733d3></div></div></div></div></div></div></div>',1),ha=[ba];function ga(a,e,t,o,i,s){return(0,l.wg)(),(0,l.iD)("div",null,ha)}var _a={name:"RegisterView"};const ya=(0,j.Z)(_a,[["render",ga],["__scopeId","data-v-10c733d3"]]);var fa=ya;const wa=(0,l.uE)('<div class="container" data-v-78efd902><div class="row justify-content-center mt-5" data-v-78efd902><div class="col-9" data-v-78efd902><div class="card custom-card shadow" style="border-radius:25px;" data-v-78efd902><h5 class="card-header" data-v-78efd902>Login</h5><div class="card-body" data-v-78efd902><div class="row d-flex align-items-center" data-v-78efd902><div class="col" data-v-78efd902><h1 class="card-title display-5 mb-5" data-v-78efd902>Welcome back!</h1><div class="form-floating mb-3" data-v-78efd902><input type="username" class="form-control" id="floatingInput" placeholder="username" data-v-78efd902><label for="floatingInput" data-v-78efd902>Username</label></div><div class="form-floating" data-v-78efd902><input type="password" class="form-control" id="floatingPassword" placeholder="Password" data-v-78efd902><label for="floatingPassword" data-v-78efd902>Password</label></div><a href="#" class="btn custom-btn-2 btn-primary btn-lg mt-5" data-v-78efd902>Login</a></div><div class="col" data-v-78efd902><img src="'+ma+'" alt="" class="img-fluid" data-v-78efd902></div></div></div></div></div></div></div>',1),ja=[wa];function ka(a,e,t,o,i,s){return(0,l.wg)(),(0,l.iD)("div",null,ja)}var za={name:"LoginView"};const xa=(0,j.Z)(za,[["render",ka],["__scopeId","data-v-78efd902"]]);var Da=xa;const Ca={class:"container"},Ma={class:"row justify-content-center mt-5"},Pa={class:"col-9"},Ka={class:"card custom-card shadow",style:{"border-radius":"25px"}},Ga={class:"card-body"},Ha=(0,l._)("h1",{class:"card-title text-center display-2"},"Dobar Bar Pula",-1),Ia=(0,l._)("button",{type:"button",class:"btn btn-primary mb-3","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Dodaj Stavku ",-1),Oa=(0,l._)("button",{type:"button",class:"btn btn-primary mb-3 my-button ms-2"}," Arhiva ",-1),Ua={class:"accordion",id:"accordionExample"},Ba={class:"accordion-item"},Sa=(0,l._)("h2",{class:"accordion-header",id:"headingOne"},[(0,l._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Hrana ")],-1),Va={id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},Ta={class:"accordion-body"},Wa={class:"accordion-item"},Ea=(0,l._)("h2",{class:"accordion-header",id:"headingTwo"},[(0,l._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Piće ")],-1),Ra={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},Aa={class:"accordion-body"},La={class:"accordion-item"},Ya=(0,l._)("h2",{class:"accordion-header",id:"headingThree"},[(0,l._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Ostalo ")],-1),qa={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},Za={class:"text-center",ref:"pdf"},Na={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Fa={class:"modal-dialog"},Ja={class:"modal-content"},Qa=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Dodaj stavku"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$a={class:"modal-body"},Xa={class:"mb-3"},ae=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Naziv",-1),ee={class:"mb-3"},te=(0,l._)("label",{class:"form-label"},"Opis/količina",-1),oe={class:"mb-3"},le=(0,l._)("label",{class:"form-label"},"Kategorija",-1),ie=(0,l._)("option",{value:"pice"},"Piće",-1),se=(0,l._)("option",{value:"hrana"},"Hrana",-1),ne=(0,l._)("option",{value:"ostalo"},"Ostalo",-1),re=[ie,se,ne],de={key:0,class:"mb-3"},ce=(0,l._)("label",{class:"form-label"},"Kategorija",-1),ve=["value"],pe={class:"mb-3"},ue=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Cijena u Eurima",-1),me={class:"modal-footer"};function be(a,e,t,i,s,n){const r=(0,l.up)("router-link"),d=(0,l.up)("StavkeMenu"),c=(0,l.up)("QRCodeVue3");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Ca,[(0,l._)("div",Ma,[(0,l._)("div",Pa,[(0,l._)("div",Ka,[(0,l._)("div",Ga,[Ha,Ia,(0,l.Wm)(r,{to:"/menu/arhiva"},{default:(0,l.w5)((()=>[Oa])),_:1}),(0,l._)("div",Ua,[(0,l._)("div",Ba,[Sa,(0,l._)("div",Va,[(0,l._)("div",Ta,[(0,l.Wm)(d,{info:this.items,additional:"hrana"},null,8,["info"])])])]),(0,l._)("div",Wa,[Ea,(0,l._)("div",Ra,[(0,l._)("div",Aa,[(0,l.Wm)(d,{info:this.items,additional:"pice"},null,8,["info"])])])]),(0,l._)("div",La,[Ya,(0,l._)("div",qa,[(0,l.Wm)(d,{info:this.items,additional:"ostalo"},null,8,["info"])])])]),(0,l._)("div",Za,[(0,l.Wm)(c,{value:n.getUrlQR(),downloadButton:"btn btn-primary mb-3",downloadOptions:{name:"vqr",extension:"png"},download:!0,width:200,height:200},null,8,["value"])],512)])])])])]),(0,l._)("div",Na,[(0,l._)("div",Fa,[(0,l._)("div",Ja,[Qa,(0,l._)("div",$a,[(0,l._)("div",Xa,[ae,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"npr.Pizza Margherita","onUpdate:modelValue":e[0]||(e[0]=a=>s.modal_object.naziv=a)},null,512),[[o.nr,s.modal_object.naziv]])]),(0,l._)("div",ee,[te,(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[1]||(e[1]=a=>s.modal_object.opis=a)},null,512),[[o.nr,s.modal_object.opis]])]),(0,l._)("div",oe,[le,(0,l.wy)((0,l._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[2]||(e[2]=a=>s.modal_object.type=a)},re,512),[[o.bM,s.modal_object.type]])]),s.modal_object.type&&this.kategorije[this.modal_object.type].length>0?((0,l.wg)(),(0,l.iD)("div",de,[ce,(0,l.wy)((0,l._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[3]||(e[3]=a=>s.modal_object.subtype=a)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.kategorije[this.modal_object.type],((a,e)=>((0,l.wg)(),(0,l.iD)("option",{value:a,key:e},(0,_.zw)(a),9,ve)))),128))],512),[[o.bM,s.modal_object.subtype]])])):(0,l.kq)("",!0),(0,l._)("div",pe,[ue,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"npr 50","onUpdate:modelValue":e[4]||(e[4]=a=>s.modal_object.cijena=a)},null,512),[[o.nr,s.modal_object.cijena]])])]),(0,l._)("div",me,[(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[5]||(e[5]=(...a)=>n.saveItem&&n.saveItem(...a))}," Save changes ")])])])])])}const he={class:"list-group"},ge={key:0,class:"list-group-item"},_e={class:"row d-flex"},ye={class:"col"},fe={class:"col"},we={class:"col"},je={class:"col"},ke={class:"col-1"},ze=["onClick"],xe=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-fill",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"})],-1),De=[xe],Ce={class:"col-1"},Me=["onClick"],Pe=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"})],-1),Ke=[Pe],Ge={class:"modal fade",id:"my-modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},He={class:"modal-dialog"},Ie={class:"modal-content"},Oe=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Dodaj stavku"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ue={class:"modal-body"},Be={class:"mb-3"},Se=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Naziv",-1),Ve={class:"mb-3"},Te=(0,l._)("label",{class:"form-label"},"Opis/količina",-1),We={class:"mb-3"},Ee=(0,l._)("label",{class:"form-label"},"Kategorija",-1),Re=(0,l._)("option",{value:"pice"},"Piće",-1),Ae=(0,l._)("option",{value:"hrana"},"Hrana",-1),Le=(0,l._)("option",{value:"ostalo"},"Ostalo",-1),Ye=[Re,Ae,Le],qe={key:0,class:"mb-3"},Ze=(0,l._)("label",{class:"form-label"},"Kategorija",-1),Ne=["value"],Fe={class:"mb-3"},Je=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Cijena u Eurima",-1),Qe={class:"modal-footer"};function $e(a,e,t,i,s,n){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("ul",he,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.info,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e},[this.additional==a.type?((0,l.wg)(),(0,l.iD)("li",ge,[(0,l._)("div",_e,[(0,l._)("div",ye,"Naziv: "+(0,_.zw)(a.naziv),1),(0,l._)("div",fe,"Opis: "+(0,_.zw)(a.opis),1),(0,l._)("div",we,"Tip: "+(0,_.zw)(a.subtype),1),(0,l._)("div",je,"Cijena: "+(0,_.zw)(a.cijena)+"Eura",1),(0,l._)("div",ke,[(0,l._)("a",{class:"btn btn-sm",onClick:e=>n.itemClicked(a)},De,8,ze)]),(0,l._)("div",Ce,[(0,l._)("a",{class:"btn btn-sm",onClick:e=>n.deleteItem(a.id)},Ke,8,Me)])])])):(0,l.kq)("",!0)])))),128))]),(0,l._)("div",Ge,[(0,l._)("div",He,[(0,l._)("div",Ie,[Oe,(0,l._)("div",Ue,[(0,l._)("div",Be,[Se,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"npr.Pizza Margherita","onUpdate:modelValue":e[0]||(e[0]=a=>s.modal_object.naziv=a)},null,512),[[o.nr,s.modal_object.naziv]])]),(0,l._)("div",Ve,[Te,(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[1]||(e[1]=a=>s.modal_object.opis=a)},null,512),[[o.nr,s.modal_object.opis]])]),(0,l._)("div",We,[Ee,(0,l.wy)((0,l._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[2]||(e[2]=a=>s.modal_object.type=a)},Ye,512),[[o.bM,s.modal_object.type]])]),s.modal_object.type&&this.kategorije[this.modal_object.type].length>0?((0,l.wg)(),(0,l.iD)("div",qe,[Ze,(0,l.wy)((0,l._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[3]||(e[3]=a=>s.modal_object.subtype=a)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.kategorije[this.modal_object.type],((a,e)=>((0,l.wg)(),(0,l.iD)("option",{value:a,key:e},(0,_.zw)(a),9,Ne)))),128))],512),[[o.bM,s.modal_object.subtype]])])):(0,l.kq)("",!0),(0,l._)("div",Fe,[Je,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"npr 50","onUpdate:modelValue":e[4]||(e[4]=a=>s.modal_object.cijena=a)},null,512),[[o.nr,s.modal_object.cijena]])])]),(0,l._)("div",Qe,[(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[5]||(e[5]=(...e)=>a.saveItem&&a.saveItem(...e))}," Save changes ")])])])])])}let Xe=[{id:1,naziv:"Pizza Margherita",opis:"Rajčice, Sir, tijesto",type:"hrana",subtype:"Glavno jelo",cijena:40},{id:2,naziv:"Spaghetti Bolognese",opis:"Meso, Umak od rajčice, Tjestenina",type:"hrana",subtype:"Glavno jelo",cijena:35},{id:3,naziv:"Chicken Caesar Salad",opis:"Pileće meso, Zelena salata, Caesar umak",type:"hrana",subtype:"Predjelo",cijena:28},{id:4,naziv:"Margarita Cocktail",opis:"0.33",type:"pice",subtype:"Alkoholna pića",cijena:12},{id:5,naziv:"Ginger Ale",opis:"Gazirani napitak s okusom đumbira",type:"pice",subtype:"Bezalkoholna pića",cijena:5},{id:6,naziv:"Espresso",opis:"Mala, jaka kava",type:"pice",subtype:"Kava",cijena:8},{id:7,naziv:"Chocolate Cake",opis:"Čokoladna torta sa sočnim punjenjem",type:"hrana",subtype:"Desert",cijena:15},{id:8,naziv:"Pepperoni Pizza",opis:"Pepperoni, Sir, tijesto",type:"hrana",subtype:"Glavno jelo",cijena:45},{id:9,naziv:"Carbonara",opis:"Špek, Jaja, Parmezan, Tjestenina",type:"hrana",subtype:"Glavno jelo",cijena:38},{id:10,naziv:"Caprese Salad",opis:"Mozzarella, Rajčice, Bosiljak",type:"hrana",subtype:"Predjelo",cijena:30},{id:11,naziv:"Mai Tai",opis:"Rum, Triple sec, Limun, Sirup",type:"pice",subtype:"Alkoholna pića",cijena:14},{id:12,naziv:"Orange Juice",opis:"Svježe iscijeđeni sok od naranče",type:"pice",subtype:"Bezalkoholna pića",cijena:6},{id:13,naziv:"Cappuccino",opis:"Kava s mlijekom i pjenu",type:"pice",subtype:"Kava",cijena:9},{id:14,naziv:"Cheesecake",opis:"Kolač od sira s voćnim preljevom",type:"hrana",subtype:"Desert",cijena:18},{id:15,naziv:"Vegetarian Pizza",opis:"Razno povrće, Sir, tijesto",type:"hrana",subtype:"Glavno jelo",cijena:42},{id:16,naziv:"Lobster Pasta",opis:"Jastog, Bijeli umak, Tjestenina",type:"hrana",subtype:"Glavno jelo",cijena:60},{id:17,naziv:"Bruschetta",opis:"Paradajz, Bosiljak, Maslinovo ulje",type:"hrana",subtype:"Predjelo",cijena:25},{id:18,naziv:"Mojito",opis:"Bijeli rum, Šećer, Menta, Soda",type:"pice",subtype:"Alkoholna pića",cijena:16},{id:19,naziv:"Iced Tea",opis:"Ledena čajna mješavina",type:"pice",subtype:"Bezalkoholna pića",cijena:4},{id:20,naziv:"Macchiato",opis:"Kava s kapljicom mlijeka",type:"pice",subtype:"Kava",cijena:7},{id:21,naziv:"Tiramisu",opis:"Klasični talijanski desert s kavom",type:"hrana",subtype:"Desert",cijena:20}],at=[{id:1,naziv:"Pizza Margherita",opis:"Rajčice, Sir, tijesto",type:"hrana",subtype:"Glavno jelo",cijena:42},{id:2,naziv:"Spaghetti Bolognese",opis:"Meso, Umak od rajčice, Tjestenina",type:"hrana",subtype:"Glavno jelo",cijena:38},{id:3,naziv:"Chicken Caesar Salad",opis:"Pileće meso, Zelena salata, Caesar umak",type:"hrana",subtype:"Predjelo",cijena:30},{id:4,naziv:"Margarita Cocktail",opis:"0.33",type:"pice",subtype:"Alkoholna pića",cijena:15},{id:5,naziv:"Ginger Ale",opis:"Gazirani napitak s okusom đumbira",type:"pice",subtype:"Bezalkoholna pića",cijena:7},{id:6,naziv:"Espresso",opis:"Mala, jaka kava",type:"pice",subtype:"Kava",cijena:10},{id:7,naziv:"Chocolate Cake",opis:"Čokoladna torta sa sočnim punjenjem",type:"hrana",subtype:"Desert",cijena:25},{id:8,naziv:"Pepperoni Pizza",opis:"Pepperoni, Sir, tijesto",type:"hrana",subtype:"Glavno jelo",cijena:48},{id:9,naziv:"Carbonara",opis:"Špek, Jaja, Parmezan, Tjestenina",type:"hrana",subtype:"Glavno jelo",cijena:40},{id:10,naziv:"Caprese Salad",opis:"Mozzarella, Rajčice, Bosiljak",type:"hrana",subtype:"Predjelo",cijena:32}],et={pice:["Alkoholna pića","Bezalkoholna pića","Gazirana Bezalkoholna pića","Kava"],hrana:["Predjelo","Glavno jelo","Desert"],ostalo:[]};var tt={props:["info","additional"],methods:{deleteItem(a){this.items.splice(this.items.findIndex((a=>{a.id})),1)},itemClicked:function(a){window.$("#my-modal").modal("show"),this.modal_object=a}},data(){return{items:Xe,kategorije:et,modal_object:{}}}};const ot=(0,j.Z)(tt,[["render",$e]]);var lt=ot,it=t(8483),st={name:"editor_view",components:{StavkeMenu:lt,QRCodeVue3:it.Z},mounted(){this.sortItems()},methods:{getUrlQR(){return"https://menu-maker122142.web.app/menu/guest"},saveItem(){this.items.push(this.modal_object),this.modal_object={},this.sortItems()},sortItems(){this.items.sort(((a,e)=>{const t=a.subtype.toUpperCase(),o=e.subtype.toUpperCase();return t<o?-1:t>o?1:0}))}},data(){return{items:Xe,tip:"",modal_object:{},kategorije:et,imageData:null,newData:"",QrURL:""}}};const nt=(0,j.Z)(st,[["render",be]]);var rt=nt;const dt={class:"container"},ct={class:"row justify-content-center mt-5"},vt={class:"col"},pt={class:"card custom-card shadow",style:{"border-radius":"25px"}},ut={class:"card-body"},mt=(0,l._)("h1",{class:"card-title text-center mb-5"},"Dobar Bar Menu",-1),bt={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},ht={key:0,class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-hrana",type:"button",role:"tab","aria-controls":"nav-hrana","aria-selected":"true"},gt={key:1,class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},_t={key:2,class:"nav-link",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},yt={class:"tab-content",id:"nav-tabContent"},ft={class:"tab-pane fade show active",id:"nav-hrana",role:"tabpanel","aria-labelledby":"nav-home-tab"},wt=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),jt={class:"h3 mt-3"},kt={key:0},zt={class:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},xt=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),Dt={class:"h3 mt-3"},Ct={key:0},Mt={class:"tab-pane fade",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"},Pt=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),Kt={class:"h3 mt-3"},Gt={key:0};function Ht(a,e,t,o,i,s){const n=(0,l.up)("Subkategorije");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",dt,[(0,l._)("div",ct,[(0,l._)("div",vt,[(0,l._)("div",pt,[(0,l._)("div",ut,[mt,(0,l._)("nav",null,[(0,l._)("div",bt,[i.kategorije.hrana.length>0?((0,l.wg)(),(0,l.iD)("button",ht," Hrana ")):(0,l.kq)("",!0),i.kategorije.pice.length>0?((0,l.wg)(),(0,l.iD)("button",gt," Piće ")):(0,l.kq)("",!0),i.kategorije.ostalo.length>0?((0,l.wg)(),(0,l.iD)("button",_t," Ostalo ")):(0,l.kq)("",!0)])]),(0,l._)("div",yt,[(0,l._)("div",ft,[(0,l._)("div",null,[wt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.hrana,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",jt,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",kt,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])]),(0,l._)("div",zt,[(0,l._)("div",null,[xt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.pice,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",Dt,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",Ct,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])]),(0,l._)("div",Mt,[(0,l._)("div",null,[Pt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.ostalo,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",Kt,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",Gt,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])])])])])])])])])}const It={class:"row"},Ot={class:"col"},Ut={class:"col"},Bt={class:"col"},St=(0,l._)("hr",null,null,-1),Vt={class:"modal",tabindex:"-1",id:"my-modal-item"},Tt={class:"modal-dialog"},Wt={class:"modal-content"},Et=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title"},"Modal title"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Rt={class:"modal-body"},At=(0,l._)("h1",{class:"modal-title text-center mb-3"},"Opis",-1),Lt={class:"fw-bolder"},Yt=(0,l._)("div",{class:"modal-footer"},[(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1);function qt(a,e,t,o,i,s){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",It,[(0,l._)("div",Ot,(0,_.zw)(this.items.naziv),1),(0,l._)("div",Ut,[(0,l._)("p",null,(0,_.zw)(this.items.cijena)+" €",1)]),(0,l._)("div",Bt,[(0,l._)("a",{class:"link-opacity-75-hover",href:"#",onClick:e[0]||(e[0]=a=>s.itemClicked(t.items))},"Opširnije")])]),St,(0,l._)("div",Vt,[(0,l._)("div",Tt,[(0,l._)("div",Wt,[Et,(0,l._)("div",Rt,[At,(0,l._)("p",Lt,(0,_.zw)(i.modal_object.opis),1)]),Yt])])])])}var Zt={name:"SubKategorije",props:["items"],methods:{itemClicked:function(a){window.$("#my-modal-item").modal("show"),this.modal_object=a}},data(){return{modal_object:{}}}};const Nt=(0,j.Z)(Zt,[["render",qt]]);var Ft=Nt,Jt={name:"Home_view",components:{Subkategorije:Ft},data(){return{items:Xe,kategorije:et}}};const Qt=(0,j.Z)(Jt,[["render",Ht]]);var $t=Qt;const Xt={class:"container"},ao={class:"row justify-content-center mt-5"},eo={class:"col-9"},to={class:"card custom-card shadow",style:{"border-radius":"25px"}},oo={class:"card-body"},lo=(0,l._)("h1",{class:"card-title text-center display-2"},"Arhiva",-1),io={class:"list-group"},so={class:"row"},no={class:"col"},ro={class:"col-1"},co=(0,l._)("button",{class:"btn"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"}),(0,l._)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"})])],-1);function vo(a,e,t,o,i,s){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Xt,[(0,l._)("div",ao,[(0,l._)("div",eo,[(0,l._)("div",to,[(0,l._)("div",oo,[lo,(0,l.Wm)(n,{to:"/menucreator",style:{"text-decoration":"none",color:"inherit"}}),(0,l._)("ul",io,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.random_dates,((a,e)=>((0,l.wg)(),(0,l.iD)("li",{class:"list-group-item",key:e},[(0,l._)("div",so,[(0,l._)("div",no,(0,_.zw)(a),1),(0,l._)("div",ro,[(0,l.Wm)(n,{to:"/menu/arhiva/1"},{default:(0,l.w5)((()=>[co])),_:1})])])])))),128))])])])])])])])}var po={name:"Home_view",data(){return{random_dates:["2022-03-15","2023-08-27","2022-11-05","2023-04-19","2022-06-08"]}}};const uo=(0,j.Z)(po,[["render",vo]]);var mo=uo;const bo={class:"container"},ho={class:"row justify-content-center mt-5"},go={class:"col"},_o={class:"card custom-card shadow",style:{"border-radius":"25px"}},yo={class:"card-body"},fo=(0,l._)("h1",{class:"card-title text-center mb-5"}," Dobar Bar Menu (arhiva) ",-1),wo={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},jo={key:0,class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-hrana",type:"button",role:"tab","aria-controls":"nav-hrana","aria-selected":"true"},ko={key:1,class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},zo={key:2,class:"nav-link",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},xo={class:"tab-content",id:"nav-tabContent"},Do={class:"tab-pane fade show active",id:"nav-hrana",role:"tabpanel","aria-labelledby":"nav-home-tab"},Co=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),Mo={class:"h3 mt-3"},Po={key:0},Ko={class:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},Go=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),Ho={class:"h3 mt-3"},Io={key:0},Oo={class:"tab-pane fade",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"},Uo=(0,l.uE)('<h3 class="h3 mt-3"></h3><div class="row"><div class="col">Naziv</div><div class="col">Cijena</div><div class="col"></div></div><hr>',3),Bo={class:"h3 mt-3"},So={key:0};function Vo(a,e,t,o,i,s){const n=(0,l.up)("Subkategorije");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",bo,[(0,l._)("div",ho,[(0,l._)("div",go,[(0,l._)("div",_o,[(0,l._)("div",yo,[fo,(0,l._)("nav",null,[(0,l._)("div",wo,[i.kategorije.hrana.length>0?((0,l.wg)(),(0,l.iD)("button",jo," Hrana ")):(0,l.kq)("",!0),i.kategorije.pice.length>0?((0,l.wg)(),(0,l.iD)("button",ko," Piće ")):(0,l.kq)("",!0),i.kategorije.ostalo.length>0?((0,l.wg)(),(0,l.iD)("button",zo," Ostalo ")):(0,l.kq)("",!0)])]),(0,l._)("div",xo,[(0,l._)("div",Do,[(0,l._)("div",null,[Co,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.hrana,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",Mo,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",Po,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])]),(0,l._)("div",Ko,[(0,l._)("div",null,[Go,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.pice,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",Ho,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",Io,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])]),(0,l._)("div",Oo,[(0,l._)("div",null,[Uo,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.kategorije.ostalo,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:e},[(0,l._)("h3",Bo,[(0,l._)("p",null,(0,_.zw)(a),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.items,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[e.subtype==a?((0,l.wg)(),(0,l.iD)("div",So,[(0,l.Wm)(n,{items:e},null,8,["items"])])):(0,l.kq)("",!0)])))),128))])))),128))])])])])])])])])])}var To={name:"Home_view",components:{Subkategorije:Ft},data(){return{items:at,kategorije:et}}};const Wo=(0,j.Z)(To,[["render",Vo]]);var Eo=Wo;const Ro=[{path:"/",component:W},{path:"/menucreator",component:ua},{path:"/register",component:fa},{path:"/login",component:Da},{path:"/menu/:MenuName/:id",component:rt},{path:"/menu/arhiva",component:mo},{path:"/menu/arhiva/:id",component:Eo},{path:"/menu/guest",component:$t}],Ao=(0,M.p7)({history:(0,M.PO)(),routes:Ro});var Lo=Ao;const Yo=(0,o.ri)(C);Yo.use(Lo),Yo.mount("#app")}},e={};function t(o){var l=e[o];if(void 0!==l)return l.exports;var i=e[o]={exports:{}};return a[o].call(i.exports,i,i.exports,t),i.exports}t.m=a,function(){var a=[];t.O=function(e,o,l,i){if(!o){var s=1/0;for(c=0;c<a.length;c++){o=a[c][0],l=a[c][1],i=a[c][2];for(var n=!0,r=0;r<o.length;r++)(!1&i||s>=i)&&Object.keys(t.O).every((function(a){return t.O[a](o[r])}))?o.splice(r--,1):(n=!1,i<s&&(s=i));if(n){a.splice(c--,1);var d=l();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[o,l,i]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var l,i,s=o[0],n=o[1],r=o[2],d=0;if(s.some((function(e){return 0!==a[e]}))){for(l in n)t.o(n,l)&&(t.m[l]=n[l]);if(r)var c=r(t)}for(e&&e(o);d<s.length;d++)i=s[d],t.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return t.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7772)}));o=t.O(o)})();
//# sourceMappingURL=app.c1b7360f.js.map