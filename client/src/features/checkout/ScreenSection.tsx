import type { ReactNode } from "react";

type ScreenSectionProps = { title: string; children: ReactNode };

export default function ScreenSection({ title, children }: ScreenSectionProps) {
  return (
    <>
      <section>
        <h2>{title}</h2>
      </section>
      <section>{children}</section>
    </>
  );
}
