import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement/announcement.service';
import { mapImageList } from '../shared/utils';

@Component({
  selector: 'app-my-announcement',
  templateUrl: './my-announcement.component.html',
  styleUrls: ['./my-announcement.component.css']
})

export class MyAnnouncementComponent implements OnInit {
  announcementArray: any[] = []
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getUser().subscribe(
      res=>{
        this.announcementArray = res
        this.announcementArray.forEach(element =>{
          element.imagesBytes = mapImageList(element.imagesBytes)
        })
        console.log(this.announcementArray)
      },
    )
  }
  delete(id:any){
    console.log(id)
    this.announcementService.delete(id).subscribe(res=>{
      console.log(res)
    })
  }
}
