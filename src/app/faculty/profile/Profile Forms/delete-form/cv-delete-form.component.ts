import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FacultyRequestService } from '../../../../services/faculty/faculty-request.service';
import { MessageService } from '../../../../services/message.service';

@Component({
    selector: 'app-cv-delete-form',
    standalone: true,
    imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,CommonModule, ReactiveFormsModule, FormsModule
    ],
    templateUrl: 'cv-delete-form.component.html',
    styleUrl: 'cv-delete-form.component.css'
  })
  
  export class CvDeleteForm { 

    constructor(
      public dialogRef: MatDialogRef<CvDeleteForm>, 
      private facultyRequest: FacultyRequestService,
      private messageService: MessageService,
      @Inject(MAT_DIALOG_DATA) public data: any){
        // console.log(this.data.length);
      }

  
    onNoClick(): void {
      this.dialogRef.close(this.data[1]);
    }
  
    submitForm(){
        console.log(this.data);
        this.messageService.sendMessage("Deleting Data...", 0);
        this.facultyRequest.deleteData(this.data[0]).subscribe({
        next: (next: any) => {console.log(next);},
        error: (error) => {
          console.log(error);
          this.messageService.sendMessage("Failed to delete data.", -1);

        },
        complete: () => {
          this.onNoClick();
          this.messageService.sendMessage("Data successfully deleted!", 1);
        }
      });
    }
  }