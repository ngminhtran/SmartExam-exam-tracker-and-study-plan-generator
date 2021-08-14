(this["webpackJsonpstudy-plan-generator-and-tracker"]=this["webpackJsonpstudy-plan-generator-and-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(21),o=n.n(a),s=(n(29),n(13)),l=n(24),i=n(6),u=n.n(i),j=n(10),d=n(8),b=n(15),h=n(2),x=n(0),p=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(x.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"steelblue"};var f=p,O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)(f,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Exam Plan Maker"};var m=O,v=function(){return Object(x.jsxs)("footer",{children:[Object(x.jsx)("p",{children:"Copyright \xa9 2021"}),Object(x.jsx)("a",{href:"/about",children:"About"})]})},g=n(23),y=function(e){var t=e.exam,n=e.onDelete,c=e.onToggle;return Object(x.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(x.jsxs)("h3",{children:[t.text,Object(x.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(x.jsx)("p",{children:t.day})]})},k=function(e){var t=e.exams,n=e.onDelete,c=e.onToggle;return Object(x.jsx)(x.Fragment,{children:t.map((function(e,t){return Object(x.jsx)(y,{exam:e,onDelete:n,onToggle:c},t)}))})},S=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),l=Object(d.a)(s,2),i=l[0],u=l[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),h=b[0],p=b[1],f=Object(c.useState)(""),O=Object(d.a)(f,2),m=O[0],v=O[1],g=Object(c.useState)(!1),y=Object(d.a)(g,2),k=y[0],S=y[1];return Object(x.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(alert("Successfully submitted"),t({text:a,score:i,diff:h,day:m,reminder:k}),o(""),u(""),p(""),v(""),S("")):alert("Please add an exam")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Exam"}),Object(x.jsx)("input",{type:"text",placeholder:"Example: Calculus I Midterm",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control form-control-select",children:[Object(x.jsx)("label",{children:"Select Score Aim"}),Object(x.jsxs)("select",{className:"form-control-option",value:i,onChange:function(e){return u(e.target.value)},children:[Object(x.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select a Grade"}),Object(x.jsx)("option",{value:"90",children:"A"}),Object(x.jsx)("option",{value:"80",children:"B"}),Object(x.jsx)("option",{value:"70",children:"C"}),Object(x.jsx)("option",{value:"60",children:"D"}),Object(x.jsx)("option",{value:"50",children:"F"})]})]}),Object(x.jsxs)("div",{className:"form-control form-control-select",children:[Object(x.jsx)("label",{children:"Select Difficulty"}),Object(x.jsxs)("select",{className:"form-control-option",value:h,onChange:function(e){return p(e.target.value)},children:[Object(x.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select a Level"}),Object(x.jsx)("option",{value:"50",children:"Super Hard"}),Object(x.jsx)("option",{value:"40",children:"Hard"}),Object(x.jsx)("option",{value:"30",children:"Moderate"}),Object(x.jsx)("option",{value:"20",children:"Easy"}),Object(x.jsx)("option",{value:"10",children:"Super Easy"})]})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Day & Time"}),Object(x.jsx)("input",{type:"text",placeholder:"Example: Mar 19th at 2:30pm",value:m,onChange:function(e){return v(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control form-control-check",children:[Object(x.jsx)("label",{children:"Set Reminder"}),Object(x.jsx)("input",{type:"checkbox",checked:k,value:k,onChange:function(e){return S(e.currentTarget.checked)}})]}),Object(x.jsx)("input",{type:"submit",value:"Save Exam",className:"btn btn-block"})]})},C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Educational Solution for TecHacks 2021"}),Object(x.jsx)(b.b,{to:"/",children:"Go Back"})]})},w=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),i=o[0],p=o[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/exams");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/exams/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/exams",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,p([].concat(Object(l.a)(i),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/exams/".concat(t),{method:"DELETE"});case 2:p(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,c=Object(s.a)(Object(s.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/exams/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,p(i.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(b.a,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(m,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(x.jsx)(S,{onAdd:g}),i.length>0?Object(x.jsx)(k,{exams:i,onDelete:y,onToggle:w}):"No Upcoming Exam",Object(x.jsx)(h.a,{path:"/about",component:C}),Object(x.jsx)(v,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.dc207f12.chunk.js.map