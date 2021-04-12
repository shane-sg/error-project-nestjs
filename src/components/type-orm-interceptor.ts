import {
  Injectable,
  ExecutionContext,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TypeOrmInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Can I make it here at least?');
    return next.handle().pipe(
      catchError((err) => {
        console.log(err);
        return throwError(new Error('This would be a success!!'));
      }),
    );
  }
}
