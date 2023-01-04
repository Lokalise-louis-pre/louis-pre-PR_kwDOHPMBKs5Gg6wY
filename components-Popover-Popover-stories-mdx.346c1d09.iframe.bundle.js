"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[614],{"./src/components/Popover/Popover.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PopoverContent:()=>PopoverContent,Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,offset:()=>offset,onClick:()=>onClick,onDisabledHover:()=>onDisabledHover,onHover:()=>onHover,placement:()=>placement,portal:()=>portal});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_utils_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/color.ts"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),_Popover__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Popover/Popover.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PopoverContent=Object.assign(_utils_styled__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
        color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.$)("content.primary")};
    `,{displayName:"div"}),Template=args=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Popover__WEBPACK_IMPORTED_MODULE_5__.J,_extends({},args,{mdxType:"Popover"}));Template.displayName="Template";const layoutProps={PopoverContent,Template};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Popover",component:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,parameters:{controls:{sort:"requiredFirst",exclude:["children","popoverContent","components"]},docs:{source:{excludeDecorators:!0}}},argTypes:{visibleCallback:{action:"visibleCallback"}},decorators:[Story=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{style:{marginBottom:"45px"}},Story())],mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"popover"},"Popover"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Popover is used to display in-product help content, attached to the child element passed to it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Popover depends on:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://popper.js.org/react-popper/",target:"_blank"},"react-popper")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://popper.js.org/docs/v2/",target:"_blank"},"popperjs")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://github.com/maslianok/react-resize-detector",target:"_blank"},"react-resize-detector"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Popover } from "@lokalise/louis";\n\nexport default () => (\n  <Popover popoverContent="Popover content">Hello World</Popover>;\n)\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088",target:"_blank"},"Figma Source File | Popover"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"props"},"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.$4,{of:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"trigger-event"},"Trigger Event"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Click",args:{withArrow:!0,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"On click")},mdxType:"Story"},Template.bind({})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Hover",args:{withArrow:!0,triggerEvent:"hover",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"On hover")},mdxType:"Story"},Template.bind({})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Disabled Hover",args:{withArrow:!0,triggerEvent:"hover",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",disabled:!0,mdxType:"Button"},"On disabled hover")},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"offset-and-placement"},"Offset and Placement"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Offset",args:{withArrow:!1,offset:5,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Offset: 5")},mdxType:"Story"},Template.bind({})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Placement",args:{withArrow:!0,placement:"right",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Placement: right")},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"render-in-portal"},"Render in Portal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Portal",args:{inPortal:!0,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Rendered in `div.louis-portal`"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Open in Portal")},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const onClick=Template.bind({});onClick.storyName="On Click",onClick.args={withArrow:!0,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"On click")},onClick.parameters={storySource:{source:"args => <Popover {...args} />"}};const onHover=Template.bind({});onHover.storyName="On Hover",onHover.args={withArrow:!0,triggerEvent:"hover",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"On hover")},onHover.parameters={storySource:{source:"args => <Popover {...args} />"}};const onDisabledHover=Template.bind({});onDisabledHover.storyName="On Disabled Hover",onDisabledHover.args={withArrow:!0,triggerEvent:"hover",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",disabled:!0},"On disabled hover")},onDisabledHover.parameters={storySource:{source:"args => <Popover {...args} />"}};const offset=Template.bind({});offset.storyName="Offset",offset.args={withArrow:!1,offset:5,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Offset: 5")},offset.parameters={storySource:{source:"args => <Popover {...args} />"}};const placement=Template.bind({});placement.storyName="Placement",placement.args={withArrow:!0,placement:"right",popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Placement: right")},placement.parameters={storySource:{source:"args => <Popover {...args} />"}};const portal=Template.bind({});portal.storyName="Portal",portal.args={inPortal:!0,popoverContent:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Rendered in `div.louis-portal`"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Open in Portal")},portal.parameters={storySource:{source:"args => <Popover {...args} />"}};const componentMeta={title:"Components/Popover",parameters:{controls:{sort:"requiredFirst",exclude:["children","popoverContent","components"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{style:{marginBottom:"45px"}},Story())],component:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,argTypes:{visibleCallback:{action:"visibleCallback"}},includeStories:["onClick","onHover","onDisabledHover","offset","placement","portal"]},mdxStoryNameToKey={"On Click":"onClick","On Hover":"onHover","On Disabled Hover":"onDisabledHover",Offset:"offset",Placement:"placement",Portal:"portal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["PopoverContent","Template","onClick","onHover","onDisabledHover","offset","placement","portal"]},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,positioning="absolute",...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),isComponentUnmounted=(0,react.useRef)(!1),popper=(0,usePopper.D)(referenceElement,popperElement,{strategy:positioning,placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const maybeSetVisible=val=>isComponentUnmounted.current?void 0:setVisible(val);(0,react.useEffect)((()=>(isComponentUnmounted.current=!1,()=>{isComponentUnmounted.current=!0})));const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,maybeSetVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"Children | ((visible: boolean) => Children)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}},positioning:{defaultValue:{value:"absolute"},description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/typography.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    top: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,top=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    bottom: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,left=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    right: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,right=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    left: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,Arrow=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};

    &::before {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};
        content: '';
        display: block;
        transform: rotate(45deg);
        background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
        border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    }

    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")}
`,Content=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    padding: 0;
    border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md")};
    background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
    border: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("popover")};
    color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("content.primary")};
    font-family: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.I)("default")};
    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_6__.c)("description")};
`},"./src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const useIsomorphicLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,Portal=_ref=>{let{children,containerRef,type="div",className}=_ref;const isServer="undefined"==typeof window||"undefined"==typeof document,portalNode=(0,react.useMemo)((()=>isServer?null:document.createElement(type)),[isServer,type]);return portalNode&&(portalNode.className=className?`louis-portal ${className}`:"louis-portal"),useIsomorphicLayoutEffect((()=>{if(isServer||!portalNode)return;const host=containerRef?.current||document.body;return host.appendChild(portalNode),()=>{host.contains(portalNode)&&host.removeChild(portalNode)}}),[containerRef,type,isServer]),!isServer&&portalNode?(0,react_dom.createPortal)(children,portalNode):null};Portal.displayName="Portal";try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"div"},description:"The DOM element type to render, default 'div'.",name:"type",required:!1,type:{name:"string"}},containerRef:{defaultValue:null,description:"Container element where the Portal will render. If not set the\nportal will be appended to the body of the component's owner document\n(typically this is the `document.body`).",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))}}]);
//# sourceMappingURL=components-Popover-Popover-stories-mdx.346c1d09.iframe.bundle.js.map