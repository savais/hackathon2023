import { Component, Input } from '@angular/core';
import { API_URL } from '../app.component';
import { Packet } from '../packet/packet.component';

@Component({
  selector: 'app-packet-list',
  templateUrl: './packet-list.component.html',
  styleUrls: ['./packet-list.component.css']
})
export class PacketListComponent {
  @Input() packets!: Packet[];
  API_URL = API_URL

  async ngOnInit(): Promise<void> {
    const packets = await fetch(this.API_URL + "/packets");
    this.packets = await packets.json();
  }

}

