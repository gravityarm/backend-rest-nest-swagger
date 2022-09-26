import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({ data: createNoteDto });
  }

  findAll() {
    return this.prisma.note.findMany();
  }

  findOne(id: number) {
    return this.prisma.note.findUnique({ where: { id } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.prisma.note.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  remove(id: number) {
    return this.prisma.note.delete({ where: { id } });
  }

  async getStats() {
    const notes = await this.prisma.note.findMany();
    // const categories = ['Task', 'Idea', 'Quote', 'Random Thought'];
    const active = {};
    const archive = {};
    notes.forEach((note) => {
      if (note.archive) {
        archive[note.category] = archive[note.category]
          ? ++archive[note.category]
          : 1;
      }

      active[note.category] = active[note.category]
        ? ++active[note.category]
        : 1;
    });
    // same code
    const totalArchive = Object.values(archive).reduce(
      (t: number, n: number) => t + n,
    );
    const totalActive = Object.values(active).reduce(
      (t: number, n: number) => t + n,
    );

    return {
      Archive: {
        Total: totalArchive,
        archive,
      },
      Active: {
        Total: totalActive,
        active,
      },
    };
  }
}
