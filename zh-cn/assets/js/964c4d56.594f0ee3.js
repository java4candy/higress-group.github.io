"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=s,k=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const o={title:"\u5feb\u901f\u5f00\u59cb",keywords:["Higress"],description:"Higress \u5feb\u901f\u5f00\u59cb.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md"},a="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"user/quickstart",id:"user/quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"Higress \u5feb\u901f\u5f00\u59cb.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/zh-cn/docs/user/quickstart",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",keywords:["Higress"],description:"Higress \u5feb\u901f\u5f00\u59cb.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md"},sidebar:"docs",previous:{title:"\u672f\u8bed\u8868",permalink:"/zh-cn/docs/overview/terminology"},next:{title:"Ingress Annotation \u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/annotation"}},i={},c=[{value:"\u9636\u6bb5\u4e00\uff1a\u5b89\u88c5",id:"\u9636\u6bb5\u4e00\u5b89\u88c5",level:2},{value:"\u573a\u666f\u4e00\uff1a\u5728\u6807\u51c6 K8s \u96c6\u7fa4\u4e2d\u4f7f\u7528",id:"\u573a\u666f\u4e00\u5728\u6807\u51c6-k8s-\u96c6\u7fa4\u4e2d\u4f7f\u7528",level:3},{value:"Helm \u5b89\u88c5\u547d\u4ee4",id:"helm-\u5b89\u88c5\u547d\u4ee4",level:4},{value:"\u573a\u666f\u4e8c\uff1a\u5728\u672c\u5730\u73af\u5883\u4e2d\u4f7f\u7528",id:"\u573a\u666f\u4e8c\u5728\u672c\u5730\u73af\u5883\u4e2d\u4f7f\u7528",level:3},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 kubectl &amp; kind",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5-kubectl--kind",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u5e76\u542f\u7528 kind",id:"\u7b2c\u4e8c\u6b65\u521b\u5efa\u5e76\u542f\u7528-kind",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5 Higress",id:"\u7b2c\u4e09\u6b65\u5b89\u88c5-higress",level:3},{value:"\u9636\u6bb5\u4e8c\uff1a\u914d\u7f6e",id:"\u9636\u6bb5\u4e8c\u914d\u7f6e",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 Higress Console \u8fdb\u884c\u914d\u7f6e",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-higress-console-\u8fdb\u884c\u914d\u7f6e",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 Ingress CRD \u8fdb\u884c\u914d\u7f6e",id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528-ingress-crd-\u8fdb\u884c\u914d\u7f6e",level:3},{value:"\u9636\u6bb5\u4e09\uff1a\u8bf7\u6c42\u9a8c\u8bc1",id:"\u9636\u6bb5\u4e09\u8bf7\u6c42\u9a8c\u8bc1",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,s.kt)(u,(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,s.kt)("h2",{id:"\u9636\u6bb5\u4e00\u5b89\u88c5"},"\u9636\u6bb5\u4e00\uff1a\u5b89\u88c5"),(0,s.kt)("h3",{id:"\u573a\u666f\u4e00\u5728\u6807\u51c6-k8s-\u96c6\u7fa4\u4e2d\u4f7f\u7528"},"\u573a\u666f\u4e00\uff1a\u5728\u6807\u51c6 K8s \u96c6\u7fa4\u4e2d\u4f7f\u7528"),(0,s.kt)("h4",{id:"helm-\u5b89\u88c5\u547d\u4ee4"},"Helm \u5b89\u88c5\u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io\n")),(0,s.kt)("p",null,"\u6ce8\u610f\uff1a\u5b89\u88c5\u5b8c\u6210\u540e\u4f1a\u8f93\u51fa\u4e00\u6bb5\u6587\u672c\uff0c\u5176\u4e2d\u5305\u542b\u83b7\u53d6\u63a7\u5236\u53f0\u767b\u5f55\u4fe1\u606f\u7684\u547d\u4ee4\u3002\u8bf7\u6267\u884c\u8be5\u547d\u4ee4\u5e76\u8bb0\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(6039).Z,width:"1240",height:"250"})),(0,s.kt)("p",null,"\u83b7\u53d6 Higress Gateway \u7684 LoadBalancer IP\uff0c\u5e76\u8bb0\u5f55\u4e0b\u6765\u3002\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7\u8be5 IP \u7684 80 \u548c 443 \u7aef\u53e3\u8bbf\u95ee Higress Gateway\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'\n")),(0,s.kt)("h3",{id:"\u573a\u666f\u4e8c\u5728\u672c\u5730\u73af\u5883\u4e2d\u4f7f\u7528"},"\u573a\u666f\u4e8c\uff1a\u5728\u672c\u5730\u73af\u5883\u4e2d\u4f7f\u7528"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u9002\u7528\u4e8e\u6240\u6709\u5728\u672c\u5730\u542f\u52a8 K8s \u96c6\u7fa4\u8fdb\u884c\u9a8c\u8bc1\u7684\u573a\u666f\u3002\u5982\u679c\u60a8\u672c\u5730\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u96c6\u7fa4\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8f6c\u5230\u7b2c\u4e09\u6b65\u5b89\u88c5 Higress\u3002"),(0,s.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5-kubectl--kind"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 kubectl & kind"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"MacOS\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo ./kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl\n# for Intel Macs\n[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-amd64\n# for M1 / ARM Macs\n[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-arm64\nchmod +x ./kind ./kubectl\nmv ./kind ./kubectl /some-dir-in-your-PATH/\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Windows \u4e2d\u4f7f\u7528 PowerShell\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl.exe -Lo kubectl.exe https://storage.googleapis.com/kubernetes-release/release/$(curl.exe -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/windows/amd64/kubectl.exe\ncurl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.17.0/kind-windows-amd64\nMove-Item .\\kind-windows-amd64.exe c:\\some-dir-in-your-PATH\\kind.exe\nMove-Item .\\kubectl.exe c:\\some-dir-in-your-PATH\\kubectl.exe\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Linux:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo ./kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\ncurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-linux-amd64\nchmod +x ./kind ./kubectl\nsudo mv ./kind ./kubectl /usr/local/bin/kind\n")),(0,s.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u521b\u5efa\u5e76\u542f\u7528-kind"},"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u5e76\u542f\u7528 kind"),(0,s.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6: ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# cluster.conf\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\n')),(0,s.kt)("p",null,"Mac & Linux \u7cfb\u7edf\u6267\u884c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name higress --config=cluster.conf\nkubectl config use-context kind-higress\n")),(0,s.kt)("p",null,"Windows \u7cfb\u7edf\u6267\u884c:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kind.exe create cluster --name higress --config=cluster.conf\nkubectl.exe config use-context kind-higress\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5907\u6ce8")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u662f\u4e3a\u4e86\u5c06\u672c\u5730\uff08127.0.0.1\uff09\u768480\u548c443\u7aef\u53e3\u7528\u4e8eHigress\u8bbf\u95ee\uff0c\u5982\u679c\u5e0c\u671b\u5728\u672c\u5730\u4f7f\u7528 LoadBalancer IP \u8fdb\u884c\u8bbf\u95ee\uff0c\u53ef\u4ee5\u53c2\u8003Kind\u6587\u6863",(0,s.kt)("inlineCode",{parentName:"p"},"https://kind.sigs.k8s.io/docs/user/loadbalancer/")," \u63d0\u4f9b\u7684\u80fd\u529b\u4e88\u4ee5\u652f\u6301\u3002"),(0,s.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u5b89\u88c5-higress"},"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5 Higress"),(0,s.kt)("p",null,"\u672c\u5730\u5b89\u88c5\u5f00\u5173: ",(0,s.kt)("inlineCode",{parentName:"p"},"--set global.kind=true"),"\uff1b\n\u4e3a\u907f\u514d\u6b67\u4e49\uff0c\u540e\u9762\u4f1a\u8c03\u6574\u5c5e\u6027\u540d\u79f0\u4e3a\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"--set global.local=true")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=true  --set higress-controller.domain=console.higress.io --set higress-console.admin.password.value=admin\n")),(0,s.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u672c\u5730\u7684 80 \u548c 443 \u7aef\u53e3\u5373\u53ef\u8bbf\u95ee\u672c\u5730\u96c6\u7fa4\u5185\u7684 Higress Gateway\u3002"),(0,s.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u672c\u5730\u73b0\u5b58\u7684 K8s \u96c6\u7fa4\uff0c\u90a3\u4e48\u53ef\u80fd\u9700\u8981\u5148\u6267\u884c\u4e0b\u65b9\u547d\u4ee4\u5c06 K8s \u96c6\u7fa4\u5185\u7684\u7aef\u53e3\u6620\u5c04\u51fa\u6765\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u8bbf\u95ee\u672c\u5730\u7aef\u53e3\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443\n")),(0,s.kt)("h2",{id:"\u9636\u6bb5\u4e8c\u914d\u7f6e"},"\u9636\u6bb5\u4e8c\uff1a\u914d\u7f6e"),(0,s.kt)("p",null,"\u5047\u8bbe\u5728 default \u547d\u540d\u7a7a\u95f4\u4e0b\u5df2\u7ecf\u90e8\u7f72\u4e86\u4e00\u4e2a\u540d\u4e3a foo \u7684\u670d\u52a1\uff0c\u800c\u6211\u4eec\u5e0c\u671b\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94 ",(0,s.kt)("a",{parentName:"p",href:"http://foo.bar.com/foo"},"http://foo.bar.com/foo")," \u7684\u8def\u7531\u6307\u5411\u8be5\u670d\u52a1\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u5404\u4f4d\u53ef\u4ee5\u4f7f\u7528\u4e0b\u65b9 YAML \u6765\u521b\u5efa\u5bf9\u5e94\u7684\u6d4b\u8bd5\u670d\u52a1\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod\napiVersion: v1\nmetadata:\n  name: foo-app\n  labels:\n    app: foo\nspec:\n  containers:\n  - name: foo-app\n    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\n    args:\n    - "-text=foo"\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: foo-service\nspec:\n  selector:\n    app: foo\n  ports:\n  # Default port used by the image\n  - port: 5678\n')),(0,s.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-higress-console-\u8fdb\u884c\u914d\u7f6e"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 Higress Console \u8fdb\u884c\u914d\u7f6e"),(0,s.kt)("p",null,"\u7f16\u8f91\u672c\u673a\u7684 hosts \u6587\u4ef6\uff0c\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"console.higress.io"),"\u57df\u540d\u6307\u5411\u8be5 Higress Gateway \u7684 IP\uff08\u5728\u6807\u51c6 K8s \u96c6\u7fa4\u4e2d\u5373\u524d\u9762\u83b7\u53d6\u7684 LoadBalancer IP\u3002\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\u53ef\u76f4\u63a5\u4f7f\u7528 127.0.0.1\uff09\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GatewayIP console.higress.io\n")),(0,s.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165",(0,s.kt)("inlineCode",{parentName:"p"},"http://console.higress.io"),"\uff0c\u4f7f\u7528\u524d\u9762\u83b7\u53d6\u7684\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55 Higress \u63a7\u5236\u53f0\uff08\u672c\u5730\u96c6\u7fa4\u7684\u7528\u6237\u540d\u5bc6\u7801\u5747\u4e3a admin\uff09\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(2495).Z,width:"500",height:"350"})),(0,s.kt)("p",null,"\u70b9\u51fb\u5de6\u4fa7\u201c\u57df\u540d\u7ba1\u7406\u201d\u5bfc\u822a\u680f\uff0c\u7136\u540e\u70b9\u51fb\u9875\u9762\u53f3\u4fa7\u7684\u201c\u521b\u5efa\u57df\u540d\u201d\u6309\u94ae\u3002\u6309\u7167\u4e0b\u56fe\u6240\u793a\u5185\u5bb9\u586b\u5199\u8868\u5355\u5e76\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(7386).Z,width:"1274",height:"585"})),(0,s.kt)("p",null,"\u70b9\u51fb\u5de6\u4fa7\u201c\u8def\u7531\u7ba1\u7406\u201d\u5bfc\u822a\u680f\uff0c\u7136\u540e\u70b9\u51fb\u9875\u9762\u53f3\u4fa7\u7684\u201c\u521b\u5efa\u8def\u7531\u201d\u6309\u94ae\u3002\u6309\u7167\u4e0b\u56fe\u7247\u6240\u793a\u5185\u5bb9\u586b\u5199\u8868\u5355\u5e76\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(9036).Z,width:"1274",height:"1021"})),(0,s.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528-ingress-crd-\u8fdb\u884c\u914d\u7f6e"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 Ingress CRD \u8fdb\u884c\u914d\u7f6e"),(0,s.kt)("p",null,"\u4f7f\u7528\u4e0b\u65b9 YAML \u6765\u521b\u5efa\u6211\u4eec\u9700\u8981\u7684\u8def\u7531\u914d\u7f6e\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: foo\nspec:\n  ingressClassName: higress\n  rules:\n  - host: foo.bar.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/foo"\n        backend:\n          service:\n            name: foo-service\n            port:\n              number: 5678\n')),(0,s.kt)("h2",{id:"\u9636\u6bb5\u4e09\u8bf7\u6c42\u9a8c\u8bc1"},"\u9636\u6bb5\u4e09\uff1a\u8bf7\u6c42\u9a8c\u8bc1"),(0,s.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u9a8c\u8bc1\u6d4b\u8bd5\u8def\u7531\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# should output \"foo\"\ncurl http://GatewayIP/foo -H 'host: foo.bar.com'\n")))}p.isMDXComponent=!0},6039:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/console-credentials-3f846851a9dfeed79cf5e782173eb20a.png"},7386:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/domain_management-56739e1110e4c5d7c4619426705bfb10.png"},2495:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},9036:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/route_management-37928d01d4f77dae8e61c49e8f891c4d.png"}}]);