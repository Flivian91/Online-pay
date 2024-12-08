import Africastalking from "africastalking";

const africastalking = Africastalking({
  username: process.env.NEXT_PUBLIC_AFRICASTALKING_USERNAME,
  apiKey: process.env.NEXT_PUBLIC_SMS_API_KEY,
});

const sms = africastalking.SMS;

export async function POST(req) {
  try {
    const { to, message } = await req.json();

    // Validate input
    if (!to || !message) {
      return new Response(
        JSON.stringify({ error: "Phone number and message are required" }),
        { status: 400 }
      );
    }

    // Send SMS
    const response = await sms.send({
      to: [to],
      message,
      // from: process.env.AFRICASTALKING_SHORTCODE, // Optional sender ID/shortcode
    });

    return new Response(
      JSON.stringify({ success: true, response }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending SMS:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
