var header = document.getElementById('header');
var paragraph = document.getElementById('paragraph');
var global_photo = document.getElementById('global_photo');


function download(file){
    if(file === "Pokemon Platinum"){
        document.getElementById('download').href = 'game/game_files/Pokemon Platinum Version (Ru).nds';
    }else if(file === "PVZ"){
        document.getElementById('download').href = 'game/game_files/PVZrus_dub.nds';
    }else if(file === "Mechanic Master"){
        document.getElementById('download').href = 'game/game_files/Mechanic Master [U] [T+Rus_duckbill].nds';
    }else if(file === "Final Fantasy IV"){
        document.getElementById('download').href = 'game/game_files/Final Fantasy IV [U] [UNDUB(FIXED)] [T+RUS_owls-group_v1.02].nds';
    }else if(file === "Final Fantasy III"){
        document.getElementById('download').href = 'game/game_files/Final Fantasy III [U] [T+Rus_kareg_v1.01].nds';
    }else if(file === "Logic Machines"){
        document.getElementById('download').href = 'game/game_files/Logic Machines (USA) (En,Fr,Es).nds';
    }else if(file === "Desktop Tower Defense"){
        document.getElementById('download').href = 'game/game_files/Desktop Tower Defense (USA).nds';
    }


    if(file === "MelonDS"){
        document.getElementById('download').href = 'emulator/emulator_files/melonDS.exe';
    }
}


function MelonDS(){
    header.innerHTML = "MelonDS";
    paragraph.innerHTML = "Emulator for Nintendo DS games.";
    global_photo.src = 'emulator/emulator_img/melonDS.jpg';
    download("MelonDS");
}



function Pokemon_Platinum(){
    header.innerHTML = "Pokemon Platinum";
    paragraph.innerHTML = "игра про покемонов.";
    global_photo.src = 'game/game_img/Pokemon Platinum.jpg';
    download("Pokemon Platinum");
}

function PVZ(){
    header.innerHTML = "Plants vs. Zombies";
    paragraph.innerHTML = "игра про растения и зомби.";
    global_photo.src = 'game/game_img/PVZ.jpg';
    download("PVZ");
}

function Mechanic_Master(){
    header.innerHTML = "Mechanic Master";
    paragraph.innerHTML = "игра про механизмы.";
    global_photo.src = 'game/game_img/Mechanic Master.jpg';
    download("Mechanic Master");
}

function Final_Fantasy_IV(){
    header.innerHTML = "Final Fantasy IV";
    paragraph.innerHTML = "класика RPG retro игр.";
    global_photo.src = 'game/game_img/Final Fantasy IV.jpg';
    download("Final Fantasy IV");
}

function Final_Fantasy_III(){
    header.innerHTML = "Final Fantasy III";
    paragraph.innerHTML = "класика RPG retro игр.";
    global_photo.src = 'game/game_img/Final Fantasy III.jpg';
    download("Final Fantasy III");
}

function Logic_Machines(){
    header.innerHTML = "Logic Machines";
    paragraph.innerHTML = "игра головломка в сетенге пустыне.";
    global_photo.src = 'game/game_img/Logic Machines.jpg';
    download("Logic Machines");
}

function Desktop_Tower_Defense(){
    header.innerHTML = "Desktop Tower Defense";
    paragraph.innerHTML = "игра Тавер дефенц.";
    global_photo.src = 'game/game_img/Desktop Tower Defense.jpg';
    download("Desktop Tower Defense");
}