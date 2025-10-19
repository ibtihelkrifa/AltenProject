import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { ProductsService } from "./products/data-access/products.service";
import { SidebarModule } from "primeng/sidebar";
import { CurrencyPipe } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { Product } from "./products/data-access/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    RouterModule,
    SplitterModule,
    ToolbarModule,
    PanelMenuComponent,
    SidebarModule,
    CurrencyPipe,
    ButtonModule,
  ],
})
export class AppComponent {
  title = "ALTEN SHOP";
  cartVisible = false;
  productsServices = inject(ProductsService);
  localStorageProducts = this.productsServices.localStorageProducts;

  productsService = inject(ProductsService);

  get numberOfProductsAddedToCart() {
    return this.localStorageProducts().length;
  }

  isCartEmpty() {
    return this.localStorageProducts().length === 0;
  }

  removeFromCart(product: Product) {
    this.productsService.removeFromCart(product.id).subscribe();
  }
}
