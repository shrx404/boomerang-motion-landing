"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4";
const MAX_CAPTURE_WIDTH = 960;
const PLAYBACK_FPS = 30;
const PLAYBACK_INTERVAL = 1000 / PLAYBACK_FPS;

const BoomerangVideoBg = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const lastCapturedTimeRef = useRef<number>(-1);
  const animationRef = useRef<number | null>(null);
  const [framesReady, setFramesReady] = useState(false);

  const captureFrame = useCallback(() => {
    const video = videoRef.current;
    if (
      !video ||
      video.paused ||
      video.ended ||
      !video.videoWidth ||
      !video.videoHeight
    )
      return;
    if (video.currentTime === lastCapturedTimeRef.current) return;

    lastCapturedTimeRef.current = video.currentTime;

    const scale = Math.min(1, MAX_CAPTURE_WIDTH / video.videoWidth);
    const w = Math.round(video.videoWidth * scale);
    const h = Math.round(video.videoHeight * scale);

    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const ctx = offscreen.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, w, h);
    framesRef.current.push(offscreen);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let useRVFC = false;
    let rvfcHandle: number | undefined;
    let rafHandle: number | undefined;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
      useRVFC = true;
    }

    const onRVFC = () => {
      captureFrame();
      if (video && !video.paused && !video.ended) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rvfcHandle = (video as any).requestVideoFrameCallback(onRVFC);
      }
    };

    const onRAF = () => {
      captureFrame();
      if (video && !video.paused && !video.ended) {
        rafHandle = requestAnimationFrame(onRAF);
      }
    };

    const handlePlay = () => {
      framesRef.current = [];
      lastCapturedTimeRef.current = -1;

      if (useRVFC) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rvfcHandle = (video as any).requestVideoFrameCallback(onRVFC);
      } else {
        rafHandle = requestAnimationFrame(onRAF);
      }
    };

    const handleEnded = () => {
      if (rvfcHandle !== undefined && useRVFC) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (video as any).cancelVideoFrameCallback(rvfcHandle);
      }
      if (rafHandle !== undefined) {
        cancelAnimationFrame(rafHandle);
      }

      if (framesRef.current.length > 0) {
        setFramesReady(true);
      }
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplaythrough", handleCanPlay);

    if (video.readyState >= 4) {
      video.play().catch(() => {});
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplaythrough", handleCanPlay);
      if (rvfcHandle !== undefined && useRVFC) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (video as any).cancelVideoFrameCallback(rvfcHandle);
      }
      if (rafHandle !== undefined) {
        cancelAnimationFrame(rafHandle);
      }
    };
  }, [captureFrame]);

  // Boomerang ping-pong playback on canvas
  useEffect(() => {
    if (!framesReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const frames = framesRef.current;
    if (frames.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size from first frame
    canvas.width = frames[0].width;
    canvas.height = frames[0].height;

    let index = 0;
    let direction = 1; // 1 = forward, -1 = reverse
    let lastTime = 0;

    const animate = (timestamp: number) => {
      if (lastTime === 0) lastTime = timestamp;

      if (timestamp - lastTime >= PLAYBACK_INTERVAL) {
        lastTime = timestamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frames[index], 0, 0);

        if (frames.length > 1) {
          index += direction;

          if (index >= frames.length) {
            index = Math.max(0, frames.length - 2);
            direction = -1;
          } else if (index < 0) {
            index = Math.min(1, frames.length - 1);
            direction = 1;
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [framesReady]);

  return (
    <div className="absolute inset-0 z-0 scale-[1.15] origin-top overflow-hidden">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        autoPlay
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-top"
        style={{ display: framesReady ? "none" : "block" }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover object-top"
        style={{ display: framesReady ? "block" : "none" }}
      />
    </div>
  );
};

export default BoomerangVideoBg;
