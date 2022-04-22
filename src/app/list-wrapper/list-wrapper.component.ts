import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.scss'],
})
export class ListWrapperComponent implements OnInit {
  componentRef: ComponentRef<any> = {} as ComponentRef<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { ListComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './ListComponent',
    });

    this.componentRef = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );

    this.componentRef.instance.logger.log('ListComponent wrapper host');
    this.componentRef.instance.input = 'host';
    this.componentRef.instance.buttonClick.subscribe((value: string) =>
      console.log(value)
    );
  }
}
