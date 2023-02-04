import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component';
import { MaterialsModule } from 'src/app/materials/materials.module';

@NgModule({
  declarations: [ImageSliderComponent],
  imports: [CommonModule, MaterialsModule],
  exports: [ImageSliderComponent],
})
export class ImageSliderModule {}
