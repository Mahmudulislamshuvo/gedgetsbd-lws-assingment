"use client";

const DEFAULT_DURATION = 3200;
const STYLE_ID = "toastify-styles";
const CONTAINER_CLASS = "toastify-container";

let containerNode = null;

const TYPE_LABEL = {
  success: "OK",
  info: "i",
  error: "!",
};

function ensureStyles() {
  if (typeof document === "undefined") {
    return;
  }

  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
.${CONTAINER_CLASS} {
  position: fixed;
  top: 80px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
  max-width: min(92vw, 360px);
  pointer-events: none;
  font-family: "Poppins", "Segoe UI", sans-serif;
}

.toastify-toast {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
  border-radius: 12px;
  background: radial-gradient(circle at top left, #1e293b, #0f172a 70%);
  color: #f8fafc;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.2);
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
  transition: opacity 180ms ease, transform 180ms ease;
  pointer-events: auto;
}

.toastify-show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.toastify-hide {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

.toastify-icon {
  width: 22px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  background: var(--toast-accent, #38bdf8);
  color: #0f172a;
  flex: 0 0 auto;
}

.toastify-message {
  font-size: 14px;
  line-height: 1.4;
}

.toastify-close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.6;
  font-size: 16px;
  cursor: pointer;
}

.toastify-success {
  --toast-accent: #22c55e;
  border-color: rgba(34, 197, 94, 0.35);
}

.toastify-info {
  --toast-accent: #38bdf8;
  border-color: rgba(56, 189, 248, 0.35);
}

.toastify-error {
  --toast-accent: #f97316;
  border-color: rgba(249, 115, 22, 0.35);
}
  `;

  document.head.appendChild(style);
}

function ensureContainer() {
  if (typeof document === "undefined") {
    return null;
  }

  if (containerNode && document.body.contains(containerNode)) {
    return containerNode;
  }

  const node = document.createElement("div");
  node.className = CONTAINER_CLASS;
  document.body.appendChild(node);
  containerNode = node;
  return node;
}

function createToastElement(type, message, options = {}) {
  const toast = document.createElement("div");
  toast.className = `toastify-toast toastify-${type}`;

  const icon = document.createElement("span");
  icon.className = "toastify-icon";
  icon.textContent = TYPE_LABEL[type] || "i";

  const body = document.createElement("div");
  body.className = "toastify-message";
  body.textContent = message;

  const close = document.createElement("button");
  close.type = "button";
  close.className = "toastify-close";
  close.textContent = "×";

  toast.appendChild(icon);
  toast.appendChild(body);
  toast.appendChild(close);

  const dismiss = () => {
    toast.classList.add("toastify-hide");
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true },
    );
  };

  close.addEventListener("click", dismiss);

  const duration = Number.isFinite(options.duration)
    ? options.duration
    : DEFAULT_DURATION;

  if (duration > 0) {
    setTimeout(dismiss, duration);
  }

  requestAnimationFrame(() => toast.classList.add("toastify-show"));

  return { toast, dismiss };
}

function showToast(type, message, options) {
  if (typeof document === "undefined") {
    return () => {};
  }

  ensureStyles();
  const container = ensureContainer();
  if (!container) {
    return () => {};
  }

  const { toast, dismiss } = createToastElement(type, message, options);
  container.appendChild(toast);
  return dismiss;
}

export const toast = {
  success(message, options) {
    return showToast("success", message, options);
  },
  info(message, options) {
    return showToast("info", message, options);
  },
  error(message, options) {
    return showToast("error", message, options);
  },
};

export function successToast(message, options) {
  return showToast("success", message, options);
}

export function infoToast(message, options) {
  return showToast("info", message, options);
}

export function errorToast(message, options) {
  return showToast("error", message, options);
}
