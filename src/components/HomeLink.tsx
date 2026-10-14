"use client";

import Link from "next/link";
import { ComponentProps } from "react";

export const FLORAL_WELCOME_EVENT = "shema:open-floral-welcome";

// Only normal, same-tab navigation replays the welcome, not modified clicks.
export default function HomeLink(props: Omit<ComponentProps<typeof Link>, "href" | "onNavigate">) {
  return <Link {...props} href="/" onNavigate={() => window.dispatchEvent(new Event(FLORAL_WELCOME_EVENT))} />;
}
