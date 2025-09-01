// app/components/Watermark.tsx
import React from "react";

export default function Watermark() {
  return (
    <div className="fixed bottom-3 right-3 text-sm text-gray-700 opacity-90 select-none">
      Made by <span className="font-bold text-black">Arfan Pathan</span> |
      <a
        href="https://www.linkedin.com/in/arfanpathan"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-blue-600 hover:underline"
      >
        LinkedIn
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/Arfan2444"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        GitHub
      </a>
    </div>
  );
}
