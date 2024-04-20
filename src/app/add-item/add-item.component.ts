import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemModel } from './item-model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  Formvalue ! :FormGroup;
  ItemModelobj : ItemModel = new ItemModel();
  itemData : any;
  constructor(private formb : FormBuilder, private api : ApiService) { }
  ngOnInit(): void {
    this.Formvalue = this.formb.group(
      {
        itemname : [''],
        description : [''],
        price : [''],
      }
    )
    this.getAllItems(); 
  }
  getAllItems(){
    this.api.getItems().subscribe(items=>{
      this.itemData = items;
    })
  }
  postItemDetails(){
    this.ItemModelobj.itemName = this.Formvalue.value.itemname;
    this.ItemModelobj.Description = this.Formvalue.value.description;
    this.ItemModelobj.price = this.Formvalue.value.price;
    this.api.postItem(this.ItemModelobj).subscribe(data=>{
      console.log(data);
      alert("item added sucessfully")
      this.Formvalue.reset();
      this.getAllItems(); 
    } )
  }

}
