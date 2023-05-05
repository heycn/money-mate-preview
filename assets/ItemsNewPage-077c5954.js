import{d as q,t as f,r as k,j as n,e as I,u as L,L as C,b as l,F as y,c as A,I as w,p as O,D as P,G as z,T as F,v as H,h as X}from"./index-0ab17bf9.js";import{T as Y}from"./Tabs-ee77f8d6.js";import{i as B,s as G}from"./styled-components.browser.esm-d431dff6.js";const K=q(e=>({data:{kind:"expenses",tag_ids:[],happen_at:f().isoString,amount:0},error:{kind:[],tag_ids:[],happen_at:[],amount:[]},setData:a=>{e(r=>({...r,data:{...r.data,...a}}))},setError:a=>{e(r=>({...r,error:{...a}}))}})),R=e=>{const{children:a,onEnd:r}=e,s=k.useRef(),o=k.useRef({x:void 0,y:void 0});return n("div",{onTouchStart:u=>{s.current=window.setTimeout(()=>{r==null||r()},500);const{clientX:t,clientY:d}=u.touches[0];o.current={x:t,y:d}},onTouchMove:u=>{const{clientX:t,clientY:d}=u.touches[0],{x,y:g}=o.current;if(x===void 0||g===void 0)return;Math.sqrt((t-x)**2+(d-g)**2)>10&&(window.clearTimeout(s.current),s.current=void 0)},onTouchEnd:u=>{s.current&&(window.clearTimeout(s.current),s.current=void 0)},children:a})},S=({text:e})=>l("p",{"text-center":"","font-300":"",color:"#999",children:["-",n("span",{"px-16px":"",children:e}),"-"]}),j=e=>{const{kind:a}=e,r=(g,p)=>{if(p){const v=(p.pager.page-1)*p.pager.per_page+p.resources.length,b=p.pager.count;if(v>=b)return null}return`/api/v1/tags?page=${g+1}&kind=${a}`},s=I(),{get:o}=L({showLoading:!0,handleError:!0}),{data:i,error:c,size:h,setSize:u}=B(r,async g=>(await o(g)).data,{revalidateAll:!0}),t=!i&&!c,d=(i==null?void 0:i[h-1])===void 0&&!c,x=t||d;if(i){const g=()=>u(h+1),p=i[i.length-1],{page:v,per_page:b,count:M}=p.pager,$=(v-1)*b+p.resources.length<M;return l(y,{children:[l("ol",{grid:"","grid-cols":"[repeat(auto-fit,48px)]","justify-center":"","gap-x-32px":"","gap-y-16px":"","py-16px":"","px-8px":"",children:[n(A,{to:`/tags/new?kind=${a}`,replace:!0,children:n("li",{"b-2":"","b-white":"","bg-white":"",rounded:"50%","w-56px":"","h-56px":"",flex:"","justify-center":"","items-center":"","text-20px":"",color:"#77B4A2",children:n(w,{name:"add"})})}),i.map(({resources:D})=>D.map((m,N)=>{var T;return l("li",{flex:"","justify-center":"","items-center":"","flex-col":"",children:[n(R,{onEnd:()=>s(`/tags/${m.id}`,{replace:!0}),children:n("div",{style:{borderColor:(T=e.value)!=null&&T.includes(m.id)?"var(--primary-color)":"transparent"},"b-2":"","bg-white":"","b-solid":"",rounded:"50%","w-56px":"","h-56px":"",flex:"","justify-center":"","items-center":"","text-26px":"",onClick:()=>{var _;return(_=e.onChange)==null?void 0:_.call(e,[m.id])},children:m.sign})}),n("div",{"text-12px":"",text:"#666","mt-6px":"","max-w-54px":"",children:m.name})]},N)}))]}),l("div",{"p-16px":"","pb-32px":"",children:[c&&n(S,{text:"加载失败 请刷新页面"}),$?x?n(C,{}):n("button",{"m-btn":"",onClick:g,children:"加载更多"}):n(S,{text:i[0].pager.count===0?"点击加号 新建标签":"The End"})]})]})}else return x?n(C,{}):n("div",{children:"空"})},J=[{k:"1",v:"1",area:"1 / 1 / 2 / 2"},{k:"2",v:"2",area:"1 / 2 / 2 / 3"},{k:"3",v:"3",area:"1 / 3 / 2 / 4"},{k:"4",v:"4",area:"2 / 1 / 3 / 2"},{k:"5",v:"5",area:"2 / 2 / 3 / 3"},{k:"6",v:"6",area:"2 / 3 / 3 / 4"},{k:"7",v:"7",area:"3 / 1 / 4 / 2"},{k:"8",v:"8",area:"3 / 2 / 4 / 3"},{k:"9",v:"9",area:"3 / 3 / 4 / 4"},{k:"0",v:"0",area:"4 / 1 / 5 / 3"},{k:".",v:".",area:"4 / 3 / 5 / 4"},{k:"backspace",v:n(w,{name:"delete",className:"text-28px font-606266"}),area:"1 / 4 / 2 / 5"}],Q=e=>{const{value:a,onChange:r,onSubmit:s}=e,[o,i]=k.useState(()=>a?(a/100).toString():"0"),c=t=>{const d=t.indexOf(".");d>=0&&t.length-d>3||t.length>16||(i(t),r==null||r(parseFloat(t)*100))},{className:h}=e,u=t=>{switch(t){case"0":o!=="0"&&c(o+t);break;case".":o.includes(".")||c(o+t);break;case"backspace":c(o.slice(0,-1));break;default:c(o==="0"?t:o+t);break}};return n(y,{children:l("div",{className:h,children:[l("div",{flex:"","p-t-15px":"","p-b-16px":"","px-16px":"","border-t-1px":"","b-t-solid":"","border-t":"#ddd","items-center":"",children:[e.itemDate,n("code",{"grow-1":"","shrink-1":"","text-right":"","text-20px":"","color-black":"",children:o})]}),l("div",{grid:"","grid-rows":"[repeat(4,56px)]","grid-cols-4":"","gap-1px":"",bg:"#00000006",children:[" ",J.map(({k:t,v:d,area:x})=>n(E,{type:"button",area:x,onClick:()=>u(t),children:d},t)),n(E,{type:"submit",area:"2 / 4 / 5 / 5",font:"18px",primary:!0,onClick:s,children:"提交"})]})]})})},E=G.button`
  grid-area: ${({area:e})=>e};
  font-size: ${({font:e})=>e??"24px"};
  background: ${({primary:e})=>e?"#73b19f":"#fff"};
  color: ${({primary:e})=>e?"#fffe":"#404244"};
  font-weight: bold;
  border: none;
  font-family: 'Heebo', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background: ${({primary:e})=>e?"#addcd4":"#e9ecef"};
  }
`,U=e=>{const{value:a,onChange:r}=e,{toggle:s,popup:o,hide:i}=O({children:n(P,{onConfirm:c=>{r==null||r(f(c).isoString),i()},onCancel:()=>i()})});return l(y,{children:[o,l("span",{flex:"","items-center":"","gap-x-8px":"",onClick:s,children:[n(w,{name:"calendar",className:"w-20px h-20px grow-0 shrink-0"}),n("span",{"grow-0":"","shrink-0":"",children:f(a).format("yyyy-MM-dd HH:mm")})]})]})},ee=()=>{var u;const{data:e,setData:a,setError:r}=K(),s=[{key:"expenses",text:"支出",element:n(j,{kind:e.kind,value:e.tag_ids,onChange:t=>a({tag_ids:t})})},{key:"income",text:"收入",element:n(j,{kind:e.kind,value:e.tag_ids,onChange:t=>a({tag_ids:t})})}],[o]=k.useState("expenses"),{post:i}=L({showLoading:!0,handleError:!0}),c=I(),h=async()=>{const t=H(e,[{key:"kind",type:"required",message:"请选择类型：收入或支出"},{key:"tag_ids",type:"required",message:"请选择一个标签"},{key:"happen_at",type:"required",message:"请选择一个时间"},{key:"amount",type:"required",message:"请输入金额"},{key:"amount",type:"notEqual",value:0,message:"金额不能为0"}]);if(r(t),X(t)){const d=Object.values(t).flat().join(`
`);window.alert(d)}else await i("/api/v1/items",e),a({amount:0,happen_at:f().isoString}),c("/items",{replace:!0})};return l("div",{"h-screen":"",flex:"","flex-col":"",onSubmit:h,children:[l(z,{"grow-0":"","shrink-0":"",children:[n(F,{title:"记一笔",icon:"back",back:!0,path:"/items"}),n(Y,{tabItems:s,value:e.kind,onChange:t=>{a({kind:t})},className:"children-flex-1 text-center"})]}),n("div",{"grow-1":"","shrink-1":"","overflow-auto":"",children:(u=s.find(t=>t.key===o))==null?void 0:u.element}),n(Q,{"grow-0":"","shrink-0":"",itemDate:n(U,{value:e.happen_at,onChange:t=>a({happen_at:t})}),value:e.amount,onChange:t=>a({amount:t}),onSubmit:h})]})};export{ee as ItemsNewPage,ee as default};
