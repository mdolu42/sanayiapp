import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'app/apiservice.service';

@Component({
  selector: 'app-ogrenci',
  templateUrl: './ogrenci.component.html',
  styleUrls: ['./ogrenci.component.css']
})
export class OgrenciComponent implements OnInit {

  constructor(public api:ApiserviceService) { }

  ngOnInit() {
  }

  ogr_kaydet(){
    
    const param = {
      id:1,
      deneme:"bakbakalım"
    };




    this.api.post('cities/save', param).then((datas) => {
      console.log("oldu")
      console.log(datas)
    }, error => {
      console.log("olmadı")
    }).catch(error => {
      console.log("nedir")
    });
  }
}
