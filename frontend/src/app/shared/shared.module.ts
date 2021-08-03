import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NameUserPipePipe } from './pipes/name-user-pipe.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { PhotoUserPipe } from './pipes/photo-user.pipe';

@NgModule({
  declarations: [SnackbarComponent, NameUserPipePipe, LoadingComponent, PhotoUserPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [SnackbarComponent, NameUserPipePipe, LoadingComponent, PhotoUserPipe],
})
export class SharedModule {}
