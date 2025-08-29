"use client";

import { useEffect, useRef } from "react";

export function useInfiniteScroll(
  onLoadMore: () => void,
  canLoadMore: boolean,
  rootMargin = "500px"
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const lockRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!canLoadMore) return;
        const entry = entries[0];
        if (entry.isIntersecting && !lockRef.current) {
          lockRef.current = true;
          onLoadMore();

          setTimeout(() => {
            lockRef.current = false;
          }, 250);
        }
      },
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [canLoadMore, onLoadMore, rootMargin]);

  return ref;
}
