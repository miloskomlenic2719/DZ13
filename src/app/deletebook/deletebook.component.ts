import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
  selector: 'DeleteBook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeleteBookComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  deleteBookForm = new FormGroup({
    id: new FormControl()
  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
  }

  onDeleteBook(): void {
    var data = "id="+this.deleteBookForm.value.id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/it255-dz12/deletebook.php',data,
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
