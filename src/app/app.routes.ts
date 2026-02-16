import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { DemandRegisterComponent } from './report/demand-register/demand-register';
import { SalesRegister } from './report/sales-register/sales-register';
import { BillList } from './report/bill-list/bill-list';
import { ReportComponent } from './report/report.component';
import { SupplierInfoComponent } from './master/supplier-info/supplier-info';
import { StockRegisterComponent } from './report/stock-register/stock-register';
import { StockBook } from './report/stock-book/stock-book';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'supplier', component: SupplierInfoComponent },

  {
    path: 'report',
    component: ReportComponent,
    children: [
      { path: 'demand', component: DemandRegisterComponent },
      { path: 'stock', component: StockRegisterComponent },
      { path: 'sales', component:SalesRegister },
      { path: 'bill', component: BillList },
      { path: 'stockbook', component: StockBook}
    ]
  }
];
