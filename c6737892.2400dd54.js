(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(142)),o={id:"install",title:"Installation"},c={unversionedId:"didkit/install",id:"didkit/install",isDocsHomePage:!1,title:"Installation",description:"Container",source:"@site/docs\\didkit\\install.md",slug:"/didkit/install",permalink:"/docs/didkit/install",editUrl:"https://github.com/spruceid/docs/didkit/install.md",version:"current",sidebar:"didkitSidebar",previous:{title:"Core Concepts",permalink:"/docs/didkit/concepts"},next:{title:"CLI Commands",permalink:"/docs/didkit/cli_commands"}},l=[{value:"Container",id:"container",children:[]},{value:"Manual",id:"manual",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"container"},"Container"),Object(a.b)("p",null,"Both the CLI and HTTP server are containerised and available under\n",Object(a.b)("inlineCode",{parentName:"p"},"ghcr.io/spruceid/didkit-(cli|http)"),"."),Object(a.b)("p",null,"The image are private for now, so a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"}),"Personal Access Token"),"\nis required. Once created you can login like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker login ghcr.io -u USERNAME --password-stdin\n")),Object(a.b)("p",null,"You can use the images like CLIs:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/spruceid/didkit-cli:latest --help\n$ docker run --init -p 8080 ghcr.io/spruceid/didkit-http:latest --port 8080\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can pass JWKs either by sharing a volume with ",Object(a.b)("inlineCode",{parentName:"p"},"docker run --volume"),", or by passing the JWK directly with ",Object(a.b)("inlineCode",{parentName:"p"},"docker run -e JWK=$MY_JWK")," or ",Object(a.b)("inlineCode",{parentName:"p"},"docker run didkit-http --jwk $MY_JWK"),".")),Object(a.b)("h4",{id:"build-images"},"Build Images"),Object(a.b)("p",null,"The Dockerfiles rely on having ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/spruceid/ssi"}),"ssi")," in the root of ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," (a symbolic link will not work, unfortunately)."),Object(a.b)("p",null,"Then the images can be built with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker build -f Dockerfile-cli . -t didkit-cli\n$ docker build -f Dockerfile-http . -t didkit-http\n")),Object(a.b)("p",null,"And to use them, replace ",Object(a.b)("inlineCode",{parentName:"p"},"ghcr.io/spruceid/didkit-(cli|http):latest")," with ",Object(a.b)("inlineCode",{parentName:"p"},"didkit-(cli|http)"),"."),Object(a.b)("h3",{id:"manual"},"Manual"),Object(a.b)("p",null,"DIDKit is written in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),". To get Rust, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://rustup.rs/"}),"Rustup"),"."),Object(a.b)("p",null,"We depend on some Rust nightly features. When installing with Rustup, pick the nightly release channel. Or run ",Object(a.b)("inlineCode",{parentName:"p"},"rustup default nightly")," to switch to it.\n(",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/nightly/edition-guide/rust-2018/rustup-for-managing-rust-versions.html"}),"More info"),")"),Object(a.b)("p",null,"Spruce's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/spruceid/ssi"}),"ssi")," library must be cloned alongside the ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"//from root directory of DIDKit project\n$ git clone https://github.com/spruceid/ssi ../ssi\n")),Object(a.b)("p",null,"Build DIDKit using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/cargo/"}),"Cargo"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"//from root directory of DIDKit project\n$ cargo build\n")),Object(a.b)("p",null,"That will give you the DIDKit CLI and HTTP server executables located at\n",Object(a.b)("inlineCode",{parentName:"p"},"target/debug/didkit")," and ",Object(a.b)("inlineCode",{parentName:"p"},"target/debug/didkit-http"),", respectively. You can also build and install DIDKit's components separately. Building the FFI libraries will require additional dependencies. See the corresponding readmes linked below for more info."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);