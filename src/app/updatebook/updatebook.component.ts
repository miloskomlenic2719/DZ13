import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
  selector: 'UpdateBook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdateBookComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  updateBookForm = new FormGroup({
    isbn: new FormControl(),
    name: new FormControl(),
    genre: new FormControl(),
    id: new FormControl()
  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
  }

  onUpdateBook(): void {
    var data =
      "isbn="+this.updateBookForm.value.isbn+"name="+this.updateBookForm.value.name+"genre="+this.updateBookForm.value.genre+"id="+this.updateBookForm.value.id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/it255-dz12/updatebook.php',data,
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
