import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showNotification(from, align){
    const type = ['success'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-gift",
        message: "Personel Ekleme <b>Başarlı</b>"
    },{
        type: type['success'],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}


}
