(this["webpackJsonpredux-practice"]=this["webpackJsonpredux-practice"]||[]).push([[0],{29:function(e,t,n){e.exports=n(60)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),l=n.n(c),r=n(3),i=n(4),s=n(6),u=n(5),p=n(7),m=n(12),d=n(10),b="FETCH_POSTS",h="NEW_POST",E=n(16),f=n.n(E);n(56);var O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),""!==n.state.title&&""!==n.state.body){var t={title:n.state.title,body:n.state.body};n.props.createPost(t)}},n.state={title:"",body:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Add a new Post"),o.a.createElement("h5",null,"POST request to jsonplaceholder.typicode.com/posts"),o.a.createElement("h6",null,"Redux helps in making new post available to the Post component (from this component)"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",{id:"title"},o.a.createElement("label",null,"Title: "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"title",onChange:this.onChange,value:this.state.title})),o.a.createElement("br",null),o.a.createElement("div",{id:"body"},o.a.createElement("label",null,"Post Body: "),o.a.createElement("br",null),o.a.createElement("textarea",{name:"body",onChange:this.onChange,value:this.state.body})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Add Post!")))}}]),t}(a.Component),y=Object(d.b)(null,{createPost:function(e){return function(t){f.a.post("https://jsonplaceholder.typicode.com/posts",e).then((function(e){return t({type:h,payload:e.data})}))}}})(O),j=(n(57),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"componentWillReceiveProps",value:function(e){e.newPost&&this.props.posts.unshift(e.newPost)}},{key:"render",value:function(){var e=this.props.posts.map((function(e){return o.a.createElement("div",{id:"post-card",key:e.id},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Posts"),o.a.createElement("h5",null,"GET request to jsonplaceholder.typicode.com/posts"),o.a.createElement("div",null,e))}}]),t}(a.Component)),v=Object(d.b)((function(e){return{posts:e.posts.items,newPost:e.posts.item}}),{fetchPosts:function(){return function(e){f.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){return e({type:b,payload:t.data})}))}}})(j),P=(n(58),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{id:"main-header"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"React-Redux BlogPost ",o.a.createElement("span",{id:"author"},"by Aditya Gupta"))))}}]),t}(a.Component)),_=n(8),g=n(28),w=n(17),S={items:[],item:{}},k=Object(_.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(w.a)({},e,{items:t.payload});case h:return Object(w.a)({},e,{item:t.payload});default:return e}}}),C=[g.a],T=Object(_.e)(k,{},Object(_.d)(_.a.apply(void 0,C),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),x=(n(59),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:T},o.a.createElement(P,null),o.a.createElement("div",{className:"App"}," ",o.a.createElement("div",{id:"box-1"},o.a.createElement(y,null)),o.a.createElement("div",{id:"box-2"},o.a.createElement(v,null))))}}]),t}(a.Component));l.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0daedeae.chunk.js.map