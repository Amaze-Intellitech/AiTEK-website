export async function getZohoAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho credentials are not fully configured in environment variables.');
  }

  const url = 'https://accounts.zoho.in/oauth/v2/token';

  // Securely format the parameters for the body of the request
  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'refresh_token',
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
    cache: 'no-store', // Ensures Next.js doesn't cache an old token
  });

  // Catch HTML errors before they crash JSON.parse
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") === -1) {
    const textError = await response.text();
    console.error("Zoho returned non-JSON response:", textError);
    throw new Error("Zoho API returned an HTML error instead of JSON.");
  }

  const data = await response.json();

  if (!response.ok || data.error) {
    console.error('Error fetching Zoho access token:', data);
    throw new Error(data.error || 'Failed to fetch Zoho access token');
  }

  return data.access_token;
}