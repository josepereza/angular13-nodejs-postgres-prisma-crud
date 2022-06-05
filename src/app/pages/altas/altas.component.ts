import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuoteService } from 'src/app/services/quote.service';
@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  authorForm = new FormGroup({
    author: new FormControl(''),
    quote: new FormControl(''),
  });
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
  }
agregar(){
  console.log(this.authorForm.value)
  this.quoteService.createAuthor(this.authorForm.value).subscribe(data=>{
    console.log(data)
  })
}
}
