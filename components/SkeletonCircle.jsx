"use client";

export default function SkeletonCircle({ size = "w-12 h-12", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-zinc-700/60 animate-pulse rounded-full ${size} ${className}`}
    />
  );
}
