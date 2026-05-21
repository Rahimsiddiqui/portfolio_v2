"use client";

import React from "react";

export const SkeletonBox = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`bg-zinc-700/60 animate-pulse ${className}`}
  />
);

export const SkeletonText = ({ lines = 3, className = "" }) => (
  <div className={className} aria-hidden="true">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`bg-zinc-700/60 animate-pulse rounded-sm ${i === 0 ? "h-6 w-3/4" : "h-4 w-full"} mb-2`}
      />
    ))}
  </div>
);

export const SkeletonCircle = ({ size = "w-12 h-12", className = "" }) => (
  <div
    aria-hidden="true"
    className={`bg-zinc-700/60 animate-pulse rounded-full ${size} ${className}`}
  />
);

export default function Skeleton() {
  return null;
}
