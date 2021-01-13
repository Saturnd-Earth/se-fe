(this["webpackJsonpse-fe"]=this["webpackJsonpse-fe"]||[]).push([[0],{25:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var A=n(1),s=n(5),i=n(37),a=Math.cos,o=Math.PI,c=Math.sin;function r(e,t,n){return((e+n)%t+t)%t}function u(e,t,n){var A=180/o*t/3889.8,s=A/a(function(e){return o/180*e}(e.lat())),i=2*o/n.length;return n.map((function(t){var n=t*i;return{lat:e.lat()+A*c(n),lng:e.lng()+s*a(n)}}))}var l=[[0,1],[1,2],[2,4],[4,8],[8,16],[16,32],[32,64],[64,128],[128,256],[256,512],[512,1024],[1024,2e3],[2e3,4e3],[4e3,6e3],[6e3,8e3],[8e3,1e4],[1e4,12500]];function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.earthMap.center,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150,A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#FFC107",a=Object(i.a)(Array(A).keys()),o=u(e,n,a),c=u(e,t,a.reverse()),r=new window.google.maps.Polygon({paths:[o,c],fillColor:s,fillOpacity:.35,strokeColor:s,strokeOpacity:.8,strokeWeight:1});r.setMap(window.earthMap),window.earthRings.push(r)}function g(){document.getElementById("map").classList.add("hidden")}function j(){window.earthLikes.forEach((function(e){e.setMap(null)})),window.earthLikes=[]}function p(){window.earthRings.forEach((function(e){e.setMap(null)})),window.earthRings=[]}function m(){document.getElementById("map").style.position="relative"}function b(){document.getElementById("map")&&document.getElementById("map").classList.remove("hidden")}function h(){document.getElementById("map").style.position="static"}var O=n(11),G=n(17),w=n(6);function f(){var e=Object(G.a)(["\n  mutation logIn($username: String!, $password: String!) {\n    signinUser(input: {\n      credentials: {\n        username: $username,\n        password: $password\n      }\n    }) {\n      user{\n        id\n        username\n      }\n    }\n  }\n"]);return f=function(){return e},e}function S(){var e=Object(G.a)(["\n  query getFeed($latitude: Float!, $longitude: Float!) {\n    postsUserCanIncrease(latitude: $latitude, longitude: $longitude) {\n      id\n      latitude\n      longitude\n      ringMinMax\n      createdAt\n      text\n      url\n      userId\n      likes {\n        id\n        latitude\n        longitude\n        createdAt\n        userId\n      }\n    }\n  }\n"]);return S=function(){return e},e}function I(){var e=Object(G.a)(["\n  query getUserPosts($userId: Int!) {\n    postsByUser(userId: $userId) {\n      id\n      latitude\n      longitude\n      ringMinMax\n      createdAt\n      text\n      url\n      userId\n      likes {\n        id\n        latitude\n        longitude\n        createdAt\n        userId\n      }\n    }\n  }\n"]);return I=function(){return e},e}function y(){var e=Object(G.a)(["\n  query getUser {\n    users{\n      id\n      username\n    }\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(G.a)(["\n  query getUserById($id: Int!) {\n    user(id: $id){\n      id\n      username\n    }\n  }\n"]);return x=function(){return e},e}function B(){var e=Object(G.a)(["\n  query getPost($id: Int!) {\n    posts (id: $id){\n      id\n      content\n      latitude\n      longitude\n      ringMinMax\n      createdAt\n      userId\n    }\n  }\n"]);return B=function(){return e},e}function R(){var e=Object(G.a)(["\n  query getAllPosts {\n    posts {\n      id\n      latitude\n      longitude\n      ringMinMax\n      createdAt\n      text\n      url\n      userId\n      likes {\n        id\n        latitude\n        longitude\n        createdAt\n        userId\n      }\n    }\n  }\n"]);return R=function(){return e},e}function E(){var e=Object(G.a)(["\n  mutation editUser($id: Int!, $username: String!, $password: String!){\n    editUser(input: {\n      id: $id\n      username: $username\n      password: $password\n    })\n    {\n      user{\n        id\n        username\n      }\n    }\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(G.a)(["\n  mutation destroyUser($id: Int!){\n    createUser(input: {\n      id: $id\n    })\n    {\n      user{\n        id\n      }\n    }\n  }\n"]);return C=function(){return e},e}function N(){var e=Object(G.a)(["\n  mutation destroyPost($id: Int!){\n    destroyPost(input: {\n      id: $id\n    })\n    {\n      post{\n        id\n        content\n        latitude\n        longitude\n        ringMinMax\n        createdAt\n        userId\n      }\n    }\n  }\n"]);return N=function(){return e},e}function D(){var e=Object(G.a)(["\n  mutation destroyLike($id: ID!){\n    destroyLike(input:{\n      id: $id,\n    })\n    {\n      like{\n        id\n      }\n    }\n  }\n"]);return D=function(){return e},e}function v(){var e=Object(G.a)(["\n  mutation createUser($username: String!, $password: String!){\n    createUser(input: {\n      credentials: {\n        username: $username\n        password: $password\n      }\n    })\n    {\n      user{\n        id\n      }\n    }\n  }\n"]);return v=function(){return e},e}function M(){var e=Object(G.a)(["\n  mutation createPost($latitude: Float!, $longitude: Float!, $postType: String!, $text: String!, $url: String, $userId: Int!){\n    createPost(input: {\n      latitude: $latitude\n      longitude: $longitude\n      postType: $postType\n      text: $text\n      url: $url\n      userId: $userId\n    })\n    {\n      post{\n        createdAt\n        id\n        latitude\n        longitude\n        postType\n        text\n        url\n        userId\n      }\n    }\n  }\n"]);return M=function(){return e},e}function P(){var e=Object(G.a)(["\n  mutation createLike($userId: Int!, $postId: Int!, $latitude: Float!, $longitude: Float!){\n    createLike(input: {\n      userId: $userId\n      postId: $postId\n      latitude: $latitude\n      longitude: $longitude\n    })\n    {\n      like{\n        id\n      }\n    }\n  }\n"]);return P=function(){return e},e}var Q=Object(w.gql)(P()),k=Object(w.gql)(M()),U=Object(w.gql)(v()),T=Object(w.gql)(D()),F=(Object(w.gql)(N()),Object(w.gql)(C()),Object(w.gql)(E()),Object(w.gql)(R())),q=(Object(w.gql)(B()),Object(w.gql)(x()),Object(w.gql)(y()),Object(w.gql)(I())),z=Object(w.gql)(S()),H=Object(w.gql)(f()),L=n(3),Y=n.p+"static/media/loading.62f2095c.png";function K(){return Object(A.jsx)("div",{className:"post-overlay",children:Object(A.jsx)("img",{className:"spin",alt:"Updating the Post",src:Y,style:{height:"10em",width:"auto",margin:"auto",padding:"4em"}})})}var X=n(69),J=n.n(X);n(25);function W(e){var t=Object(L.useState)(e.likes.some((function(t){return+t.userId===+e.userId}))),n=Object(s.a)(t,2),a=n[0],o=n[1],c=Object(L.useState)(!1),r=Object(s.a)(c,2),d=r[0],g=r[1],j=Object(w.useMutation)(Q),p=Object(s.a)(j,1)[0],m=Object(w.useMutation)(T),b=Object(s.a)(m,1)[0];function h(){g(!0),p({variables:{userId:+e.userId,postId:+e.id,latitude:e.position.lat,longitude:e.position.lng}}).then((function(t){g(!1),o(!a),function(e,t){var n=l.findIndex((function(t){return t[1]===e})),A=Object(s.a)(l[n+1],2),a=A[0],o=A[1],c=Object(i.a)(Array(30).keys()),r=u(t,o,c),d=u(t,a,c.reverse());window.earthRings[0].setPaths([r,d])}(e.ring[1],e.center)})).catch((function(e){return console.log("No one likes."+e)}))}Object(L.useEffect)((function(){o(e.likes.some((function(t){return+t.userId===+e.userId})))}),[e.likes,e.userId]);var O=a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAQMAAADYVuV7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAAGySci5vDAAAAAJ0Uk5TAP9bkSK1AAAApElEQVR4nM3SMQ7DIAyFYRADY47AUXI0OBpH4QiMDCguGWj+RLKKVFWqt2+wny3ZmB+UK4BvQOjATsQDEMASjvDERgTB6J2IhACWcCLX1p7YiEDsRBSpiLlgCUf4Jwoyz+qE3JCIPBLfKCMkTdQxNxNloo2G+hn9WyzmVBVlDVlFUmGWcKjoKtoaqoqiIq8hqTAPjKfw87Y7nGQ3bztfzMw9/7leNfIaTRSoqjIAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACTklEQVR4Ae3cAWdbYRjF8QdBMATDUAzBEOQDBGUY4GIfohiGYAiCAIqhGIIiGIoggCIYAhigGIKggKIIgv+8DGwkb+/25tyl50cAHnJOIkdww8zMzMxOCfACGAAXQAWcxXEY8AF45E/XQCes6Kf+lv02wOuwIuF/I88qTBZ+kgzCZOEnn8Jk4SfTMFn4yThMFn7yPmQcftINGYf/EDIOP1mEjMNPJiHj8JMqZBx+8jJkHP4mZBx+Mg8Nh6//D8jhJ29DxuEnnZBx+Hch4/CTWcg4/ORjmCz8ZBAWAbSAJce1A9phEcBnju97WATQ5/TcAyvgKzACzppcwJTTtwMWQL+JBfzg+dg2bnnxPM2iLqALTIAVsP71WgIj4JULyDauMxUvgd2Br9jQBWR7V2qnz1zAP5zCwBVPN4wMWFVqp29zfhOwecmdPooDsIdDAa2pb5lVgL0pFdA6qwA7LxbQ/1CAC7C+rgB7BNq6AmwRiawAu3ABOlug4wJ0vkTiAmR6LkDnNhIXIFO5AJ010HIBOsNIXIB2eroA/fR0AQI9F6Cfni5ApHIB4unpAsTT0wWIp6cL0E9PFyDQcwH66ekCRCoXIJ6eLkA8PV2AeHq6AP30dAECPRegn54uQKRyAc2envlKPxLS0/MA4J76Vjn3PT33AGbUN8m57+m5B3BOPTugm3v/BGyBbpQA3PB0l4XvN8249PPc7si3BFoF7zfNHGhHUriEGw67AloF7wvUf7+lfhNmv62XNTAF+oXuN80GuP6b92tmZmZmZmZmZvYTtjhu0w8WdVIAAAAASUVORK5CYII=";e.userData.id,e.userData.id;return Object(A.jsxs)("section",{className:"post",children:[Object(A.jsx)("div",{className:"post-overlay ".concat(d?"":"hidden"),children:Object(A.jsx)("img",{className:"spin",alt:"Updating the Post",src:Y})}),Object(A.jsx)("section",{className:"post-left",children:Object(A.jsx)("div",{className:"post-left-bottom",children:Object(A.jsx)("img",{src:O,alt:"Like button",id:"like-button",onClick:function(){return h()}})})}),Object(A.jsxs)("section",{className:"post-right",children:[Object(A.jsxs)("div",{className:"post-right-top",children:[Object(A.jsx)("em",{children:Object(A.jsx)("strong",{children:Object(A.jsx)("h5",{className:"post-right-top-h",id:"name-header",children:e.userName})})}),Object(A.jsx)("br",{}),Object(A.jsx)("em",{children:Object(A.jsxs)("h6",{className:"post-right-top-h",id:"prt2",children:["Ring: ",e.ring[1]]})}),Object(A.jsx)("br",{}),Object(A.jsx)("em",{children:Object(A.jsxs)("h6",{className:"post-right-top-h",id:"prt3",children:[J.a.getRelativeDistance(new Date(e.createdAt))," ago"]})}),Object(A.jsx)("br",{}),Object(A.jsx)("em",{children:Object(A.jsxs)("h6",{className:"post-right-top-h",id:"prt4",children:["Latitude: ",e.latitude]})}),Object(A.jsx)("br",{}),Object(A.jsx)("em",{children:Object(A.jsxs)("h6",{className:"post-right-top-h",id:"prt4",children:["Longitude: ",e.longitude]})}),Object(A.jsx)("br",{})]}),Object(A.jsxs)("div",{className:"post-right-bottom",children:[Object(A.jsx)("p",{className:"post-right-bottom-p",children:e.content}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{className:e.url?"post-img-div":"post-img-div hidden",children:"Image"==e.postType?Object(A.jsx)("img",{className:"post-img",src:e.url,alt:e.content,id:e.content}):Object(A.jsx)("iframe",{className:"post-vid","max-width":"75%",height:"auto",src:e.url})})]})]})]})}function V(e){var t=Object(w.useQuery)(z,{variables:{latitude:e.position.lat||0,longitude:e.position.lng||0}}),n=t.loading,i=t.error,a=t.data,o=Object(L.useState)(void 0!==window.earthMap),c=Object(s.a)(o,2),u=c[0],l=c[1],g=Object(L.useState)(!0),m=Object(s.a)(g,2),b=m[0],h=m[1],O=Object(L.useState)(0),G=Object(s.a)(O,2),f=G[0],S=G[1];if(n)return Object(A.jsx)(K,{});if(i)return Object(A.jsx)("h1",{children:"Hmm... something went wrong."});var I=a.postsUserCanIncrease[f],y=(I.content,I.createdAt),x=I.id,B=I.likes,R=I.latitude,E=I.longitude,C=I.postType,N=I.ringMinMax,D=I.url,v=I.text,M=N.slice(1,-1).split(", ").map((function(e){return+e})),P=Object(s.a)(M,2),Q=P[0],k=P[1],U={lat:function(){return R},lng:function(){return E}};return b&&u?(p(),window.earthMap.setZoom(10),window.earthMap.setCenter({lat:R,lng:E}),d(U,Q,k),h(!1),j(),B.forEach((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.earthMap.center,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fa66ba",A=new window.google.maps.Circle({center:e,fillColor:n,fillOpacity:.8,radius:t,strokeColor:"#780000",strokeOpacity:.9,strokeWeight:1});A.setMap(window.earthMap),window.earthLikes.push(A)}({lat:R,lng:E})}))):u||window.setTimeout((function(){return l(void 0!==window.earthMap)}),100),Object(A.jsxs)("section",{className:"feed",children:[Object(A.jsx)("h1",{className:"header-title",children:e.headerTitle}),Object(A.jsx)(W,{center:U,content:v,createdAt:y,id:x,likes:B,ring:[Q,k],latitude:R,longitude:E,position:e.position,postType:C,url:D,userData:e.userData,userId:+e.userData.id}),Object(A.jsxs)("section",{className:"next-previous-section",children:[Object(A.jsxs)("button",{className:"buttons",id:"previous-button",onClick:function(){h(!0),S(r(f,a.postsUserCanIncrease.length,-1))},children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbxQTFRFAAAAAGiLAGqRAGuRAGyRAGuRAGuRAGuSAGmQAGuRAGySAGuSAGuRAGuRAGySAGCPAFWOAGqRAGuSEXWZh7nLzOHp6fL1fLPGBm6UAGySAGuRAGuSMomnxt7m////5fDzBG6TAGyRA26SX6K6n8fVAGySk8DR+/z98vj5AGuS1uftAGuSN4uqAGySWZ+3AGyRAGuSAGiSmcPSaqm/AGuSAGyR4OzyttTfgbbIT5izKoOjD3SXAmyTAGqSAGuRAGuSO42qHHyeB3CVAGuSAGqPAGySAGuQAGqQAGmSAm2SZaa9GXmcAGyRAGuRAGuSAGyRAGqSAGmSAGqKAGyQAWyS0ePqsNHdJ4KiAGmPAGaMAGCASpaxAGuR2+rvAGuRAGqRAGyQAECAqs3adrDEI3+gDXKXAWySAGuSAGuRAGqQAGuRAGiPAGuS7vT4wdvkFnibAGuRAGqRAGqQAGyQAGqPAGKJRZOvC3GWAGyRAGyPAGSSjb3OAGySAGuRAGqAAGySpcrYAGuQAGqPAGOOu9fiFHaaAFVVAGuRcKzBH32eAGuOAGuSAGySAGyRAGuRAGuRAGqQAGyRAGuRAGqOSCcHhAAAAJR0Uk5TABZ4pdPrvHAnov/wa13XEAl/sdHE2+3C4NDK98LY/+njh+a/ysTH+/Tz4NvCrb/77DHIwNR05tHDv8TT6VRf4sHK3elZr49nP+3AzOPDn3tbOBhO9N3PxksoCMCz48+LRwTNwcfW8MunY0Mgg/DWzreXc1MwDcDYx0AcxZNPDMLLfFIS088DSsHIK82oYbXfbO2eJPBwdbcAAALmSURBVHic7ZfrW9JgGIeXqOkjWZmgBRInFZGgiAwiBU0q7VxSmdhJSy0EM8PKSrPsfO4fbsCi3Pay97Q+dO33kWv87ue5t+u9NkEwYsSIkX+fLTWm2rr6rXrVNzRCOU1mPeq3NUMlTdt5t+/Y2VJq3tVqsba1A+zmS2ho3FNst9k7HMXsdQK4ONZLbtweq0OKF6CTV3vFTVe3oxIfQA+fepmbSsTfeNQr3fAEqLrhB0C54QRAu+EBqOqGHaDhhhWg6YYJgOOGAYDnhhqA64YOQOCGBkDkhhxA6IYQQO6GCEDjhgBA5wYXQO0GD8DgBgfA5KYcP0CvTm7KCQDs08lNKcEQ7D+gjxufJXww4BZLIsr6Q0xu+g5HY0fiR3+/m0b65fUDCTo3xZGTg0M2+DvHhpXzJ0jdyEaW0lObOn7ipIp+E8BIFMuNryM8mjw1FJI1nz5z9tz5CxcRz6ZwCWAsrTXy5bbYlfiIysjmq+PXUM1SXAATfEeWJQPgVTRPqo98PXXDfHP8FmazlBRAWDm7//bUxPSduzJC3cysa+7efTJAFiCJlD+f6/IE8u0yTqh34cHiwyXML6VH4h+iGje5uFBhelmx0OPZ7NyTp1qEiHhpYV4LUYo1t+Kx553yhZoXni0+X3qBAvSvihfZAhYsRCnd/jXEQi/XX6khyt/Q+TDpSWR9vRK0b7g3Y2reqBDels9S5yieKflC6bV3hffLYxKhU40gfDB9BFJTKgvF4mLJJ8TTlM1QmtqUVvFwXUfd7s9MpqTEAL6gAFxM9YlnFRrAwxRovtkxmtIGMJrCATCZwgMwmMIG0JoiANCZIgLQmCIFEJsiBxCaogEIJKYoAfimqAG4phgAApYpNgCGKVaApil2gFDdFBdANVOcAGhT3ACCuqlJgK/cAGqmpgBaOAIUptLiV8s3rgDhj6mgNxcT++t59wsVU6UkdOgXiqa+S/0D+gDEDLsyMz9+6lZvxIiR/zK/AF4ctmJu6RS6AAAAAElFTkSuQmCC",alt:"previous arrow",label:"previous arrow",className:"logon-icons"}),"Previous"]}),Object(A.jsxs)("button",{className:"buttons",id:"next-button",onClick:function(){h(!0),S(r(f,a.postsUserCanIncrease.length,1))},children:["Next",Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbxQTFRFAAAAAGqOAGuRAGuSAGuRAGyRAGqPAGuRAGuSAGySAGyRAGuSAGKJAGuSAGuRAGuOAGuRAm2ST5izwdvkn8fVWZ+3BG6TAGySAGyRAGqQ0ePq////+/z9mcPSFnibAGuSdrDEzOHpN4uqAGuSAGuR2+rv7vT4Zaa9AGyR4OzyAGuRAGqPh7nLAGySD3SXjb3Ou9fi6fL1AFVVAGySAWySC3GWH32eRZOvcKzBpcrYAGuRAGqRA26SFHaaMomnAGuRAGOOAGuQAGuRAGyRAGuRAWySI3+g1uftAGySAGqSAGqAAGqPAGuRAGqQAGySAGuRAGyRX6K6AGuSAGSSAGyPAGqQqs3agbbIAGCPAGyQAGqRAGuSBm6Uk8DRO42qAGiPAGuRDXKXSpaxAGySAECAAGaMAGyQAGuRAGqRAGuRAGuSJ4KifLPGsNHdAGqKAGmSAGqSAGyRAGuSAGuRB3CVGXmcxt7m8vj5AGCAAGmPAGuQAGyRAGyQAGmSAGqQAmyTKoOjttTfAGuSHHyeaqm/EXWZAGyRAGuRAGiSAGuSAGuRAGmQAGySAGqRAFWO5fDzAGySAGuSAGuSAGiLNZ2uygAAAJR0Uk5TACSey7OHWV/i/+2DDc2lK7ztv9bKv+PXYWzd//vIzrHB28L33+PwwOPmtVLEqNPF0+0DxPTYyMDBy0p45s/CohJ8p8fr8MfgwlQMME9zk7f7v9QcQGPNwxBTl9vgx8EgQ9bArwQoR2uLz/PGws8YOFt7n8PdzNj0CEuP004/Z+nE0enKwNF0XTHsyietfwnp0PBwFlu1tYoAAALeSURBVHic7ZdpWxJRGIYtRXmjSAbQYlMg0dIwSiOTsMw0MxMswzKpJKPFdrPFyvZ97w93xGEb5sycbb7N85WL537fm+FcZ+rqzJgxY4YimzbXN1gaDatvskIhW2xbjQHI/Sjb7NsN6G8GcEhOl7ulwGjdIbp/J+r3eFF8/kAB0SDYVBtAu1dOMBQWb2oXQIe3lEincFOozVsZ4aaUAOGmVABiTakCRJrCAMSZwgMEmdICCDGlDRBgShfAa4oAwGeKCMBjihTAbIocwGiKBsBkihJAb4oaQGuKAeClMsUGoDDFCiA21QWwm5FAZmoPgMQMIDHVDRDu4SDom9qLPoxKvfti7AxtU/sPyDfTvv6D8UMDHh8LomTqsBphEKqSOJJ00y9UNDWktsTR7mPDx0eqMXCifzTePjBGsdCGqZPjuJ/71MTpyTNTrSkFqCWQTPc6yRaKxNEXpnGAYs6em7FhFjo/pofIoPkIz/LZiQuTF6fmlAtdCoTS884IlpAFsJEBirl8ZcYyXF+z0NXRBdWF/AA5OsC1xev5G7mbtxQER/S2tHSnowbgQn85wua79+4/ePioS1GcWn6c7fSvPMEpWgCw6BQ/XXyWf55bVR9Z72D09AG8EDtyZXwZB4BdpfrlK5WR16KvpcwbirM8lk6gr1lr6xvfVhWHl99l3/uDRCNXZCVZOPGsTcr68WnmkcvxzX8oVLR9rJ1/vT8RYhi5nA036Cz9pKL/8xdIuZmr1yO7+Tr0TfXR+Q4Q4mgvufnxE/NszgHonmDYaLqRA8zXFj03nAB9N1wAEjccADI3rABiN2wACjcsACo31ABaN5QAejdUABY35ABGN6QAZjdkAA43BAA+N7oAXjc6AH43WgAhbvAAQW5wAGFu5KD7XMV9RaQbOegd02WMGzkW9Bb2yxA3cmZ/o9eipViwR7ibEuFP+d4r1E0p+SJBsJuK/G0eWbUP/jOq3owZM2Y08h+uvJ930GoaXQAAAABJRU5ErkJggg==",alt:"previous arrow",label:"previous arrow",className:"logon-icons"})]})]})]})}var Z=n(14);function $(){return Object(A.jsxs)("section",{className:"header-bottom",children:[Object(A.jsx)(Z.b,{to:"/",label:"home",exact:!0,activeClassName:"selected",onClick:b,children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACDElEQVR4Ae3aAWQbYRzG4Q9BEQxDUByKAYphKMIAAMUwwABDUQwDFENRwFAUxTAURVHAUAzBEAwDBBAEcHgGgEqTpHe7yb0PAPjLT9y9XImIiIiIiIiIiIh4Eo7wCac4LPFvYIgbj33FoER7MMJPy91hWKJ5eIWp1R4wKhvAPi7xy2MTXOBF6Su8xsz6pjgoa0CFudX+9DIC3mJhc7N1Hs64sb6L0id4h9r2FhiXJ2BufZPSFzjRjBrHZQkbKn2AC807SYAVMMA37TlPgKcH1r32XWOQAKsHVpvuMEyA1QOrTQ8Y2VC/B1bzNg6fgdWxDKyOZWAlwPZwDgnQzcC6hgToZmDdac5vfMYbVKgwxhlmCfB4YD1oRo1TDMoS2MM5EgAHmGpGjXFZE973OgAOMdOcj8088HsQAGMsNGdStoA9zHoVAMeoNetD2RLONO+obwOreta/sXk1jnszsMozoNKOGicZWN370v3AiisMuh1YcYthtwMrfmDU/o/PzDIxxcs2A3wX3X2+iFurxGXbbz5XlokJqtIlO660LgESIAESIAESIAESIAESIAH+q3sSIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESYKE50x27p32415zLHbunfThE7fnm2N+BezqLcI+Fzc1xg2oX7omIiIiIiIiIiIiIiPgLDXYfHE3Mt4oAAAAASUVORK5CYII=",alt:"Home",className:"bottom-images",id:"home-icon"})}),Object(A.jsx)(Z.b,{to:"/make_post",label:"my post",activeClassName:"selected",onClick:g,children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAADJklEQVR4Ae3cAWQcaRjH4Q+LYFEEwaEoguJwKBZhcSgOQXEIguAQFEVQFIcAICiCIAiC4hAEQbEIgkUQHBZFsAgWzwHKlVqTse83s+9DAIjff+2O3ZmvpJRSSunnMMQx7jDFOV5mmRXAFqZ+NMeohMj4OUJ8/DUYARsY4wAfcYovmODB978prnCCQ4ywUZ4BbzC3nHlvPhPwC/ZxibnmnnCN99gsDWCEueWcd/2VfoiJ9l1gUJbVfIRp6RoMsIcZRMbHFiYYNRzhrovh76GS+FPAvOEIx6UL8Ap3UGF8DUeYYlhqh9/xWGv8hiNMsVVqhyMsao3fcIT642OIL1Br/IYjvOlC/AFuqo7ffIT64azm+L0eAUc9ig8wKV2Adz2M35mrnd8wz/hB8DXjB8Fuxg+CAe4zfhD8lfGD4AVmGT8IPmT8QLjJ+EGwtU7xMcCw1AL7axb/AvulFrjUnlv1x4fLmu5meNKenfrjg3mpAd5q10b98QH8WqLhvRZ1KD7slWg4XuUAFcWH4xINp6scoKL4cFGi4Tp+gJD4cFOiYRo/QEh8eCjR8C1ggID49Q4gaoCA+DlAQPzqB5jFDxASH76WaLiNHyAkPlyWaLjSorICLcWHzyUaPmtRh+LDUYmGAy3qUHwYl2h4qUUdiv+EjVID3GvPsP744KrUAifaM64/PvhQaoG3ET9JBsaH17U9ZD1reYQxhs/8n3Zwq323pTb4ZH3s1Xpv0EL/zbCxvs+DxftU+5MxfbbowmOp/+ivk1I7bGOhfx7xonQBjvXPQT6sEecOg9Il2Ncf466ehDXRfeelq/AKc931LzZLiHwrWmBc+gDnuufv0hd4gQfdMcGg9AlGWIgXfwJuFByp327pM5yq18fSdxjgWn3OyrrAJqbqcYNBWSfYxjfx7rFV1hF2sBDnEdtlnWE3ZITvR1Am7FmtRcb/HxyuMP5uCZAjBMTPETJ+/PkTkPHjbnVcNPxBPeEw33aC4R0WDa/zd0p6PvyBueXN8jq/ZRhhvmT87dK+hNeYBZ77mbCNqR/drCh+wgYOcIEz/LnU9/kppZRSSimllNJ/gblRDbcmV6MAAAAASUVORK5CYII=",alt:"Add a post",className:"bottom-images",id:"make-post-icon",onClick:b})}),Object(A.jsx)(Z.b,{to:"/my_post",label:"my post",activeClassName:"selected",onClick:b,children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACO0lEQVR4Ae3bAWRbWwDH4YOiKB6KoHh4KB4CKIoBAwwPUMDDUAwPD0MxDEEBDw/FMATBMBRBEQTFMAxFEBRBEATfsFE2JYskJ839fxwA8LvnHPfec0pERERERERERERERMQ2wSk66GGAu+/jBl28QbusTuAQl7i3uBEucFBiOdjDBSaWN8Z5iV+DFgZW50Nmw4JwjJHV+4RWeVyghbH1+fTITAjsY2j9PpSfBTo257w8CBxhZnPGHpaiwJXNuyhRCg4ws3mjEqXghXraCcA79bxJAIbq6SYAI/XcJEBddwlQ1ygBGKtnkADcqqeXAHTV00kAztRzmgD8hrnNuy/fBHo277J8EzjG3OZMcFgeBK7qf4rOXvDF+g2wVx6VpWhqfUZolccFTtcUYYzjEgvPhC9WZ7jck5894Qpzy5uhg/0Sy8Exephb3AxXOCorlRlxhi5uMfZghCHe4UWOnCwpIiIiIiICLZzib3TQQx8D3P0wbtBHF29xhpP8eFkQ9vEM/+IjJlbnHj28wgn2SpSCP/AaA8xszhR9vMJRE68j/YNb2+MGL3d6ucIzfLTd5uiiXXYFnqPv6enhpDxV+BNDT9/1k9sncI6Z3THBX2Xb4RA9u+s/HGzzddPPdl8feznfWddl2SZ4rXnOtultdq55pjgoteGl5npeasN7zfW21Iax5hqU2jRcAiRAsyWABJhqrs+lNlxrrv9LbWhjrnkmOCrbAG1cY2r3TdDD72UBERERERERERERERERXwECqnnFuvnkTgAAAABJRU5ErkJggg==",alt:"Your feed",className:"bottom-images",id:"user-feed-icon",onClick:b})}),Object(A.jsx)(Z.b,{to:"/earth",label:"show all rings",activeClassName:"selected",onClick:g,children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAwFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Do+ZMAAAAQHRSTlMADDBHX3+Xr8ffw6uTe0MsCBRj9//zo1skc/u7ZxxP00CzKJ8Ym4cQPOfbSwSPd7fX479vg8+niyDrNO84U1fL4o1ZGwAAA1RJREFUeAHt2NVi6zoURdEVZl6lQBtGp0H3pPz/X3XhyCXHkrbjPmY8hmZQ0g7Ezs7OYvFEMpXOZHO5fKFYSpYrVfyiWj3ToM/F5VUMv+L6Js9gzVa7g6hu72iU7yKKbp5WvThO1c9Qojno4BTDUZNCjfEEoU1nDGHeR0j1JkO5WCAMZ8mwmveQm6wokuF3gyqE+mvKIP4jkR1CpDanzAZAfPu9UIWA06JQFv/bNfhpAIE0pfbeO+ry0z2s2pRqXkNxHvihuYBFt0mpP/i05IeLPowOj5TaOviy54f5BCYPlCo6+K7ED2MYPFEmN4rDp0BPowO9LY1gELsTfFcXNIPJ9TOVZhwajhslgCQ9Pf0tLGCWpaeLYJuIgRd68gg0pQ0sBvR0EGQcOXCgp40g88gBrKi0EKBPmzVsXqk0YzhWos0INs6MyhWO5Wnx3IHVHyqXONKh2XPmALsFlYuq9qomf0IoE3oq8KtTKSyjBOBSKcMvReUGyyiBNJUk/EZUFsAyQqBOpQS/HpU+fhYQzhuVIvzeqUzws4BwulQK2qXUf0xAOBXtgkoPfAWEc6CSswRUwcRdTgD973UDvxmVmrTA3MTwCrLaX0gf4sLS8BlktEt5F+KCi2NlKmntdncFecFwdk5pl4od5AXDep3UpgeQFwybZgJ+t1RmkBdwxLmgEoffNT1P8oL+aNSI6VfyEsQFHNlTyUB/XR7igv7oUzfMBs2auAC/OD0109E0BT9xYGA8nBapPE9ODQwbVG4QpExP6tTAmJ5rBHGedS9BGDg0qNwh2E73EmiwztxP/CPqLYJV51SaT/69wuj5/ueEl4dOUrOXXEp2htqGnq71XOY/FHRpcw/06MlAr8zgGaVAi8ZwT0+zD4MWPY0pvomtabEVThGVC3qarz8KBQrNhrKjn7+A7uWMAs0pLPb8tIMP7eqwyvBTMRY2sIRdzOWnXDlcYOVA4DDjl8EkRGA9OeF/8dnNRBqQ/0N+cPlNYxQXBVo1iMUy/CHbjju2QNpBGHv6XGzHt9RrthHS2wVDeOwitEqLYg8HnKLsUmT7hFMl57RyF4igunum0SbpIBqnXNxQYz6e4lc87V0eyZf6+EXXt+3UYOXOyM17b5SqLzqQOjs7+xfQ2ywBy7fdFgAAAABJRU5ErkJggg==",alt:"Your awards",className:"bottom-images",id:"user-awards-icon",onClick:b})})]})}function _(e){return null===e.userData?Object(A.jsxs)("section",{className:"header-top-buttons",children:[Object(A.jsx)(Z.b,{to:"/signup",className:"header-top-buttons",children:Object(A.jsxs)("button",{className:"logon sign-up",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAAAGySAGySAGyS////MIinsNHdAGySAGyS2Tz5CQAAAAl0Uk5TAE/P//////aGsYya8AAAAW5JREFUeJztl8GRwjAMRTEc4LhDGgiTBlgUaAB3ACXQASVs4xvbSYhl2ZIOzDCDddbLlzzSF6xWNWp8XpgOhjj9SPP3MMZBmQ8g0jBDYm+HuAqragDsGAC/IoEp32nwEk2oZyJYiaWAK+rEAeulgJPgamoiAUFNXQywNZm4IiehaoFvYoMqGoBWB1g4VuArAG401MOnHm/1AuEVteyKJibQMgC2Gd7JtEYWS4j8W2vG3u6nfNmBWBwU7QkS5s+EOP/tEa60+FIv3kjSx+vrMpXw+f41SoyIzz8/4nEtEGP5F7SjWWJuN5LwIiRh5j7vNiGIzt37hCaxcTiCeCu3BjmAWgzj8rIA8SvFu0UWINzD+1EeSPwprH4JQDUF/yoAuKZg8wUA34kN3OIhjSeKAnBctEAyUSxw1wJ9BTCw5Z4Vz9IuBXCgDfrj8vGO7p7lfNoxx9bLP3gq8HZgHYBWDBhyakrRUFNTlOg0/7u5+AfqPnXnIQde4AAAAABJRU5ErkJggg==",alt:"Sign up",label:"sign up button",className:"sign-up-button logon-icons"}),Object(A.jsx)("div",{className:"logon-button-text",children:"Sign Up"})]})}),Object(A.jsx)(Z.b,{to:"/login",className:"header-top-buttons",children:Object(A.jsxs)("button",{className:"logon login",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPxQTFRFAAAAAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySJIGhg7jKx9/n3+3x////v9rke7PHGHqcAGySAGySBG6Ui7zN+/399/r8c67DAGySo8rYk8HRAGySMIinAGySm8XUn8jWW6C5LIWlIH6gR5Wwq8/b5/H1S5eyQ5Ov8/j6X6O7AGySAGySAGySAGySr9HdKIOjAGySY6W8AGySDHOXAGySAGySHHyePI+sAGySQJGtf7XIAGySAGySAGySAGyS1+ju7/b4EHWZj77P4+/zAGySAGySAGySAGySAGySAGySAGySAGySWzOO2QAAAFR0Uk5TACGax9//v5IaYfDmSlTUogP//////////8S5//////9p//9w/7H///////////////+GLCB///+U/zD/DBz//3P///tSEH7//////+PnuDsJylrb8k/kRAAAAblJREFUeJztmOdOAkEYRZdyqYJSFpQmXUERGzYUxYYNsLz/u/iNyA82cZZtMeh3/2yy2TknkynJXUXh/M+43B4vDMbr8wfmxAdDRuHThJfmwEeiZvEiyyu6AsGPxRNJ1WCSqfQqDV3TM2SAbC5vlD5JYV3MQc4vEj9lDi9SIoN8HXxA2TxfVWkOYRm/AlSt8NUCrYNst9aAuiWBmgb8EgEdL8PbZzYpwCcR0BpZ46tJOtOOClRCsIAFLGABC1jAAhawYNEEG5uN5ta2Y4LWzqSWtXedERQa0+K354wgR9/uHxx26HHkiOAYCIohJ8CpI4Ip6EzTumwTdIFzMeQC6DkiuASuxBDqjX1HBNfAza1ydw9Nb7RNkK9Ot2l15seAfQdt0Jvw+62Z1zZeFQ/pJh7bT5q3C3XZsYAFLGABC1jAAhaw4BcFz8CLRDAEWvoQWRKARyIYASVrgjjglgjGmrpiOPkY4JIIArQI2upuKFRuQxK+olDt7Q7M81PZ73L7Y17fyGB6DmXiR6V8RXn/EK2oZGIvJeuitUUjOoKvOZhPRg8vDB3TeF9xDj4lMB4NjdO9tcp8eM6fyyd8G7sTxwcIwQAAAABJRU5ErkJggg==",alt:"Log in",label:"log in and out button",className:"sign-in-button logon-icons"}),Object(A.jsx)("div",{className:"logon-button-text",children:"Login"})]})})]}):Object(A.jsx)("section",{className:"header-top-buttons logout-section",children:Object(A.jsxs)("button",{className:"logon logout",onClick:function(){return e.setUserData({id:null,username:null})},children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySAGySHHyem8XU0+bs////z+Pqj77PEHWZAGySAGySIH6g7/b43+3xAGySr9HdAGySAGyS8/j61+juAGySAGySu9jiAGySAGySMIin+/39AGySAGySAGySAGySKbqW8QAAACp0Uk5TAHCbz/+iZb/fXGjtDf////////+2g////8D/7/P//9fE/6mP//8X+3PVa4p7oQAAAVBJREFUeJztmW1PwkAQhMEOohSwgFB5UUFE9P//Qa9B0x5275a7FNNk5uvezNPepmmy2+lQFPVP6t4kcCjp3cbl913pJ93dh8cPUn++IQTnD03+aPyQOTSZzoDHUMAcWOSu+EJPs/C+LIGVLz/LpuF9WQPeFzC3FN4Xc9CfX0NU9yUQcOqLpg/BgKIvvUYBpi9Jo4DMWAm4IqD6gREgAf6cJ4AAAggggIBogPj3IsAytx3Q/h40C6gBEkAAAQQQQAABrQX87A0iAO4Z9u/eIAYAeYZd7g0iAcIMW7E38AEKyTNs1d7AD5Bn2Lq9gQIgzbB1ewMNQJhhb4Bnff4L8Cr5ypqlLbDTA8bAm+Qra5b2wPtBm5+PgK7gq9QsfRzNyZ3qlvLVAujX+6yarc8jLlDq8KW1+eZZvi7IH8i+au2MsN9uNOnr5Xwo+c5rFEVdQd9GQegsrZRBWwAAAABJRU5ErkJggg==",alt:"Log out",label:"log in and out button",className:"sign-in-button logon-icons"}),Object(A.jsx)("div",{className:"logon-button-text",children:"Logout"})]})})}var ee=n.p+"static/media/se-logo.764623de.png";function te(e){return Object(A.jsxs)("section",{children:[Object(A.jsxs)("section",{className:"header-top",children:[Object(A.jsx)("img",{src:ee,alt:"Saturn`d Earth Logo",id:"se-logo"}),Object(A.jsx)("h1",{className:"header-text",children:"Saturn'd Earth"}),Object(A.jsx)(_,{userData:e.userData.id,setUserData:e.setUserData})]}),Object(A.jsx)($,{})]})}var ne=function(e){var t=Object(w.useMutation)(H),n=Object(s.a)(t,2),i=n[0],a=n[1],o=a.data,c=a.loading,r={password:"",username:""},u=Object(O.e)(),l=function(e){r[e.target.name]=e.target.value};return c?Object(A.jsx)(K,{}):(o&&(b(),e.setUserData(o.signinUser.user),u.push("/")),Object(A.jsx)("section",{className:"sign-up-section",children:Object(A.jsxs)("form",{className:"sign-up-login-form",children:[Object(A.jsx)("input",{type:"text",placeholder:"username",name:"username",className:"sign-up-loging-input",onInput:l}),Object(A.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"sign-up-loging-input password",onInput:l}),Object(A.jsx)("input",{type:"submit",placeholder:"register",className:"sumbit-loging",onClick:function(e){var t=r.username,n=r.password;e.preventDefault(),i({variables:{username:t,password:n}})},value:"Login"})]})}))},Ae=function(e){return Object(A.jsx)("section",{className:"input-section","data-testid":"make post input",children:Object(A.jsx)("textarea",{rows:"10",cols:"10",className:"make-post-field tab-content",placeholder:"Type your post here!",spellCheck:"true",wrap:"soft",onChange:function(t){return e.setInput({postType:"Comment",text:t.target.value})}})})},se=function(e){var t=Object(L.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],o=Object(L.useState)(""),c=Object(s.a)(o,2),r=c[0],u=c[1];return Object(A.jsxs)("section",{className:"input-section","data-testid":"make post input",children:[Object(A.jsx)("textarea",{rows:"6",cols:"10",className:"make-post-field  tab-content",placeholder:"Add A Title To Your Image",spellCheck:"true",wrap:"soft",onChange:function(t){a(t.target.value),e.setInput({postType:"Image",text:t.target.value,url:r})}}),Object(A.jsx)("input",{className:"make-post-field  media-content",placeholder:"input your image link!",minLength:"5",type:"url",onChange:function(t){u(t.target.value),e.setInput({postType:"Image",text:i,url:t.target.value})}})]})},ie=function(e){var t=Object(L.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],o=Object(L.useState)(""),c=Object(s.a)(o,2),r=c[0],u=c[1];return Object(A.jsxs)("section",{className:"input-section","data-testid":"make post input",children:[Object(A.jsx)("textarea",{rows:"6",cols:"10",className:"make-post-field  tab-content",placeholder:"Add A Title To Your Video",spellCheck:"true",wrap:"soft",onChange:function(t){a(t.target.value),e.setInput({postType:"Video",text:t.target.value,url:r})}}),Object(A.jsx)("input",{className:"make-post-field  media-content",placeholder:"input your video link!",minLength:"5",type:"url",onChange:function(t){u(t.target.value),e.setInput({postType:"Video",text:i,url:t.target.value})}})]})},ae=function(e){var t=Object(L.useState)({}),n=Object(s.a)(t,2),i=n[0],a=n[1],o=Object(L.useState)((function(){return function(){return Object(A.jsx)(Ae,{setInput:a})}})),c=Object(s.a)(o,2),r=c[0],u=c[1],l=Object(L.useState)(1),d=Object(s.a)(l,2),g=d[0],j=d[1],p=Object(O.e)(),m=Object(w.useMutation)(k),h=Object(s.a)(m,1)[0],G=Object(L.useState)(!1),f=Object(s.a)(G,2),S=f[0],I=f[1],y=Object(L.useState)(!1),x=Object(s.a)(y,2),B=(x[0],x[1],null===e.userData.id?function(){return Object(A.jsx)("button",{className:"make-post-button2",disabled:S,children:"Please Sign In To Make A Post"})}:function(){return Object(A.jsx)("button",{className:S?"make-post-button2":"make-post-button",disabled:S,onClick:function(){return I(!0),void h({variables:{userId:+e.userData.id,text:i.text,latitude:e.position.lat,longitude:e.position.lng,url:i.url||null,postType:i.postType}}).then((function(){I(!1),b(),p.push("/")})).catch((function(e){console.log(e)}))},children:"Post"})});return Object(A.jsxs)("section",{className:"make-post-section",children:[Object(A.jsx)("h4",{className:"make-post-text",children:"Start Your Ring By Making A Post Here"}),Object(A.jsxs)("div",{className:"tab",children:[Object(A.jsxs)("button",{className:"tab-links"+(1===g?"-selected":""),onClick:function(){u((function(){return function(){return Object(A.jsx)(Ae,{setInput:a})}})),j(1)},children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAtklEQVR4Ae3WAQYDMRBA0aCAHmoB6FH2AAXkCD1CDhBAAUUPEBR7gB6igOIXYNTKkjXZCfMJiOERQ4I3dMAJiMCCfnfgsgWa6d9cAy3071UDHZIG6AkUK6As5osFUBTzEQc5aHub4t+ZxPy0cl+0QDk0BhQNUNoBemiAvkBqeLLsW+ag0UBJblN3UGX7Mo0N9UH7WAMla6AzcAXeJkDaATczIIkyBZIoCTKBkiAzKAGygwreyP0AdmmVWTajcQUAAAAASUVORK5CYII=",alt:"Leave a comment",className:"icons make-post-comment",label:"Add comment"}),"Add Comment"]}),Object(A.jsxs)("button",{className:"tab-links"+(2===g?"-selected":""),onClick:function(){u((function(){return function(){return Object(A.jsx)(se,{setInput:a})}})),j(2)},children:[Object(A.jsx)("img",{alt:"Link a Video",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACfklEQVR4Ae3bAWQcWRzH8YfiUBSLIgiCICgA4DgUBQQQHA6HAA4AhwCCQxEUi+AQHCAoBlAABIdFcAiKxSAIPldANLZPs307s7O/DwD+mO/u/9m3ppQSERERERER2MMcC9zgArMS7eEAS0/daR8hcG21i9JWoLfaTYm2VJRIgASIBEiASIAEiAQoOMAZPuHW8G4qdztNbezuCC9wjgfj8nt5BPtY2rw7zFo+/M44vS6P4B/DuWgV4L2RqtztDL0O14c3sEUB7g1n0SLAB+O2Vx5BZziXLQLcGreTp99YDzavx36DAKPXrVibHe611+Mah6UF2+HtZH+I2Q6fcZgAw0d4mwDD63CCWQKMUAIkQAIkQFsJMKG7o0UC/Hiz77g7mifAcHdHS+wlwObujj5iic+4wn4ZA9P0rgwqAXocJsDwEd4lwHjujl6XL/ATjvAHFgkwsARIgARIgARIgARIgARIgARIgARIgARIgARIgATgHn9hjvsE2KweR1/9pdgnwOb8Wr6CkwTYjHlZAecJ8G0dFp7vBi8rr9N+TICnevzy6CH9+ey9X4EZFglQ39nd82bU4Qh9Ali9s7GP/nkz6nCcAPWdfbrGjCqcTS5Ag53drTujcihf72qA+s6ur6LKjDq8wmI6ARrsbJyuMaPpoTzOAA12NrrKjLXgePIB6ju7vooqM9aCs+kEaLCzcUp9RpNDeQIB5mXUKofyBALslS2B36YY4NUWBTieYoC/MduST/9yigGm6L8xBLizuz6NIcCl3XU2hgA/200POChjgCu757yMBV7iX7ujw4syhEqEK9P3vv7whz8TLnFnOm7xAW9KRERERERERETED/I/r4dKhDK6BcYAAAAASUVORK5CYII=",className:"icons",label:"link image"}),"Link Image"]}),Object(A.jsxs)("button",{className:"tab-links"+(3===g?"-selected":""),onClick:function(){u((function(){return function(){return Object(A.jsx)(ie,{setInput:a,input:i})}})),j(3)},children:[Object(A.jsx)("img",{alt:"Link a Video",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAABsklEQVR4Ae3aAWYDQRhA4UUAwaKAIICgCIqiQA4QFBBADpBD9AALKHKIoIAcIiiKYrEoikVQBK8KglYM293JjPddYPgfmH+m+CFJkiRJkiRJkiRJkiRJwATYAq+k7wBUQJnK8KdAS37qJCIAO/JVpRCgJV+HBALkzQABDBCbAQwAjIB7YJJjgAZYA7fAHNgA7bUEAFbAO2cNcJdLgBooI9w/ggIAFX/7Ah5yCLC8cPYmZgCg4rKXHAKUF86e07MOwwf4SD7ANZ4PVAQyQEfhwzdAL8KHb4BehA/fAL0IH74B+lLRgQEiMIABwnc7Rc9+744MUANlvLdrAyyLSIANGKCMGGAOBhhHDDADAywiBliDAQ7AKMLwS6AxwDnCAhgPNPglUAMYwIuYAQzgMs4ArqN9kDGAT5I+yhvAbykddkfA7Mo/ZjU5BFh03+1E+5r4nEOAAzCKtdvp8Dn3lN7n3IDd0dC7ncAZPAEnzj4H2/qSuSIQMAFWwCNwUwzFAHEZwAAGOJKvtxQC7MnXNoUAc+BEflpgUgSLH2EPHDMZ/A6YFpIkSZIkSZIkSZIkSZL0D74Bvfsz527xLhQAAAAASUVORK5CYII=",className:"icons make-post-video",label:"link video"}),"Link Video"]})]}),Object(A.jsxs)("div",{className:"make-post-input",children:[S?Object(A.jsx)(K,{}):Object(A.jsx)(A.Fragment,{}),r()]}),B()]})};function oe(e){var t=Object(w.useQuery)(F),n=t.loading,i=t.data,a=Object(O.e)();return Object(L.useEffect)((function(){return window.earthMap&&window.earthMap.setMapTypeId("satellite"),m})),n||!window.earthMap?(g(),Object(A.jsx)(K,{})):(p(),j(),h(),function(){var e=document.getElementById("map"),t=e.offsetHeight,n=e.offsetWidth,A=Math.min(n,t)/256+2.5;window.earthMap.setZoom(A)}(),e.center&&window.earthMap.setCenter(e.center),b(),i.posts.forEach((function(e,t){window.setTimeout((function(){if("/earth"===a.location.pathname){h();var t=e.latitude,n=e.longitude,A=e.ringMinMax.slice(1,-1).split(", "),i=Object(s.a)(A,2);d({lat:function(){return t},lng:function(){return n}},i[0],i[1])}}),30*t)})),Object(A.jsx)("h1",{className:"hidden",children:"Sneaky Easter Egg"}))}function ce(){var e=Object(L.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],a={password:"",username:""},o=Object(O.e)(),c=Object(w.useMutation)(U),r=Object(s.a)(c,1)[0],u=function(e){a[e.target.name]=e.target.value};return Object(A.jsx)("section",{className:"sign-up-section",children:Object(A.jsxs)("form",{className:"sign-up-login-form",children:[Object(A.jsx)("input",{type:"text",placeholder:"username",name:"username",className:"sign-up-loging-input",onInput:u}),Object(A.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"sign-up-loging-input password",onInput:u}),Object(A.jsx)("input",{type:"submit",placeholder:"register",className:"sumbit-loging",onClick:function(e){var t=a.username,n=a.password;e.preventDefault(),r({variables:{username:t,password:n}}).then((function(e){o.push("/"),b()})).catch((function(e){console.log(e),i(!0)}))},value:"Sign up"}),n?"Looks like that user already exists! Select a different user name":Object(A.jsx)(A.Fragment,{})]})})}var re=n.p+"static/media/ring-icon.3428ce93.png";function ue(e){console.log(e);var t=Object(w.useQuery)(q,{variables:{userId:+e.userData.id}}),n=t.loading,i=t.error,a=t.data;return null===e.userData.id?Object(A.jsx)("h1",{children:"Please sign in to access this feature!"}):n?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{children:"LOADING POSTS..."}),Object(A.jsx)(K,{})]}):i?Object(A.jsx)("h1",{children:"Hmm... something went wrong."}):Object(A.jsxs)("section",{children:[Object(A.jsx)("h1",{className:"header-title",children:e.headerTitle}),a.postsByUser.map((function(t){t.content,t.createdAt,t.id;var n=t.likes,i=t.latitude,a=t.longitude,o=(t.postType,t.ringMinMax),c=(t.url,t.text,o.slice(1,-1).split(", ").map((function(e){return+e}))),r=Object(s.a)(c,2),u=(r[0],r[1],{lat:function(){return i},lng:function(){return a}});return console.log(t),Object(A.jsx)(W,{center:u,content:t.text,createdAt:t.createdAt,id:t.id,likes:n,ring:[t.min,t.max],icon:e.icon,latitude:t.latitude,longitude:t.longitude,position:e.position,postType:t.postType,userData:e.userData,userId:+e.userData.id,url:t.url})}))]})}function le(){var e=Object(L.useState)({id:null,username:null}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(L.useState)(null),o=Object(s.a)(a,2),c=o[0],r=o[1];return window.navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;r({lat:t.latitude,lng:t.longitude}),function(e){window.thisPosition&&window.thisPosition.setMap(null);var t="https://www.google.com/mapfiles/marker_white.png",n=new window.google.maps.Marker({position:e,map:window.earthMap,icon:t});window.thisPosition=n,window.google.maps.event.addListener(window.earthMap,"zoom_changed",(function(){window.thisPosition&&window.thisPosition.setMap(null);var n=new window.google.maps.Marker({position:e,map:window.earthMap,icon:t});window.thisPosition=n}))}({lat:t.latitude,lng:t.longitude})}),(function(e){console.log("BAD GEOLOCATOR "+e)})),Object(A.jsxs)("section",{className:"all-pages",children:[Object(A.jsx)(te,{setUserData:i,userData:n}),Object(A.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(A.jsx)("section",{className:"home",children:Object(A.jsx)(V,{position:c,userData:n})})}}),Object(A.jsx)(O.a,{exact:!0,path:"/make_post",render:function(){return Object(A.jsx)("section",{className:"make-post",children:Object(A.jsx)(ae,{position:c,userData:n})})}}),Object(A.jsx)(O.a,{exact:!0,path:"/my_post",render:function(){return Object(A.jsx)("section",{className:"view-post",children:Object(A.jsx)(ue,{myPostsPage:!0,icon:re,userData:n})})}}),Object(A.jsx)(O.a,{exact:!0,path:"/earth",render:function(){return Object(A.jsx)("section",{className:"awards",children:Object(A.jsx)(oe,{center:c})})}}),Object(A.jsx)(O.a,{exact:!0,path:"/signup",render:function(){return Object(A.jsx)("section",{className:"signup",children:Object(A.jsx)(ce,{})})}}),Object(A.jsx)(O.a,{exact:!0,path:"/login",render:function(){return Object(A.jsx)("section",{className:"login",children:Object(A.jsx)(ne,{setUserData:i})})}})]})}var de=n(71),ge=n.n(de),je=(n(87),new w.ApolloClient({cache:new w.InMemoryCache,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}},uri:"https://be-saturnd-earth.herokuapp.com/graphql"}));ge.a.render(Object(A.jsx)(w.ApolloProvider,{client:je,children:Object(A.jsx)(Z.a,{children:Object(A.jsx)(le,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d45d1cb9.chunk.js.map