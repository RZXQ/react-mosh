import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ComponentPreviews, useInitial } from "./dev";
import { DevSupport } from "@react-buddy/ide-toolbox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </StrictMode>,
);
