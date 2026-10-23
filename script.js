const companies = {
  kredivo: {
    team: "Loan team",
    logo: "assets/company-icons/kredivo.png",
  },
  traveloka: {
    team: "Customer Care team",
    logo: "assets/company-icons/traveloka.png",
  },
  tiket: {
    team: "Order team",
    logo: "assets/company-icons/tiket.png",
  },
};

const triggers = [...document.querySelectorAll(".company-trigger")];
const popover = document.getElementById("team-popover");
const popoverLogo = popover.querySelector(".team-popover__logo");
const popoverTeam = popover.querySelector(".team-popover__team");
let pinnedTrigger = null;
let hoveredTrigger = null;
let closeTimer = null;

function updateTriggerStates() {
  const activeTrigger = pinnedTrigger || hoveredTrigger;

  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(trigger === activeTrigger));
  });
}

function getTextBounds(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const rects = [];

  while (walker.nextNode()) {
    if (!walker.currentNode.textContent.trim()) continue;

    const range = document.createRange();
    range.selectNodeContents(walker.currentNode);
    rects.push(...range.getClientRects());
  }

  if (rects.length === 0) return element.getBoundingClientRect();

  return {
    left: Math.min(...rects.map((rect) => rect.left)),
    top: Math.min(...rects.map((rect) => rect.top)),
    right: Math.max(...rects.map((rect) => rect.right)),
    bottom: Math.max(...rects.map((rect) => rect.bottom)),
  };
}

function positionPopover(trigger) {
  const triggerRect = trigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const edge = 12;
  const gap = 8;
  const maxLeft = Math.max(edge, window.innerWidth - popoverRect.width - edge);
  const centeredLeft = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
  const left = Math.max(edge, Math.min(centeredLeft, maxLeft));
  const aboveTop = triggerRect.top - popoverRect.height - gap;
  const belowTop = triggerRect.bottom + gap;
  const maxTop = window.innerHeight - popoverRect.height - edge;
  let side;
  let top;

  if (aboveTop >= edge) {
    side = "top";
    top = aboveTop;
  } else if (belowTop <= maxTop) {
    side = "bottom";
    top = belowTop;
  } else {
    const spaceAbove = triggerRect.top - edge;
    const spaceBelow = window.innerHeight - edge - triggerRect.bottom;
    side = spaceAbove >= spaceBelow ? "top" : "bottom";
    top = side === "top" ? Math.max(edge, aboveTop) : Math.min(belowTop, maxTop);
  }

  const heading = document.getElementById("intro-title");
  const employerLine = document.querySelector(".employer-line");
  const contact = document.querySelector(".intro-contact");

  if (heading && employerLine && contact) {
    const textBounds = [
      getTextBounds(heading),
      getTextBounds(employerLine),
      getTextBounds(contact),
    ];
    const overlapsText = (candidateTop) =>
      textBounds.some((textRect) =>
        left < textRect.right &&
        left + popoverRect.width > textRect.left &&
        candidateTop < textRect.bottom &&
        candidateTop + popoverRect.height > textRect.top,
      );

    if (overlapsText(top)) {
      const employerRect = textBounds[1];
      const contactRect = textBounds[2];
      const fallbackTop = contactRect.top - popoverRect.height - 4;
      const fitsBetweenText = fallbackTop >= employerRect.bottom + 4;
      const fitsViewport =
        fallbackTop >= edge &&
        fallbackTop + popoverRect.height <= window.innerHeight - edge;

      if (fitsBetweenText && fitsViewport) {
        side = "bottom";
        top = fallbackTop;
      } else {
        const fitsAbove = aboveTop >= edge && !overlapsText(aboveTop);
        const fitsBelow = belowTop <= maxTop && !overlapsText(belowTop);

        if (fitsAbove) {
          side = "top";
          top = aboveTop;
        } else if (fitsBelow) {
          side = "bottom";
          top = belowTop;
        }
      }
    }
  }

  const arrowX = Math.max(
    8,
    Math.min(popoverRect.width - 8, triggerRect.left + triggerRect.width / 2 - left),
  );

  popover.dataset.side = side;
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.style.setProperty("--arrow-x", `${arrowX}px`);
  popover.style.setProperty("--origin-x", `${arrowX}px`);
  popover.style.setProperty("--origin-y", side === "top" ? "100%" : "0%");
}

function clearCloseTimer() {
  if (closeTimer !== null) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function showPopover(trigger) {
  const company = companies[trigger.dataset.company];
  if (!company) return;

  clearCloseTimer();
  popover.hidden = false;
  popoverLogo.src = company.logo;
  popoverTeam.textContent = company.team;
  positionPopover(trigger);

  window.requestAnimationFrame(() => {
    if (pinnedTrigger === trigger || hoveredTrigger === trigger) {
      popover.dataset.open = "";
    }
  });
}

function closePopover() {
  if (popover.hidden) return;

  clearCloseTimer();
  delete popover.dataset.open;
  closeTimer = window.setTimeout(() => {
    if (!popover.hasAttribute("data-open")) {
      popover.hidden = true;
    }
    closeTimer = null;
  }, 190);
}

triggers.forEach((trigger) => {
  trigger.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    if (trigger === pinnedTrigger) return;

    pinnedTrigger = null;
    hoveredTrigger = trigger;
    showPopover(trigger);
    updateTriggerStates();
  });

  trigger.addEventListener("pointerleave", () => {
    if (hoveredTrigger !== trigger) return;

    hoveredTrigger = null;
    closePopover();
    updateTriggerStates();
  });

  trigger.addEventListener("click", () => {
    if (pinnedTrigger === trigger && !popover.hidden) return;

    pinnedTrigger = trigger;
    hoveredTrigger = null;
    showPopover(trigger);
    updateTriggerStates();
  });
});

function repositionOpenPopover() {
  const activeTrigger = pinnedTrigger || hoveredTrigger;
  if (activeTrigger && !popover.hidden) {
    positionPopover(activeTrigger);
  }
}

window.addEventListener("resize", repositionOpenPopover, { passive: true });
window.addEventListener("scroll", repositionOpenPopover, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || popover.hidden) return;

  const activeTrigger = pinnedTrigger || hoveredTrigger;
  pinnedTrigger = null;
  hoveredTrigger = null;
  closePopover();
  updateTriggerStates();
  activeTrigger?.focus({ preventScroll: true });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest(".company-trigger")) return;
  if (popover.contains(event.target)) return;

  pinnedTrigger = null;
  hoveredTrigger = null;
  closePopover();
  updateTriggerStates();
});
