import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/member-repository';

@Controller()
export class AppController {
  constructor(private MembersRepository: MembersRepository) {}

  @Post('hello')
  async postHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.MembersRepository.create(name, memberFunction);
  }

  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    const member = await this.MembersRepository.create(name, memberFunction);
    return {
      message: 'reading',
      member,
    };
  }
}
