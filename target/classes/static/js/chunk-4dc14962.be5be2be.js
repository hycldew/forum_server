(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dc14962"],{"19faf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nk-container"},[s("Navbar"),s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-4 text-right"},[s("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:t.back}},[t._v("返回")])])]),s("ul",{staticClass:"list-unstyled mt-4"},t._l(t.notices,(function(e){return s("li",{staticClass:"media pb-3 pt-3 mb-2"},[s("el-avatar",{staticClass:"mr-4 rounded-circle user-header",attrs:{src:t.uploadPath+e.fromUser.avatar,alt:"用户头像"}}),s("div",{staticClass:"toast show d-lg-block",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[s("div",{staticClass:"toast-header"},[s("strong",{staticClass:"mr-auto",domProps:{textContent:t._s(e.fromUser.username)}}),s("small",{domProps:{textContent:t._s(e.notice.createTime)}},[t._v("2019-04-25 15:49:32")]),t._m(1,!0)]),s("div",{staticClass:"toast-body"},["comment"==t.topic?s("span",[t._v(" 用户 "),s("i",{domProps:{textContent:t._s(e.user.username)}}),t._v(" 评论了你的"),s("b",{domProps:{textContent:t._s(1==e.entityType?"帖子":"回复")}},[t._v("帖子")]),t._v(", "),s("router-link",{staticClass:"text-primary",attrs:{to:{name:"PostDetail",params:{pid:e.postId}}}},[t._v("点击查看")])],1):t._e(),"like"==t.topic?s("span",[t._v(" 用户 "),s("i",{domProps:{textContent:t._s(e.user.username)}},[t._v("nowcoder")]),t._v(" 点赞了你的"),s("b",{domProps:{textContent:t._s(1==e.entityType?"帖子":"回复")}},[t._v("帖子")]),t._v(", "),s("router-link",{staticClass:"text-primary",attrs:{to:{name:"PostDetail",params:{pid:e.postId}}}},[t._v("点击查看")])],1):t._e(),"follow"==t.topic?s("span",[t._v(" 用户 "),s("i",{domProps:{textContent:t._s(e.user.username)}}),t._v(" 关注了你, "),s("router-link",{staticClass:"text-primary",attrs:{to:{name:"Profile",params:{uid:e.user.id}}}},[t._v("点击查看")])],1):t._e()])])],1)})),0),s("el-pagination",{staticClass:"mpage",attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"current-change":t.page}})],1)])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-8"},[s("h6",[s("b",{staticClass:"square"}),t._v(" 系统通知")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=s("d178"),n={name:"NoticeDetail",components:{Navbar:i["a"]},methods:{back:function(){this.$router.push("/notice")},page:function(t){var e=this;e.$axios.get("/notice/detail/"+e.topic+"?currentPage="+t).then((function(t){var s=t.data.data;e.notices=s.notices,e.total=s.total,e.currentPage=s.currentPage}))}},created:function(){var t=this;t.topic=t.$route.params.topic,this.$axios({method:"get",url:"/notice/detail/"+t.topic}).then((function(e){var s=e.data.data;console.log(s),t.notices=s.notices,t.total=s.total,t.currentPage=s.currentPage})).catch((function(t){console.log(t)}))},data:function(){return{notices:"",currentPage:1,pageSize:5,total:0,uploadPath:this.$axios.defaults.baseURL,topic:""}}},r=n,c=s("2877"),l=Object(c["a"])(r,a,o,!1,null,"619757a1",null);e["default"]=l.exports},"33b5":function(t,e,s){},9136:function(t,e,s){"use strict";var a=s("33b5"),o=s.n(a);o.a},d178:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("el-menu",{staticClass:"el-menu-demo myMenu",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",[t._v("关于本站")]),s("el-menu-item",{attrs:{index:"2"},on:{click:t.toIndex}},[t._v("最新")]),s("el-menu-item",{attrs:{index:"3"},on:{click:t.toHot}},[t._v("最热")]),s("el-menu-item",{attrs:{index:"4"},on:{click:t.toLetter}},[t._v("消息中心")]),s("el-menu-item",[s("el-input",{staticClass:"border-radius",model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.login}},[t._v("登录")]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.register}},[t._v("注册")]),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"5"}},[s("template",{slot:"title"},[t._v("创建")]),s("el-menu-item",{attrs:{index:"5-1"},on:{click:function(e){return t.publish(0)}}},[t._v("提问")]),s("el-menu-item",{attrs:{index:"5-2"},on:{click:function(e){return t.publish(1)}}},[t._v("写文章")])],2),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"6"}},[s("el-menu-item",{domProps:{textContent:t._s(t.$store.state.userInfo.username)}}),s("template",{slot:"title"},[s("el-avatar",{attrs:{size:50,src:t.uploadPath+t.$store.state.userInfo.avatar}})],1),s("el-menu-item",{attrs:{index:"6-1"},on:{click:t.toHome}},[t._v("我的主页")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toSetting}},[t._v("设置")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toCollect}},[t._v("我的收藏")]),s("el-menu-item",{attrs:{index:"6-3"},on:{click:t.toUserPost}},[t._v("我的文章")]),s("el-menu-item",{attrs:{index:"6-4"},on:{click:t.logout}},[t._v("退出登录")])],2)],1),s("div",{staticClass:"line"})],1)},o=[],i={name:"Navbar",props:{activeIndex:{type:String,default:"2",required:!1}},created:function(){},data:function(){return{uploadPath:this.$axios.defaults.baseURL,isLogin:this.$store.state.isLogin,userInfo:this.$store.state.userInfo,keyword:""}},methods:{handleSelect:function(t,e){console.log(t,e)},toLetter:function(){this.$router.push("/letter")},login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")},logout:function(){this.$store.commit("logout")},publish:function(t){0==t?this.$router.push({path:"/post/query"}):this.$router.push({path:"/post/add"})},toIndex:function(){this.$router.push("/")},toHome:function(){var t=this;this.$router.push({name:"Profile",params:{uid:t.$store.state.userInfo.id}})},toHot:function(){this.$router.push({name:"Hot"})},search:function(){var t=this;this.$router.push({name:"Search",params:{keyword:t.keyword}})},toSetting:function(){this.$router.push("/setting")},toCollect:function(){var t=this;this.$router.push({name:"Collection",params:{uid:t.$store.state.userInfo.id}})},toUserPost:function(){var t=this;this.$router.push({name:"UserPosts",params:{uid:t.$store.state.userInfo.id}})}}},n=i,r=(s("9136"),s("2877")),c=Object(r["a"])(n,a,o,!1,null,"471a42fb",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4dc14962.be5be2be.js.map