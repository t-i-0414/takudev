import { NextResponse } from 'next/server';
// eslint-disable-next-line import/newline-after-import
import type { NextRequest } from 'next/server';
const { Buffer } = require('buffer/');

export const middleware = (req: NextRequest) => {
  const shouldAuthenticate = process.env.STAGE === 'staging';

  if (shouldAuthenticate) {
    const authorizationHeader = req.headers.get('authorization');

    if (authorizationHeader !== null) {
      const basicAuth = authorizationHeader.split(' ')[1];
      const [user, password] = Buffer.from(basicAuth, 'base64')
        .toString()
        .split(':');

      if (
        user === process.env.BASIC_AUTH_USER &&
        password === process.env.BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }
    }

    const url = req.nextUrl;
    url.pathname = '/api/basic';

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};
