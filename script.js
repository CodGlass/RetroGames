let header = document.getElementById('nagl');
let p = document.getElementById('paragraf');
let img = document.getElementById('foto_game');
let downloadd = document.getElementById('download');

function activate_kod(){
    header.innerHTML = "Retro Arcade Hub";
    p.innerHTML = "Kod przyjety.";
    img.src = "logo.jpg";
    download();
}

function download(files){
    let kod = document.getElementById('kod').value;

    if(kod == "CodGlass"){
        downloadd.href = 'test_retro_game.zip';
    }

    if(files == "PVZ"){
        downloadd.href = 'game/game_files/PVZrus_dub.zip';
    }else if(files == "PPV"){
        downloadd.href = 'game/game_files/Pokemon Platinum Version.zip';
    }else if(files == "AT"){
        downloadd.href = 'game/game_files/Adventure Time Hey Ice King Whyd you Steal our Garbage!.zip';
    }else if(files == "Castl"){
        downloadd.href = 'game/game_files/Castlevania - Portrait of Ruin.zip';
    }else if(files == "DQ4"){
        downloadd.href = 'game/game_files/Dragon Quest IV - Chapters of the Chosen.zip';
    }else if(files == "FF3"){
        downloadd.href = 'game/game_files/Final Fantasy III.zip';
    }else if(files == "FF4"){
        downloadd.href = 'game/game_files/Final Fantasy IV.zip';
    }else if(files == "MM"){
        downloadd.href = 'game/game_files/Mechanic Master.zip';
    }

    if(files == "MelonDS"){
        downloadd.href = 'emulator/emulator_files/melonDS.zip';
    }
}

function MelonDS(){
    header.innerHTML = "MelonDS";
    p.innerHTML = "melonDS is a free, open-source Nintendo DS emulator designed to be fast, highly accurate, and easy to use.";
    img.src = "emulator/emulator_img/MelonDS.jpg";
    download("MelonDS");
}


function PVZ(){
    header.innerHTML = "Plants vs. Zombies";
    p.innerHTML = "Plants vs. Zombies is a highly popular tower defense video game developed and published by PopCap Games. First released in 2009, the game tasks players with defending their suburban home from an impending zombie apocalypse using a variety of sentient, combative plants.";
    img.src = "game/game_img/PVZ.jpg";
    download("PVZ");
}
function Pokemon_Platinum(){
    header.innerHTML = "Pokemon Platinum";
    p.innerHTML = "Pokémon Platinum Version is a critically acclaimed 2008 role-playing video game developed by Game Freak and published by Nintendo for the Nintendo DS. It is an enhanced remake and the definitive third version of Pokémon Diamond and Pearl, set in the mythology-rich Sinnoh region.";
    img.src = "game/game_img/Pokemon Platinum.jpg";
    download("PPV");
}
function Adventure_Time(){
    header.innerHTML = "Adventure Time";
    p.innerHTML = "Обзор от ИИAdventure Time (Время Приключений) — это культовый американский анимационный сериал, созданный Пендлтоном Уордом для канала Cartoon Network.";
    img.src = "game/game_img/Adventure Time.jpg";
    download("AT");
}
function Castlevania(){
    header.innerHTML = "Castlevania";
    p.innerHTML = "Castlevania: Portrait of Ruin is a 2006 action role-playing platform game for the Nintendo DS, set in 1944 Europe during World War II.";
    img.src = "game/game_img/Castlevania.jpg";
    download("Castl");
}
function Dragon_Quest_4(){
    header.innerHTML = "Dragon Quest IV";
    p.innerHTML = "Dragon Quest IV: Chapters of the Chosen (originally released in North America as Dragon Warrior IV) is a classic role-playing video game developed by Chunsoft and published by Enix. It was originally released for the Nintendo Entertainment System (NES) in 1990 (Japan) and 1992 (North America), and it kicks off the famous Zenithian Trilogy within the franchise.";
    img.src = "game/game_img/Dragon Quest 4.jpg";
    download("DQ4");
}
function Final_Fantasy_3(){
    header.innerHTML = "Final Fantasy III";
    p.innerHTML = "Final Fantasy III[a] is a 1990 role-playing video game developed and published by Square for the Family Computer. The third installment in the Final Fantasy series, it follows four orphans from the village of Ur who are chosen by the world's crystals to defeat a great evil and return balance to the world. The gameplay returns to the traditional combat system of the original game, and adds a job system allowing players to switch between character classes with unique abilities.";
    img.src = "game/game_img/Final Fantasy 3.jpg";
    download("FF3");
}
function Final_Fantasy_4(){
    header.innerHTML = "Final Fantasy IV";
    p.innerHTML = "Final Fantasy IV,[a] titled Final Fantasy II in its initial North American release, is a 1991 role-playing video game developed and published by Square for the Super Nintendo Entertainment System. It is the fourth main installment of the Final Fantasy series.";
    img.src = "game/game_img/Final Fantasy 4.jpg";
    download("FF4");
}
function Mechanic_Master(){
    header.innerHTML = "Mechanic Master";
    p.innerHTML = "Mechanic Master is a stylus-based puzzle game for the Nintendo DS released by Midway in October 2008.";
    img.src = "game/game_img/Mechanical Master.jpg";
    download("MM");
}