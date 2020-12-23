import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
Values: any;
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.getValues()
  }
  getValues(){
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(response =>{
       this.Values = response;
       },error => {
          console.log(error);
          
       }
       
       );
    
  }

}
