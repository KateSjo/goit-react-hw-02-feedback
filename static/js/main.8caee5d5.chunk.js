(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),o=(n(18),n(10)),r=n(11),d=n(13),u=n(12),l=(n(19),n(7)),b=n.n(l),f=n(4),j=n.n(f),h=n(0),g=function(t){var e=function(){return j.a.generate()},n=t.feedbacks.map((function(n){return"Positivefeedback"===n?Object(h.jsx)("li",{className:b.a.StatisticsItem,id:e(),children:Object(h.jsxs)("p",{children:["Positive feedback : ",t.Positivefeedback+"%"]})}):Object(h.jsx)("li",{id:e(),children:Object(h.jsxs)("p",{id:e(),children:[n," : ",t[n]]})})}));return Object(h.jsx)("ul",{className:b.a.StatisticsList,children:n})},m=n(2),k=n.n(m),O=n(5),x=n.n(O),S=function(t){var e=t.feedbacks.map((function(e){return Object(h.jsx)("li",{id:j.a.generate(),className:x.a.statisticsItem,children:Object(h.jsx)("button",{className:x.a.statisticsText,onClick:t[e],children:e})})}));return Object(h.jsx)("ul",{className:x.a.statisticsList,children:e})};S.prototype={goodIncrement:k.a.node,neutralIncrement:k.a.node,badIncrement:k.a.node,feedbacks:k.a.arrayOf(k.a.string)};var p=S,v=n(8),_=n.n(v),I=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:_.a.Section,children:[Object(h.jsx)("h2",{className:_.a.SectionTitle,children:e}),n]})};I.prototype={title:k.a.string,children:k.a.node};var F=I,P=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.goodIncrement=function(e){t.setState((function(t){return{good:t.good+1}}))},t.neutralIncrement=function(e){t.setState((function(t){return{neutral:t.neutral+1}}))},t.badIncrement=function(e){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/(t.countTotalFeedback()/100))},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{title:"Please leave feedback",children:Object(h.jsx)(p,{good:this.goodIncrement,neutral:this.neutralIncrement,bad:this.badIncrement,feedbacks:["good","neutral","bad"]})}),Object(h.jsx)(F,{title:"Statistic",children:0===this.countTotalFeedback()?Object(h.jsx)("h3",{children:"no feedback given"}):Object(h.jsx)(g,{feedbacks:["good","neutral","bad","total","Positivefeedback"],good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),Positivefeedback:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),T()},5:function(t,e,n){t.exports={statisticsList:"FeedbackOptions_statisticsList__2Uq81",statisticsItem:"FeedbackOptions_statisticsItem__2Hb-E",statisticsText:"FeedbackOptions_statisticsText__BomDA"}},7:function(t,e,n){t.exports={StatisticsList:"Statistics_StatisticsList__1d4Or",StatisticsItem:"Statistics_StatisticsItem__3S6yK"}},8:function(t,e,n){t.exports={Section:"Section_Section__3ztcd",SectionTitle:"Section_SectionTitle__1s0-Y"}}},[[31,1,2]]]);
//# sourceMappingURL=main.8caee5d5.chunk.js.map