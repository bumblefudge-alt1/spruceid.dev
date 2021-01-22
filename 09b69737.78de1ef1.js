(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/did-core_vc-lifecycle-6f25b06563e7a70c62afe8d4bc920e6e.png"},105:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/did-core_architecture-8c0f7ea8dea959eff953e1f87a06ab54.png"},136:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/did-core_social-roles-27d0e305d20afe2287f730bb9ed2c448.png"},64:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return l}));var a=i(3),n=(i(0),i(94));const r={id:"primer",title:"Decentralized Identity Primer"},o={unversionedId:"primer",id:"primer",isDocsHomePage:!1,title:"Decentralized Identity Primer",description:"Context",source:"@site/docs\\primer.md",slug:"/primer",permalink:"/docs/primer",editUrl:"https://github.com/spruceid/docs/primer.md",version:"current",sidebar:"docs",previous:{title:"Welcome to the Spruce Developer Portal",permalink:"/docs/"},next:{title:"Glossary & References",permalink:"/docs/glossary"}},s=[{value:"Context",id:"context",children:[]},{value:"A Social Theory of Decentralized Identity",id:"a-social-theory-of-decentralized-identity",children:[{value:"The Mechanics of Data Registries",id:"the-mechanics-of-data-registries",children:[]},{value:"The Mechanics of Verifiable Credentials",id:"the-mechanics-of-verifiable-credentials",children:[]},{value:"The Mechanics of Decentralized Identifiers",id:"the-mechanics-of-decentralized-identifiers",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],c={toc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"context"},"Context"),Object(n.b)("p",null,'Identifying users stably, securely, with the minimum invasion of privacy or risk of leakage, is one of the core problems of essentially all software systems. Since the great boom of personal computers and the modern software industry, this has created a whole sub-industry of identity and access-management (IAM) technologies, which overwhelmingly improve the mousetrap of mapping users to "accounts," which are essential bureaucratic files stored in central databases that concentrate not just informational power, but also risk, liability, and value.'),Object(n.b)("p",null,'As more and more real-world value has been digitized over the decades, "identity data" has become a chokepoint for virtually all other digital value systems, the keys to every kingdom. Furthermore, every central repository of personal information has become a ',Object(n.b)("em",{parentName:"p"},"de facto"),' "honeypot" or target of opportunistic business models, many of them illegal and based on exfiltration, deception, or interception of personal data. The legal spheres of so-called "ad tech" and data brokerages and the illegal spheres of espionage, identity theft, and industrialized computer fraud share many characteristics: they are both growing every year, they are largely impervious to regulation, and they are deeply demoralizing and disempowering to the average end-user. '),Object(n.b)("p",null,'In recent years, however, we have seen a wave of identity technologies emerge that strive to rearchitect this whole landscape defensively, keeping ultimate and fine-grained control over all personal data in the most direct and accessible personal control possible. Decentralization of data systems, in the sense of bottoms-up governance of infrastructure and alternatives to monopolistic and monopsonistic platform economics, tends to fit hand in glove with decentralized identity technologies. Center stage among this web of human-centric technologies is increasingly given to so-called "self-sovereign identity," which apply decentralized identity technologies to management of individuals\' personal data.'),Object(n.b)("p",null,"Spruce is an open-source, decentralized identity company that works openly to advance these technologies in a sustainable, standards-driven way. We share the values of the community that has been driving this technology for a decade, and we want to see it succeed in the most organic and decentralized way possible. That means high standards for future-proof engineering, and an open-source strategy that keeps infrastructure and standards governance in the hands of a democratic commons."),Object(n.b)("h2",{id:"a-social-theory-of-decentralized-identity"},"A Social Theory of Decentralized Identity"),Object(n.b)("p",null,'Breaking the momentum of decades of centralized server/client architectures and "user accounts" requires a rethinking of the basic assumptions of data management, as well as data business. This requires imagining forms of information that can be self-securing, highly portable, self-verifying, and not bound too tightly to their original context and architecture.  While this may sound like an esoteric problem for computer science, it is also a political, legal, and social question, because it requires reconceiving of the roles and rights of all the parties to data exchanges. '),Object(n.b)("p",null,'Decentralized identity thinking tends to call any valuable information about someone a "credential" and the person in question a "subject". It names the roles thusly:'),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'"Issuers", who emit portable credentials about a subject,'),Object(n.b)("li",{parentName:"ol"},'"holders" of that information, usually the subjects or trusted agents acting on their behalf, '),Object(n.b)("li",{parentName:"ol"},'"verifiers" who might consume or act on that information.')),Object(n.b)("p",null,'The goals of decentralized identity are often expressed in negatives and minimums: the disclosure of the minimum data to each verifier necessary to their purpose, the minimum possibility of exfiltration or correlation (colloquially, "tracking"), the highest possible barrier to collusion between verifiers, the greatest possible privacy for all parties relative to their peers and counterparties. Even things like checking the revocation status when verifying a revocable credential is thought of defensively-- how to ensure that the issuer can revoke a credential while still ensuring that it receives no information about who verifies it, or how often? This requires sophisticated indirection, and new ways of hiding sensitive information in shared, even public data registries.'),Object(n.b)("p",null,Object(n.b)("img",{alt:"Social Diagram",src:i(136).default})),Object(n.b)("p",null,"Src: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c.github.io/vc-data-model/#ecosystem-overview"}),"DID specification")),Object(n.b)("h3",{id:"the-mechanics-of-data-registries"},"The Mechanics of Data Registries"),Object(n.b)("p",null,'From the point of view of politics, this impersonal and democratic archive of verifiable "facts" accessed in common by all parties, is the most mysterious and enigmatic of the actors. Decentralization makes many such omnipotent but impersonal authorities in the form of ledgers, oracles, "blockchains," and meshes of immutable or content-addressed data, so this concept may be less mysterious to those steeped in those technologies. It is a registry in the sense that all data gets puts there (registered) by people and software running on behalf of people and organizations, but it is a decentralized and unconventional series of linked registries.'),Object(n.b)("h3",{id:"the-mechanics-of-verifiable-credentials"},"The Mechanics of Verifiable Credentials"),Object(n.b)("p",null,'There is a whole vocabulary used to describe how credentials are handled, stored, presented, verified, and revoked. The software that individual actors use to receive, hold, and present them is called a "wallet", and the software used to issue, transfer, revoke, and verify them is called an "agent". Both interact with verifiable registries in various ways, must importantly for identifying and verifying each other.  Spruce\'s wallet is called Credible, and the engine Spruce uses to create and power agents is called DIDKit. Both are intended to work at many scales and in many contexts.'),Object(n.b)("p",null,Object(n.b)("img",{alt:"Architecture Diagram",src:i(104).default})),Object(n.b)("p",null,"Src: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/vc-data-model/#lifecycle-details"}),"DID specification")),Object(n.b)("h3",{id:"the-mechanics-of-decentralized-identifiers"},"The Mechanics of Decentralized Identifiers"),Object(n.b)("p",null,"Verifiable Credentials are designed refer to their issuers and subjects verifiably. This means that in the ideal case, any reference to an entity should be under that entity's direct and ultimate control, yet still be used to verify the credential's contents and trustworthiness cryptographically. In plain language, this means that a verifier would need to be able to get a cryptographic public key corresponding to that identifier, which might change or be deactivated over time."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Architecture Diagram",src:i(105).default})),Object(n.b)("p",null,"Src: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/#architecture-overview"}),"DID specification")),Object(n.b)("p",null,'The most "decentralized" of the identifiers that meet these requirements are so-called "decentralized identifiers," or DIDs.  These are each registered and resolved on autonomous namespaces (often closely coupled to specific public-readable DLTs like blockchains), which function as verifiable data registries for their specific kind of identifiers. Each have unique characteristics and infrastructures, with particular strengths and weaknesses; even their security guarantees and privacy engineering vary widely, so it can be dangerous to assume they are all equal and interchangeable. Each is like a little internet unto itself!'),Object(n.b)("h2",{id:"further-reading"},"Further Reading"),Object(n.b)("p",null,"Further educational/contextual resources on decentralized identity topics can be found on the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://identity.foundation/education/"}),"Education page")," of the Decentralized Identity Foundation. "),Object(n.b)("p",null,"For insight into the core specifications authored and maintained by the W3C working group, the best overview is the github repositories section of their ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"homepage")," on W3.org. The largely overlapping ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/"}),"Credentials Community Group"),", with weekly open, recorded, and scribed ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/meetings/"}),"calls")," open to W3C non-members, is also a good venue for getting to know the debates around the core specifications."))}l.isMDXComponent=!0},94:function(e,t,i){"use strict";i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return f}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},h=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(i),p=a,f=h["".concat(o,".").concat(p)]||h[p]||u[p]||r;return i?n.a.createElement(f,s(s({ref:t},l),{},{components:i})):n.a.createElement(f,s({ref:t},l))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);