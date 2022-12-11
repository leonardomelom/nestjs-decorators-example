/* eslint-disable prettier/prettier */
export abstract class MembersRepository {
  abstract create(name: string, memberFunction: string): Promise<any>;
}

// const member = await this.prisma.teamMember.create({
//   data: {
//     id: randomUUID(),
//     name,
//     function: memberFunction,
//   },
// });
