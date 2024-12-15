import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: ['/form', '/dashboard/:path*'],
}

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const user = req.cookies.get('username');

    if (pathname.startsWith('/form') && JSON.parse(user?.value || '{}').id > 0) {
        return NextResponse.redirect(new URL('/error/403', req.url));
    }
    return NextResponse.next();
}
