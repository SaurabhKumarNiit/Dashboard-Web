import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../Services/api-service.service';

@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrl: './selected-event.component.scss'
})
export class SelectedEventComponent {
  authToken!: string | null;
  decodeData: any;
  eventFields: any[] = [];
  eventObject:any;
  myArray :  any[] = [];

  eventForm!: FormGroup;
  fadeInAnimation = 'fadeIn'; // Animation trigger
  itemId: any;


  constructor(private apiService:ApiService,private activateRoute: ActivatedRoute,private router:Router){}
    ngOnInit(): void {

      // this.authToken = localStorage.getItem('token');
      // this.decodeData=jwtDecode(this.authToken as string);
    
      this.activateRoute.paramMap.subscribe(params => {
       this.itemId = params.get('_id') ??'';
        console.log(this.itemId);
        this.apiService.getEachUserData(this.itemId).subscribe((data) => {
          console.log(data)
          this.eventObject = data;  
          console.log(this.eventObject)  
          
        });
      });
    }



    updateEvent() {
      Swal.fire({
        title: "Do you want to save the changes in Payment?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          this.apiService.updateData(this.eventObject,this.itemId).subscribe((data) => {
            console.log(data)
            console.log('Upcoming Payment Send!'); 
          });
          Swal.fire("Upcoming Payment Send!", "", "success");
          setTimeout(() => {
            this.router.navigateByUrl('');         
           }, 2000);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }

  
    deleteEvent() {
      // Swal.fire({
      //   title: "Are you sure to delete event?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!"
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     this.apiService.DeleteEvent(this.itemId,this.authToken).subscribe((data) => {
      //       console.log(data)
      //       console.log('Delete event clicked');
      //     }); 
      //     Swal.fire({
      //       title: "Deleted!",
      //       text: "Your Event has been deleted.",
      //       icon: "success"
      //     });
      //     setTimeout(() => {
      //       this.router.navigateByUrl('');         
      //      }, 2000);
      //   }
      // });
    }

    onSubmit(){

    }
}
