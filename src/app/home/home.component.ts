import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	products : Product[]=[];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe(data => {this.products = data}
    );
    // ( data =>{
		// 	console.log(data);
		// 	this.products = data;
		// })
	}
}
