import { Component, Input } from '@angular/core';

export interface Packet {
  id: number;
  name: string;
  description: string;
  version: string;
  productType: any;
}

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css']
})
export class PacketComponent {
  @Input() packet!: Packet;

}
