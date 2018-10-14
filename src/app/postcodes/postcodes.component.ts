import { Component, OnInit } from '@angular/core';
import { PostcodeService } from '../services/postcode.service';
import { Postcode } from '../domain/postcode.model';

@Component({
  selector: 'app-postcodes',
  templateUrl: './postcodes.component.html',
  styleUrls: ['./postcodes.component.css']
})
export class PostcodesComponent implements OnInit {

  private postcodes : Postcode[];
  private postcode : Postcode;

  constructor(private postcodeService: PostcodeService) { }

  ngOnInit() {
    this.postcode = new Postcode();
    this.postcode.id =0;
    this.postcode.pstcod = "";
    this.postcode.str = "";
    this.postcode.wpl = "";
    
    this.postcodeService.get().subscribe(
      data => { this.postcodes = data; }
    )
  }

  store() {
    console.log(this.postcode);
    this.postcodeService.add(this.postcode).subscribe(
      data => { this.postcode.id = data; }
    )
  }


  update(id: number) {
    this.postcode.id=id;
    console.log(id);
    this.postcodeService.update(this.postcode).subscribe(
      data => { console.log(data) }
    )
  }

  remove(id: number) {
    console.log(id);
    this.postcodeService.delete(id).subscribe(
      data => {  }
    )
  }


}
