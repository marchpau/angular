
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  productForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : ['',Validators.required],
      species : ['',Validators.required],
      freshness : ['',Validators.required],
      origin : ['',Validators.required],

    })
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added succesfully")
        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
    }
  }

}
