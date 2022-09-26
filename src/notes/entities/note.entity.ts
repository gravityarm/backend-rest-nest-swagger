// src/articles/entities/article.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class NoteEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  content: string | null;

  @ApiProperty()
  category: string;

  @ApiProperty()
  archive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
