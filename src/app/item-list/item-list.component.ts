import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ItemModel } from '../add-item/item-model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  Formvalue ! :FormGroup;
  ItemModelobj : ItemModel = new ItemModel();
  itemData : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  constructor(private formb : FormBuilder, private api : ApiService) { }
  ngOnInit(): void {
    this.Formvalue = this.formb.group(
      {
        itemname : [''],
        description : [''],
        price : [''],
      }
    )
    this.getAllItems(); //open the page loaded all list
  }
  getAllItems(){
    this.api.getItems().subscribe(charan=>{
      this.itemData = charan;
    })
  }
  postItemDetails(){
    this.ItemModelobj.itemName = this.Formvalue.value.itemname;
    this.ItemModelobj.Description = this.Formvalue.value.description;
    this.ItemModelobj.price = this.Formvalue.value.price;
    this.api.postItem(this.ItemModelobj).subscribe(data=>{
      console.log(data);
      alert("employee added sucessfully")
      this.Formvalue.reset();
      this.getAllItems(); //after fill and submit the form added the record
    } )
  }


  deleteItem(r1 : any){
    this.api.deleteItem(r1.id).subscribe(sri2=>{
     alert("Employee deleted");
     this.getAllItems(); //for not refreshing the page
 })
}
onEdit(s : any){
  this.showAdd = false;
  this.showUpdate = true;
  this.ItemModelobj.id=s.id;
  this.Formvalue.controls['itemname'].setValue(s.itemName);
  this.Formvalue.controls['description'].setValue(s.Description);
  this.Formvalue.controls['price'].setValue(s.price);
}

updateItemDetails(){
  this.ItemModelobj.itemName = this.Formvalue.value.itemname;
  this.ItemModelobj.Description = this.Formvalue.value.description;
  this.ItemModelobj.price = this.Formvalue.value.price;
  this.api.updateItem(this.ItemModelobj,this.ItemModelobj.id)
  .subscribe(res=>{
    alert("update sucessfully");
    this.Formvalue.reset();
    this.getAllItems();
  })

}

clickAddEmployee(){
  this.Formvalue.reset();
  this.showAdd = true;
  this.showUpdate = false;
 }
}
