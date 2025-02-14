import { NestMiddleware } from '@nestjs/common';
import { context, createStoreWithTrasactionId } from '@utils/context';
import { Request, Response } from 'express';

export class ContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const store = createStoreWithTrasactionId();

    context.run(store, next);
    // esegure la funzione next in un determinato contesto
  }
}
