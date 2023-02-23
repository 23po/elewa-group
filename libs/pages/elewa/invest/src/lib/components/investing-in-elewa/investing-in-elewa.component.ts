import { Component, Input } from '@angular/core';
import { ButtonsModule } from '@elewa-group/features/components/buttons';


@Component({
  selector: 'elewa-group-investing-in-elewa',
  templateUrl: './investing-in-elewa.component.html',
  styleUrls: ['./investing-in-elewa.component.scss'],
})
export class InvestingInElewaComponent  {

  @Input() imageURL = '';
  @Input() paragraphTexts : string[] = [];
  @Input() titleText = '';
  @Input() imagePlacement = '';
  @Input() backgroundColor = '';
}

  // imageURL = '';
  //  paragraphTexts : ["You can use the git reset command to undo a git pull operation. The git reset command resets your repository to a particular point in its history. If you made changes to files before running git pull that you did not commit, those changes will be gone."];
  //  titleText = '';
  //  imagePlacement = '';
  //  backgroundColor = '';




