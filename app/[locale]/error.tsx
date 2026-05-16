// app/[locale]/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>خطأ ما حدث</h2>
      <button onClick={reset}>حاول مجدداً</button>
    </div>
  );
}