import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  OnBuyClick(index:number)
  {
    var inAppBrowserRef;
    var target = "_blank";
    var url="";
    var options = "location=yes,hidden=yes,beforeload=yes";
    switch(index)
    {
      case 1:
        url="https://pressdots.com/product/opalescence-whitening-gel-16-cp-8-syringes/";
        break;
      case 2:
        url="https://pressdots.com/product/gel-opalescence-16-cp-6-syringes/";
        break;
      case 3:
        url="https://pressdots.com/product/gel-opalescence-16-cp-4-syringes/";
        break;
      case 4:
        url="https://pressdots.com/product/gel-opalescence-16-cp-2-syringes/";
        break;
      case 5:
        url="https://pressdots.com/product/pressdots-service-8-syringes/";
        break;
      case 6:
        url="https://pressdots.com/product/pressdots-service-4-syringes/";
        break;
      case 7:
        url="https://pressdots.com/product/pressdots-service/";
        break;
    }

    const browser = this.iab.create(url, target, options);
    browser.close();
  }
}
