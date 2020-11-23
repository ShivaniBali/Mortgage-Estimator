(this["webpackJsonpmortgage-estimator"]=this["webpackJsonpmortgage-estimator"]||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),m=a.n(r),c=(a(16),a(2)),o=a(5),u=a(3),i=a(9),s=a(10);var E=function(){var e=Object(l.useState)({amount:"",interest:"",years:"",frequency:"",term:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],m=Object(l.useState)({monthlyPayment:"",totalPayment:"",totalInterest:"",isResult:!1,noOfTermPayments:"",amortizationPeriodPayments:"",totalCostTerm:"",termPrincipal:"",termInterest:"",frequencyValue:""}),E=Object(u.a)(m,2),d=E[0],y=E[1],b=Object(l.useState)(""),v=Object(u.a)(b,2),p=v[0],f=v[1],h=function(e){return r(Object(o.a)(Object(o.a)({},a),{},Object(c.a)({},e.target.name,e.target.value)))},g=function(e){var t=e.amount,a=e.interest,l=e.years,n=e.frequency,r=e.term,m=Number(t),c=Number(a)/100/12,o=12*Number(l),u=Math.pow(1+c,o),i=m*u*c/(u-1),s=12*r,E=12,d=c;"Weekly"==n&&(i=12*i/52,s=52*r,E=52,d=Number(a)/100/52),"Accelerated Weekly"==n&&(i/=4,s=52*r,E=52,d=Number(a)/100/52),"Bi-Weekly"==n&&(i=12*i/26,s=26*r,E=26,d=Number(a)/100/26),"Accelerated Bi-Weekly"==n&&(i/=2,s=26*r,E=26,d=Number(a)/100/26),"Semi-Monthly"==n&&(i/=2,s=24*r,E=24,d=Number(a)/100/24);for(var b,v=l*E,p=0,f=0,h=0,g=0,P=0,N=m,k=0;k<v;k++){var I=d*b,C=i-I;b-=C,(p+=I)+(f+=C)}for(var T=0;T<s;T++){var q=d*N,O=i-q;N-=O,P=(h+=q)+(g+=O)}if(isFinite(i)){var S=i.toFixed(2),W=(i*v).toFixed(2),w=(i*v-m).toFixed(2),M=P.toFixed(2),x=g.toFixed(2),A=h.toFixed(2);y({monthlyPayment:S,totalPayment:W,totalInterest:w,isResult:!0,noOfTermPayments:s,amortizationPeriodPayments:v,totalCostTerm:M,termPrincipal:x,termInterest:A,frequencyValue:E})}},P=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((function(e){return{value:e,label:e+" years"}})),N=[1,2,3,4,5,6,7,8,9,10].map((function(e){return{value:e,label:e+" years"}}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"deviceWrapper"},n.a.createElement("div",{className:"formWrapper"},n.a.createElement("form",{autoComplete:"off",className:"form",onSubmit:function(e){e.preventDefault(),function(){var e=a.amount,t=a.interest,l=a.years,n="";return(Number(e)<=0||Number(t)<=0||Number(l)<=0)&&(n="USER INPUTS MUST BE A POSITIVE INTEGER"),!n||(f(n),!1)}()&&(g(a),f(""))}},n.a.createElement("div",{className:"body"},n.a.createElement(i.a,{icon:s.a}),n.a.createElement("span",null," Mortgage Calculator System ")),n.a.createElement("div",{className:"inWrapper"},n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Mortgage Amount:"),n.a.createElement("input",{type:"number",name:"amount",placeholder:"Enter Loan Amount",value:a.amount,onChange:h,required:!0})),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Loan Interest:"),n.a.createElement("input",{type:"number",name:"interest",placeholder:"Enter Interest",value:a.interest,onChange:h,required:!0})),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Amortization Period:"),n.a.createElement("select",{required:!0,name:"years",value:a.years,onChange:h},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select years to repay"),P.map((function(e,t){return n.a.createElement("option",{key:t,value:e.value},e.label)})))),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Payment Frequency:"),n.a.createElement("select",{required:!0,name:"frequency",value:a.frequency,onChange:h},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select frequency"),[{value:52,label:"Accelerated Weekly"},{value:52,label:"Weekly"},{value:26,label:"Accelerated Bi-Weekly"},{value:26,label:"Bi-Weekly"},{value:24,label:"Semi-Monthly"},{value:12,label:"Monthly"}].map((function(e,t){return n.a.createElement("option",{key:t,value:e.label},e.label)})))),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Term:"),n.a.createElement("select",{required:!0,name:"term",value:a.term,onChange:h},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select term"),N.map((function(e,t){return n.a.createElement("option",{key:t,value:e.value},e.label)})))),p&&n.a.createElement("p",{className:"error"},p)),n.a.createElement("div",{className:"submitButton"},n.a.createElement("button",{className:"button",type:"submit"},"Calculate")),n.a.createElement("div",{style:d.noOfTermPayments?{display:"block"}:{display:"none"}},n.a.createElement("h2",null,"Mortgage Summary"),n.a.createElement("div",null,n.a.createElement("p",null,"Over the ",a.years,"-year amortization period, you will:"),n.a.createElement("ul",null,n.a.createElement("li",null,"have made ",n.a.createElement("strong",null,d.amortizationPeriodPayments)," ",a.frequency," payments of ",n.a.createElement("strong",null,"$",d.monthlyPayment),"."),n.a.createElement("li",null,"have paid ",n.a.createElement("strong",null,"$",a.amount)," in principal, ",n.a.createElement("strong",null,"$",d.totalInterest)," in interest, for a total of ",n.a.createElement("strong",null,"$",d.totalPayment),".")),n.a.createElement("p",null,"\xa0Over the ",a.term," term, you will:"),n.a.createElement("ul",null,n.a.createElement("li",null,"have made ",n.a.createElement("strong",null,d.frequencyValue," "),a.frequency," payments of ",n.a.createElement("strong",null,"$",d.monthlyPayment),"."),n.a.createElement("li",null,"have paid ",n.a.createElement("strong",null,"$",d.termPrincipal)," in principal, ",n.a.createElement("strong",null,"$",d.termInterest)," in interest, for a total of ",n.a.createElement("strong",null,"$",d.totalCostTerm),".")),n.a.createElement("p",null,"\xa0At the end of your ",a.term," term, you will:"),n.a.createElement("ul",null,n.a.createElement("li",null,"have a balance of ",n.a.createElement("strong",null,"$",a.amount-d.termPrincipal),".")))),n.a.createElement("div",{className:"form-items"},n.a.createElement("div",null,n.a.createElement("label",{id:"label"},"Monthly Payment:"),n.a.createElement("input",{type:"text",value:d.monthlyPayment,disabled:!0})),n.a.createElement("div",null,n.a.createElement("label",{id:"label"},"Total Cost: "),n.a.createElement("input",{type:"text",value:d.totalPayment,disabled:!0})),n.a.createElement("div",null,n.a.createElement("label",{id:"label"},"Total Interest:"),n.a.createElement("input",{type:"text",value:d.totalInterest,disabled:!0})),n.a.createElement("div",{className:"submitButton"},n.a.createElement("button",{className:"button",onClick:function(){r({amount:"",interest:"",years:"",frequency:"",term:""}),y({monthlyPayment:"",totalPayment:"",totalInterest:"",isResult:!1})}},"Re-Calculate"))),n.a.createElement("div",{style:d.noOfTermPayments?{display:"block"}:{display:"none"}},n.a.createElement("h2",null,"Calculated Summary"),n.a.createElement("table",{className:"table table-sm table-hover table-striped table-dark"},n.a.createElement("thead",{className:"thead-dark",align:"center"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Category"),n.a.createElement("th",{scope:"col"},"Term"),n.a.createElement("th",{scope:"col"},"Amortization Period"))),n.a.createElement("tbody",null,n.a.createElement("tr",{align:"center"},n.a.createElement("td",null,"Number of Payments"),n.a.createElement("td",null,d.noOfTermPayments),n.a.createElement("td",null,d.amortizationPeriodPayments)),n.a.createElement("tr",{align:"center"},n.a.createElement("td",null,"Mortgage Payment"),n.a.createElement("td",null,d.monthlyPayment),n.a.createElement("td",null,d.monthlyPayment)),n.a.createElement("tr",{align:"center"},n.a.createElement("td",null,"Principal Payments"),n.a.createElement("td",null,d.termPrincipal),n.a.createElement("td",null,a.amount)),n.a.createElement("tr",{align:"center"},n.a.createElement("td",null,"Interest Payments"),n.a.createElement("td",null,d.termInterest),n.a.createElement("td",null,d.totalInterest)),n.a.createElement("tr",{align:"center"},n.a.createElement("td",null,"Total Cost"),n.a.createElement("td",null,d.totalCostTerm),n.a.createElement("td",null,d.totalPayment)))))))))};a(22);var d=function(){return n.a.createElement("div",null,n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4c4a921f.chunk.js.map