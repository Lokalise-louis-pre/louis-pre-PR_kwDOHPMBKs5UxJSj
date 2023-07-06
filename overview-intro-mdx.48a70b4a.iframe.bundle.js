"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9590],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/stories/overview/intro.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>intro});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const intro=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Overview/Intro"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"# Louis\n\nWelcome to **Louis**. This project built by [Lokalise](https://www.lokalise.com) is a ReactJS (v17 and v18) implementation of Louis Design System and it contains the core to start building your react application along with Lokalise's look and feel.\n\nCheck Louis [production storybook](https://lokalise.github.io/louis/) and [figma ui library](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=392%3A3448).\n\n---\n\n![Code formatting](https://img.shields.io/badge/code%20formating-prettier-blue.svg)\n![Code style](https://img.shields.io/badge/code%20style-styled--components-ff69b4.svg)\n![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-red.svg)\n![ReactJS17](https://img.shields.io/badge/ReactJS-17-blue.svg)\n![ReactJS18](https://img.shields.io/badge/ReactJS-18-blue.svg)\n![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)\n![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)\n![npm](https://img.shields.io/npm/v/@lokalise/louis)\n\n## Prerequisites\n\nMake sure your application bundler (e.g. [Webpack](https://webpack.js.org/)) does have a loader (e.g. [style-loader](https://webpack.js.org/loaders/style-loader/)) for bundling CSS files.\n\n## Installation\n\nTo use Louis in your project, run the following command in your terminal:\n\n```shell\nnpm i @lokalise/louis\n```\n\nAfter installing Louis, you need to set up a `ThemeProvider` at the root of your application:\n\n```tsx\nimport { ThemeProvider, themes } from '@lokalise/louis';\n\nconst App = () => (\n\t<ThemeProvider theme={themes.light}>\n\t\t<TheRestOfYourApplication />\n\t</ThemeProvider>\n);\n```\n\nFrom here on out, you can import and use Louis components anywhere:\n\n```tsx\nimport { Button } from '@lokalise/louis';\nimport { useState } from 'react';\n\nexport const MyCounter = () => {\n\tconst [count, setCount] = useState(0);\n\treturn (\n\t\t<>\n\t\t\t<p>{`You've clicked the button ${count} times!`}</p>\n\t\t\t<Button variant=\"primary\" onClick={() => setCount(count + 1)}>\n\t\t\t\tClick to increase the counter\n\t\t\t</Button>\n\t\t</>\n\t);\n};\n```\n\n## Reporting issues\n\nYou can report issues on our [JIRA Project](https://lokalise.atlassian.net/jira/software/c/projects/FF/boards/454), reach us on [Slack](https://lokalise.slack.com/archives/C038HSS6YM8) or submit a [Support Request](https://lokalise.atlassian.net/servicedesk/customer/portal/24/group/59/create/218).\n\n## How to contribute\n\nCheck our guidelines [here](https://github.com/lokalise/louis/blob/main/CONTRIBUTING.md)\n\n## Code of Conduct\n\nFollow up on our [code of conduct](https://github.com/lokalise/louis/blob/main/CODE_OF_CONDUCT.md)\n\n## Thanks\n\nLouis relies heavily on some of the approaches provided by [Chakra-UI](https://github.com/chakra-ui/chakra-ui) and [Reach UI](https://github.com/reach/reach-ui).\n\n## License\n\nThis project is [APACHE, VERSION 2.0](https://github.com/lokalise/louis/blob/main/LICENSE.md) licensed.\n"})]})}}}}]);