(this.webpackJsonpnomad_movie_app=this.webpackJsonpnomad_movie_app||[]).push([[0],{27:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),i=t.n(s),c=t(5),m=t.n(c),o=t(19),l=t(20),u=t(21),v=t(26),d=t(25),p=t(22),_=t.n(p),g=t(24);t(50);var y=function(e){var a=e.id,t=e.year,n=e.title,s=e.summary,i=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(g.a,{to:{pathname:"/movie/".concat(a),state:{year:t,title:n,summary:s,poster:i,genres:c}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))))},E=(t(56),function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies__genres"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b8424212.chunk.js.map