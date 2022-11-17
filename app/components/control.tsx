import { extend, useThree } from "@react-three/fiber";
import * as React from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Make orbit-controls available as a native Threejs graph element
extend({ OrbitControls });

export const context = React.createContext();

export default function Controls({ children }) {
  const { camera, invalidate } = useThree();
  // The "api" contains [enabledState, set], we distribute it by context,
  // so that now children can access the enabled state and change it, too
  const api = React.useState(true);
  const ref = React.useRef();
  React.useEffect(() => {
    // Invalidate the canvas on controller changes
    const handler = ref.current.addEventListener("change", invalidate);
    return () => ref.current.removeEventListener("change", handler);
  }, []);
  return (
    <>
      <orbitControls ref={ref} args={[camera]} enabled={api[0]} />
      <context.Provider value={api}>{children}</context.Provider>
    </>
  );
}
