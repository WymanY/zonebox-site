import { NextResponse } from 'next/server';

const ALLOWED = new Set(['activate', 'validate', 'deactivate']);

export async function POST(request: Request) {
  const apiKey = process.env.CREEM_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  let body: {
    action?: string;
    key?: string;
    instance_name?: string;
    instance_id?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const action = body.action;
  if (!action || !ALLOWED.has(action) || !body.key) {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const payload =
    action === 'activate'
      ? { key: body.key, instance_name: body.instance_name }
      : { key: body.key, instance_id: body.instance_id };

  const base =
    process.env.CREEM_API_BASE ??
    (apiKey.startsWith('creem_test_') ? 'https://test-api.creem.io' : 'https://api.creem.io');
  const response = await fetch(`${base}/v1/licenses/${action}`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json().catch(() => ({ error: 'invalid_response' }));
  return NextResponse.json(json, { status: response.status });
}
