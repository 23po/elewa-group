import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-investing-in-elewa',
  templateUrl: './investing-in-elewa.component.html',
  styleUrls: ['./investing-in-elewa.component.scss'],
})
export class InvestingInElewaComponent {

  @Input() imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/f2b2ea6afc31e9720638da1bbd0d2d69_p58coq.png';
  @Input() paragraphTexts : string[] = ["From time to time we offer investment opportuinties"];
  @Input() titleText = 'Investing in Elewa NV';
  @Input() imagePlacement = 'left';
  @Input() backgroundColor = 'white';
}

