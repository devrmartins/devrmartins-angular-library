import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dvrm-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent {

  @Input() title: string = 'Importar imagem';
  @Output() imgSelected : EventEmitter<string> = new EventEmitter();

  public file: File | undefined;
  public fileBase64: string | undefined = '';

  constructor() { }

  change(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }
      this.file = file;
      this.title = file.name;
      reader.onload = (e: any) => this.handleReaderLoaded(e);
      reader.readAsDataURL(this.file);
    }
  }

  private handleReaderLoaded(e: any) {
    let reader: any = e.target;
    this.fileBase64 = reader.result;
    this.imgSelected.emit(this.fileBase64);
  }

}
