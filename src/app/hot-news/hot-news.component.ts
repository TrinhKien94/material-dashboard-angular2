import {Component, OnInit} from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {

  articles: ArticleDto[];

  constructor(private httpClientService: HttpClientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.httpClientService.getArticles(0, 9, undefined, true).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        });
  }

  resize(arr, newSize) {
    arr.length = newSize;
  }

  handleSuccessfulResponse(response) {
    this.articles = response.articles.content;
    this.resize(this.articles, 3);
    console.log(this.articles);
  }

  onClickArticle(article) {
    this.router.navigate(['/articles/' + article.id]);
  }
}
