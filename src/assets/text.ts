export const gameText = {
    name: "Lahjajahti",
    description: "Tervetuloa lahjajahtiin 2026! Tänä vuonna on jälleen luvassa hieman erilainen peli. Onnea matkaan!",
    f11: "Painakaa f11-näppäintä, niin peli avautuu koko ruudulle. \nTestatkaa myös äänet painamalla seuraavaa nappia. Laittakaa ääntä kovemmalle, kunnes kuuluu hyvin.",
    valmis: "Kun ääni toimii ja peli on koko ruudulla, voitte aloittaa.",
    huom: "HUOM! Internetin tai tekoälyn käyttö tehtävien ratkaisemiseen on kielletty ellei vinkki erikseen niin salli.",
    start: "Aloita",
}

export const introtexts = {
    text: "",
    text1: "Lahjat ovat hukassa jälleen kerran. Miten se on edes mahdollista? Ehkä teidän pitäisi vaihtaa lahjavastaavaa, jotta näin ei käy uudelleen joka joulu. Joka tapauksessa nyt se on jo myöhäistä.",
    text2: "Tontut tekivät ensimmäisen etsintäkierroksen, ja heidän mukaansa lahjat ovat paikassa, josta ne saa pois vain ripauksella joulutaikaa. He jättivät teille lyhyet ohjeet:",
    ohje1: "1. Pääskää muurin läpi jouluhuoneeseen. Tätä varten teidän on pidettävä mielessä jokaisen palikan vastaus.",
    ohje2: "2. Löytäkää jouluhuoneesta oikea taikaesine ja sen käyttötapa, jotta lahjat ilmestyvät takaisin.",
    lappunen: "",
}

export const wintexts = {
    text: "Huikeaa tiimityötä! Herätitte joulutaian henkiin.",
    lahjat: "Se siirsi joululahjanne __."

}

export const tasktexts = [
    {
        id: "for my convenience",
        question: "Mikä on lahjajahtipelin nimi?",
        answer: "for my convenience",
    },
    {
        id: "task1",
        question: "Mikä on lahjajahtipelin nimi?",
        answer: "porot",
    },
    {
        id: "task2",
        question: "Mul on kakskümmend hammast, aga ma ei söö mitte midagi. Ma teen su juuksed ilusaks. Kes ma olen?",
        answer: "bde",
    },
    {
        id: "task3",
        question: 'Korvatunturilla on käynyt kömmähdys, ja pukin reki on ryöstetty. Tontut ovat selvittäneet, että se on piilotettu joko joulukuusen alle, piparkakkutaloon, takan edustalle tai pukinkonttiin, mutta heillä on aikaa tarkistaa vain yksi paikka.  \nKaikki neljä roistoa saatiin kiinni, mutta vain kaksi heistä puhuu totta ja kaksi valehtelee. \n\nRoisto 1: Reki on piparkakkutalossa. \nRoisto 2: Reki ei ole joulukuusen alla eikä takan edustalla. \nRoisto 3: Reki ei ole piparkakkutalossa. \nRoisto 4: Reki on pukinkontissa. \n\nMissä reki on?',
        answer: "piparkakkutalo",
        answer2: "piparkakkutalossa",
    },
    {
        id: "task4",
        question: "Mul on kakskümmend hammast, aga ma ei söö mitte midagi. Ma teen su juuksed ilusaks. \n\nKes ma olen?",
        button: "sõnavara",
        sanasto: "ilus = kaunis, mitte midagi = ei mitään, juuksed = hiukset",
        ilus: "ilus",
        ilus2: "kaunis",
        midagi: "mitte midagi",
        midagi2: "ei mitään",
        answer: "kampa",
        answer2: "kamm",
    },
    {
        id: "task5",
        question: "Hei",
        answer: "pelasta joulu!",
    },
    {
        id: "task6",
        question: "Emmin huoneessa räjähti, mikä aiheutti erään paperin palasiksi repeämisen. Hukassa on 12 palaa. Vain kaksi nuorinta pelaajaa voivat löytää ne ja rakentaa niistä vastauksen.",
        answer: "kastelukannu",
    },
    {
        id: "task7",
        question: "Mikä on lahjajahtipelin nimi?",
        answer: "bacbbababbbbaabbcb",
    
    },
    {
        id: "task8",
        question: "Emmi on kyllästynyt. Kertokaa hänelle viihdyttävä tarina käyttäen näitä emojeja tässä järjestyksessä. Yksi pelaaja ei saa sanoa kahta lausetta peräkkäin, ja kaikkien pitää osallistua ainakin yhdellä lauseella. Jos Emmi tykkää tarinasta, saatte koodin.",
        answer: "tontut kurkkii!",
    },
    {
        id: "task9",
        question: "RISTIKKO",
        answer: "toljanteri",
    },
];

export const vinkit = [
    {
        id: "vinkki1",
        text: "Löydät vinkin pihlajasta."
    },
    {
        id: "vinkki2",
        text: "Tämä on toinen vinkki!"
    },
    {
        id: "vinkki3",
        text: "Tämä on kolmas vinkki!"
    },
    {
        id: "viimeinenvinkki",
        text: "Vinkkejä ei ole enää saatavilla."
    }
];

export const finaltasktexts = ["0 = K", "1 = P", "2 = A", "3 = I", "4 = N", "6 = T", "7 = R", "8 = H", "9 = E"];

export const tietovisa = [
    {
        id: 1,
        question: "Mikä on maailman suurin valtameri?",
        options: [
            { key: "A", text: "Atlantin valtameri" },
            { key: "B", text: "Tyynimeri" },
            { key: "C", text: "Intian valtameri" }
        ],
        correctOption: "B"
    },
    {
        id: 2,
        question: "Minä vuonna Suomi liittyi Euroopan unioniin?",
        options: [
            { key: "A", text: "1995" },
            { key: "B", text: "1991" },
            { key: "C", text: "2001" }
        ],
        correctOption: "A"
    },
    {
        id: 3,
        question: "Mikä on Kanadan pääkaupunki?",
        options: [
            { key: "A", text: "Toronto" },
            { key: "B", text: "Vancouver" },
            { key: "C", text: "Ottawa" }
        ],
        correctOption: "C"
    },
    {
        id: 4,
        question: "Kuka maalasi Mona Lisan?",
        options: [
            { key: "A", text: "Vincent van Gogh" },
            { key: "B", text: "Leonardo da Vinci" },
            { key: "C", text: "Pablo Picasso" }
        ],
        correctOption: "B"
    },
    {
        id: 5,
        question: "Mikä on ihmiskehon suurin elin?",
        options: [
            { key: "A", text: "Maksa" },
            { key: "B", text: "Iho" },
            { key: "C", text: "Keuhkot" }
        ],
        correctOption: "B"
    },
    {
        id: 6,
        question: "Mikä planeetta tunnetaan punaisena planeettana?",
        options: [
            { key: "A", text: "Mars" },
            { key: "B", text: "Venus" },
            { key: "C", text: "Jupiter" }
        ],
        correctOption: "A"
    },
    {
        id: 7,
        question: "Missä maassa sijaitsee Machu Picchu?",
        options: [
            { key: "A", text: "Meksikossa" },
            { key: "B", text: "Perussa" },
            { key: "C", text: "Chilessä" }
        ],
        correctOption: "B"
    },
    {
        id: 8,
        question: "Mikä on maailman pisin joki perinteisen yleisen määritelmän mukaan?",
        options: [
            { key: "A", text: "Niili" },
            { key: "B", text: "Amazon" },
            { key: "C", text: "Mississippi" }
        ],
        correctOption: "A"
    },
    {
        id: 9,
        question: "Kuka kirjoitti Seitsemän veljestä?",
        options: [
            { key: "A", text: "Mika Waltari" },
            { key: "B", text: "Aleksis Kivi" },
            { key: "C", text: "Väinö Linna" }
        ],
        correctOption: "B"
    },
    {
        id: 10,
        question: "Mikä alkuaine on kemialliselta merkiltään Ag?",
        options: [
            { key: "A", text: "Kulta" },
            { key: "B", text: "Hopea" },
            { key: "C", text: "Argon" }
        ],
        correctOption: "B"
    },
    {
        id: 11,
        question: "Kuinka monta pelaajaa yhdellä jalkapallojoukkueella on kentällä ottelun alussa?",
        options: [
            { key: "A", text: "10" },
            { key: "B", text: "11" },
            { key: "C", text: "12" }
        ],
        correctOption: "B"
    },
    {
        id: 12,
        question: "Mikä näistä maista ei kuulu Pohjoismaihin?",
        options: [
            { key: "A", text: "Islanti" },
            { key: "B", text: "Viro" },
            { key: "C", text: "Norja" }
        ],
        correctOption: "B"
    },
    {
        id: 13,
        question: "Kuka sävelsi Finlandian?",
        options: [
            { key: "A", text: "Jean Sibelius" },
            { key: "B", text: "Oskar Merikanto" },
            { key: "C", text: "Toivo Kuula" }
        ],
        correctOption: "A"
    },
    {
        id: 14,
        question: "Mikä on Australian valuutta?",
        options: [
            { key: "A", text: "Australian dollari" },
            { key: "B", text: "Euro" },
            { key: "C", text: "Punta" }
        ],
        correctOption: "A"
    },
    {
        id: 15,
        question: "Mikä eläin on maailman suurin nisäkäs?",
        options: [
            { key: "A", text: "Afrikannorsu" },
            { key: "B", text: "Sinivalas" },
            { key: "C", text: "Kirahvi" }
        ],
        correctOption: "B"
    },
    {
        id: 16,
        question: "Missä kaupungissa sijaitsee Colosseum?",
        options: [
            { key: "A", text: "Ateenassa" },
            { key: "B", text: "Roomassa" },
            { key: "C", text: "Istanbulissa" }
        ],
        correctOption: "B"
    },
    {
        id: 17,
        question: "Mitä kaasua kasvit sitovat yhteyttämisessä?",
        options: [
            { key: "A", text: "Happea" },
            { key: "B", text: "Typpeä" },
            { key: "C", text: "Hiilidioksidia" }
        ],
        correctOption: "C"
    },
    {
        id: 18,
        question: "Mikä valtio tunnetaan nimellä Nousevan auringon maa?",
        options: [
            { key: "A", text: "Kiina" },
            { key: "B", text: "Japani" },
            { key: "C", text: "Thaimaa" }
        ],
        correctOption: "B"
    }
];