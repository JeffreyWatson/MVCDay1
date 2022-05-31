import { RacerController } from "./Controllers/RacerController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  racerController = new RacerController();
}

window["app"] = new App();
