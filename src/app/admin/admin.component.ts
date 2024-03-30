import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../components/navbar/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from '../components/navbar/topnav/topnav.component';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../components/message/message.component';
import { MessageService } from '../services/message.service';
import { Message } from '../services/Interfaces/message';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    TopnavComponent,
    CommonModule,
    MessageComponent,
    MatSidenavModule, 
    MatButtonModule, 
    FormsModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  sideBarToggle = true;
  opened: boolean | undefined;

  toggle(){
    this.sideBarToggle = !this.sideBarToggle;
    console.log(this.sideBarToggle);
  }
}
