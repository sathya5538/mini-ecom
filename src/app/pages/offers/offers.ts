import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.html',
  styleUrl: './offers.css',
})
export class Offers {
  deals = [
    {
      id: 1,
      name: 'ErgoMaster Pro',
      original: 5999,
      discount: 4999,
      badge: 'MOST POPULAR',
      features: ['Premium Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '1-Year Warranty']
    },
    {
      id: 2,
      name: 'ErgoMaster Elite',
      original: 7999,
      discount: 5999,
      badge: 'BEST DEAL',
      features: ['Premium Lumbar Support', 'Advanced Tilt Mechanism', 'Premium Fabric', 'Extended Warranty']
    },
    {
      id: 3,
      name: 'ErgoMaster Basic',
      original: 3999,
      discount: 2999,
      badge: 'BUDGET FRIENDLY',
      features: ['Basic Lumbar Support', 'Manual Height Adjust', 'Standard Mesh', '6-Month Warranty']
    }
  ];
}
