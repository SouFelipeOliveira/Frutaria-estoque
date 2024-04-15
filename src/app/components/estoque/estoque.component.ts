import { Component } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonListHeader, IonIcon, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonIcon, IonListHeader, IonButton, 
    IonInput, 
    IonLabel, 
    IonList, 
    IonContent,
     IonItem, 
     IonLabel, 
     CommonModule,
     FormsModule
  ]
})
export class EstoqueComponent {

  frutas: any[] = [];
  
  constructor(private alertController: AlertController ) { }

  async adicionarFruta() {
    const alert = await this.alertController.create({
      cssClass: 'alert-dark',
      header: 'Adicionar fruta',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome da fruta'
        },
        {
          name: 'preco',
          type: 'number',
          placeholder: 'Preço da fruta',
        },
        {
          name: 'quantidade',
          type: 'number',
          placeholder: 'Quantidade de frutas'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Adicionar',
          handler: (data) => {
            this.frutas.push(
              {
                index: this.frutas.length + 1,
                nome: data.nome,
                preco: data.preco,
                quantidade: data.quantidade
              }
            );
          }
        }
      ]
    });
    
    await alert.present();
  }

  async editarFruta(fruta: any) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dark',
      header: 'Editar fruta',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome da fruta',
          value: fruta.nome
        },
        {
          name: 'preco',
          type: 'number',
          placeholder: 'Preço da fruta',
          value: fruta.preco
        },
        {
          name: 'quantidade',
          type: 'number',
          placeholder: 'Quantidade de frutas',
          value: fruta.quantidade
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salvar',
          handler: (data) => {
            const index = this.frutas.findIndex(f => f.index === fruta.index);
            if (index !== -1) {
              fruta.nome = data.nome;
              fruta.preco = data.preco;
              fruta.quantidade = data.quantidade;
            }
          }
        }
      ]
    })
    await alert.present();
  }

  async excluirFruta(fruta: any) {
    const alert = await this.alertController.create({
      cssClass: 'alert-dark',
      header: 'Excluir',
      message: 'Deseja excluir a fruta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            const index = this.frutas.findIndex(f => f.index === fruta.index);
            if (index !== -1)  {
              this.frutas.splice(index, 1);
            }
          }
        }
      ]

    });
    await alert.present()
  }  
}
