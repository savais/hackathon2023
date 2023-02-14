import { Component, Input } from '@angular/core';
import { Packet } from '../packet/packet.component';

@Component({
  selector: 'app-packet-list',
  templateUrl: './packet-list.component.html',
  styleUrls: ['./packet-list.component.css']
})
export class PacketListComponent {
  @Input() packets!: Packet[];

  async ngOnInit(): Promise<void> {
    const packets = await fetch("http://127.0.0.1:3000/packets");
    this.packets = await packets.json();
  }
}

