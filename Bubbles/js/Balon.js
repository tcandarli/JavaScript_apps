class Balon {
    constructor(ebat, renk, location, durum) {
        this.ebat = ebat;
        this.renk = renk;
        this.durum = DURUM.DOKUNULMAMIS;
        this.location = location;
    }

    patla() {

        this.durum = DURUM.DOKUNULMAMIS;
    }

    sis() {

        this.durum = DURUM[1];
    }

    hareketEt(location) {

        this.location = location;

    }



}