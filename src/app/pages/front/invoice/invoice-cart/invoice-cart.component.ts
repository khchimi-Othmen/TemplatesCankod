import {Component, OnInit} from '@angular/core';
import {CommandDto} from "../../../../dto/CommandDto";
import {CommandService} from "../../../../services/command.service";
import {timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-cart',
  templateUrl: './invoice-cart.component.html',
  styleUrls: ['./invoice-cart.component.css']
})
export class InvoiceCartComponent implements OnInit {

  commandDto: CommandDto = new CommandDto();
  totalCost: number = 10;

  constructor(private commandService: CommandService,
              private router: Router) { }

  ngOnInit(): void {
    // Call the API to get the initial total cost
    this.commandService.calculateTotalCostForPendingCommands().subscribe((data) => {
      this.totalCost = data;
    }, error => {
      console.log(error);
    });

    // Use a timer to update the total cost every 5 seconds
    timer(0, 3000).subscribe(() => {
      this.commandService.calculateTotalCostForPendingCommands().subscribe((data) => {
        this.totalCost = data;
      }, error => {
        console.log(error);
      });
    });
  }

  onCancelClick() {
    this.commandService.cancelCommandWithoutId().subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  finalizeCommand() {
    this.commandService.finalizeCommand().subscribe(() => {
      console.log('Command finalized successfully');
      this.router.navigate(['user/store']); // Redirect to the store page directly
    }, (error) => {
      console.error('Error finalizing command:', error);
    });
  }


}
