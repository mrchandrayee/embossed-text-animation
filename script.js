const demos = [
  {
    name: "EMBOSS",
    code: `.demo-text {
  color: #17263b;
  font-weight: 900;
  letter-spacing: 5px;
  text-shadow:
    -2px -2px 3px rgba(94,231,255,.25),
    4px 4px 7px rgba(0,0,0,.9);
}
.anim-1 {
  font-size: 55px;
  animation: press 2.5s ease-in-out infinite;
}
@keyframes press {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}`
  },
  {
    name: "SHINE",
    code: `.anim-2 {
  font-size: 50px;
  background: linear-gradient(
    110deg,
    #29415d,
    #17263b 30%,
    #5ee7ff 48%,
    #ffffff 50%,
    #5ee7ff 52%,
    #17263b 70%,
    #29415d
  );
  background-size: 250% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 2.5s linear infinite;
}
@keyframes shine {
  to { background-position: 250% 0; }
}`
  },
  {
    name: "RISE",
    code: `.anim-3 {
  font-size: 55px;
  color: #17263b;
  animation: rise 3s ease-in-out infinite;
}
@keyframes rise {
  0%,100% {
    transform: translateY(10px) rotateX(15deg);
    text-shadow: -2px -2px 3px rgba(94,231,255,.2),
      4px 4px 7px #000;
  }
  50% {
    transform: translateY(-9px) rotateX(0);
    text-shadow: -3px -3px 5px rgba(94,231,255,.35),
      5px 7px 10px #000;
  }
}`
  },
  {
    name: "CLICK",
    code: `.anim-4 {
  font-size: 52px;
  padding: 20px 35px;
  border-radius: 15px;
  color: #17263b;
  cursor: pointer;
  transition: .35s ease;
  box-shadow: 7px 7px 14px rgba(0,0,0,.75),
    -6px -6px 12px rgba(94,231,255,.08);
}
.anim-4:active {
  transform: translateY(4px) scale(.97);
  box-shadow: inset 5px 5px 10px #080e17,
    inset -4px -4px 10px #20344a;
}`
  },
  {
    name: "WAVE",
    code: `.wave {
  display: flex;
  gap: 4px;
}
.wave span {
  color: #17263b;
  font-size: 55px;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: -2px -2px 3px rgba(94,231,255,.25),
    4px 4px 7px rgba(0,0,0,.9);
  animation: wave 1.8s ease-in-out infinite;
}
.wave span:nth-child(1) { animation-delay: 0s; }
.wave span:nth-child(2) { animation-delay: .1s; }
.wave span:nth-child(3) { animation-delay: .2s; }
.wave span:nth-child(4) { animation-delay: .3s; }
@keyframes wave {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`
  }
];

let current = 0;
const demoText = document.getElementById("demoText");
const demoName = document.getElementById("demoName");
const codeTitle = document.getElementById("codeTitle");
const codeContent = document.getElementById("codeContent");
const buttons = [...document.querySelectorAll(".number")];
const toast = document.getElementById("toast");

function render(index) {
  current = (index + demos.length) % demos.length;
  const demo = demos[current];
  demoName.textContent = `${String(current + 1).padStart(2,"0")} / ${demo.name}`;
  codeTitle.textContent = `ANIMATION ${String(current + 1).padStart(2,"0")} — ${demo.name}`;
  codeContent.textContent = demo.code;
  demoText.className = `demo-text anim-${current + 1}`;
  demoText.replaceChildren();
  if (current === 3) {
    demoText.textContent = "CLICK";
    demoText.setAttribute("role","button");
    demoText.setAttribute("tabindex","0");
    demoText.setAttribute("aria-label","Click to press the embossed text");
    demoText.onclick = () => {
      demoText.classList.add("clicked");
      setTimeout(() => demoText.classList.remove("clicked"), 300);
    };
    demoText.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        demoText.click();
      }
    };
  } else if (current === 4) {
    demoText.removeAttribute("role");
    demoText.removeAttribute("tabindex");
    demoText.onclick = null;
    demoText.onkeydown = null;
    for (const letter of "WAVE!") {
      const span = document.createElement("span");
      span.textContent = letter;
      demoText.appendChild(span);
    }
  } else {
    demoText.removeAttribute("role");
    demoText.removeAttribute("tabindex");
    demoText.onclick = null;
    demoText.onkeydown = null;
    demoText.textContent = demo.name;
  }
  buttons.forEach((button,i) => button.classList.toggle("active",i===current));
}
buttons.forEach((button) => button.addEventListener("click", () => render(Number(button.dataset.index))));
document.getElementById("previous").addEventListener("click", () => render(current - 1));
document.getElementById("next").addEventListener("click", () => render(current + 1));
document.getElementById("copyCode").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(demos[current].code);
    showToast("CSS copied");
  } catch {
    const field = document.createElement("textarea");
    field.value = demos[current].code;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    showToast(ok ? "CSS copied" : "Copy manually from the code panel");
  }
});
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"),1700);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") render(current + 1);
  if (event.key === "ArrowLeft") render(current - 1);
});
render(0);
