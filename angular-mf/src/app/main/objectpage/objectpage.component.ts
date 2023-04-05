import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-objectpage',
  templateUrl: './objectpage.component.html',
  styleUrls: ['./objectpage.component.scss']
})

export class ObjectpageComponent implements OnInit{
  // @Input() label: string;
  // @Input() value: string;
  loading = true;
  visible = false;

  onCollapseChange(): void {
      console.log('collapse changed');
  }

  openPage(): void {
      this.visible = true;
  }

  closePage(): void {
      this.visible = false;
  }

  constructor(private route: ActivatedRoute) {

  }
    
  //https://angular.io/start/start-routing

  ngOnInit() {
    const routeid = this.route.snapshot.params['id'];
    //const docnum = this.route.snapshot.params['docnum'];
   
    this.route.params.subscribe((param: Params) => {
        console.log(routeid)
    });
    
  }

  
  
}
