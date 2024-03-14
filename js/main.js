const StandContainer = document.querySelector('.stand-container'); // Obtener el contenedor de stands

function fetchStands(part) {
    switch(part) {
        case 1:
            for(let indice in standspart1) {
                createStand(indice, standspart1);
            }
            break;
        case 2:
            for(let indice in standspart2) {
                createStand(indice, standspart2);
            }
            break;
        case 3:
            for(let indice in standspart3) {
                createStand(indice, standspart3);
            }
            break;
        case 4:
            for(let indice in standspart4) {
                createStand(indice, standspart4);
            }
            break;
        case 5:
            for(let indice in standspart5) {
                createStand(indice, standspart5);
            }
            break;
        case 6:
            for(let indice in standspart6) {
                createStand(indice, standspart6);
            }
            break;

        case 0:
            
            break;
    }
}

function createStand(inx, stands) {
    const flipcard = document.createElement('div');
    flipcard.classList.add('flip-card');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    flipcard.appendChild(cardContainer);

    const card = document.createElement('div');
    card.classList.add('stand-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = stands[inx].address;

    spriteContainer.appendChild(sprite);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = stands[inx].name;

    card.appendChild(spriteContainer);
    card.appendChild(name);

    const cardBack =  document.createElement('div');
    cardBack.classList.add('stand-block-back');

    const t1 = document.createElement('h3');
    t1.textContent = 'Usuario';
    const User = document.createElement('p');
    User.textContent = stands[inx].user;

    const t2 = document.createElement('h3');
    t2.textContent = 'Primera Aparición';
    const firstapparition = document.createElement('p');
    firstapparition.textContent = stands[inx].part;

    const t3 = document.createElement('h3');
    t3.textContent = 'Referencia';

    const reference = document.createElement('ul');

    for(let i = 0; i < stands[inx].reference.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = stands[inx].reference[i];
        a.href = stands[inx].link[i];
        a.target = "_blank";
        li.appendChild(a);
        reference.appendChild(li);
    }

    cardBack.appendChild(t1);
    cardBack.appendChild(User);
    cardBack.appendChild(t2);
    cardBack.appendChild(firstapparition);
    cardBack.appendChild(t3);
    cardBack.appendChild(reference);

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    StandContainer.appendChild(flipcard);
}

function clearStands() {
    while (StandContainer.firstChild) {
        StandContainer.removeChild(StandContainer.firstChild);
    }
}

function allStands(){}



const standspart1 = [
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'The World',user: 'DIO', part: 'Stardust Crusaders', address: './img/TheWord.webp', reference: ['El Mundo (carta del tarot)', 'Holy Diver (canciones de DIO)'], link: ['https://en.wikipedia.org/wiki/El_Mundo_(Tarot)','https://open.spotify.com/intl-es/track/3MO8bZe6fOMsn78q83m8Rw?si=8528faa08f6c4e39']},
    {name:'Hermit Purple',user: 'Joseph Joestar', part: 'Stardust Crusaders', address: './img/HermitPurple.webp', reference: ['El Ermitaño (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Hierophant Green',user: 'Noriaki Kakyoin', part: 'Stardust Crusaders', address: './img/HierophantGreen.png', reference: ['El Hierofante (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Ebony Devil',user: 'Devo', part: 'Stardust Crusaders', address: './img/EbonyDevil.webp', reference: ['El Diablo (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Silver Chariot',user: 'Jean Pierre Polnareff', part: 'Stardust Crusaders', address: './img/SilverChariot.png', reference: ['El Carro (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Cream',user: 'Vanilla Ice', part: 'Stardust Crusaders', address: './img/Cream.png', reference: ['Cream (banda británica)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Anubis',user: 'Caravan Serai (usuario original)', part: 'Stardust Crusaders', address: './img/anubis.webp', reference: ['Anubis (deidad egipcia)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
];

const standspart2 = [
    {name:'Killer Queen',user: 'Yoshikage Kira', part: 'Diamond Is Unbreakable', address: './img/KillerQueen.webp', reference: ['Killer Queen (canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/300YN8ebGB90nDuzgz0f3O?si=e01eb3fcf5414348']},
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Crazy Diamond',user: 'Josuke Higashikata', part: 'Diamond Is Unbreakabl', address: './img/CrazyDiamond.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Echoes',user: 'Koichi Hirose', part: 'Diamond Is Unbreakabl', address: './img/Echoes.webp', reference: ['Echoes (canción de Pink Floyd)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Hermit Purple',user: 'Joseph Joestar', part: 'Stardust Crusaders', address: './img/HermitPurple.webp', reference: ['El Ermitaño (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Heaven's Door",user: 'Rohan Kishibe', part: 'Diamond Is Unbreakabl', address: './img/HeavenDoor.png', reference: ["Knockin' on Heaven's Door (canción de Bob Dylan)"], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"The Hand",user: 'Okuyasu Nijimura', part: 'Diamond Is Unbreakabl', address: './img/Hand.png', reference: ['The Band (banda canadiense)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Cheap Trick",user: 'Masazo Kinoto', part: 'Diamond Is Unbreakabl', address: './img/CheapTrick.webp', reference: ['Cheap Trick (banda de rock estadounidense)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
];

const standspart3 = [
    {name:'King Crimson',user: 'Diavolo/Doppio', part: 'Vento Aureo', address: './img/KingCrimson.png', reference: ['King Crimson','In the Court of the Crimson King','Epitaph'], link: ['https://open.spotify.com/intl-es/artist/7M1FPw29m5FbicYzS2xdpi?si=StWbi01nQA6yCKy7DWHzog','https://open.spotify.com/search/In%20the%20Court%20of%20the%20Crimson%20King','https://open.spotify.com/intl-es/track/5j4fSU12bw4G6JDVPU7JTB?si=006fbc740d1342b9']},
    {name:'Gold Experience',user: 'Giorno Giovanna', part: 'Vento Aureo', address: './img/GoldenExp.webp', reference: ['The Gold Experience (álbum de Prince)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Chariot Requiem',user: 'Jean Pierre Polnareff', part: 'Vento Aureo', address: './img/ChariotRequiem.png', reference: ['Silver Chariot (forma anterior)El Carro (carta del Tarot)Réquiem (composición de Mozart)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Echoes',user: 'Koichi Hirose', part: 'Diamond Is Unbreakabl', address: './img/Echoes.webp', reference: ['Echoes (canción de Pink Floyd)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Purple Haze',user: 'Pannacotta Fugo', part: 'Vento Aureo', address: './img/PurpleHaze.png', reference: ['Purple Haze (canción de Jimi Hendrix)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Spice Girl',user: 'Trish Una', part: 'Vento Aureo', address: './img/SpiceGirl.png', reference: ['Spice Girls (banda británica)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Silver Chariot',user: 'Jean Pierre Polnareff', part: 'Stardust Crusaders', address: './img/SilverChariot.png', reference: ['El Carro (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Gold Experience Requiem',user: 'Giorno Giovanna', part: 'Vento Aureo', address: './img/GoldenExpRequiem.png', reference: ['Gold Experience (forma anterior)The Golden Experience (álbum de Prince)Requiem (composición de Mozart)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
];

const standspart4 = [
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Made in Heaven',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/MadeInHeaven.png', reference: ['Made in Heaven (canción de Freddie Mercury y álbum de Queen)'], link: ['https://open.spotify.com/intl-es/track/4NTMIFWtDXnWN4hDSBlKOf?si=c8fcc8b8b38a41b4']},
    {name:'C-Moon',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/C-MOON.png', reference: ['Made in Heaven (canción de Freddie Mercury y álbum de Queen)'], link: ['https://open.spotify.com/intl-es/track/6r6qv2faxlb5TOfVp8p44x?si=28e5a388e9ed4de6']},
    {name:'Whitesnake',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/Whitesnake.png', reference: ['Whitesnake(Banda)'], link: ['https://www.google.com/search?q=Whitesnake+banda&sca_esv=6917f8fced87079d&sxsrf=ACQVn0-NrWG7vfXqLIS6KGwkglMvoaEWiw%3A1709151720289&ei=6JXfZaCYEb2NwbkP_OKeqAY&ved=0ahUKEwigrJ6p7s6EAxW9RjABHXyxB2UQ4dUDCBA&uact=5&oq=Whitesnake+banda&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFdoaXRlc25ha2UgYmFuZGEyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgKSMswUL4dWPgucAZ4AZABAJgB2wGgAeIMqgEGMC4xMC4xuAEDyAEA-AEC-AEBmAIQoAKsDMICChAAGEcY1gQYsAPCAgQQABgewgIGEAAYCBgewgIIEAAYgAQYywHCAggQLhiABBjLAcICCxAuGIMBGLEDGIAEwgIKEAAYgAQYFBiHAsICBRAuGIAEwgIaEC4YgwEYsQMYgAQYlwUY3AQY3gQY4ATYAQHCAggQLhjLARiABMICFBAuGIAEGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYIugYGCAEQARgUkgcFNi45LjGgB7Fw&sclient=gws-wiz-serp']},
    {name:'Stone Free',user: 'Jolyne Cujoh', part: 'Stone Ocean', address: './img/StoneFree.png', reference: ['Stone Free(Canción de Jimi Hendrix)'], link: ['https://open.spotify.com/intl-es/track/544FmlHVkzNrnkmCfYHLVb?si=5810d3d67f934882']},
    {name:'Weather Report',user: 'Emporio Alniño', part: 'Stone Ocean', address: './img/WeatherReport.png', reference: ['Weather Report(Banda)'], link: ['https://open.spotify.com/intl-es/artist/162DCkd8aDKwvjBb74Gu8b?si=W9MhmgIgTOa1uQnqYQBYNw']},
    {name:'Diver Down',user: 'Narciso Anasui', part: 'Stone Ocean', address: './img/DivePanausi.webp', reference: ['Diver Down(album)'], link: ['https://open.spotify.com/intl-es/album/6Ft0JILsEo5ZP2ddjECznc?si=-sRZanm2TZOD5ryAkj9tng']},
    {name:'Bohemian Rhapsody',user: 'Ungalo', part: 'Stone Ocean', address: './img/cualquiera.webp', reference: ['Bohemian Rhapsody(Canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/1BvDpRRJj7aYJfYUrxyH5N?si=7328bb348913485d']},
];

const standspart5 = [
    {name:'Dirty Deeds Done Dirt Cheap',user: 'Funny Valentine', part: 'Steel Ball Run', address: './img/Dirty.webp', reference: ['Dirty Deeds Done Dirt Cheap(Cancion y album de AC/DC)', "Love Train(Canción de The O'Jays)"], link: ['https://open.spotify.com/intl-es/track/2d4e45fmUnguxh6yqC7gNT?si=02ca8cfe397c4a1b', 'https://open.spotify.com/intl-es/track/5QlxJMuPUxn2J2rcudSK9Z?si=59a4d85a975d4e3f']},
    {name:'Tusk',user: 'Johnny Joestar', part: 'Steel Ball Run', address: './img/Tusk.webp', reference: ['Tusk(Cancion y album)'], link: ['https://open.spotify.com/intl-es/track/0iINibMKtoS8duvexsqnm5?si=c9eefae474d0402f']},
    {name:'Scary Monsters',user: 'Diego Brando, Dr. Ferdinand', part: 'Steel Ball Run', address: './img/ScaryMonsters.webp', reference: ['Scary Monsters(Album)'], link: ['https://open.spotify.com/intl-es/album/5fxvWHvIDPIALfTfRiwyB0?si=skba-MvbTkqUBy0X_D1eMA']},
    {name:'Ball Breaker',user: 'Gyro Zeppeli', part: 'Steel Ball Run', address: './img/BallBreaker.png', reference: ['Ballbreaker(Album y cancion de AC/DC)'], link: ['https://open.spotify.com/intl-es/track/1TJX5KxBVqwqPPUPH16MFL?si=ad7e6feb30cb4960']},
    {name:'The Word',user: 'Diego Brando de Otro Universo', part: 'Steel Ball Run', address: './img/THEWORLD.jpg', reference: ['THE WORD'], link: ['https://jojo.fandom.com/es/wiki/The_World']},
    {name:'Catch the Rainbow',user: 'Blackmore', part: 'Steel Ball Run', address: './img/AtrapaunArcoiris.webp', reference: ['Catch the Rainbow(Cancion de rainbow)'], link: ['https://open.spotify.com/intl-es/track/1ZmUyiAn3nqzFaNQHpPp7z?si=c4f312f1860d458c']},
    {name:'Mandom',user: 'Ringo Roadagain', part: 'Steel Ball Run', address: './img/Mandom.webp', reference: ['Mandom-Lovers of the World'], link: ['https://open.spotify.com/intl-es/track/5JJsXhjV0yQss1dAv28sSU?si=c31ddb026adc4068']},
    {name:'Hey Ya!',user: 'Pocoloco', part: 'Steel Ball Run', address: './img/HeyYoAv.webp', reference: ['Hey Ya!(Cancion de Outkast)'], link: ['https://open.spotify.com/intl-es/track/4lgacVkp03sUCDEItoksAS?si=c4a451a2ad9a41a3']},
];

const standspart6 = [
    {name:'Wonder of U',user: 'Tooru', part: 'JoJolion ', address: './img/wonderofyou.png', reference: ['The Wonder of You(Cancion de Elvis Presley)'], link: ['https://open.spotify.com/intl-es/track/0LfJkvPNCNEMLpZJgDQiV1?si=9f3abffdc8474148']},
    {name:'Soft & Wet',user: 'Josefumi Kujo', part: 'JoJolion ', address: './img/Soft&Wet.png', reference: ['Soft and We'], link: ['https://open.spotify.com/intl-es/track/0GDM5mJEisxmmyYGuC6Cla?si=e35dde1ced2f4588']},
    {name:'Tusk',user: 'Johnny Joestar', part: 'Steel Ball Run', address: './img/Tusk.webp', reference: ['Tusk(Cancion y album)'], link: ['https://open.spotify.com/intl-es/track/0iINibMKtoS8duvexsqnm5?si=c9eefae474d0402f']},
    {name:'Killer Queen',user: 'Yoshikage Kira', part: 'Diamond Is Unbreakable', address: './img/Kq.jpg', reference: ['Killer Queen (canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/300YN8ebGB90nDuzgz0f3O?si=e01eb3fcf5414348']},
    {name:'Born This Way',user: 'Kei Nijimura', part: 'JoJolion ', address: './img/Bornthisway.webp', reference: ['Born This Way(Cancion de lady gaga)'], link: ['https://open.spotify.com/intl-es/track/6OGNsH3GjnEZOc6mAqljrB?si=4ca68b9273c244b5']},
    {name:'Speed King',user: 'Jobin Higashikata', part: 'JoJolion ', address: './img/SpeedKing.png', reference: ['Speed King(Cancion de Deep Purple)'], link: ['https://open.spotify.com/intl-es/track/3RDB2QvuBEGv7DTK2SnMwO?si=05ce62dad7654359']},
    {name:'Nut King Call',user: 'Joshu Higashikata', part: 'JoJolion ', address: './img/NutKingCall.webp', reference: ['Nat King Cole'], link: ['https://open.spotify.com/intl-es/artist/7v4imS0moSyGdXyLgVTIV7?si=3F4UZladR4-9Ag4ibsvCdw']},
    {name:'King Nothing',user: 'Norisuke Higashikata IV', part: 'JoJolion ', address: './img/KingNothing.png', reference: ['King Nothing'], link: ['https://open.spotify.com/intl-es/track/30RKGpKHqr7ytcTljw436k?si=a9253661fe6e4018']},
];


//plantilla: {name:'',user: '', part: 'JoJolion ', address: './img/', reference: [''], link: ['']},


const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');
const a6 = document.querySelector('#a6');
const all = document.querySelector('#all');

a1.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(1);
});

a2.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(2);
});

a3.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(3);
});

a4.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(4);
});

a5.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(5);
});

a6.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(6);
});

all.addEventListener('click', () => {
    event.preventDefault();
    clearStands();
    fetchStands(0);
});



