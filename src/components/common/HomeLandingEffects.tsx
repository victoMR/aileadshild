"use client";

import { useEffect } from "react";

export function HomeLandingEffects() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const end = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - t) ** 3;
            const val = Math.round(end * eased);
            el.textContent = val + suffix;
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = end + suffix;
          };
          requestAnimationFrame(tick);
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll(".stat-val[data-count]").forEach((el) => statObserver.observe(el));

    const glowSelector = ".glow-card, .card, .bento-card, .testimonial-card, .problem-card";
    const onPointerMove = (e: Event) => {
      const pe = e as PointerEvent;
      const card = pe.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = ((pe.clientX - rect.left) / rect.width) * 100;
      const y = ((pe.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    };

    document.querySelectorAll(glowSelector).forEach((card) => {
      card.addEventListener("pointermove", onPointerMove);
    });

    const previewEl = document.querySelector(".preview-card");
    const onPreviewMove = (e: Event) => {
      const pe = e as PointerEvent;
      const preview = previewEl as HTMLElement | null;
      if (!preview) return;
      const rect = preview.getBoundingClientRect();
      preview.style.setProperty("--mx", `${((pe.clientX - rect.left) / rect.width) * 100}%`);
      preview.style.setProperty("--my", `${((pe.clientY - rect.top) / rect.height) * 100}%`);
    };
    previewEl?.addEventListener("pointermove", onPreviewMove);

    const stickyCta = document.getElementById("stickyCta");
    const hero = document.querySelector(".hero");
    const footer = document.getElementById("footer");
    const fabStack = document.getElementById("fabStack");

    const updateStickyCta = () => {
      if (!stickyCta || !hero || !footer) return;
      const heroRect = hero.getBoundingClientRect();
      const scrolled = window.scrollY > heroRect.height - 200;
      const nearFooter = footer.getBoundingClientRect().top - window.innerHeight < 0;
      const visible = scrolled && !nearFooter;
      stickyCta.classList.toggle("visible", visible);
      fabStack?.classList.toggle("lifted", visible);
    };

    window.addEventListener("scroll", updateStickyCta, { passive: true });
    updateStickyCta();

    return () => {
      revealObserver.disconnect();
      statObserver.disconnect();
      document.querySelectorAll(glowSelector).forEach((card) => {
        card.removeEventListener("pointermove", onPointerMove);
      });
      previewEl?.removeEventListener("pointermove", onPreviewMove);
      window.removeEventListener("scroll", updateStickyCta);
    };
  }, []);

  return null;
}
