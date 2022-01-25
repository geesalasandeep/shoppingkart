import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit {
  searchKey;
  error: string;
  isLoading= false;
  message: string;
  articles:any;

  constructor(private news:NewsapiService) { }

  ngOnInit(): void {
    this.toSearch()
  }
  toSearch(){
    this.isLoading = true;
    console.log(this.news.getarticles(this.searchKey));
    
    this.news.getarticles(this.searchKey).subscribe((res)=>{
      this.isLoading = false;
      if(!res.error){
        this.message = 'articles fetched'
        this.articles = res.articles;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
      else{
        this.error = "could not fetch the articles";
      }
    }, err =>{
      this.isLoading = false;
      this.error = 'server error'
    })
  }
  

}
