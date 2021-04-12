import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  // HttpException,
} from '@nestjs/common';

@Catch()
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    console.log('\nKitchen sink "catch all"!!!!\n');
    const context = host.switchToHttp();
    // const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { url } = request;
    const { name } = exception;
    const errorResponse = {
      path: url,
      timestamp: new Date().toISOString(),
      message: name,
    };

    console.log(errorResponse);

    throw exception;
    // response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
  }
}
