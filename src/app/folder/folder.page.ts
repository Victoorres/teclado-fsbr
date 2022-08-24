import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public digitado: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  public digitarTecla(tecla: string):void {
    this.digitado = this.digitado.concat(tecla);
  }

  public limparInput():void {
    this.digitado = "";
  }
}
