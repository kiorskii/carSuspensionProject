import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityContext.module.css";

function UnityWebGL() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/123.loader.js",
    dataUrl: "/build/123.data.unityweb",
    frameworkUrl: "/build/123.framework.js.unityweb",
    codeUrl: "/build/123.wasm.unityweb",
  });

  return (
    <div className={styles.unityContainer}>
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: '100%' }} />
    </div>
  );
}

export default UnityWebGL;
