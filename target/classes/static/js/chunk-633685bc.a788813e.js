(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633685bc"],{"33b5":function(t,e,s){},"4a55":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nk-container"},[s("Navbar"),s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("span",{domProps:{textContent:t._s(t.user.username)}}),t._v("关注的人")]),s("el-menu-item",{attrs:{index:"2"}},[s("router-link",{staticClass:"text-primary",attrs:{to:{name:"Followers",params:{userId:t.user.id}}}},[s("span",{domProps:{textContent:t._s(t.user.username)}}),t._v("的粉丝 ")])],1),s("el-menu-item",{staticClass:"navInfo"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:t.user.id}}}},[t._v(" 返回主页 ")])],1)],1),s("div",{staticClass:"line"}),s("ul",{staticClass:"list-unstyled"},t._l(t.userList,(function(e){return s("li",{staticClass:"media pb-3 pt-3 mb-3 border-bottom position-relative"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:e.user.id}}}},[s("el-avatar",{attrs:{src:t.uploadPath+e.user.avatar}})],1),s("div",{staticClass:"media-body"},[s("h6",{staticClass:"mt-0 mb-3"},[s("span",{staticClass:"text-success",domProps:{textContent:t._s(e.user.username)}},[t._v("落基山脉下的闲人")]),s("span",{staticClass:"float-right text-muted font-size-12"},[t._v(" 关注于 "),s("i",{domProps:{textContent:t._s(e.followTime)}},[t._v("2019-04-28 14:13:25")])])]),s("div",[s("button",{staticClass:"btn btn-info btn-sm float-right mr-5 follow-btn",attrs:{type:"button"},domProps:{textContent:t._s(e.hasFollowed?"取消关注":"关注TA")},on:{click:function(s){return t.follow(e.user.id)}}},[t._v("关注TA")])])])],1)})),0),s("el-pagination",{staticClass:"mpage",attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"current-change":t.page}})],1)])],1)},a=[],n=s("d178"),i={name:"Followees",components:{Navbar:n["a"]},created:function(){var t=this;console.log(this.$route.params.uid),this.$axios({method:"get",url:"/followees/"+t.$route.params.userId}).then((function(e){if(200==e.data.code){var s=e.data.data;t.user=s.user,t.userList=s.userList,t.total=s.total}else t.fail(e.data.msg);console.log(e)})).catch((function(t){console.log(t)}))},data:function(){return{activeIndex:"1",user:"",userList:"",currentPage:1,pageSize:5,total:0,uploadPath:this.$axios.defaults.baseURL}},methods:{handleSelect:function(t,e){console.log(t,e)},fail:function(t){this.$message.error(t)},page:function(t){var e=this;e.$axios.get("/followees/"+e.$route.params.userId+"?currentPage="+t).then((function(t){var s=t.data.data;e.user=s.user,e.userList=s.userList,e.total=s.total,e.currentPage=t.data.data.currentPage}))},follow:function(t){var e=this;if(this.$store.state.isLogin&&""!=this.$store.state.isLogin){var s="";s=e.hasFollowed?"/unfollow":"/follow",this.$axios({method:"post",url:s,data:{entityType:3,entityId:t}}).then((function(t){if(200==t.data.code){var s=t.data.data;console.log(s),e.followerCount=s.followerCount,e.hasFollowed=s.hasFollowed}else e.fail(t.data.msg);console.log(t)})).catch((function(t){console.log(t)}))}else this.$message.error("要登录才能关注哦")}}},r=i,l=(s("9d00"),s("2877")),u=Object(l["a"])(r,o,a,!1,null,"7216cb1e",null);e["default"]=u.exports},9136:function(t,e,s){"use strict";var o=s("33b5"),a=s.n(o);a.a},"9d00":function(t,e,s){"use strict";var o=s("a888"),a=s.n(o);a.a},a888:function(t,e,s){},d178:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("el-menu",{staticClass:"el-menu-demo myMenu",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",[t._v("关于本站")]),s("el-menu-item",{attrs:{index:"2"},on:{click:t.toIndex}},[t._v("最新")]),s("el-menu-item",{attrs:{index:"3"},on:{click:t.toHot}},[t._v("最热")]),s("el-menu-item",{attrs:{index:"4"},on:{click:t.toLetter}},[t._v("消息中心")]),s("el-menu-item",[s("el-input",{staticClass:"border-radius",model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.login}},[t._v("登录")]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.register}},[t._v("注册")]),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"5"}},[s("template",{slot:"title"},[t._v("创建")]),s("el-menu-item",{attrs:{index:"5-1"},on:{click:function(e){return t.publish(0)}}},[t._v("提问")]),s("el-menu-item",{attrs:{index:"5-2"},on:{click:function(e){return t.publish(1)}}},[t._v("写文章")])],2),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"6"}},[s("el-menu-item",{domProps:{textContent:t._s(t.$store.state.userInfo.username)}}),s("template",{slot:"title"},[s("el-avatar",{attrs:{size:50,src:t.uploadPath+t.$store.state.userInfo.avatar}})],1),s("el-menu-item",{attrs:{index:"6-1"},on:{click:t.toHome}},[t._v("我的主页")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toSetting}},[t._v("设置")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toCollect}},[t._v("我的收藏")]),s("el-menu-item",{attrs:{index:"6-3"},on:{click:t.toUserPost}},[t._v("我的文章")]),s("el-menu-item",{attrs:{index:"6-4"},on:{click:t.logout}},[t._v("退出登录")])],2)],1),s("div",{staticClass:"line"})],1)},a=[],n={name:"Navbar",props:{activeIndex:{type:String,default:"2",required:!1}},created:function(){},data:function(){return{uploadPath:this.$axios.defaults.baseURL,isLogin:this.$store.state.isLogin,userInfo:this.$store.state.userInfo,keyword:""}},methods:{handleSelect:function(t,e){console.log(t,e)},toLetter:function(){this.$router.push("/letter")},login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")},logout:function(){this.$store.commit("logout")},publish:function(t){0==t?this.$router.push({path:"/post/query"}):this.$router.push({path:"/post/add"})},toIndex:function(){this.$router.push("/")},toHome:function(){var t=this;this.$router.push({name:"Profile",params:{uid:t.$store.state.userInfo.id}})},toHot:function(){this.$router.push({name:"Hot"})},search:function(){var t=this;this.$router.push({name:"Search",params:{keyword:t.keyword}})},toSetting:function(){this.$router.push("/setting")},toCollect:function(){var t=this;this.$router.push({name:"Collection",params:{uid:t.$store.state.userInfo.id}})},toUserPost:function(){var t=this;this.$router.push({name:"UserPosts",params:{uid:t.$store.state.userInfo.id}})}}},i=n,r=(s("9136"),s("2877")),l=Object(r["a"])(i,o,a,!1,null,"471a42fb",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-633685bc.a788813e.js.map