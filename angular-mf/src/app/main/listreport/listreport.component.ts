import { Component } from '@angular/core';
import { POS } from './po';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.scss']
})
export class ListreportComponent {
  pos = POS;
}
