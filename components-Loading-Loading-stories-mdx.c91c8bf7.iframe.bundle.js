"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[7828],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./src/components/Loading/Loading.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateLoading:()=>TemplateLoading,default:()=>Loading_stories,loading:()=>loading});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Rotate360=styled_components_browser_esm.F4`
    from {
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    to {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`,Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Loading__Container",componentId:"sc-ll48md-0"})(["position:absolute;top:0;right:0;bottom:0;left:0;z-index:",";"],(0,theme.S3)("zIndex.loadingOverlay")),Overlay=styled_components_browser_esm.ZP.div.withConfig({displayName:"Loading__Overlay",componentId:"sc-ll48md-1"})(["position:absolute;left:0;top:0;width:100%;height:100%;background-color:",";z-index:",";opacity:0.8;"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("zIndex.loadingOverlay")),Spinner=styled_components_browser_esm.ZP.div.withConfig({displayName:"Loading__Spinner",componentId:"sc-ll48md-2"})(["position:absolute;top:50%;left:50%;width:20px;height:20px;border:3px solid ",";border-bottom-color:",";border-radius:50%;animation:"," 1s linear infinite;z-index:inherit;"],(0,theme.S3)("color.background.surface.fore"),(0,theme.S3)("color.background.action.primary.default"),Rotate360);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=_ref=>{let{className}=_ref;return(0,jsx_runtime.jsxs)(Container,{"aria-label":"Loading...",role:"status",className,children:[(0,jsx_runtime.jsx)(Overlay,{}),(0,jsx_runtime.jsx)(Spinner,{})]})};Loading.displayName="Loading",Loading.displayName="Loading";try{Loading.displayName="Loading",Loading.__docgenInfo={description:"",displayName:"Loading",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/Loading.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/components/Loading/Loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}const TemplateLoading=args=>{const _components=Object.assign({div:"div"},(0,lib.ah)());return(0,jsx_runtime.jsxs)(_components.div,{children:["Content on the background. This loader will cover 100% of relative container. ".repeat(50),(0,jsx_runtime.jsx)(Loading,{...args})]})};const loading=TemplateLoading.bind({});loading.storyName="Loading",loading.parameters={storySource:{source:'args => {\n  return <div>\n\t\t\t{"Content on the background. This loader will cover 100% of relative container. ".repeat(50)}\n\t\t\t<Loading {...args} />\n\t\t</div>;\n}'}};const componentMeta={title:"Components/Loading",component:Loading,tags:["stories-mdx"],includeStories:["loading"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Loading",component:Loading}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"loading",children:"Loading"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Loading signals a user action is processing with no indication of progress and takes the full width and height of your relative container.\nIf a process will take longer than just a couple of seconds please consider using ",(0,jsx_runtime.jsx)(dist_react.Z,{kind:"Components/Toast",children:"Toast Component"})," to notify the user on the progress."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We also recommend reviewing our design document on Loading Spinner best practices: ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/XeM707H2pwwgEewW8DbnPM/Loading-States",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma | Loading-States"})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Loading } from '@lokalise/louis';\n\nexport default () => <Loading />;\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Loading",children:TemplateLoading.bind({})})})]})}}};const Loading_stories=componentMeta}}]);
//# sourceMappingURL=components-Loading-Loading-stories-mdx.c91c8bf7.iframe.bundle.js.map