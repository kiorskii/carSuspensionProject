import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityContext.module.css";

function UnityWebGL() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/Build/123.loader.js",
    dataUrl: "/public/Build/123.data.unityweb",
    frameworkUrl: "/public/Build/123.framework.js.unityweb",
    codeUrl: "/public/Build/123.wasm.unityweb",
  });

  return (
    <div className={styles.unityContainer}>
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: '100%' }} />
    </div>
  );
}

export default UnityWebGL;
