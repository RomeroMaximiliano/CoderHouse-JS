//Objets and Array's

//Procesadores AMD 

function ProceAMD (id , nombre , precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img

}

const Ryzen53600 = new ProceAMD ( 1 , "Micro AMD Ryzen 5 3600 4.2Ghz" , 31.641 , `ryzen5.jpg`);
const Ryzen55600G = new ProceAMD ( 2 , "Micro AMD Ryzen 5 5600G 4.4Ghz" , 36.858 ,`ryzen5.jpg`);
const Ryzen74750G = new ProceAMD ( 3 , "Micro AMD Ryzen 7 4750G Pro 3.6Ghz AM4" , 50.092 ,`ryzen7.jpg`);
const Ryzen75700X = new ProceAMD ( 4 , "Micro AMD Ryzen 7 5700X 4.6Ghz AM4" , 57.577 ,`ryzen7.jpg`);
const Ryzen75700G = new ProceAMD ( 5 , "Micro AMD Ryzen 7 5700G 4.6Ghz AM4" , 60.924 ,`ryzen7.jpg`);
const Ryzen95950X = new ProceAMD ( 6, "Micro AMD Ryzen 9 5950X 4.9Ghz AM4" , 148.135 ,`ryzen9.jpg`);
const Ryzen75800X3D = new ProceAMD ( 7 , "Micro MAD Ryzen 7 5800X3D 4.7Ghz AM4" , 101.852 ,`ryzen7.jpg`);
const Ryzen55500 = new ProceAMD ( 8 , "Micro AMD Ryzen 5 5500 4.2Ghz AM4" , 33.689 ,`ryzen5.jpg`);

let arrayProceAMD = [Ryzen53600,Ryzen55500,Ryzen55600G,Ryzen74750G,Ryzen75700G,Ryzen75700X,Ryzen75800X3D,Ryzen95950X]

//Mothers AMD

function MotherAMD (id, nombre , precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const MotherAmdA320M = new MotherAMD ( 9 , "MotherBoard MSI A320M A Pro Max AM4" , 10.276 ,`motheramda320m.jpg`)
const MotherAmdA520H = new MotherAMD ( 10 , "MotherBoard Gigabyte A520M H AM4" , 15.871 ,`motheramda520h.jpg`)
const MotherAmdN450M = new MotherAMD ( 11 , "MotherBoard Asus N450M-A Prime II AM4" , 17.698 ,`motheramdn450m.jpg`)
const MotherAmdB450 = new MotherAMD ( 12 , "MotherBoard Gigabyte B450 Aorus M AM4" , 22.921 ,`motheramdb450.jpg`)
const MotherAmdX750 = new MotherAMD ( 13 , "MotherBoard Asus X570 P Prime AM4" , 37.268 ,`motheramdx750.jpg`)
const MotherAmdB550M = new MotherAMD ( 14 , "MotherBoard Gigabyte B550M Aorus Elite AM4" , 39.419 ,`motheramdb550m.jpg`)
const MotherAmdX570S = new MotherAMD ( 15 , "MotherBoard Gigabyte X570S Gaming X AM4" , 68.623 ,`motheramdx570s.jpg`)
const MotherAmdA520M = new MotherAMD ( 16 , "MotherBoard MSI A520M Pro VH AM4" , 13.634 ,`motheramda520m.jpg`)

let arrayMotherAMD = [MotherAmdA320M,MotherAmdA520M,MotherAmdB450,MotherAmdB550M,MotherAmdN450M,MotherAmdX570S,MotherAmdX750]


//Procesadores Intel

function ProceIntel (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const IntelG5900 = new ProceIntel ( 17 , "Micro Intel Celeron G5900 " , 8.338 ,`intelg5900.jpg`)
const IntelG6900 = new ProceIntel ( 18 , "Micro Intel Celeron G6900 AlderLake" , 12.524 ,`intelg6900.jpg`)
const IntelG6400 = new ProceIntel ( 19 , "Micro Intel Pentium G6400 4.0Ghz" , 13.029 ,`intelg6400.jpg`)
const IntelI310F = new ProceIntel ( 20 , "Micro Intel I3-10100F 4.3Ghz" , 16.779 ,`intelg7400.jpg`)
const IntelPenG7400 = new ProceIntel (21 , "Micro Intel Pentium G7400 3.7Ghz" , 17.878 ,`intelg7400.jpg`)
const IntelI510F = new ProceIntel ( 22 , "Micro Intel I5 10400F 4.3Ghz" , 30.924 ,`inteli510f.jpg`)
const IntelI710F = new ProceIntel ( 23 , "Micro Intel I7-10700F 4.8Ghz 16Mb" , 58.927 ,`inteli710f.jpg`)
const IntelI711K = new ProceIntel ( 24 , "Micro Intel I7-11700K 5.0Ghz 16Mb" , 79.493 ,`inteli710f.jpg`)
const IntelI512K = new ProceIntel ( 25 , "Micro Intel I5-12600K 4.9Ghz 20Mb" , 68.316 ,`inteli512k.jpg`)
const IntelI910F = new ProceIntel ( 26 , "Micro Intel I9-10900F 5.2Ghz 20Mb" , 90.911 ,`inteli930f.jpg`)

let arrayProceIntel = [IntelG5900,IntelG6400,IntelG6900,IntelI310F,IntelI510F,IntelI512K,IntelI710F,IntelI711K,IntelI910F,IntelPenG7400]

//Mother Intel

function MotherIntel (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const MIntelH410M = new MotherIntel ( 27 , "MotherBoard MSI H410M B Pro 1200" , 15.589 ,`mintelh410m.jpg`)
const MIntelB560M = new MotherIntel ( 28, "MotherBoard Gigabyte B560M DS3H V2 1200" , 16.136 ,`mintelb560m.jpg`)
const MIntelH510MA = new MotherIntel ( 29 , "MotherBoard MSI H510M-A Pro 1200" , 16.620 ,`mintelh510ma.jpg`)
const MIntelB560MA = new MotherIntel ( 30 , "MotherBoard Asus Prime B560M-A" , 22.944 ,`mintelb560ma.jpg`)
const MIntelZ590 = new MotherIntel ( 31 , "MotherBoard Gigabyte Z590 Aorus Elite 1200" , 39.647 ,`mintelz590.jpg`)
const MIntelZ590A = new MotherIntel ( 32 , "MotherBoard Asus Prime Z590-A 1200" , 48.639 ,`mintelz590a.jpg`)
const MIntelZ590U = new MotherIntel ( 33 , "MotherBoard Gigabyte Z590 Aorus Ultra 1200" , 55.506 ,`mintelx590u.jpg`)
const MIntelZ590E = new MotherIntel ( 34 , "MotherBoard Asus ROG Strix Z590-E 1200" , 68.758 ,`mintelz590e.jpg`)
const MIntelB560 = new MotherIntel ( 35 , "MotherBoard MSI B560 Bazooka 1200" , 25.814 ,`mintelb560.jpg`)

let arrayMotherIntel = [MIntelB560,MIntelB560M,,MIntelB560MA,MIntelH410M,MIntelH510MA,MIntelZ590,MIntelZ590A,MIntelZ590E,MIntelZ590U]

//Memorias Ram

function RAMS (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const RAMBasics = new RAMS ( 36 , "Memoria Ram Crucial BASICS 4GB 2666Mhz DDR4" , 3.370 ,`rambasics.jpg`)
const RAMPNYPerformance = new RAMS ( 37 , "Memoria Ram PNY Performance 8GB 2666Mzh DDR4" , 4.191 ,`rampnyperformance.jpg`)
const RAMXPGD30 = new RAMS ( 38 , "Memoria Ram Adata XPG Gammix D30 8GB 3200Mzh DDR4" , 8.072 ,`ramxpgd30.jpg`)
const RAMXPGD45 = new RAMS ( 39 , "Memoria Ram Adata XPG Gammix D45 8GB 3200Mzh DDR4" , 8.052 ,`ramxpgd45.jpg`)
const RAMCorsairVengeance8GB = new RAMS ( 40 , "Memoria Ram Corsair Vengeance LPX Black 8GB 3200Mzh DDR4" , 8.264 ,`ramcorsairvengeance8gb.jpg`)
const RAMXLR8 = new RAMS ( 41 , "Memoria Ram PNY XLR8 Gaming EPIC-X 8GB 3600Mzh DDR4" , 8.673 ,`ramxlr8.jpg`)
const RAMCorsairVengeance3200Mhz = new RAMS ( 42 , "Memoria Ram Corsair Vengeance RGB 8GB 3200Mzh DDR4" , 9.184 ,`corsairvengeance3200mhz.jpg`)
const RAMFuryBeast = new RAMS ( 43 , "Memoria Ram Kingstone Fury Beast 16GB 3200Mzh DDR4" , 15.403 ,`ramfurybeast.jpg`)
const RAMSpectrixD60G = new RAMS ( 44 , "Memoria Ram Adata XPG Spectrix D60G 8GB 3200Mzh DDR4" , 9.366 ,`ramspectrixd60g.jpg`)

let arrayRAMS = [RAMBasics,RAMPNYPerformance,RAMXPGD30,RAMXPGD45,RAMCorsairVengeance8GB,RAMXLR8,RAMCorsairVengeance3200Mhz,RAMFuryBeast,RAMSpectrixD60G]

//Tarjetas de Video

function Videocard (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const GigabyteRX6400 = new Videocard ( 45 , "Gigabyte AMD Radeon RX 6400 Eagle 4GB GDDR6" , 44.444 ,`gigabyterx6400.jpg`)
const Nvidia1050Ti = new Videocard ( 46 , "Asus Nvidia Geforce 1050Ti Phoenix 4GB GDDR5" , 47.576 ,`nvidia1050ti.jpg`)
const RadeonRx6500XT = new Videocard ( 47 , "MSI AMD Radeon RX 6500 XT Dual Fan 4GB GDDR6 OC" , 52.631 ,`radeonrx6500xt.jpg`)
const GigabyteRTX3050OC = new Videocard ( 48, "Gigabyte RTX 3050 Gaming OC 8GB GDDR6 LHR" , 95.740 ,`gigabytertx3050ox.jpg`)
const MSIRTX3070Dual = new Videocard ( 50 , "MSI Nvidia Geforce 3070 Ventus 2x OC 8GB GDDR6 LHR" , 162.038 ,`msirtx3070dual.jpg`)
const RadeonRX6900XT = new Videocard ( 51 , "AMD Radeon Asus RX 6900XT TUF OC 16GB GDDR6" , 228.028 ,`radeonrx6900xt.jpg`)
const AsusRTX3080Ti = new Videocard ( 52 , "Asus RTX 3080Ti TUF OC 12GB GDDR6X LHR" , 282.386 ,`asusrtx3080ti.jpg`)
const MSIRTX3090Ti = new Videocard ( 53 , "MSI Nvidia Geforce RTX 3090Ti Trio 24GB GDDR6X" , 474.710 ,`msirtx3090ti.jpg`)

let arrayVideocard = [GigabyteRX6400,Nvidia1050Ti,RadeonRx6500XT,GigabyteRTX3050OC,MSIRTX3070Dual,RadeonRX6900XT,AsusRTX3080Ti,MSIRTX3090Ti]


//Discos

function Disk (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const GigabyteSSD120GB = new Disk ( 54 , "Disco Solido SSD 120GB Gigabyte" , 3.629 ,`gigabytessd120gb.jpg`)
const MarkVisionSSD240GB = new Disk ( 55 , "Disco Solido SSD 240GB Markvision" , 4.555 ,`markvisionssd240gb.jpg`)
const WDSSD1TB = new Disk ( 56 , "Disco Solido SSD 1TB Western Digital Green" , 16.748 ,`wdssd1tb.jpg`)
const PNYSSD1TB = new Disk ( 57 , "Disco Solido SSD 1TB PNY CS2140 M.2 NVMe" , 21.922 ,`pnyssd1tb.jpg`)
const KingstoneSSD2TB = new Disk ( 58 , "Disco Solido SSD 2TB Kingstone KC300SD M.2 NVMe" , 49.428 ,`kingstonessd2tb.jpg`)
const WDHDDPurple2TB = new Disk ( 59 , "Disco Rigido HDD 2TB Western Digital Purple" , 12.596 ,`wdbluehdd2tb.jpg`)
const WDBlueHDD2TB = new Disk ( 60 , "Disco Rigido HDD 2TB Western Digital Blue" , 10.665 ,`wdbluehdd2tb.jpg`)
const SeagateHDD1TB = new Disk ( 61 , "Disco Rigido HDD 1TB Seagate BarraCuda" , 8.420 ,`seagatehdd1tb.jpg`)
const WDBlueHDD1TB = new Disk ( 62 , "Disco Rigido HDD 1TB Western Digital Blue" , 7.731 ,`wdbluehdd1tb.jpg`)
const NetacSSD120GB = new Disk ( 63 , "Disco Solido SSD 120GB Netac N535S 2.5" , 3.253 ,`netacssd120gb.jpg`)

let arrayDisk = [GigabyteSSD120GB,MarkVisionSSD240GB,WDSSD1TB,PNYSSD1TB,KingstoneSSD2TB,WDHDDPurple2TB,WDBlueHDD2TB,SeagateHDD1TB,WDBlueHDD1TB,NetacSSD120GB]

//Gabinetes

function Cabinet (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const XigAQPlus = new Cabinet ( 64 , "Gabinete Xigmatek Aquarius Plus Black" , 51.268 ,`xigaqplus.jpg`)
const XigAQII = new Cabinet ( 65 , "Gabinete Xigmatek Aquarius II Black " , 47.459 ,`xigaqii.jpg`)
const XigOvertake = new Cabinet ( 66 , "Gabinete Xigmatek Overtake " , 41.947 ,`xigovertake.jpg`)
const Corsair5000D = new Cabinet ( 67 , "Gabinete Corsair 5000D" , 37.665 ,`corsair5000d.jpg`)
const ThermalLevel20MT = new Cabinet ( 68 , "Gabinete Thermaltake Level 20MT" , 28.475 ,`thermallevel20mt.jpg`)
const AerocoolPlaya = new Cabinet ( 69 , "Gabinete Aerocool Playa" , 17.458 ,`aerocoolplaya.jpg`)
const GamemaxAbyssH608 = new Cabinet ( 70 , "Gabinete Gamemax Mini Abyss H608 " , 15.335 ,`gamemaxabyssh608.jpg`)
const SPGamingCG9900 = new Cabinet ( 71, "Gabinete SP Gaming CG-9900 Loulan" , 11.356 ,`spgamingcg9900.jpg`)
const XTECHXTGMR1 = new Cabinet ( 72, "Gabinete XTECH XT-GMR1 Delirium" , 7.834 ,`xtechxtgmr1.jpg`)
const XigEROS = new Cabinet ( 73 , "Gabinete Xigmatek EROS" , 11.181 ,`xigeros.jpg`)

let arrayCabinet = [XigAQPlus,XigAQII,XigOvertake,Corsair5000D,ThermalLevel20MT,AerocoolPlaya,GamemaxAbyssH608,SPGamingCG9900,XTECHXTGMR1,XigEROS]

//Fuentes

function Fountain (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const GigabyteP550B = new Fountain ( 74 , "Fuente 550W Gigabyte P550B 80 Plus Bronze" , 12.402 ,`gigabytep550b.jpg`)
const LinkworldAD2Z550 = new Fountain ( 75 , "Fuente 550W Linkworld AD-Z550 80 PLUS Bronze" , 9.534 ,`linkworldad2z550.jpg`)
const ThermaltakeSmart = new Fountain ( 76, "Fuente 600W Thermaltake Smart 80 Plus White" , 12.672 ,`thermaltakesmart.jpg`)
const ThermaltakeBX1 = new Fountain ( 77 , "Fuente 650W Thermaltake Smart BX1 80 Plus Bronze" , 19.928 ,`thermaltakesmart.jpg`)
const AerocoolMirage = new Fountain ( 78 , "Fuente 850W Aerocool Mirage ARGB Full Modular 80 Plus Gold" , 24.266 ,`aerocoolmirage.jpg`)
const SeasonicFocus = new Fountain ( 79 , "Fuente 850W Seasonic Focus 80 Plus Gold" , 36.904 ,`seasonicfocus.jpg`)
const MSIA750GF = new Fountain ( 80 , "Fuente 750W MSI A750GF 80 Plus Gold Modular" , 28.557 ,`msia750gf.jpg`)
const MSIA850GF = new Fountain ( 81 , "Fuente 850W MSI A850GF 80 Plus Gold Modular" , 30.591 ,`msia850gf.jpg`)
const SeasonicGX1000 = new Fountain ( 82 , "Fuente 1000W Seasonic Focus GX-1000 80 Plus Gold" , 45.934 ,`seasonicgx1000.jpg`)
const GigabyteP1200W = new Fountain ( 83 , "Fuente 1200W Gigabyte Aorus P1200W 80 Plus Platinum Modular" , 93.341 ,`gigabytep1200w.jpg`)

let arrayFountain = [GigabyteP550B,LinkworldAD2Z550,ThermaltakeSmart,ThermaltakeBX1,AerocoolMirage,SeasonicFocus,MSIA750GF,MSIA850GF,SeasonicGX1000,GigabyteP1200W]

//Monitores

function Monitor (id, nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const SamsungT350H = new Monitor ( 84, "Monitor LED IPS 24 Samsung T350H LF24T350FHL 75Hz" , 49.122 ,`samsungt350h.jpg`)
const ViewSonicVX2468 = new Monitor ( 85 , "Monitor Curvo 24 Viewsonic VX2468-PC-MHD 165Hz Freezync" , 73.732 ,`viewsonicvx2468.jpg`)
const ViewSonicXG2405 = new Monitor ( 86 , "Monitor LED 24 Viewsonic XG2405 144Hz IPS" , 93.213 ,`viewsonicxg2405.jpg`)
const GigabyteG27QC = new Monitor ( 87 , "Monitor LED 27 Gigabyte Curvo G27QC A-SA QHD 165Mz 1Ms" , 113.943 ,`gigabyteg27qc.jpg`)
const DellP2418HT = new Monitor ( 88, "Monitor LED 24 Dell P2418HT Full HD TouchScreen" , 117.219 ,`dellp2418ht.jpg`)
const GigabyteF125F = new Monitor ( 89 , "Monitor LED 25 Gigabyte Aorus F125F Full HD 240Hz IPS " , 145.503 ,`gigabytef125f.jpg`)
const GigabyteM27XSA = new Monitor ( 90 , "Monitor LED 27 Gigabyte M27Q-X-SA QHD 240HZ 1Ms IPS" , 172.907 ,`gigabytem27xsa.jpg`)
const ViewSonicXH270QG = new Monitor ( 91 , "Monitor LED 27 Viewsonic XG270QG QHD 165Hz 1Ms IPS" , 243.568 ,`viewsonichx270qg.jpg`)

let arrayMonitor = [SamsungT350H,ViewSonicVX2468,ViewSonicXG2405,GigabyteG27QC,DellP2418HT,GigabyteF125F,GigabyteM27XSA,ViewSonicXH270QG]

//Mouse

function Mouse (id ,nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
}

const LogiM90 = new Mouse ( 92 , "Mouse Logitech M90 Black" , 567 ,`logim90.jpg`)
const MarvoM207 = new Mouse ( 93 , "Mouse Marvo M207 Optico RGB" , 1.149 ,`marvom207.jpg`)
const GenesisKrypton = new Mouse ( 94, "Mouse Gensis Krypton 150 LED" , 2.014 ,`genesiskrypton.jpg`)
const LogiMiniM187 = new Mouse ( 95 , "Mouse Logitech Mini M187 Inalambrico Rosa" , 2.030 ,`logiminim187.jpg`)
const LogiG203 = new Mouse ( 96, "Mouse Logitech G203 LightSync Black" , 3.213 ,`logig203.jpg`)
const RedragonM711 = new Mouse ( 97 , "Mouse Redragon M711 Cobra White" , 3.663 ,`redragonm711.jpg`)
const RedragonM988 = new Mouse ( 98 , "Mouse Redragon M988 Storm Elite Black" , 5.261 ,`redragonm988.jpg`)
const LogiG305 = new Mouse ( 99 , "Mouse Logitech G305 LightSpeed Inalambrico" , 5.481 ,`logig305.jpg`)
const CorsairIronClaw = new Mouse ( 100 , "Mouse Corsair IronClaw RGB" , 10.841 ,`corsairironclaw.jpg`)
const LogiG604 = new Mouse ( 101, "Mouse Logitech G604 Lightspeed Black" , 11.493 ,`logig604.jpg`)

let arrayMouse = [LogiM90,MarvoM207,GenesisKrypton,LogiMiniM187,LogiG203,RedragonM711,RedragonM988,LogiG305,CorsairIronClaw,LogiG604]

//Teclados 


function Keyboard (id,nombre, precio , img){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img

}

const TrustClassic = new Keyboard ( 102 , "Teclado Trust Classicline Es" , 1.169 ,`trustclassic.jpg`)
const WboxK9260 = new Keyboard ( 103 , "Teclado Wbox K9260 RGB" , 1.455 ,`wboxk9260.jpg`)
const MarvoK656 = new Keyboard ( 104 , "Teclado Gaming Marvo K656 Retroiluminado " , 2.590 ,`marvok656.jpg`)
const GenesisRhod = new Keyboard ( 105 , "Teclado Genesis Rhod 400 RGB Ingles" , 3.849 ,`genesisrhod.jpg`)
const TDaggerArena = new Keyboard ( 106 , "Teclado Mecanico T-Dagger Arena 60% Switch Brown" , 4.571 ,`tdaggerarena.jpg`)
const RedragonK585 = new Keyboard ( 107 , "Teclado Redragon K585 RGB Diti" , 4.955 ,`redragonk585.jpg`)
const Redragon512 = new Keyboard ( 108 , "Teclado Redragon 512 RGB Shiva White" , 5.074 ,`redragon512.jpg`)
const LogiK835 = new Keyboard ( 109 , "Teclado Mecanico Logitech K835 Tkl" , 7.477 ,`logik835.pg`)
const AlloyOrigins60 = new Keyboard ( 110, "Teclado HyperX Alloy Origins 60 RGB Mecanico Switch Aqua" , 14.920 ,`alloyorigins60.jpg`)
const LogiProLol = new Keyboard ( 111 , "Teclado Mecanico Logitech Pro Lol 2 Edition Switch Gx Brown Ingles" , 18.707 ,`logiprolol.jpg`)

const arrayKeyboard = [TrustClassic,WboxK9260,MarvoK656,GenesisRhod,TDaggerArena,RedragonK585,Redragon512,LogiK835,AlloyOrigins60,LogiProLol]


//CODIGO

//get divs 

let product = document.getElementById("product")



//get img 

let amd = document.getElementById("amd")

let intel = document.getElementById("intel")

let total = document.getElementById("total")

function clean() {
    product = document.getElementById("product")

    product.innerHTML = ""

}



//Funciones de los arrays

function seeamdproce (){
borrar()
clean()
arrayProceAMD.forEach((ProceAMD)=>{

    let amdproce = document.createElement("div")

    amdproce.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/proceamd/${ProceAMD.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${ProceAMD.nombre}</h5>
            <p>${ProceAMD.precio}</p>
            <button class="comprastep1amd">Comprar</button>
        </div>
    </div>`
    product.append(amdproce)
})
}




function seeamdmother(){
clean()
arrayMotherAMD.forEach((MotherAMD)=>{

    let amdmother = document.createElement("div")

    amdmother.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/motheramd/${MotherAMD.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${MotherAMD.nombre}</h5>
            <p>${MotherAMD.precio}</p>
            <button class="comprastep2intel">Comprar</button>
        </div>
    </div>`
    product.append(amdmother)
})
}


function seeintelproce (){
borrar()
clean()
arrayProceIntel.forEach((ProceIntel)=>{

    let intelproce = document.createElement("div")

    intelproce.innerHTML =`
        <div class="tarjeta d-flex">
            <div class="card_image">
            <img src="./img/proceintel/${ProceIntel.img}" alt=""></img>
            </div>
            <div class="card_content">
                <h5>${ProceIntel.nombre}</h5>
                <p>${ProceIntel.precio}</p>
                <button class="comprastep1">Comprar</button>
            </div>
        </div>`
    product.append(intelproce)
})
}

function seeintelmother (){
clean()
arrayMotherIntel.forEach((MotherIntel)=>{

    let intelmother = document.createElement("div")

    intelmother.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/motherintel/${MotherIntel.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${MotherIntel.nombre}</h5>
            <p>${MotherIntel.precio}</p>
            <button class="comprastep2">Comprar</button>
        </div>
    </div>`
    product.append(intelmother)
})
}

function seeram (){
clean()
arrayRAMS.forEach((RAM)=>{
    
    let ram = document.createElement("div")
    
    ram.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/rams/${RAM.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${RAM.nombre}</h5>
            <p>${RAM.precio}</p>
            <button class="comprastep3">Comprar</button>
        </div>
    </div>`
    product.append(ram)
})
}

function seevideocard (){
clean()
arrayVideocard.forEach((Videocard)=>{

    let videocard = document.createElement("div")
                
    videocard.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/videocards/${Videocard.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Videocard.nombre}</h5>
            <p>${Videocard.precio}</p>
            <button class="comprastep4">Comprar</button>
        </div>
    </div>`
    product.append(videocard)
})
}

function seedisk (){
clean()
arrayDisk.forEach((Disk)=>{

    let disk = document.createElement("div")
                    
    disk.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/disk/${Disk.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Disk.nombre}</h5>
            <p>${Disk.precio}</p>
            <button class="comprastep5">Comprar</button>
        </div>
    </div>`
    product.append(disk)
})
}


function seecabinet (){
clean()
arrayCabinet.forEach((Cabinet)=>{

    let cabinet = document.createElement("div")

    cabinet.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/cabinet/${Cabinet.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Cabinet.nombre}</h5>
            <p>${Cabinet.precio}</p>
            <button class="comprastep6">Comprar</button>
        </div>
    </div>`
    product.append(cabinet)
})
}

function seefountain (){
clean()
arrayFountain.forEach((Fountain)=>{

    let fountain = document.createElement("div")

    fountain.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/fountain/${Fountain.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Fountain.nombre}</h5>
            <p>${Fountain.precio}</p>
            <button class="comprastep7">Comprar</button>
        </div>
    </div>`
    product.append(fountain)
})
}

function seemonitor (){
clean()
arrayMonitor.forEach((Monitor)=>{
    
    let monitor = document.createElement("div")
    
    monitor.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/monitor/${Monitor.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Monitor.nombre}</h5>
            <p>${Monitor.precio}</p>
            <button class="comprastep8">Comprar</button>
        </div>
    </div>`
    product.append(monitor)
})
}

function seemouse (){
clean()
arrayMouse.forEach((Mouse)=>{
        
    let mouse = document.createElement("div")
        
    mouse.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/mouse/${Mouse.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Mouse.nombre}</h5>
            <p>${Mouse.precio}</p>
            <button class="comprastep9">Comprar</button>
        </div>
    </div>`
    product.append(mouse)
})
}

function seekeyboard (){
clean()
arrayKeyboard.forEach((Keyboard)=>{

    let keyboard = document.createElement("div")

    keyboard.innerHTML =`
    <div class="tarjeta d-flex">
        <div class="card_image">
        <img src="./img/keyboard/${Keyboard.img}" alt=""></img>
        </div>
        <div class="card_content">
            <h5>${Keyboard.nombre}</h5>
            <p>${Keyboard.precio}</p>
            <button class="comprastep10">Comprar</button>
        </div>
    </div>`
    product.append(keyboard)
})
}

function borrar(){
    document.getElementById("contenedorimagen").style.display = "none"
}

amd.addEventListener("click", seeamdproce)

intel.addEventListener("click", seeintelproce)