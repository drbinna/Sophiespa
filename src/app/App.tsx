import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    if (document.getElementById("retell-widget")) return;

    const script = document.createElement("script");
    script.id = "retell-widget";
    script.src = "https://dashboard.retellai.com/retell-widget.js";
    script.type = "module";
    script.dataset.publicKey = "public_key_8e99f97acdc1bcbadc985";
    script.dataset.agentId = "agent_856f3aa61c5b573c8b52678a17";
    script.dataset.title = "Sophie Spa";
    script.dataset.color = "#C4929B";
    script.dataset.botName = "Sophie's Assistant";
    script.dataset.popupMessage = "Hi! Need help choosing a treatment? 🌿";
    script.dataset.showAiPopup = "true";
    script.dataset.showAiPopupTime = "5";
    document.body.appendChild(script);
  }, []);

  return <RouterProvider router={router} />;
}