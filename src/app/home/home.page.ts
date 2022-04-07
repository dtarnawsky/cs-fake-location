import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fakeLocation = 'Unknown';

  constructor(private platform: Platform) { }

  ngOnInit(): void {

    if (!this.platform.is('android')) {
      this.fakeLocation = 'Not available on this platform';
    }
    (window as any).plugins.fakeLocation.check((isEnabledMockLocations: boolean) => {
      this.fakeLocation = isEnabledMockLocations ? 'Yes' : 'No';
    });
  }

}
