import { Component, OnInit } from '@angular/core';
require('aws-sdk/dist/aws-sdk');

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      /** fileEvent(fileInput: any){
       
        var AWSService = window.AWS;

        var file = fileInput.target.files[0];

        AWSService.config.accessKeyId = 'SpongeBob';

        AWSService.config.secretAccessKey = 'Power';

        var bucket = new AWSService.S3({params: {Bucket: 'Ice'}});

        var params = {Key: file.name, Body: file};

        bucket.upload(params, function (err, data) {

            console.log(err, data);

        }); **/   
 //   }

//}
  }

}
