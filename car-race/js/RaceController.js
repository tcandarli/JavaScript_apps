class RaceController{

    constructor(pContainer, pRacePiste){
        this.container = pContainer;
        this.racePiste = pRacePiste;
    }

    init(){

    }

    start() {

        const stopHandler = setInterval(() => {
            this.racePiste.refresh();

            this.racePiste.getCars()
                .forEach((pCar) => {
                    $(`#${pCar.getRacer().getName()}`).css("left", pCar.getLocation().left + "px");
                });

            let winners = this.racePiste.getCars().filter((pCar) => (pCar.getLocation().left - 20) >= this.racePiste.getFinishLocation().left);

            if(winners.length>0) {
                clearInterval(stopHandler);
                alert(winners[0].getRacer().getName() + " is winner");
            }

        }, 1*100);

    }

    createRacePiste() {
        let html = this.racePiste.getLanes().map((lane) =>
                `<section style="height: ${lane.getSize()}px">
                    <span id="${lane.getCar().getRacer().getName()}"
                        style="height: ${lane.getCar().getSize()}px;
                                width: ${lane.getCar().getSize()}px;
                                background-color: ${lane.getCar().getColor()}">
                         ${lane.getCar().getRacer().getName()}
                    </span>
                 </section>`).join("");

        this.container.html(html);
    }

}