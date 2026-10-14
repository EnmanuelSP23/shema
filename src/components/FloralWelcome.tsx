"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "shema-floral-welcome-opened";
let seenInMemory = false;

export default function FloralWelcome() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<"hidden" | "welcome" | "leaving">("hidden");
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      const timer = setTimeout(() => setPhase("hidden"), 450);
      return () => clearTimeout(timer);
    }

    const frame = requestAnimationFrame(() => {
      let seen = seenInMemory;
      try {
        seen = seen || sessionStorage.getItem(SESSION_KEY) === "seen";
      } catch {
        // Keep navigation working even when browser storage is blocked.
      }
      if (seen) return;
      setPhase("welcome");
      router.prefetch("/products");
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, router]);

  const visible = phase !== "hidden";
  useEffect(() => {
    if (!visible) return;
    const content = document.getElementById("site-content");
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    if (content) content.inert = true;
    document.body.style.overflow = "hidden";
    buttonRef.current?.focus({ preventScroll: true });
    return () => {
      if (content) content.inert = false;
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [visible]);

  useEffect(() => () => {
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="floral-welcome"
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-labelledby="floral-welcome-title"
      aria-busy={phase === "leaving"}
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          event.preventDefault();
          buttonRef.current?.focus();
        }
      }}
    >
      <div className="floral-welcome-copy">
        <p className="floral-welcome-eyebrow">MAKEUP COLLECTION</p>
        <h1 id="floral-welcome-title">SHEMA</h1>
        <p> Your look, your rules.</p>
      </div>

      <div className="floral-welcome-bloom">
        <div className="floral-welcome-float">
          <Image
            src="/welcome-pansy.webp"
            alt=""
            width={1000}
            height={941}
            unoptimized
            loading="eager"
            sizes="(max-width: 640px) 92vw, 560px"
            className="floral-welcome-flower"
          />
        </div>
        <Link
          ref={buttonRef}
          href="/products"
          className="floral-welcome-button"
          aria-disabled={phase === "leaving"}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            if (phase === "leaving") return;
            // Count the welcome as seen only after the visitor opens the catalog.
            seenInMemory = true;
            try {
              sessionStorage.setItem(SESSION_KEY, "seen");
            } catch {
              // Fall back to the in-memory flag when browser storage is blocked.
            }
            setPhase("leaving");
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            navigationTimer.current = setTimeout(() => router.push("/products"), reducedMotion ? 100 : 500);
          }}
        >
          <span lang="es">Ver catálogo</span>
          <span className="floral-welcome-button-en">
            Open Catalog{" "}
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block align-middle"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </Link>
      </div>

      <p className="floral-welcome-note">MULTIPLY YOUR BEAUTY</p>
    </div>
  );
}
