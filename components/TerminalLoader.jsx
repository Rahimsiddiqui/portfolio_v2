"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const TerminalLoader = ({ onStart, onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    // Hardware Detection
    const cpuCores = navigator.hardwareConcurrency || "Unknown";
    let gpuRenderer = "Integrated Graphics";

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          if (renderer) {
            // Clean up renderer string (remove ANGLE, etc.)
            gpuRenderer = renderer
              .replace(/ANGLE \((.*)\)/, "$1")
              .replace(/Direct3D.*/, "")
              .trim();
          }
        }
      }
    } catch (e) {
      console.error("Hardware detection failed", e);
    }

    const messages = [
      "Initializing portfolio-v2 kernel...",
      "Scanning hardware configuration...",
      `CPU: ${cpuCores}-Core Neural Engine detected`,
      `GPU: ${gpuRenderer} acceleration enabled`,
      "Loading textures and 3D models...",
      "Compiling custom GLSL shaders...",
      "Optimizing geometry buffers...",
      "Connecting to secure server...",
      "Fetching data...",
      "System check: 100% stable",
      "Welcome, user. Terminal ready.",
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < messages.length) {
        setLogs((prev) => [...prev, messages[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        // Notify parent to start app animations immediately while loader fades
        try {
          onStart && onStart();
        } catch (e) {
          console.warn("onStart callback failed", e);
        }

        // Short delay then fade out the loader; keep parent content visible while fading
        setTimeout(() => {
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => {
                onComplete && onComplete();
              },
            });
          } else {
            onComplete && onComplete();
          }
        }, 100);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Scroll to bottom when logs update
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0a] font-mono text-[10px] sm:text-xs md:text-sm text-[#33ff33] p-4 sm:p-8"
    >
      <div className="w-full max-w-3xl bg-[#121212] border border-[#33ff33]/20 rounded-md shadow-[0_0_30px_rgba(51,255,51,0.1)] overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#33ff33]/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] text-[#33ff33]/40 uppercase tracking-[0.2em] font-bold">
            System Terminal v2.0.4
          </div>
          <div className="hidden min-[400px]:block w-12" /> {/* Spacer */}
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="p-4 sm:p-6 min-h-[250px] max-h-[60vh] overflow-y-auto scrollbar-hide selection:bg-[#33ff33] selection:text-black"
        >
          {isMounted &&
            logs.map((log, index) => (
              <div key={index} className="mb-2 flex items-start">
                <span className="text-[#33ff33]/30 shrink-0 mr-3 hidden sm:inline">
                  [{new Date().toLocaleTimeString([], { hour12: false })}]
                </span>
                <span className="text-[#33ff33] mr-2 shrink-0 select-none">
                  ❯
                </span>
                <span className="break-all">{log}</span>
              </div>
            ))}

          {isMounted && logs.length < 11 && (
            <div className="flex items-center">
              <span className="text-[#33ff33]/30 shrink-0 mr-3 hidden sm:inline">
                [{new Date().toLocaleTimeString([], { hour12: false })}]
              </span>
              <span className="text-[#33ff33] mr-2 shrink-0">❯</span>
              <span className="w-2 h-4 bg-[#33ff33] animate-[pulse_0.8s_infinite]" />
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#0d0d0d] border-t border-[#33ff33]/5 text-[9px] text-[#58ad58] flex justify-between">
          <span>Status: INITIALIZING...</span>
          <span>Load: {((logs.length / 11) * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
