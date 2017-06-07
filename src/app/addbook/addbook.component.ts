import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
  selector: 'AddBook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  addBookForm = new FormGroup({
    isbn: new FormControl(),
    name: new FormControl(),
    genre: new FormControl()
  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
  }

  onAddBook(): void {
    var data =
      "isbn="+this.addBookForm.value.isbn+"name="+this.addBookForm.value.name+"genre="+this.addBookForm.value.genre;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/it255-dz12/addbook.php',data,
      {headers:headers})
      .map(res => res)
      .subscribe( data => this.postResponse = data,
        err => alert(JSON.stringify(err)),
        () => {
          if(this.postResponse["_body"].indexOf("error") === -1){
            this.router.navigate(['./allbooks']);
          }else{
            alert("Unsuccessful");
          }
        }
      );
  }

}
