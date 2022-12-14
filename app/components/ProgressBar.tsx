import { useTransition } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind({
  base: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-in-out",
  idle: "w-0 transition-none",
  submit: "w-4/12",
  loading: "w-8/12",
  complete: "w-full",
});
export default function ProgressBar({ percent }: { percent: number }) {
  const progressRef = useRef<HTMLDivElement>(null);
  const transition = useTransition();
  const active = transition.state !== "idle";

  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    if (!progressRef.current) return;
    if (active) setLoaded(false);
    Promise.all(
      progressRef.current
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished)
    )
      .then(() => !active && setLoaded(true))
      .catch((e) => {
        // dont display DomException: user aborted error
      });
  }, [active]);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 flex animate-pulse">
      <div
        ref={progressRef}
        className={cx({
          base: true,
          idle: transition.state === "idle" && loaded,
          submit: transition.state === "submitting",
          loading: transition.state === "loading",
          complete: transition.state === "idle" && !loaded,
        })}
      ></div>
    </div>
  );
}
