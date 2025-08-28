import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: true, // keep it simple for testing (no signature check yet)
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("📩 Raw Calendly Webhook Data:", req.body);

    // Example: log some useful fields
    const inviteeEmail = req.body?.payload?.email;
    const eventStart = req.body?.payload?.event_start_time;
    console.log("✅ Invitee Email:", inviteeEmail);
    console.log("📅 Event Start:", eventStart);

    res.status(200).json({ message: "Webhook received" });
  } catch (err) {
    console.error("❌ Error parsing webhook:", err);
    res.status(400).json({ message: "Invalid webhook" });
  }
}
