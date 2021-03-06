import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cookieSession from 'cookie-session';
import { RequestHandler } from 'express';

@Injectable()
export class CookieSessionMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: cookieSession.CookieSessionOptions) {
        this.options = opts;
    }

    private static options: cookieSession.CookieSessionOptions;

    public resolve(...args: any[]): RequestHandler {
        if (CookieSessionMiddleware.options && CookieSessionMiddleware.options.keys) {
            return cookieSession(CookieSessionMiddleware.options);
        } else {
            throw new Error('You must pass in `keys` as an option to CookieSessionMiddleware');
        }
    }
}
