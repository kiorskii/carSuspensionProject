import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityContext.module.css";

function UnityWebGL() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/Susp_Build_Fix.loader.js",
    dataUrl: "/build/Susp_Build_Fix.data.unityweb",
    frameworkUrl: "/build/Susp_Build_Fix.framework.js.unityweb",
    codeUrl: "/build/Susp_Build_Fix.wasm.unityweb",
  });

  return (
    <div className={styles.unityContainer}>
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: '100%' }} />
    </div>
  );
}

export default UnityWebGL;
