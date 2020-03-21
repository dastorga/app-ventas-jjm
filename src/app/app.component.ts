import { Component, OnInit } from '@angular/core';
import { ImagenService } from './imagen.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Catalogo -';
  productos: any[] = [];

  constructor(
    protected imagenService: ImagenService
  ) {}

  ngOnInit() {
    this.imagenService.getProducts()
    .subscribe(
      (data) => { // Success
        this.productos = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

/**
 * @title Basic cards
 */
export class CardOverviewExample {}




