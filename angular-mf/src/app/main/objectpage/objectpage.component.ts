import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-objectpage',
  templateUrl: './objectpage.component.html',
  styleUrls: ['./objectpage.component.scss']
})

export class ObjectpageComponent implements OnInit{

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
