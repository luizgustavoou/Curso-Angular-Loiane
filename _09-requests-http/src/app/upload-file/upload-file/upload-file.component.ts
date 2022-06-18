import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress: number = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit(): void {

  }

  onChange(event) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    


    //document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    
    //depois de adicionar multiple no input file...
    const fileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    /*
    Jeito com programaçao funcional.
    const fileNames = [...event.srcElement.files]
      .map(
        (file: File)=> file.name
      ).join(', ') 
    */

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

    this.progress = 0;

  }
  
  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload') // '/api/upload' tava tbm 'http://localhost:8000/upload'
      .pipe(
        uploadProgress(progress => {
          console.log(progress);
          this.progress = progress;
        }),
        filterResponse()
      )
      .subscribe(response => console.log('Upload Concluído'));
      /* .subscribe((event: HttpEvent<Object>) => {
          HttpEventType
          
          console.log(event);
          if (event.type == HttpEventType.Response) { //download concluido
            console.log('Upload Concluído');
          } else if (event.type == HttpEventType.UploadProgress){
            const percentDone = Math.round((event.loaded * 100) / event.total);
            console.log('Progresso', percentDone);
            this.progress = percentDone;
            
          }
          
        }); */
    }
  }

  onDownloadExcel() {
    this.service.download(environment.BASE_URL + '/downloadExcel')
    .subscribe((res: any) => {
      this.service.handleFile(res, 'report.xlsx')

    });
  }

  onDownloadPDF() {
    this.service.download(environment.BASE_URL + '/downloadPDF')
    .subscribe((res: any) => {
      this.service.handleFile(res, 'report.pdf')

    });
  }

}
