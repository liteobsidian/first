(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(39),r=n(5),s={messages:[{userId:1,name:"Andrew",message:"Hellow! How are you?"},{userId:4,name:"Roman",message:"Hi! I'm fine!"}],dialogs:[{name:"Andrey",userId:"001"},{name:"Dmitry",userId:"002"},{name:"Semion",userId:"003"}]},o=function(e){return{type:"messages/SEND-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages/SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{userId:4,name:"Roman",message:t.newMessageBody}])});default:return e}}},134:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return A}));var a=n(10),r=n.n(a),s=n(20),o=n(39),c=n(5),u=n(14),i=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),a):e}))},l="users/FOLLOW",p={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:l,userId:e}},m=function(e){return{type:"users/UNFOLLOW",userId:e}},d=function(e){return{type:"users/SET-CURRENT-PAGE",currentPage:e}},b=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},E=function(e,t){return{type:"users/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(b(!0)),a(d(e)),n.next=4,u.c.getUsers(e,t);case 4:s=n.sent,a(b(!1)),a({type:"users/SET-USERS",users:s.items}),a({type:"users/SET-TOTAL-USERS-COUNT",count:s.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(s(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,u.c.toFollow.bind(u.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,u.c.toUnfollow.bind(u.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!1})});case"users/SET-USERS":return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"users/SET-CURRENT-PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"users/SET-TOTAL-USERS-COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.count});case"users/TOGGLE-IS-FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):Object(o.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}}},135:function(e,t,n){e.exports={content:"profile_content__2W5ba"}},136:function(e,t,n){e.exports={wallpaper:"wallpaper_wallpaper__3jir3"}},137:function(e,t,n){e.exports=n.p+"static/media/wall.ced290a6.jpg"},138:function(e,t,n){e.exports={preloader:"preloader_preloader__3ic0L",spin:"preloader_spin__211T9"}},139:function(e,t,n){e.exports=n.p+"static/media/load.9708d09f.png"},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(140),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a1d5921e-4116-4b2a-a9fe-2debe055025e"}}),s={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},toFollow:function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))},toUnfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me").then((function(e){return e.data}))},logIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logOut:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},143:function(e,t){e.exports="data:image/png;base64,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"},16:function(e,t,n){e.exports={avatar:"userProfile_avatar__3n553",profile:"userProfile_profile__2kFYw",userName:"userProfile_userName__1be9K",profileDescription:"userProfile_profileDescription__FUeoG",socialsWrapper:"userProfile_socialsWrapper__2ZL_W",socials:"userProfile_socials__33Wet"}},170:function(e,t,n){e.exports=n(296)},171:function(e,t,n){},176:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);n(171);var a=n(0),r=n.n(a),s=n(68),o=n.n(s),c=n(27),u=n(28),i=n(30),l=n(29),p=(n(176),n(33)),f=n.n(p),m=n(12),d=function(){return r.a.createElement("div",{className:f.a.sidebar},r.a.createElement("nav",null,r.a.createElement(m.b,{activeClassName:f.a.active,to:"/profile"},"Profile"),r.a.createElement(m.b,{activeClassName:f.a.active,to:"/message"},"Messages"),r.a.createElement(m.b,{activeClassName:f.a.active,to:"/users"},"Find users"),r.a.createElement(m.b,{activeClassName:f.a.active,to:"/news"},"News"),r.a.createElement(m.b,{activeClassName:f.a.active,to:"/music"},"Music"),r.a.createElement(m.b,{activeClassName:f.a.active,to:"/settings"},"Settings")))},b=n(11),E=n(135),g=n.n(E),h=n(136),O=n.n(h),A=n(137),v=n.n(A),j=function(){return r.a.createElement("div",{className:O.a.wallpaper},r.a.createElement("img",{src:v.a,alt:"wall"}))},w=n(16),S=n.n(w),N=n(69),k=n.n(N),P=n(43),y=n(93),I=function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),s=n[0],o=n[1],c=Object(a.useState)(e.status),u=Object(y.a)(c,2),i=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"--no_status--")),s&&r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(i)},value:i}))},_=function(e){return e.profile?r.a.createElement("div",{className:S.a.profile},r.a.createElement("img",{src:null===e.profile.photos.large?k.a:e.profile.photos.large,alt:"avatar",className:S.a.avatar}),r.a.createElement("div",{className:S.a.profileDescription},r.a.createElement("h2",{className:S.a.userName},e.profile.fullName),r.a.createElement(I,{status:e.status,updateStatus:e.updateStatus}),r.a.createElement("p",null,"AboutMe: ",null===e.profile.aboutMe?null:e.profile.aboutMe),r.a.createElement("p",null,"Contacts:"),r.a.createElement("div",{className:S.a.socialsWrapper},null===e.profile.contacts.vk?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.vk},"vk"),null===e.profile.contacts.facebook?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.facebook},"facebook"),null===e.profile.contacts.instagram?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.instagram},"instagram"),null===e.profile.contacts.twitter?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.twitter},"twitter"),null===e.profile.contacts.youtube?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.youtube},"youtube"),null===e.profile.contacts.github?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.github},"github"),null===e.profile.contacts.website?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.website},"website"),null===e.profile.contacts.mainLink?"":r.a.createElement("a",{className:S.a.socials,href:e.profile.contacts.mainLink},"mainLink")),r.a.createElement("p",null,"Need Job: ",null===e.profile.lookingForAJob?"Not found":e.profile.lookingForAJob?e.profile.lookingForAJobDescription:"Not"))):r.a.createElement(P.a,null)},x=function(e){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(_,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}))},C=n(97),U=n.n(C),T=n(58),R=n.n(T),F=function(e){return r.a.createElement("div",{className:R.a.post},r.a.createElement("img",{src:null===e.profile?"":null===e.profile.photos.small?k.a:e.profile.photos.small,alt:"avaPost"}),r.a.createElement("div",{className:R.a.postTxt},r.a.createElement("p",{className:R.a.postUserName},null===e.profile?e.user:e.profile.fullName),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:R.a.likes},e.like," likes")))},D=n(10),M=n.n(D),z=n(20),L=n(39),G=n(5),B=n(14),H="profile/ADD-POST",J={posts:[{id:1,user:"Strelnykov Roman",message:"Hello World! I can use props!",like:15},{id:2,user:"Strelnykov Roman",message:"It's my first post in this wall",like:23}],text:"",profile:null,status:null},Y=function(e){return{type:"profile/SET-USER-PAGE",profile:e}},W=function(e){return{type:"profile/SET-STATUS",status:e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(G.a)(Object(G.a)({},e),{},{posts:[].concat(Object(L.a)(e.posts),[{id:5,user:"Strelnykov Roman",message:t.newPostText,like:0}]),text:""});case"profile/DELETE-POST":return Object(G.a)(Object(G.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET-USER-PAGE":return Object(G.a)(Object(G.a)({},e),{},{profile:t.profile});case"profile/SET-STATUS":return Object(G.a)(Object(G.a)({},e),{},{status:t.status});default:return e}},V=n(73),Z=n.n(V),q=n(92),K=n(132),Q=n(45),$=n(38),ee=Object(Q.a)(30),te=Object(K.a)({form:"postForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:Z.a.postForm},r.a.createElement(q.a,{className:Z.a.postInput,component:$.b,name:"newPostText",placeholder:"your news...",validate:[Q.b,ee]}),r.a.createElement(q.a,{className:Z.a.postsBtn,component:"button",name:"sendPost"},"Submit"))})),ne=function(e){return r.a.createElement(te,{onSubmit:function(t){e.addPost(t.newPostText)}})},ae=n(9),re=Object(ae.b)((function(e){return{newPostText:e.profilePage.text}}),(function(e){return{addPost:function(t){var n=function(e){return{type:H,newPostText:e}}(t);e(n)}}}))(ne),se=r.a.memo((function(e){console.log("render");var t=e.posts.map((function(t){return r.a.createElement(F,{key:t.id,user:t.user,message:t.message,like:t.like,profile:e.profile})}));return r.a.createElement("div",null,r.a.createElement("div",{className:U.a.createPost},r.a.createElement("h3",null,"My posts"),r.a.createElement(re,null)),r.a.createElement("div",{className:U.a.posts},t))})),oe=Object(ae.b)((function(e){return{posts:e.profilePage.posts,profile:e.profilePage.profile}}))(se),ce=function(e){return r.a.createElement("div",{className:g.a.content},r.a.createElement(x,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(oe,null))},ue=n(6),ie=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(ce,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(r.a.Component),le=Object(ue.d)(Object(ae.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(z.a)(M.a.mark((function t(n){var a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.b.getProfile(e);case 2:a=t.sent,n(Y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(z.a)(M.a.mark((function t(n){var a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.b.getStatus(e);case 2:a=t.sent,n(W(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(z.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(W(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),b.f)(ie),pe=n(40),fe=n.n(pe),me=n(143),de=n.n(me),be=function(e){return r.a.createElement("header",{className:fe.a.header},r.a.createElement("div",{className:fe.a.container},r.a.createElement("div",{className:fe.a.logoWrapper},r.a.createElement("img",{className:fe.a.logo,src:de.a,alt:"logo"}),r.a.createElement("h2",null,"Social Network")),r.a.createElement("div",{className:fe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("p",{className:fe.a.logout,onClick:e.logout},"Log Out")):r.a.createElement(m.b,{to:"/login"},"Login"))))},Ee=n(36),ge={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,a){return{type:"auth/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},Oe=function(){return function(){var e=Object(z.a)(M.a.mark((function e(t){var n,a,r,s,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,s=a.email,o=a.login,t(he(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},ve=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(be,this.props)}}]),n}(r.a.Component),je=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(z.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logOut();case 2:0===e.sent.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ve),we=n(75),Se=n.n(we),Ne=Object(K.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object($.c)("E-mail","email",[Q.b],$.a,"text"),Object($.c)("password","password",[Q.b],$.a,"password"),r.a.createElement("div",null,r.a.createElement(q.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"),n&&r.a.createElement("div",{className:Se.a.formError},n),r.a.createElement("div",null,r.a.createElement(q.a,{className:Se.a.loginBtn,type:"submit",component:"button"},"Login")))})),ke=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth}}),{logIn:function(e,t,n){return function(){var a=Object(z.a)(M.a.mark((function a(r){var s,o;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B.a.logIn(e,t,n);case 2:0===(s=a.sent).resultCode?r(Oe()):(o=s.messages.length>0?s.messages[0]:"Some error",r(Object(Ee.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",{className:Se.a.loginHeading},"Login"),r.a.createElement(Ne,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}}))})),Pe=function(e){return e.isAuth?r.a.createElement("div",null,"news"):r.a.createElement(b.a,{to:"/login"})},ye=n(44),Ie=Object(ue.d)(Object(ae.b)(),ye.a)(Pe),_e=function(e){return e.isAuth?r.a.createElement("div",null,"music"):r.a.createElement(b.a,{to:"/login"})},xe=Object(ue.d)(Object(ae.b)(),ye.a)(_e),Ce=function(e){return e.isAuth?r.a.createElement("div",null,"settings"):r.a.createElement(b.a,{to:"/login"})},Ue=Object(ue.d)(Object(ae.b)(),ye.a)(Ce),Te={initialized:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{initialized:!0});default:return e}},Fe={sidebar:{}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Me=n(131),ze=n(134),Le=n(144),Ge=n(133),Be=Object(ue.c)({profilePage:X,messagesPage:Me.b,usersPage:ze.a,sidebar:De,auth:Ae,form:Ge.a,app:Re}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,Je=Object(ue.e)(Be,He(Object(ue.a)(Le.a)));window.store=Je;var Ye=Je,We=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(P.a,null)},r.a.createElement(e,t))}},Xe=r.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),Ve=r.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Ze=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"AppWrapper"},r.a.createElement(je,null),r.a.createElement("div",{className:"contentContainer"},r.a.createElement(d,null),r.a.createElement(b.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(b.b,{path:"/message",render:We(Xe)}),r.a.createElement(b.b,{path:"/users",render:We(Ve)}),r.a.createElement(b.b,{path:"/news",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(b.b,{path:"/music",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(b.b,{path:"/settings",render:function(){return r.a.createElement(Ue,null)}}),r.a.createElement(b.b,{path:"/login",render:function(){return r.a.createElement(ke,null)}}))):r.a.createElement(P.a,null)}}]),n}(r.a.Component),qe=Object(ue.d)(b.f,Object(ae.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:"app/INITIALIZED-SUCCESS"})}))}}}))(Ze),Ke=function(){return r.a.createElement(m.a,null,r.a.createElement(ae.a,{store:Ye},r.a.createElement(qe,null)))};o.a.render(r.a.createElement(Ke,null),document.getElementById("root"))},33:function(e,t,n){e.exports={sidebar:"sidebar_sidebar__2XZNk",active:"sidebar_active__3BJxs"}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p}));var a=n(94),r=n(0),s=n.n(r),o=n(59),c=n.n(o),u=n(92),i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:c.a.formControl+" "+(o?c.a.error:"")},s.a.createElement("textarea",Object.assign({},t,r)),o&&s.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:c.a.formControl+" "+(o?c.a.error:"")},s.a.createElement("input",Object.assign({},t,r)),o&&s.a.createElement("span",null,n.error))},p=function(e,t,n,a,r,o){return s.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:a,type:r},o))}},40:function(e,t,n){e.exports={container:"header_container__2PM4k",header:"header_header__WcNf1",logoWrapper:"header_logoWrapper__2mAVX",logo:"header_logo__2tvrJ",logout:"header_logout__6nlQm"}},43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(138),o=n.n(s),c=n(139),u=n.n(c);t.a=function(){return r.a.createElement("img",{className:o.a.preloader,src:u.a,alt:"page is load"})}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(27),r=n(28),s=n(30),o=n(29),c=n(11),u=n(0),i=n.n(u),l=n(9),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(s.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(p)(t)}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},58:function(e,t,n){e.exports={post:"post_post__2nDHj",postTxt:"post_postTxt__1IUdh",postUserName:"post_postUserName__3Bm5P",likes:"post_likes__rSFrm"}},59:function(e,t,n){e.exports={formControl:"formsControls_formControl__alq9U",error:"formsControls_error__F5ysL"}},69:function(e,t,n){e.exports=n.p+"static/media/user.d380cc81.png"},73:function(e,t,n){e.exports={postForm:"createPost_postForm__CjxWP",postInput:"createPost_postInput__31RwY",postsBtn:"createPost_postsBtn__1NhNX"}},75:function(e,t,n){e.exports={loginHeading:"login_loginHeading__2QO6e",loginBtn:"login_loginBtn__o0BkW",formError:"login_formError__3G2Uw"}},97:function(e,t,n){e.exports={createPost:"myPosts_createPost__91IQi",posts:"myPosts_posts__7U0Dl"}}},[[170,1,2]]]);
//# sourceMappingURL=main.4b7774d8.chunk.js.map