import { NextResponse } from 'next/server';

import { creemConfig, creemFetch } from '@/lib/creem';

const ALLOWED = new Set(['activate', 'validate', 'deactivate']);

export async function POST(request: Request) {
  const { apiKey } = creemConfig();
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
  if (action === 'activate' && !body.instance_name) {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }
  if (action !== 'activate' && !body.instance_id) {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const payload =
    action === 'activate'
      ? { key: body.key, instance_name: body.instance_name }
      : { key: body.key, instance_id: body.instance_id };

  try {
    const { response, json } = await creemFetch(`/v1/licenses/${action}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return NextResponse.json(json, { status: response.status });
  } catch (error) {
    if (error instanceof Error && error.message === 'not_configured') {
      return NextResponse.json({ error: 'not_configured' }, { status: 503 });
    }
    return NextResponse.json({ error: 'network' }, { status: 502 });
  }
}
