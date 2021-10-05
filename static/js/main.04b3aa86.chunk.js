(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={inputName:"ContactForm_inputName__1zPxT",inputNum:"ContactForm_inputNum__Dc6sB",label:"ContactForm_label__3efrE",btn:"ContactForm_btn__OweDS"}},,function(t,e,n){t.exports={name:"ContactsListItem_name__jTvjk",num:"ContactsListItem_num__21H1w",btn:"ContactsListItem_btn__2uvlF"}},,function(t,e,n){t.exports={list:"ContactsList_list__3i70K",item:"ContactsList_item__23IDF"}},function(t,e,n){t.exports={label:"Filter_label__34B3X",input:"Filter_input__T-UP9"}},,function(t,e,n){t.exports={root:"App_root__3YCAY"}},,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),o=n(14),i=n(2),u=n(3),l=n(5),b=n(4),m=n(7),h=n(22),p=n(6),j=n.n(p),d=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",id:Object(h.a)()},t.handleInputChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:"",id:Object(h.a)()})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["name:",Object(d.jsx)("input",{className:j.a.inputName,placeholder:"Jane Wayeet",name:"name",onChange:this.handleInputChange,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",type:"text"})]}),Object(d.jsxs)("label",{className:j.a.label,children:["number:",Object(d.jsx)("input",{className:j.a.inputNum,placeholder:"+ 00-000-00",name:"number",onChange:this.handleInputChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",type:"tel"})]}),Object(d.jsx)("button",{className:j.a.btn,type:"submit",children:"add contact"})]})}}]),n}(r.a.Component),O=n(8),C=n.n(O),v=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{className:C.a.name,children:[" ",this.props.name]}),Object(d.jsxs)("span",{className:C.a.num,children:[" ",this.props.number]}),Object(d.jsx)("button",{className:C.a.btn,name:this.props.name,onClick:function(){return t.props.removeContact(t.props.id)},children:"delete"})]})}}]),n}(r.a.Component),_=n(10),x=n.n(_),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)("ul",{className:x.a.list,children:this.props.contacts.map((function(e){return Object(d.jsx)("li",{className:x.a.item,children:Object(d.jsx)(v,{name:e.name,number:e.number,removeContact:t.props.removeContact,id:e.id})},e.id)}))})}}]),n}(r.a.Component),y=n(11),N=n.n(y),S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={filterValue:""},t.handleFilterChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value)),t.props.onChange(e.currentTarget.value)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("label",{className:N.a.label,children:["search through your contacts",Object(d.jsx)("input",{placeholder:"...",className:N.a.input,name:"filterValue",onChange:this.handleFilterChange,value:this.state.filterValue})]})}}]),n}(r.a.Component),w=n(13),k=n.n(w),F=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.onSubmit=function(e){0===t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())})).length?t.setState({contacts:[].concat(Object(o.a)(t.state.contacts),[e])}):alert("There is already contact with the same name")},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.updateFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(d.jsxs)("div",{className:k.a.root,children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(f,{onSubmit:this.onSubmit}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(S,{filter:this.state.filter,onChange:this.updateFilter}),Object(d.jsx)(g,{contacts:t,removeContact:this.removeContact})]})}}]),n}(r.a.Component),L=F;s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.04b3aa86.chunk.js.map