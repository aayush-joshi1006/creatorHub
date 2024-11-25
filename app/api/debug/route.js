export async function GET(request) {
  return new Response(
    JSON.stringify({
      mongodbUri: process.env.MONGODB_URI || "MONGODB_URI not set",
      nodeEnv: process.env.NODE_ENV || "NODE_ENV not set",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
