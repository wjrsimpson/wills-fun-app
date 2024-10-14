import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  imageUrls: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImageUrls().subscribe((urls) => {
      this.imageUrls = urls;
    });
  }
}
