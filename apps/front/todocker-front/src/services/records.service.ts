import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRecordDto, RecordDto } from '@todocker2/shared/model';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  private _records = new BehaviorSubject<RecordDto[]>([]);

  constructor(private httpClient: HttpClient) {}

  get records$(): Observable<RecordDto[]> {
    return this._records.asObservable();
  }

  getRecords(): void {
    this.httpClient
      .get<RecordDto[]>('http://localhost:3000/api/records')
      .pipe(
        tap((data) => {
          this._records.next(data || []);
        })
      ).subscribe();
  }

  createRecord(data: CreateRecordDto): Observable<RecordDto> {
    return this.httpClient.post<RecordDto>(
      'http://localhost:3000/api/records',
      data
    ).pipe(
      tap((data) => {
        this._records.next([data,...this._records.value]);
      })
    );
  }
}
