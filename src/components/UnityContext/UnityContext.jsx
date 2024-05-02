import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityContext.module.css";

function UnityWebGL() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/Build/Susp_Build.loader.js",
    dataUrl: "/public/Build/Susp_Build.data.unityweb",
    frameworkUrl: "/public/Build/Susp_Build.framework.js.unityweb",
    codeUrl: "/public/Build/Susp_Build.wasm.unityweb",
  });

  return (
    <div className={styles.unityContainer}>
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: '100%' }} />
    </div>
  );
}

export default UnityWebGL;
