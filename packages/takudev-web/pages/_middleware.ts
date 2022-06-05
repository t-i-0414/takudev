import { NextRequest, NextResponse } from 'next/server';

import type { Stage } from '~/types';

export const middleware = (req: NextRequest) => {
  const stage: Stage = (process.env.STAGE as Stage) ?? 'preview';
  const shouldAuntehnticate = stage === 'staging';

  if (shouldAuntehnticate) {
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      const auth = basicAuth.split(/\s+/g)[1];
      const [user, password] = Buffer.from(auth, 'base64')
        .toString()
        .split(':');

      if (
        user === process.env.BASIC_AUTH_USER &&
        password === process.env.BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }
    }

    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
};
