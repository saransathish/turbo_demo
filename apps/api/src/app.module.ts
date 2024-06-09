import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JobsModule } from './jobs/jobs.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    JobsModule,PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
