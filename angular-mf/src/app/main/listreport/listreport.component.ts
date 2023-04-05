import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/services/order';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.scss']
})
export class ListreportComponent implements OnInit{
  orders: Order[] = [];
  filterVal = '';
  filterVal2 = '';
  open = false;
  ascending = true;
  ascending2 = true;
  
  constructor(private orderService: OrderService, private liveAnnouncer: LiveAnnouncer){}

  ngOnInit(): void {
    this.getOrders()
  }

  
  async changeSort(asc: boolean): Promise<void> {
      this.ascending = asc;
      await this.liveAnnouncer.announce(`Set sort ${asc ? 'ascending' : 'descending'}`, 'assertive');
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders)
  }
}
