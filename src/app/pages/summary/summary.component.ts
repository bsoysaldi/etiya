import { Component, OnInit } from '@angular/core';

import { CorporateCustomers } from 'src/app/models/corporateCustomers';
import { CorporateCustomersService } from 'src/app/services/corporate-customers.service';
import { IndividualCustomersService } from 'src/app/services/individual-customers.service';
import { Router } from '@angular/router';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  individualCustomer!: any;
  isIndividualCust!: boolean;
  constructor(
    private router: Router,
    private individualCustomerService: IndividualCustomersService,
    private corporateCustomerService: CorporateCustomersService,
    private subscriptionsService: SubscriptionsService
  ) {}

  ngOnInit(): void {
    this.storeData();
    //store dan dataları çek
  }

  storeData() {
    this.individualCustomerService.individualInfoModel$.subscribe(
      (response) => {
        if (response) {
          this.individualCustomer = response;
          this.isIndividualCust = true;
        }
      }
    );
  }
  //   data[{ fullnname: "saedasd", lastname: "sadsa", services: "sadsa" }]
  //   const newData = this.data
  //   delete newData.service
  // this.service.service.add(newData)

  //customer endpointine post at tip bakmaksızın(sadece customer bilgilerini)
  //eğer indvidual ise o endpointe istek at corporate sa o enmdpoinmte post at
  //invoice endpointine at

  //hata ve başarılı kayıt için aşağıdaki şekidle istek at error dan hatayı yakalı
  // getCustomers() {
  // this.customersService.getCustomers().subscribe({
  //   next: (response) => {
  //     this.customers = response;
  //   },
  //   error: (err) => {
  //     console.log(err);
  //   },
  // });

  backButton() {
    this.router.navigate(['/service-selection']);
  }
}
