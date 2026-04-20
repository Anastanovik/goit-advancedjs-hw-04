import{a as q,S as M,i as l}from"./assets/vendor-VVWBAj3V.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const B="https://pixabay.com/api/",C="55309008-edb7c4bb1c6dba6c84cf593ac";async function f(t,s){const a={key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await q.get(B,{params:a})).data}const d=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),E=new M(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const s=t.map(({webformatURL:a,largeImageURL:r,tags:e,likes:o,views:n,comments:v,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span>${o}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Views</span>
              <span>${n}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Comments</span>
              <span>${v}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span>${P}</span>
            </p>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",s),E.refresh()}function $(){d.innerHTML=""}function g(){p.classList.add("is-visible")}function y(){p.classList.remove("is-visible")}function O(){m.classList.remove("is-hidden")}function u(){m.classList.add("is-hidden")}const b=document.querySelector(".form"),R=document.querySelector(".load-more");let c="",i=1,L=0;const x=15;b.addEventListener("submit",A);R.addEventListener("click",_);async function A(t){t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s){c=s,i=1,$(),u(),g();try{const a=await f(c,i);if(L=a.totalHits,!a.hits||a.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"});return}h(a.hits),w()}catch{S()}finally{y(),b.reset()}}}async function _(){i+=1,u(),g();try{const t=await f(c,i);h(t.hits),w(),k()}catch{S()}finally{y()}}function w(){const t=Math.ceil(L/x);i<t?O():(u(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#4e75ff",messageColor:"#fafafb"}))}function k(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}function S(){l.show({message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}
//# sourceMappingURL=index.js.map
