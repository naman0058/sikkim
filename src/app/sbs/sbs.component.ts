import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup , FormControl  } from "@angular/forms";
declare  var jQuery:  any;
@Component({
  selector: 'app-sbs',
  templateUrl: './sbs.component.html',
  styleUrls: ['./sbs.component.css']
})
export class SbsComponent implements OnInit {
 form: FormGroup;
 
 constructor(
  public fb: FormBuilder,
  private http: HttpClient
)  {
this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
   }

   ngOnInit() { }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {


console.log(this.form.value)

    var formData: any = new FormData();
    formData.append("FileType", this.form.get('name').value);
    formData.append("File", this.form.get('avatar').value);
console.log("formdata",formData)
    this.http.post('http://sikkimfred.local.api/api/sbsfile/upload', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

}




}




