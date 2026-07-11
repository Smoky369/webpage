(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const V=document.getElementById("boot-output"),X=document.getElementById("boot-progress-bar"),S=document.getElementById("boot-screen"),$=document.getElementById("landing-screen");document.getElementById("app-shell");const h=["INITIALIZING...","","ESTABLISHING LINK...","","LOCATING SAMPLE 369...","","ACCESSING NEURAL ARCHIVE...","","CONNECTION STABLE"];function _(){if(sessionStorage.getItem("seenBoot")){S.classList.add("hidden"),$.classList.remove("hidden");return}const t=[];let s=0,i=0,o=0;const a=performance.now(),n=()=>{const v=t.map(K=>`<div>${K}</div>`).join(""),f=h[s]?h[s].slice(0,i):"";V.innerHTML=`${v}<div>${f}<span class="blink">|</span></div>`},c=()=>{const v=performance.now()-a;if(o=Math.min(100,v/3e3*100),X.style.width=`${o}%`,v>=3e3){M();return}if(s<h.length){const f=h[s];i<f.length?(i+=1,n(),setTimeout(c,30)):(t.push(f),s+=1,i=0,n(),setTimeout(c,180));return}M()};c();function M(){sessionStorage.setItem("seenBoot","1"),S.classList.add("hidden"),$.classList.remove("hidden")}}const b=document.getElementById("menu-toggle"),j=document.getElementById("side-menu"),L=document.getElementById("module-title"),Q=Array.from(document.querySelectorAll(".module")),D=Array.from(document.querySelectorAll(".nav-item")),U=Array.from(document.querySelectorAll(".footer a[data-module]")),Z={profile:"Profile",activity:"Activity Log",transmission:"Transmission",flashbacks:"Flashbacks",habits:"Habits"};function T(e){Q.forEach(t=>{t.classList.toggle("active",t.dataset.module===e)}),D.forEach(t=>{t.classList.toggle("active",t.dataset.module===e)}),L.textContent=Z[e]||"Activity Log",L.classList.remove("is-switching"),L.offsetWidth,L.classList.add("is-switching")}function J(){b.addEventListener("click",()=>{b.classList.toggle("active"),j.classList.toggle("open")});const e=t=>{const s=t.dataset.module||"activity";T(s),j.classList.remove("open"),b.classList.remove("active")};D.forEach(t=>t.addEventListener("click",()=>e(t))),U.forEach(t=>t.addEventListener("click",s=>{s.preventDefault(),e(t)})),T("activity")}const x=document.getElementById("neural-canvas"),r=x.getContext("2d");let d={x:0,y:0,active:!1};const m=[],ee=90;function P(){x.width=window.innerWidth*window.devicePixelRatio,x.height=window.innerHeight*window.devicePixelRatio,r.setTransform(window.devicePixelRatio,0,0,window.devicePixelRatio,0,0)}function te(){return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,radius:Math.random()*1.8+.8,hue:Math.random()>.5?145:188}}function ne(){for(const e of m){if(e.x+=e.vx,e.y+=e.vy,d.active){const t=d.x-e.x,s=d.y-e.y,i=Math.hypot(t,s)||1;i<140&&(e.x-=t/i*.45,e.y-=s/i*.45)}(e.x<0||e.x>window.innerWidth)&&(e.vx*=-1),(e.y<0||e.y>window.innerHeight)&&(e.vy*=-1)}}function oe(){r.clearRect(0,0,window.innerWidth,window.innerHeight),r.strokeStyle="rgba(92,225,255,0.15)",r.lineWidth=1;for(let e=0;e<m.length;e+=1){const t=m[e];r.beginPath(),r.arc(t.x,t.y,t.radius,0,Math.PI*2),r.fillStyle=`hsla(${t.hue}, 90%, 70%, 0.95)`,r.fill();for(let s=e+1;s<m.length;s+=1){const i=m[s],o=t.x-i.x,a=t.y-i.y,n=Math.hypot(o,a);if(n<120){const c=1-n/120;r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(i.x,i.y),r.strokeStyle=`rgba(57,255,136,${c*.22})`,r.stroke()}}}}function F(){ne(),oe(),requestAnimationFrame(F)}function se(){P();for(let e=0;e<ee;e+=1)m.push(te());window.addEventListener("resize",P),window.addEventListener("mousemove",e=>{d.x=e.clientX,d.y=e.clientY,d.active=!0}),window.addEventListener("mouseleave",()=>{d.active=!1}),requestAnimationFrame(F)}const ie=document.getElementById("enter-button"),C=document.getElementById("transition-overlay"),ae=document.getElementById("landing-screen"),re=document.getElementById("app-shell"),ce=document.querySelector(".footer"),u=document.querySelector(".landing-media img");function le(){ie.addEventListener("click",()=>{C.classList.add("active"),u&&(u.style.transform="scale(1.08)",u.style.filter="brightness(1.15)"),ae.classList.add("hidden"),setTimeout(()=>{re.classList.remove("hidden"),ce.classList.remove("hidden"),C.classList.remove("active"),u&&(u.style.transform="",u.style.filter="")},1e3)})}const y=document.getElementById("gallery-track"),de=[{title:"Orbital Scan",src:"./images/me.jpeg"},{title:"Quiet Signal",src:"./images/agency.jpeg"},{title:"Memory Pulse",src:"./images/bhole.jpg"},{title:"Signal Lock",src:"./images/roct.jpg"}];let k=!1,I=0;function ue(){y.innerHTML=de.map(e=>`
    <article class="gallery-card">
      <img src="${e.src}" alt="${e.title}" />
    </article>
  `).join("")}function z(){if(!k){const e=Array.from(y.children);if(e.length){const t=e[0].getBoundingClientRect().width+16;I=(I+1)%e.length,y.style.transform=`translateX(-${I*t}px)`}}window.setTimeout(z,2e3)}function me(){ue(),z(),y.addEventListener("mouseenter",()=>{k=!0}),y.addEventListener("mouseleave",()=>{k=!1})}const q=document.getElementById("profile-content"),ge=document.getElementById("name-cycle"),pe=document.getElementById("contact-button"),l=document.getElementById("modal-root"),H=document.getElementById("modal-content"),ye=document.getElementById("modal-close"),O={story:"I am a systems-minded builder who enjoys turning abstract ideas into intuitive, cinematic experiences.",mission:"My mission is to create interfaces that feel alive, human, and quietly unforgettable.",vision:"I imagine a future where design is both emotional and precise, threaded through every interaction."},N=["MANISH PATHAK","मनीष पाठक","Manish Pathak","मनीष"];function ve(){var a;let e=0,t="story";q.innerHTML=`<p>${O[t]}</p>`,document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),n.classList.add("active"),t=n.dataset.tab,q.innerHTML=`<p>${O[t]}</p>`})});const s=setInterval(()=>{e=(e+1)%N.length,ge.textContent=N[e]},2400);pe.addEventListener("click",()=>{l.classList.add("open"),l.setAttribute("aria-hidden","false"),H.innerHTML=`
      <h3>Contact Protocol</h3>
      <p>Name</p>
      <input type="text" placeholder="Your name" />
      <p>Email</p>
      <input type="email" placeholder="your@email.com" />
      <p>Message</p>
      <textarea rows="5" placeholder="Your message"></textarea>
      <button class="copy-button">Transmit</button>
    `}),ye.addEventListener("click",o),l.addEventListener("click",n=>{n.target===l&&o()}),document.querySelectorAll(".signal-node").forEach(n=>{n.addEventListener("click",()=>{const c=document.getElementById("signal-details");c.innerHTML=`
        <h3>${n.dataset.profile}</h3>
        <p>Communication protocol initialized. Open the profile link below or continue scanning.</p>
        <a class="secondary-button link-button" href="${n.dataset.url}" target="_blank" rel="noreferrer">Open Link</a>
      `})});const i=document.getElementById("books-button");i&&i.addEventListener("click",()=>{l.classList.add("open"),l.setAttribute("aria-hidden","false"),H.innerHTML=`
        <h3>Books Read</h3>
        <div class="gallery-track books-track">
          <img src="./images/bgg.jpg" alt="Book cover" />
          <img src="./images/agency.jpeg" alt="Book cover" />
          <img src="./images/cybermindspace.jpg" alt="Book cover" />
          <img src="./images/roct.jpg" alt="Book cover" />
        </div>
      `}),(a=document.querySelector(".relay-form"))==null||a.addEventListener("submit",n=>{n.preventDefault();const c=document.getElementById("signal-details");c.innerHTML="<h3>Signal Profile</h3><p>Message queued for relay.</p>"}),window.addEventListener("beforeunload",()=>clearInterval(s));function o(){l.classList.remove("open"),l.setAttribute("aria-hidden","true")}}const R=document.getElementById("projects-grid"),g=document.getElementById("modal-root"),fe=document.getElementById("modal-content"),he=document.getElementById("modal-close");let p=[],B=!1;function A(){var a;if(B){R.innerHTML=`
      <div class="archive-page">
        <div class="archive-page__header">
          <button class="secondary-button" id="back-to-activity" type="button">← Back to Activity</button>
        </div>
        <div class="archive-grid">
          ${p.map(n=>G(n)).join("")}
        </div>
      </div>
    `,(a=document.getElementById("back-to-activity"))==null||a.addEventListener("click",()=>{B=!1,A()}),document.querySelectorAll(".view-detail").forEach(n=>{n.addEventListener("click",()=>W(n.dataset.project))});return}const e=p.slice(0,3),t=p.slice(3),s=e.map(n=>G(n)).join(""),i=t.length?`
      <button class="project-card project-card--cta" id="view-all-projects" type="button">
        <div class="project-card-icon">⧉</div>
        <h3>Explore More Logs</h3>
        <p>Open the full archive of Activity Logs.</p>
        <div class="project-actions">
          <span class="secondary-button">View All</span>
        </div>
      </button>
    `:"";R.innerHTML=`${s}${i}`;const o=document.getElementById("view-all-projects");o&&o.addEventListener("click",()=>{B=!0,A()}),document.querySelectorAll(".view-detail").forEach(n=>{n.addEventListener("click",()=>W(n.dataset.project))})}function G(e){return`
    <article class="project-card">
      <img class="project-image" src="${e.image}" alt="${e.name}" />
      <div class="project-top">
        <h3>${e.name}</h3>
        <span class="status-chip">${e.status}</span>
      </div>
      <p>${e.description}</p>
      <div class="progress-track">
        <div class="progress-fill" style="width:${e.progress}%"></div>
      </div>
      <div class="project-actions">
        <span class="status-chip">${e.tag}</span>
        <button class="secondary-button view-detail" data-project="${e.name}">🔎 Explore</button>
      </div>
    </article>
  `}function W(e){const t=p.find(s=>s.name===e);t&&(g.classList.add("open"),g.setAttribute("aria-hidden","false"),fe.innerHTML=`
    <h3>${t.name}</h3>
    <p>${t.longDescription}</p>
    <div class="progress-track" style="margin-top: 1rem;">
      <div class="progress-fill" style="width:${t.progress}%"></div>
    </div>
    <p style="margin-top: 1rem;">Signal: ${t.status}</p>
  `)}function Y(){g.classList.remove("open"),g.setAttribute("aria-hidden","true")}async function Le(){p=await(await fetch("./data/projects.json")).json(),A(),he.addEventListener("click",Y),g.addEventListener("click",t=>{t.target===g&&Y()})}const Ee=document.documentElement,E={cursor:{x:0,y:0}},w=document.querySelector(".cursor");function we(e){E.cursor.x=e.clientX,E.cursor.y=e.clientY,w.style.left=`${E.cursor.x}px`,w.style.top=`${E.cursor.y}px`}function be(){window.addEventListener("mousemove",we),document.querySelectorAll("a, button, .signal-node, .gallery-card, .project-card").forEach(e=>{e.addEventListener("mouseenter",()=>w.classList.add("is-hover")),e.addEventListener("mouseleave",()=>w.classList.remove("is-hover"))})}function Ie(){be(),_(),J(),se(),le(),me(),ve(),Le(),document.body.classList.remove("cursor-hidden"),window.addEventListener("scroll",()=>{Ee.style.setProperty("--scroll-y",`${window.scrollY}px`)},{passive:!0})}window.addEventListener("DOMContentLoaded",Ie);
