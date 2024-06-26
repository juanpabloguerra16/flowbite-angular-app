import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flowbite } from '../shared/decorators/flowbite-decorator';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
@Flowbite()
export class TestComponent {

  showFlowbiteElement: boolean = false;

  toggleFlowbiteElement() {
    this.showFlowbiteElement = !this.showFlowbiteElement;
  }

}
