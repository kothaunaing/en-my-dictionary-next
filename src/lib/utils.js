import { headers } from "next/headers";

export async function getCurrentUrl() {
  const headersList = await headers();
  const host = headersList.get("host"); // Gets the domain
  const protocol = headersList.get("x-forwarded-proto") || "http"; // Detects HTTPS or HTTP
  const fullUrl = `${protocol}://${host}`;

  return fullUrl;
}
