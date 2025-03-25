import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'youtube-storage';

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Attempting to access iframe content...');
    const iframe = document.querySelector<HTMLIFrameElement>('#youtube-player');

    if (iframe) {
      try {
        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDocument) {
          const endScreenElement =
            iframeDocument.querySelector('.html5-endscreen');
          console.log('Found .html5-endscreen element:', endScreenElement);
        } else {
          console.log('Unable to access iframe document.');
        }
      } catch (error) {
        console.error('Error accessing iframe content:', error);
      }
    } else {
      console.log('Iframe not found.');
    }
  }
}
