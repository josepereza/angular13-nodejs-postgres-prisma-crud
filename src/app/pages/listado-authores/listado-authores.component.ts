import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import {Author} from '../../interfaces/registro'

@Component({
  selector: 'app-listado-authores',
  templateUrl: './listado-authores.component.html',
  styleUrls: ['./listado-authores.component.css']
})
export class ListadoAuthoresComponent implements OnInit {
authores:Author[]=[];
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
this.quoteService.getAuthorAll().subscribe((res)=>{
  this.authores=res.data;
  console.log(this.authores)
})
  }

}
