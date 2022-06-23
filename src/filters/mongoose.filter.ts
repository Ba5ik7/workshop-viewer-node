import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class MongooseFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
