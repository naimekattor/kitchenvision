"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookie_consent", "false", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center space-y-4">
        <h2 className="text-lg font-semibold">We use cookies 🍪</h2>
        <p className="text-gray-600">
          This website uses cookies to ensure you get the best experience on our site.  
          You can accept or reject cookies at any time.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
