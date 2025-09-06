"use client";

import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<"en" | "de">("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load Google Translate script once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      // googleTranslateElementInit is provided by the external script
      // The google global is added by the external translate script and doesn't have
      // useful typings here — allow a narrow eslint disable for this block.
      /* eslint-disable @typescript-eslint/no-explicit-any */
      (window as any).googleTranslateElementInit = () => {
        // use a local-typed alias for the google global to avoid broad any errors
        const gw = (window as any).google as any;
        new gw.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setReady(true);
      };
      /* eslint-enable @typescript-eslint/no-explicit-any */
    }
  }, []);

  const toggleLanguage = () => {
    if (!ready) return;
    const newLang = currentLang === "en" ? "de" : "en";
    setCurrentLang(newLang);

    const googleSelect =
      document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = newLang;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }} />

      {ready && (
        <div
          onClick={toggleLanguage}
          className="relative flex items-center w-28 h-10 bg-gray-200 rounded-full cursor-pointer select-none"
        >
          {/* Toggle Bullet */}
          <div
            className={`absolute top-1 w-12 h-8 bg-white rounded-full shadow-md transition-all duration-300 ${
              currentLang === "en" ? "left-1" : "left-16"
            }`}
          />

          {/* EN Label */}
          <div
            className={`flex-1 text-center text-sm font-medium transition ${
              currentLang === "en" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            🇬🇧 EN
          </div>

          {/* DE Label */}
          <div
            className={`flex-1 text-center text-sm font-medium transition ${
              currentLang === "de" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            🇩🇪 DE
          </div>
        </div>
      )}
    </div>
  );
}
