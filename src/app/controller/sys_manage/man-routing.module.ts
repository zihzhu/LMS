import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SysManagementComponent }      from '../index/sys-management.component';
import { ManEquipParaComponent }      from './man-equip-para.component';
import { ManModelListComponent }  from './man-model-list.component';
import { ManTemplateListComponent }  from './man-template-list.component';
import { ManJobModuleComponent }  from './man-job-module.component';

const ManRoutes: Routes = [
  {
    path: 'sysManagement',
    component: SysManagementComponent,
    children: [
      { 
        path: '', component: ManEquipParaComponent ,
        // children:[
        //   { path: 'manModel',     component: ManModelComponent }
        // ]
      },
      //实验器材参数
      { path: 'manEquip',  component: ManEquipParaComponent },
      //检测标准模块
      { path: 'manModel',     component: ManModelListComponent },
      //原始记录模板
      { path: 'manTemplate', component: ManTemplateListComponent },
      //作业指导模块
      { path: 'manJobModule', component: ManJobModuleComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ManRoutes) ],
  exports: [ RouterModule ]
})
export class ManRoutingModule {}