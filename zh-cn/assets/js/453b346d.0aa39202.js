"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[3867],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},o=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=s(r),g=n,d=m["".concat(u,".").concat(g)]||m[g]||k[g]||l;return r?a.createElement(d,i(i({ref:e},o),{},{components:r})):a.createElement(d,i({ref:e},o))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=g;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2986:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u5f00\u53d1\u4eba\u5458",keywords:["Higress","\u7ef4\u62a4\u8005"],description:"Higress \u7ef4\u62a4\u8005\u540d\u5355",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/developers_dev.md"},i=void 0,p={unversionedId:"developers/developers_dev",id:"developers/developers_dev",title:"\u5f00\u53d1\u4eba\u5458",description:"Higress \u7ef4\u62a4\u8005\u540d\u5355",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/developers_dev.md",sourceDirName:"developers",slug:"/developers/developers_dev",permalink:"/zh-cn/docs/developers/developers_dev",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/developers_dev.md",tags:[],version:"current",frontMatter:{title:"\u5f00\u53d1\u4eba\u5458",keywords:["Higress","\u7ef4\u62a4\u8005"],description:"Higress \u7ef4\u62a4\u8005\u540d\u5355",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/developers_dev.md"},sidebar:"developers",next:{title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",permalink:"/zh-cn/docs/developers/contributor-guide/new-contributor-guide_dev"}},u={},s=[{value:"\u5f00\u53d1\u4eba\u5458",id:"\u5f00\u53d1\u4eba\u5458",level:2},{value:"Higress Maintainers",id:"higress-maintainers",level:2},{value:"Higress Approvers",id:"higress-approvers",level:2},{value:"Higress Reviewers",id:"higress-reviewers",level:2},{value:"Higress Members",id:"higress-members",level:2},{value:"\u83b7\u53d6Higress\u5f00\u53d1\u8005\u5934\u8854",id:"\u83b7\u53d6higress\u5f00\u53d1\u8005\u5934\u8854",level:2},{value:"Member",id:"member",level:3},{value:"Reviewer",id:"reviewer",level:3},{value:"Approver",id:"approver",level:3},{value:"Maintainer",id:"maintainer",level:3}],o={toc:s},m="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5f00\u53d1\u4eba\u5458"},"\u5f00\u53d1\u4eba\u5458"),(0,n.kt)("p",null,"\u672c\u9875\u9762\u5c55\u793a\u4e86Higress\u7684\u5f00\u53d1\u56e2\u961f\u3002\u8bf7\u901a\u8fc7\u63d0\u4ea4PR\u7684\u65b9\u5f0f\u628a\u81ea\u5df1\u7684\u4fe1\u606f\u6dfb\u52a0\u5230\u5217\u8868\u4e0a\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u6392\u540d\u6309 github id \u9996\u5b57\u6bcd")),(0,n.kt)("h2",{id:"higress-maintainers"},"Higress Maintainers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"github"),(0,n.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8463\u827a\u8343"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/CH3CHO"},"CH3CHO")),(0,n.kt)("td",{parentName:"tr",align:null},"Trip.com")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u803f\u857e\u857e"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gengleilei"},"gengleilei")),(0,n.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5f20\u6dfb\u7ffc"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/johnlanni"},"johnlanni")),(0,n.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8303\u626c"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/SpecialYang"},"SpecialYang")),(0,n.kt)("td",{parentName:"tr",align:null},"Alibaba")))),(0,n.kt)("h2",{id:"higress-approvers"},"Higress Approvers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"github"),(0,n.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5434\u65b0\u519b"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/2456868764"},"2456868764")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5218\u8bad\u707c"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Xunzhuo"},"Xunzhuo")),(0,n.kt)("td",{parentName:"tr",align:null},"Tencent")))),(0,n.kt)("h2",{id:"higress-reviewers"},"Higress Reviewers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"github"),(0,n.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u51cc\u8f76\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Lynskylate"},"Lynskylate")),(0,n.kt)("td",{parentName:"tr",align:null},"eBay")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5218\u6653\u745e"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rinfx"},"rinfx")),(0,n.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8d75\u70b3\u5803"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/sjtuzbk"},"sjtuzbk")),(0,n.kt)("td",{parentName:"tr",align:null},"Alibaba")))),(0,n.kt)("h2",{id:"higress-members"},"Higress Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"github"),(0,n.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u674e\u5f3a\u6797"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Charlie17Li"},"Charlie17Li")),(0,n.kt)("td",{parentName:"tr",align:null},"ZJU-SEL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5c01\u5b87\u817e"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Fkbqf"},"Ffyyt")),(0,n.kt)("td",{parentName:"tr",align:null},"XUPT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7530\u4e9a\u6d9b"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Hinsteny"},"Hinsteny")),(0,n.kt)("td",{parentName:"tr",align:null},"Ant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b8b\u9e4f\u8fdc"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/songpengyuan"},"songpengyuan")),(0,n.kt)("td",{parentName:"tr",align:null},"Okki.com")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8d75\u4f1f\u57fa"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/vikizhao156"},"vikizhao156")),(0,n.kt)("td",{parentName:"tr",align:null},"SJTU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u97e6\u946b"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/weixinx"},"WeixinX")),(0,n.kt)("td",{parentName:"tr",align:null},"NUAA")))),(0,n.kt)("h2",{id:"\u83b7\u53d6higress\u5f00\u53d1\u8005\u5934\u8854"},"\u83b7\u53d6Higress\u5f00\u53d1\u8005\u5934\u8854"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5934\u8854\u672c\u8eab\u662f\u4e00\u79cd\u8363\u8a89\u8c61\u5f81\uff0c\u6bcf\u4e00\u4f4d\u53c2\u4e0eHigress\u7684\u8d21\u732e\u8005\u5728\u5f00\u6e90\u793e\u533a\u7684\u5730\u4f4d\u90fd\u662f\u5e73\u7b49\u7684")),(0,n.kt)("p",null,"\u6bcf\u79cd\u7684\u5934\u8854\u7684\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("h3",{id:"member"},"Member"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6761\u4ef6\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u83b7\u5f97 8 \u4e2a\u5b8c\u6210 issue \u7684\u79ef\u5206\uff08easy +1\uff0cnormal +2\uff0cchallenge +4\uff09")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Higress\u5f00\u6e90\u793e\u533a\u4e3a\u6bcf\u4e2a\u53ef\u8ba4\u9886\uff08help wanted\u6807\u7b7e\uff09\u7684issue\u90fd\u6807\u8bb0\u4e86\u96be\u5ea6\u6807\u7b7e\uff1a\u7b80\u5355(level/easy)\uff0c\u666e\u901a(level/normal)\uff0c\u6709\u6311\u6218(level/challenge)\uff0c\u5b8c\u6210issue\u540e\u53ef\u4ee5\u83b7\u5f97\u5bf9\u5e94\u79ef\u5206")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d21\u732e\u4ee3\u7801\uff08\u5305\u542b\u6587\u6863\uff09DIFF \u884c\u6570\uff08\u5305\u542b\u589e\u5220\uff09\u8fbe\u5230 500+")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e0d\u4ec5\u53ea\u6709\u8d21\u732e\u4ee3\u7801\uff0c\u5728Higress\u5b98\u7f51\u4ed3\u5e93(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/higress-group/higress-group.github.io)%E8%B4%A1%E7%8C%AE%E6%96%87%E6%A1%A3%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%BB%A1%E8%B6%B3%E6%AD%A4%E8%A6%81%E6%B1%82"},"https://github.com/higress-group/higress-group.github.io)\u8d21\u732e\u6587\u6863\uff0c\u4e5f\u53ef\u4ee5\u6ee1\u8db3\u6b64\u8981\u6c42"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u793e\u533a\u5468\u4f1a\u8fdb\u884c 1 \u6b21\u4e3b\u9898\u5206\u4eab")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u91cd\u70b9\u4e0d\u662f\u5206\u4eab\u7684\u5185\u5bb9\uff0c\u662f\u901a\u8fc7\u5206\u4eab\u8ba9\u5927\u5bb6\u8ba4\u8bc6\u4f60")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u65b9\u5f0f\uff1a")),(0,n.kt)("p",null,"\u6ee1\u8db3\u6761\u4ef6\uff0c\u672c\u4eba\u76f4\u63a5\u7f16\u8f91\u672c\u6587\u6863\uff0c\u63d0 PR \u7533\u8bf7"),(0,n.kt)("h3",{id:"reviewer"},"Reviewer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6761\u4ef6\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ee1\u8db3 Member \u6761\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5728 SIG \u7684\u6838\u5fc3 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/alibaba/higress/issues/547"},"issue")," \u4e2d\u505a\u51fa\u8d21\u732e")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u65b9\u5f0f\uff1a")),(0,n.kt)("p",null,"\u7531 Approvers/Maintainer \u63d0\u540d\uff0c\u7f16\u8f91\u672c\u6587\u6863\uff0c\u63d0 PR \u7533\u8bf7"),(0,n.kt)("h3",{id:"approver"},"Approver"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6761\u4ef6\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ee1\u8db3 Reviewer \u6761\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u5bfc\u4e00\u4e2a SIG Proposal \u8349\u6848\uff0c\u7ec4\u7ec7\u5e76\u63a8\u8fdb\u6838\u5fc3 issue \u7684 tasklist \u5b8c\u6210")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u65b9\u5f0f\uff1a")),(0,n.kt)("p",null,"\u7531 Maintainer \u63d0\u540d\uff0c\u7f16\u8f91\u672c\u6587\u6863\uff0c\u63d0 PR \u7533\u8bf7"),(0,n.kt)("h3",{id:"maintainer"},"Maintainer"),(0,n.kt)("p",null,"Maintainer\u662f\u5bf9Higress\u9879\u76ee\uff08\u5305\u62ecHigress\u4e0b\u7684\u9879\u76ee\uff09\u7684\u6f14\u8fdb\u548c\u53d1\u5c55\u505a\u51fa\u663e\u8457\u8d21\u732e\u7684\u4e2a\u4eba\u3002\u5728\u793e\u533a\u4e2d\u5177\u6709\u6709\u76ee\u5171\u7779\u7684\u5f71\u54cd\u529b\uff0c\u80fd\u591f\u4ee3\u8868Higress\u53c2\u52a0\u91cd\u8981\u7684\u793e\u533a\u4f1a\u8bae\u548c\u6d3b\u52a8\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6761\u4ef6\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ee1\u8db3 Approver \u6761\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u5bfc\u591a\u4e2a SIG Proposal \u8349\u6848\uff0c\u7ec4\u7ec7\u5e76\u63a8\u8fdb\u6838\u5fc3 issue \u7684 tasklist \u5b8c\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u79ef\u6781\u53c2\u4e0e\u5f00\u6e90\u793e\u533a\u7684\u65e5\u5e38\u5de5\u4f5c\uff1a\u5f15\u5bfc\u65b0\u4eba\u5f00\u53d1\uff0c\u7528\u6237\u95ee\u9898\u89e3\u7b54\u7b49")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7533\u8bf7\u65b9\u5f0f\uff1a")),(0,n.kt)("p",null,"\u7531 2 \u540d\u4ee5\u4e0aMaintainer \u63d0\u540d\uff0c\u7f16\u8f91\u672c\u6587\u6863\uff0c\u63d0 PR \u7533\u8bf7"))}k.isMDXComponent=!0}}]);