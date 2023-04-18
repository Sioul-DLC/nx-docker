import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecordDto } from '@todocker2/shared/model';
import { Observable } from 'rxjs';

import { RecordsService } from '../services/records.service';

@Component({
  standalone: true,
  imports: [NgFor, AsyncPipe],
  selector: 'todocker2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-todocker-front';
  records$!: Observable<RecordDto[]>;
  constructor(private recordsService: RecordsService) {}
  ngOnInit(): void {
    this.records$ = this.recordsService.records$;
  }
}
