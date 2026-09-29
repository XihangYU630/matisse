const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

// Keep function-argument and token-index delimiters at normal text height.
document.querySelectorAll(".equations math mo").forEach((operator) => {
  if (["(", ")", "[", "]"].includes(operator.textContent.trim())) {
    operator.setAttribute("stretchy", "false");
  }
});

const informationGainLabel = document.querySelector(".equations article:nth-child(2) small");
if (informationGainLabel) informationGainLabel.textContent = "Evidential Information Gain";

const informationGainMath = document.querySelector(".equations article:nth-child(2) math");
informationGainMath?.setAttribute("aria-label", "Evidential information gain for camera c");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});

document.querySelector("[data-copy]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const citation = document.querySelector("#bibtex-code")?.textContent ?? "";
  try {
    await navigator.clipboard.writeText(citation);
    button.textContent = "Copied";
    window.setTimeout(() => (button.textContent = "Copy"), 1800);
  } catch {
    button.textContent = "Select text";
  }
});
