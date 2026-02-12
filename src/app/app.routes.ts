import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { DemandRegisterComponent } from './report/demand-register/demand-register';
import { SalesRegister } from './report/sales-register/sales-register';
import { BillList } from './report/bill-list/bill-list';
import { BalanceDemand } from './report/balance-demand/balance-demand';
import { ReportComponent } from './report/report.component';
import { StockRegisterComponent } from './report/stock-register/stock-register';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },

  {
    path: 'report',
    component: ReportComponent,
    children: [
      { path: 'demand', component: DemandRegisterComponent },
      { path: 'stock', component: StockRegisterComponent },
      { path: 'sales', component:SalesRegister },
      { path: 'bill', component: BillList },
      { path: 'balance', component: BalanceDemand }
    ]
  }
];
