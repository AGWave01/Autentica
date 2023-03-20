import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestFormComponent } from './request-form.component';

@NgModule({
  declarations: [RequestFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [RequestFormComponent],
})

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {
  
  requestData = {
    name: '',
    email: ''
  };
  requestForm: any;
  requestService: any;

  onSubmit() {
    if (this.requestForm.valid) {
      const formData = this.requestForm.value;
  
      this.requestService.submitRequest(formData).subscribe(
        (        response: any) => {
          console.log(response);
        },
        (        error: any) => {
          console.error(error);
        }
      );
  
      this.requestForm.reset();
    }
  }
  

}
