import m from"./Library/Deployment.js";import e from"./Library/Environment.js";import p from"./Library/Project.js";const t={"content-type":"application/json;charset=UTF-8","X-Auth-Email":e.Email,"X-Auth-Key":e.Key},f=7,l=500;var E=async(n=e.Email,s=e.Key,o=e.ID)=>{t["X-Auth-Email"]=n??t["X-Auth-Email"],t["X-Auth-Key"]=s??t["X-Auth-Key"];const a=[];for(const{name:r}of await p(o,t)??[])for(const{id:i}of(await(async c=>(await m(o,c,t)).splice(0,l)??[])(r)).reverse())await fetch(`${`https://api.cloudflare.com/client/v4/accounts/${o}/pages/projects/${r}/deployments`}/${i}`,{method:"DELETE",headers:t}),a.push(i);return a};export{f as Days,t as Header,l as Limit,E as default};
