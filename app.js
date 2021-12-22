import $ from "jquery";
import { ApplicationBase } from "./application-base";
import { HomePage } from "./Firstpage.js";
import { FleetDataService } from "./services/fleet-data-service.js";

export class App extends ApplicationBase {
  constructor() {
    super("Internet Programming");
    this.dataService = new FleetDataService();
    let url = "https://ip-uacs.herokuapp.com/api/Fleet";
    this.getData(url).then((fleet) => {
      this.dataService.loadData(fleet);

      console.log(this.dataService.filterCarsByMake("Uber"));
      console.log(this.dataService.getCarByLicense("AT9900"));
      console.log(this.dataService.getCarsSortedByLicense());
    });

    this.addRoute("Home", new HomePage(), true);
    this.addRoute("Cars", new CarsPage());
    this.addRoute("AddCar", new AddCarPage(), false, false);
    this.addRoute("Drones", new DronesPage());
    this.addRoute("AddDrone", new AddDronePage(), false, false);
  }
}

export let application = new App();
application.show($("body"));
