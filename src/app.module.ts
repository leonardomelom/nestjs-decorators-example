import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MembersRepository } from './repositories/member-repository';
import { PrismaTeamMembersRepository } from './repositories/prisma/prisma-team-members-repos';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MembersRepository,
      useClass: PrismaTeamMembersRepository,
    },
  ],
})
export class AppModule {}
