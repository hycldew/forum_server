(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4eae468"],{"10e4":function(t,e,s){},"246d":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nk-container"},[s("Navbar"),s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[s("h3",{staticClass:"mb-4"},[s("span",{domProps:{textContent:t._s(t.postVo.post.title)}}),s("div",{staticClass:"float-right"},[this.$store.state.isLogin?s("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button",id:"topBtn",disabled:1==t.postVo.post.type},on:{click:t.setTop}},[t._v("置顶")]):t._e(),this.$store.state.isLogin?s("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button",id:"wonderfulBtn",disabled:1==t.postVo.post.status},on:{click:t.setWonder}},[t._v("加精")]):t._e(),this.$store.state.isLogin?s("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button",id:"deleteBtn",disabled:2==t.postVo.post.status},on:{click:t.setDelete}},[t._v("删除")]):t._e()])]),s("div",{staticClass:"media pb-3 border-bottom"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:t.postVo.user.id}}}},[s("el-avatar",{attrs:{src:t.uploadPath+t.postVo.user.avatar}})],1),s("div",{staticClass:"media-body"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:t.postVo.user.id}}}},[s("div",{staticClass:"mt-0 text-warning",domProps:{textContent:t._s(t.postVo.user.username)}})]),s("div",{staticClass:"text-muted mt-3"},[t._v(" 发布于 "),s("b",{domProps:{textContent:t._s(t.postVo.post.createTimeStr)}}),s("ul",{staticClass:"d-inline float-right"},[s("li",{staticClass:"d-inline ml-2",on:{click:function(e){return t.collect(t.postVo.post.id)}}},[s("a",{attrs:{href:"javascript:;"}},[s("b",{domProps:{textContent:t._s(0==t.collectStatus?"收藏 ":"取消收藏 ")}}),s("i",{domProps:{textContent:t._s(t.postVo.post.collectCount)}})])]),s("li",{staticClass:"d-inline ml-2"},[t._v("|")]),s("li",{staticClass:"d-inline ml-2",on:{click:function(e){return t.like(e.currentTarget,1,t.postVo.post.id,t.postVo.post.userId,t.postVo.post.id)}}},[s("a",{attrs:{href:"javascript:;"}},[s("b",{domProps:{textContent:t._s(0==t.likeStatus?"赞 ":"已赞 ")}}),s("i",{domProps:{textContent:t._s(t.postVo.post.likeCount)}})])]),s("li",{staticClass:"d-inline ml-2"},[t._v("|")]),s("li",{staticClass:"d-inline ml-2"},[t._v("回帖 "),s("i",{domProps:{textContent:t._s(t.postVo.post.commentCount)}})])])])],1)],1),s("div",{staticClass:"mt-4 mb-3 content ",domProps:{textContent:t._s(t.postVo.post.content)}}),s("br"),s("hr")]),s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("h6",[s("b",{staticClass:"square"}),t._v(" "),s("i",{domProps:{textContent:t._s(t.postVo.post.commentCount)}}),t._v("条回帖")])])]),s("ul",{staticClass:"list-unstyled mt-4"},t._l(t.comments,(function(e){return s("li",{staticClass:"media pb-3 pt-3 mb-3 border-bottom"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:e.user.id}}}},[s("el-avatar",{attrs:{src:t.uploadPath+e.user.avatar}})],1),s("div",{staticClass:"media-body"},[s("div",{staticClass:"mt-0"},[s("router-link",{attrs:{to:{name:"Profile",params:{uid:e.user.id}}}},[s("span",{staticClass:"font-size-12 text-success",domProps:{textContent:t._s(e.user.username)}})])],1),s("div",{staticClass:"mt-2",domProps:{textContent:t._s(e.comment.content)}}),s("div",{staticClass:"mt-4 text-muted font-size-12"},[s("span",[t._v("发布于 "),s("b",{domProps:{textContent:t._s(e.comment.createTime)}})]),s("ul",{staticClass:"d-inline float-right"},[s("li",{staticClass:"d-inline ml-2",on:{click:function(s){return t.like(s.currentTarget,2,e.comment.id,e.user.id,t.postVo.post.id)}}},[s("a",{attrs:{href:"javascript:;"}},[s("b",{domProps:{textContent:t._s(0==e.comment.likeStatus?"赞 ":"已赞 ")}}),s("i",{domProps:{textContent:t._s(e.comment.likeCount)}})])]),s("li",{staticClass:"d-inline ml-2"},[t._v("|")]),s("li",{staticClass:"d-inline ml-2"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"myReply"+e.comment.id,expression:"'myReply'+commentVo.comment.id"}],staticClass:"m-1",on:{click:function(s){return t.ReplyData(e.comment.id,0)}}},[t._v(" 回复("),s("i",{domProps:{textContent:t._s(e.replyCount)}}),t._v(") ")])])])]),s("ul",{staticClass:"list-unstyled mt-4 bg-gray p-3 font-size-12 text-muted"},[t._l(e.replies,(function(o){return s("li",{staticClass:"pb-3 pt-3 mb-3 border-bottom"},[s("div",[null==o.target?s("span",[s("router-link",{attrs:{to:{name:"Profile",params:{uid:o.user.id}}}},[s("b",{staticClass:"text-info",domProps:{textContent:t._s(o.user.username)}}),t._v(": ")])],1):s("span",[s("i",{staticClass:"text-info",domProps:{textContent:t._s(o.user.username)}}),t._v(" 回复 "),s("b",{staticClass:"text-info",domProps:{textContent:t._s(o.target.username)}}),t._v(": ")]),s("span",{domProps:{textContent:t._s(o.reply.content)}})]),s("div",{staticClass:"mt-3"},[s("span",{domProps:{textContent:t._s(o.reply.createTime)}}),s("ul",{staticClass:"d-inline float-right"},[s("li",{staticClass:"d-inline ml-2",on:{click:function(e){return t.like(e.currentTarget,2,o.reply.id,o.user.id,t.postVo.post.id)}}},[s("a",{attrs:{href:"javascript:;"}},[s("b",{domProps:{textContent:t._s(0==o.reply.likeStatus?"赞 ":"已赞 ")}}),s("i",{domProps:{textContent:t._s(o.reply.likeCount)}})])]),s("li",{staticClass:"d-inline ml-2"},[t._v("|")]),s("li",{staticClass:"d-inline ml-2"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"myReply"+e.comment.id,expression:"'myReply'+commentVo.comment.id"}],staticClass:"m-1",on:{click:function(s){return t.ReplyData(e.comment.id,o.user.id)}}},[t._v("回复")])])])])])})),s("b-collapse",{attrs:{id:"myReply"+e.comment.id}},[s("li",{staticClass:"pb-3 pt-3"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.replyContent,expression:"replyContent"}],staticClass:"input-size",staticStyle:{width:"55%"},attrs:{type:"text"},domProps:{value:t.replyContent},on:{input:function(e){e.target.composing||(t.replyContent=e.target.value)}}})]),s("div",{staticClass:"text-lg-center mt-2"},[s("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"},on:{click:t.replyTwo}},[t._v(" 回 复 ")])])])])],2)])],1)})),0)]),s("el-pagination",{staticClass:"mpage",attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"current-change":t.page}}),s("div",{staticClass:"myComment"},[s("p",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"CommentInput",attrs:{placeholder:"在这里畅所欲言你的看法吧!"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})]),s("p",[s("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"},on:{click:function(e){return t.commentPost()}}},[t._v(" 回 帖 ")])])])],1)],1)},a=[],n=s("d178"),i={name:"PostDetail",components:{Navbar:n["a"]},data:function(){return{postVo:{},comments:{},uploadPath:this.$axios.defaults.baseURL,pictures:{},entityType:"",entityId:"",commentUid:"",targetId:"",replyContent:"",commentContent:"",likeStatus:0,collectStatus:0,currentPage:1,total:0,pageSize:5}},created:function(){var t=this;this.$axios({method:"get",url:"/post/detail/"+this.$route.params.pid}).then((function(e){t.postVo=e.data.data.postVo,t.comments=e.data.data.comments,t.pictures=e.data.data.pictures,t.likeStatus=e.data.data.likeStatus,t.collectStatus=e.data.data.collectStatus,t.total=e.data.data.postVo.post.commentCount})).catch((function(t){console.log(t)}))},methods:{fail:function(t){this.$message.error(t)},commentPost:function(){var t=this;this.$axios({method:"post",url:"/comment/add",data:{entityType:1,entityId:this.$route.params.pid,targetId:0,content:this.commentContent,postId:this.$route.params.pid}}).then((function(e){t.commentContent="",console.log(e),200==e.status&&(t.$message({message:e.data.msg,type:"success"}),t.$router.go(0))})).catch((function(t){console.log(t)}))},replyTwo:function(){var t=this;this.$store.state.isLogin?this.$axios({method:"post",url:"/comment/add",data:{entityType:2,entityId:t.entityId,targetId:t.targetId,content:t.replyContent,postId:this.$route.params.pid}}).then((function(e){t.replyContent="",200==e.status&&(t.$message({message:e.data.msg,type:"success"}),t.$router.go(0))})).catch((function(t){console.log(t)})):alert("您尚未登录，不能回复！")},ReplyData:function(t,e){this.entityId=t,this.targetId=e},page:function(t){var e=this;this.$axios({method:"post",url:"/post/comment/list",data:{currentPage:t,pid:this.$route.params.pid}}).then((function(t){e.comments=t.data.data.records,e.currentPage=t.data.data.currentPage,e.total=t.data.data.total})).catch((function(t){console.log(t)}))},like:function(t,e,s,o,a){if(this.$store.state.isLogin&&""!=this.$store.state.isLogin){var n=this;console.log(t),this.$axios({method:"post",url:"/like",data:{entityType:e,entityId:s,entityUserId:o,postId:a}}).then((function(e){if(200==e.data.code){var s=e.data.data;console.log(s),1==s.entityType?(n.postVo.post.likeCount=s.likeCount,n.likeStatus=s.likeStatus):t.firstChild.lastChild.innerHTML=s.likeCount}else n.fail(e.data.msg)})).catch((function(t){console.log(t)}))}else this.$message.error("要登录才能点赞哦")},setTop:function(){var t=this;t.$axios.get("/post/top?id="+t.postVo.post.id).then((function(e){console.log(e),200==e.data.code?t.postVo.post.type=1:t.fail(e.data.msg)}))},setWonder:function(){var t=this;t.$axios.get("/post/wonderful?id="+t.postVo.post.id).then((function(e){console.log(e),200==e.data.code?t.postVo.post.status=1:t.fail(e.data.msg)}))},setDelete:function(){var t=this;t.$axios.get("/post/delete?id="+t.postVo.post.id).then((function(e){200!=e.data.code?t.fail(e.data.msg):t.$router.push("/")}))},collect:function(t){if(this.$store.state.isLogin&&""!=this.$store.state.isLogin){var e=this,s="";s=0==e.collectStatus?"/collect":"/uncollect",this.$axios({method:"post",url:s,data:{entityId:t,entityUserId:e.postVo.user.id}}).then((function(t){if(200==t.data.code){var s=t.data.data;console.log(s),e.postVo.post.collectCount=s.collectCount,e.collectStatus=s.collectStatus}else e.fail(t.data.msg)})).catch((function(t){console.log(t)}))}else this.$message.error("要登录才能收藏哦")}}},r=i,l=(s("4fe4"),s("2877")),c=Object(l["a"])(r,o,a,!1,null,"52d6a9d0",null);e["default"]=c.exports},"33b5":function(t,e,s){},"4fe4":function(t,e,s){"use strict";var o=s("10e4"),a=s.n(o);a.a},9136:function(t,e,s){"use strict";var o=s("33b5"),a=s.n(o);a.a},d178:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("el-menu",{staticClass:"el-menu-demo myMenu",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",[t._v("关于本站")]),s("el-menu-item",{attrs:{index:"2"},on:{click:t.toIndex}},[t._v("最新")]),s("el-menu-item",{attrs:{index:"3"},on:{click:t.toHot}},[t._v("最热")]),s("el-menu-item",{attrs:{index:"4"},on:{click:t.toLetter}},[t._v("消息中心")]),s("el-menu-item",[s("el-input",{staticClass:"border-radius",model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.login}},[t._v("登录")]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"navInfo",on:{click:t.register}},[t._v("注册")]),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"5"}},[s("template",{slot:"title"},[t._v("创建")]),s("el-menu-item",{attrs:{index:"5-1"},on:{click:function(e){return t.publish(0)}}},[t._v("提问")]),s("el-menu-item",{attrs:{index:"5-2"},on:{click:function(e){return t.publish(1)}}},[t._v("写文章")])],2),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"navInfo",attrs:{index:"6"}},[s("el-menu-item",{domProps:{textContent:t._s(t.$store.state.userInfo.username)}}),s("template",{slot:"title"},[s("el-avatar",{attrs:{size:50,src:t.uploadPath+t.$store.state.userInfo.avatar}})],1),s("el-menu-item",{attrs:{index:"6-1"},on:{click:t.toHome}},[t._v("我的主页")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toSetting}},[t._v("设置")]),s("el-menu-item",{attrs:{index:"6-2"},on:{click:t.toCollect}},[t._v("我的收藏")]),s("el-menu-item",{attrs:{index:"6-3"},on:{click:t.toUserPost}},[t._v("我的文章")]),s("el-menu-item",{attrs:{index:"6-4"},on:{click:t.logout}},[t._v("退出登录")])],2)],1),s("div",{staticClass:"line"})],1)},a=[],n={name:"Navbar",props:{activeIndex:{type:String,default:"2",required:!1}},created:function(){},data:function(){return{uploadPath:this.$axios.defaults.baseURL,isLogin:this.$store.state.isLogin,userInfo:this.$store.state.userInfo,keyword:""}},methods:{handleSelect:function(t,e){console.log(t,e)},toLetter:function(){this.$router.push("/letter")},login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")},logout:function(){this.$store.commit("logout")},publish:function(t){0==t?this.$router.push({path:"/post/query"}):this.$router.push({path:"/post/add"})},toIndex:function(){this.$router.push("/")},toHome:function(){var t=this;this.$router.push({name:"Profile",params:{uid:t.$store.state.userInfo.id}})},toHot:function(){this.$router.push({name:"Hot"})},search:function(){var t=this;this.$router.push({name:"Search",params:{keyword:t.keyword}})},toSetting:function(){this.$router.push("/setting")},toCollect:function(){var t=this;this.$router.push({name:"Collection",params:{uid:t.$store.state.userInfo.id}})},toUserPost:function(){var t=this;this.$router.push({name:"UserPosts",params:{uid:t.$store.state.userInfo.id}})}}},i=n,r=(s("9136"),s("2877")),l=Object(r["a"])(i,o,a,!1,null,"471a42fb",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-d4eae468.033eeb6b.js.map