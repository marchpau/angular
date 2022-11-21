
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  speciesList = ["Human", "Alien", "Cronenberg"];
  characterForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      characterName : ['',Validators.required],
      status : ['',Validators.required],
      species : ['',Validators.required],
      origin : ['',Validators.required],

    })
    if(this.editData){
      this.actionBtn = "Update";
      this.characterForm.controls['characterName'].setValue(this.editData.characterName)
      this.characterForm.controls['status'].setValue(this.editData.status)
      this.characterForm.controls['species'].setValue(this.editData.species)
      this.characterForm.controls['origin'].setValue(this.editData.origin)
    }
  }
  addCharacter(){
    if(!this.editData){
      if(this.characterForm.valid){
        this.api.postCharacter(this.characterForm.value)
        .subscribe({
          next:(res)=>{
            alert("Character added succesfully")
            this.characterForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the character")
          }
        })
      }
    }else{
      this.updateCharacter()
  }
}
  updateCharacter(){
    this.api.putCharacter(this.characterForm.value,this.editData?.id)
    .subscribe({
      next:(res)=>{
        alert("Character updated succesfully.")
        this.characterForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record.")
      }
    })
  }

}
