"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>حدث خطأ ما</h2>
          <button onClick={reset}>حاول مجدداً</button>
        </div>
      </body>
    </html>
  );
}