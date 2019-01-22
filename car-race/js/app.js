
const racePiste = new RacePiste(new Location(10,10), new Location(500,10));

// Create cars and racers

const driverSchumaher = new Racer("Schumaher");
const carFerrari = new Car(driverSchumaher);
racePiste.addToRace(carFerrari);

const driverCarlos = new Racer("Carlos");
const carMcLaren = new Car(driverCarlos);
racePiste.addToRace(carMcLaren);

const driverRaikkonen = new Racer("Raikkonen");
const carSauber = new Car(driverRaikkonen);
racePiste.addToRace(carSauber);

const raceController = new RaceController($('#raceArea'), racePiste);

raceController.createRacePiste();
raceController.start();