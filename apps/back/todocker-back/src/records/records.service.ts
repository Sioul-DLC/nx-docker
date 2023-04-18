import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecordDto, RecordDto } from '@todocker2/shared/model';
import { Repository } from 'typeorm';

import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
  ){}
  async create(createRecordDto: CreateRecordDto) : Promise<RecordDto> {
    return this.recordRepository.save(createRecordDto)
  }

  async findAll() : Promise<RecordDto[]> {
    return this.recordRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} record`;
  // }

  // update(id: number, updateRecordDto: UpdateRecordDto) {
  //   return `This action updates a #${id} record`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} record`;
  // }
}
