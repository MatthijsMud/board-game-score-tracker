import{r as o}from"./index-2ff8c1a9.js";function p(a=!1,c){const{onOpen:t,onClose:n}=c||{},[r,u]=o.useState(a),s=o.useCallback(()=>{u(e=>e||(t==null||t(),!0))},[t]),l=o.useCallback(()=>{u(e=>e&&(n==null||n(),!1))},[n]),f=o.useCallback(()=>{r?l():s()},[l,s,r]);return[r,{open:s,close:l,toggle:f}]}export{p as u};