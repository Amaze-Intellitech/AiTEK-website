import { NextResponse } from 'next/server';
import { getZohoAccessToken } from '@/lib/zoho';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const accessToken = await getZohoAccessToken();

    const zohoResponse = await fetch(`https://mail.zoho.in/api/accounts`, {
      method: 'GET',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const result = await zohoResponse.json();

    if (!zohoResponse.ok) {
      console.error('Zoho API error (Account):', result);
      return NextResponse.json(
        { error: 'Failed to fetch Zoho accounts.', details: result },
        { status: zohoResponse.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error in account route:', error);
    return NextResponse.json(
      { error: 'Internal server error while fetching account details.' },
      { status: 500 }
    );
  }
}
