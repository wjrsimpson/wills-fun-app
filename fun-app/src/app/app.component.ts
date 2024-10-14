import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [CommonModule],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageGalleryModule], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-app';
}
