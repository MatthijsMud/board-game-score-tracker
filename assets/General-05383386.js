import{j as e,r as o,c as r}from"./index-b0f4c2cc.js";import{G as s,C as l}from"./CardLink-2fa9f932.js";import"./Paper-c045c49a.js";const n=r(()=>({fullHeight:{height:"100%"}})),c=[{title:"Play",description:"Quickly start a game based on preferences and availabilty",to:"play"},{title:"Players",description:"View a player's scores and which games they tend to play",to:"players"},{title:"Games",description:"Overview of games out there",to:"games"},{title:"Locations",description:"Places where games can be played",to:"locations"}],h=()=>{const{classes:t}=n();return e.jsx(o.Suspense,{children:e.jsx(s,{children:c.map((a,i)=>e.jsx(s.Col,{md:3,sm:4,xs:6,children:e.jsx(l,{className:t.fullHeight,...a})},i))})})};export{h as Component};