import { NextResponse } from 'next/server';
import { getZohoAccessToken } from '@/lib/zoho';

// Ensure this route is always evaluated dynamically so we get the latest emails
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const accessToken = await getZohoAccessToken();
    const accountId = process.env.ZOHO_ACCOUNT_ID;

    if (!accountId) {
      console.error('ZOHO_ACCOUNT_ID is not configured.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const zohoResponse = await fetch(`https://mail.zoho.in/api/accounts/${accountId}/messages/view`, {
      method: 'GET',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const result = await zohoResponse.json();

    if (!zohoResponse.ok) {
      console.error('Zoho API error (Read):', result);
      return NextResponse.json(
        { error: 'Failed to fetch emails via Zoho.', details: result },
        { status: zohoResponse.status }
      );
    }

    // Return the data array containing message summaries
    return NextResponse.json({ success: true, data: result.data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error in read email route:', error);
    return NextResponse.json(
      { error: 'Internal server error while fetching emails.' },
      { status: 500 }
    );
  }
}
