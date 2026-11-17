import {opportunities} from '../data/opportunities';
const base=import.meta.env.VITE_API_BASE_URL||'';
async function call(path,options={}){const r=await fetch(`${base}${path}`,{headers:{'Content-Type':'application/json'},...options});if(!r.ok)throw new Error(`API error ${r.status}`);return r.json()}
export async function getOpportunities(){try{return (await call('/api/opportunities')).data}catch{return opportunities}}
export async function findMatches(profile){try{return await call('/api/match',{method:'POST',body:JSON.stringify(profile)})}catch{const data=opportunities.filter(x=>x.sectors.includes(profile.sector)&&x.stages.includes(profile.stage)).map(x=>({...x,matchScore:75,reasons:[`Supports the ${profile.sector} sector`,`Relevant to ${profile.stage.toLowerCase()} businesses`]}));return {data,count:data.length,disclaimer:'Indicative matches only. Confirm current criteria with each funder.'}}}
