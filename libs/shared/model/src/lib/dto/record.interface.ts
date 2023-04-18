export interface RecordDto {
  id?: string;
  label: string;
  createdDate?: Date;
  done: boolean;
}

export type CreateRecordDto = Omit<RecordDto, 'id' | 'createdDate'>;
