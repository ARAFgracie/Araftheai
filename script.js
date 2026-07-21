// =========================
// ArafTheAI Landing Script
// =========================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startBtn.style.pointerEvents = "none";
    startBtn.innerHTML = "Loading...";

    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);

});

// Floating glow follows mouse

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelector(".gradient").style.transform =
        `translate(${x*25}px, ${y*25}px)`;

});

// AI Orb Animation

const rings = document.querySelectorAll(".ring");

rings.forEach((ring,index)=>{

    ring.animate([
        {transform:"rotate(0deg)"},
        {transform:"rotate(360deg)"}
    ],{

        duration:10000+(index*5000),

        iterations:Infinity

    });

});
