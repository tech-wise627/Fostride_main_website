import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const { name, phone, email, message } = await req.json();

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Website Contact <info@yourdomain.com>",
      to: "recipient@email.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    })
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
