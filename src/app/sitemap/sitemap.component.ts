import { Component, OnInit } from '@angular/core';
import { Sitemap } from 'app/dto/sitemap';
import { HttpClientService } from 'app/service/httpclient.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  sitemap: Sitemap;
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getSitemap().subscribe(
      (response) => {
        this.handleSuccessfulResponse(response);
      });
  }

  handleSuccessfulResponse(response) {
    this.sitemap = response;
  }
}
