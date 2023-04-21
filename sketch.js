//cuaca
let urlAPI ="https://api.openweathermap.org/data/2.5/weather?q=Margodadi&appid=6690fa214e4146088bb8f1946c21cfad&units=metric";
let dataAPI;


//Data Digram Pie
let dataPiejk;
let urljk = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQF2CaCtfW74R6pAN6NwV2IlXJwjEeTcxFsvZFPgQPN-DLYkz4oI6Lh0VG_KBvaLMviIN7dQMkUpQCE/pub?gid=0&single=true&output=csv"

let dataPieAgama ;
let urlAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT25zuaZgHApQ5nO-f0ZgbgFxXkp3hax7PZI8BuA3YiMN7110oAYZ0o7Vll90OJ5ZD3swtMTYSIrry1/pub?gid=0&single=true&output=csv"

let dataPendidikan;
let urlpen = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQeCVyGl4k3o56gi9FIlPzA_zhP5ZULuYd1BXeCMjV6DjKeFRwNoAfH10L0FL3eJRn-iOwPuSZDPk37/pub?gid=0&single=true&output=csv"

let dataPekerjaan;
let urlpek = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTx21UmmUym2eocWFhvWqCDLjjC8cdDw9bxxbYX4fc4yrIwWpH4AZVRVvf4-kK4oU1mcxa2cEH_FpcG/pub?gid=0&single=true&output=csv"


//insert gambar
let latar;
let semua;
let sumber;
let bawah;
let peta;
let galeri;
let dokum;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('white')
  noStroke()
  textFont(RobotoMonoExtraLight)

// Nama Desa
  text (data.name,
      posP = p + 1060,
      posQ = q + 1140,
      textSize (20))
// Cuaca
  text(data.weather [0].main,
      posP= p + 1300,
      posQ= q + 1100,
      textSize (30))
  text('Cuaca',
      posP = p + 1300,
      posQ = q + 1120,
      textSize(13))
// temperatur
  text(data.main.temp+"°c",
      posP =p + 1060,
      posQ =q + 1180,
      textSize(40))

// kecepatan angin
  text('Kecepatan Angin',
      posP = p + 1300,
      posQ = q + 1200,
      textSize(13))
  text(data.wind.speed +" km/h ",
      posP =p + 1300 ,
      posQ =q +1180, 
      textSize (30))
// kelembaban
  text (data.main.humidity + " % ",
      posP = p + 1300,
      posQ = q + 1260 ,
      textSize (30))
  text('Kelembaban',
      posP = p + 1300,
      posQ = q +1260+20,
      textSize(13))
  }

function preload(){
  dataAPI = loadJSON(urlAPI);
  latar = loadImage('margodadi.png');
  bawah = loadImage('bawah.png');
  peta = loadImage('petalampung.png');
  galeri = loadImage('balai.png');
  dokum = loadImage('dokum.jpg');
  semua = loadImage('logomargo.png');
  sumber = loadImage('sumber.png')
  RobotoMonoSemiBold = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
  dataPiejk = loadTable(urljk, 'csv', 'header');
  dataPieAgama = loadTable(urlAgama, 'csv', 'header');
  dataPendidikan = loadTable(urlpen, 'csv', 'header');
  dataPekerjaan = loadTable(urlpek, 'csv', 'header');
}

function setup() {
  createCanvas(1600,3600);
  //noLoop(); // Run once and stop
  
}



function draw() {
  background('rgb(220,238,237)');
  noStroke()
  
//Background
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  rect(0,0,1600,900);
  
//Logo
  image(semua,471,148,600,600);

  
//Peta Desa
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  text ("Peta Desa",1220,1410)
  
  image(peta,1040,1440,500,400)

//Galeri
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  text ("Galeri",1220,2000)
  
  image(galeri,1020, 2050,492,166)
  image(dokum,1030,2300,464,200)
  
//Tentang Margodadi
  fill('white')
  rect(100,952,930,820);
  textSize(20)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Tentang Desa Margodadi",410,980)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("Desa Margodadi merupakan penduduk berasal dari transmigrasi Bedol Desa",110,1020)
  text("dari desa Kali Gresik, Kemiren dan Srumbung kabupaten Magelang provinsi Jawa ",110,1040+r)
  text("Tengah yang terkena bencana alam yaitu melet usnya Gunung Berapi pada tahun 1961.",110,1060+2*r)
  text("Pada tahun 1962 sampai 1964 penduduk ketiga desa yang terkena bencana tersebut ",110,1080+3*r)
  text("dipindahkan ke Lampung dan dibagi menjadi 7 blok atau wilayah yaitu:",110,1100+4*r)
  text("Blok A  yang sekarang bernama desa Marga Kaya,",110,1120+5*r)
  text("Blok B yang masuk desa Marga Kaya,",110,1140+6*r)
  text("Blok C.1 yang sekarang bernama desa Marga Agung,",110,1160+7*r)
  text("Blok C.2 yang termasuk desa Marga Agung,",110,1180+8*r)
  text("Blok D menjadi desa Marga Agung,",110,1200+9*r)
  text("Blok E masuk wilayah desa Marga Agung,",110,1220+10*r)
  text("Blok F yang sekarang bernama desa Margodadi.",110,1240+11*r)
  text("Dari 7 blok tersebut, desa Margodadi luas wilayah 1061 ha dan dibuka pada tahun 1962.",110,1270+11*r)
  text("Margodadi adalah salah satu desa/kelurahan di Kecamatan Jati Agung,",110,1300+12*r)
  text("Kabupaten Lampung Selatan, provinsi Lampung.",110,1320+13*r)
  text("Margodadi mempunyai kode wilayah menurut kemendagri 18.01.13.2005,",110,1340+14*r)
  text("Sedangkan kode posnya adalah 35365. Luas wilayah Desa Margodadi 80 ha.",110,1360+15*r)
  text("Pertanian sawah tadah hujan 101 ha, ladang/tegalan 46 ha, pasar 1 ha,",110,1380+16*r)
  text("perkantoran 0,600 ha,sekolah 0,75 ha, jalan 2500 ha,dan lapangan sepak bola 0,1 ha.",110,1400+17*r)
  text("Jumlah penduduk berdasarkan jenis kelamin laki –laki 1295 dan perempuan 1248",110,1420+18*r)
  text("serta kepala keluarga 652 kk. Pertumbuhan penduduk tahun ini sebanyak 2543 orang",110,1440+19*r)
  text("dan jumlah penduduk tahun lalu sebanyak 2526 orang.",110,1460+20*r)
  
  
  
  
  
//Dashboard Text
  fill('white');
  textFont(RobotoMonoSemiBold);
  textSize(30);
  text("Dashboard",30,60);
  

//Bawah
  fill("#607D8B")
  rect(0,3450,1600,900)
  image(bawah,0,3455,1600,145)


  
//Informasi Cuaca
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  judul = ('Informasi Cuaca')
  text (judul,1200,980)
  
  fill (51,66,87,200);
  rect (1045,1060,495,250,20);

  // info cuaca
  infoCuaca (0, 0, dataAPI, 500/20)
  
  textFont(RobotoMonoExtraLight)
  fill(0);
  noStroke();
  textSize(18);
  
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

  // tanggal
  text(currentDate, 1050, 1050);
  //waktu
  text(currentTime, 1350,1050);
  image(sumber,1060,1200,200,85)
  
//Data Umur
  fill('white')
  rect(100,2051,800,400)
  fill('black')
  
  textFont(RobotoMonoMedium)
  textSize(30)
  text("Data Statistik Desa Margodadi",250,2000)
  textSize(18)
  text("Data Usia",450,2080)
  
  textFont(RobotoMonoExtraLight)
  rect(180,2100,1,300)
  rect(180,2400,600,1)
  fill('#94D2BD')
  rect(215,2375,75,25)
  fill('#E9D8A6')
  rect(340,2320,75,80)
  fill('#EE9B00')
  rect(465,2180,75,220)
  fill('#CA6702')
  rect(590,2330,75,70)
  
  //jumlah data
  textSize(16)
    fill ('black');
    text(0,170,2400);
    text(300,150,2350);
    text(500,140,2300);
    text(1000,140,2250);
    text(1500,140,2200);
    text(2000,140,2150);
    text(2500,140,2100);
  
  text('0-7 Thn', 215,2420);
  text('7-15 Thn', 340,2420);
  text('15-60 Thn', 465,2420);
  text('>60 Thn', 590,2420);
  
  anglesjk = dataPiejk.getColumn('x')
  pieChartjk(200, anglesjk);
  
  anglesagama = dataPieAgama.getColumn('x')
  pieChartagama(200, anglesagama);
  
  anglespen = dataPendidikan.getColumn('x')
  pieChartpen(200, anglespen);
  
  anglespek = dataPekerjaan.getColumn('Y')
  pieChartpek(200, anglespek);
}

function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ['#009688 ','#FF5722 '];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      275,
      2670,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i])
    );
    lastAnglejk += radians(anglesjk[i]);
  }
  //Data Jenis Kelamin
  fill('white')
  //rect(100,2503,350,400)
  fill('black')
  //text
  textSize(18)
  textFont(RobotoMonoMedium)
  text("Data Jenis Kelamin",180,2538)
  textFont(RobotoMonoExtraLight)
  text("Laki-Laki         = 1462",140,2828)
  text("Perempuan         = 1410",140,2858)
  
  //penanda warna
  fill(piecolorjk[0]) ;
  circle(300,2823,18);
  fill(piecolorjk[1]) ;
  circle(300,2853,18);
}

function pieChartagama(diameter, dataPeiAgama) {
  let lastAngle = 0;
  var piecoloragama = ['#13CBF1 ','#0A9396 ','#7BEAC5 ','#E7F85C','#D495CA','#CBA9F5'];
  for (var i = 0; i < dataPeiAgama.length; i++) {
    fill(piecoloragama[i])
    arc(
      720,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }
  
  fill('white')
  //rect(545,2503,350,400)
  
  fill('black')
  textFont(RobotoMonoMedium)
  text("Data Agama",660,2538)
  
  textFont(RobotoMonoExtraLight)
  text("Islam        = 2756",615,2800)
  text("Katholik     = 99",615,2820)
  text("Kristen      = 17",615,2840)
  text("Hindu        = 0",615,2860)
  text("Budha        = 0",615,2880)
  text("Konghucu     = 0",615,2900)
  
  
  fill(piecoloragama[0]) ;
  circle(730,2795,16);
  fill(piecoloragama[1]);
  circle(730,2815,16);
  fill(piecoloragama[2]);
  circle(730,2835,16);
  fill(piecoloragama[3]) ;
  circle(730,2855,16);
  fill(piecoloragama[4]);
  circle(730,2875,16);
  fill(piecoloragama[5]);
  circle(730,2895,16)
  
}

function pieChartpen(diameter, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpen = ['#001219','#005F73 ','#1A82C5 ','#94D2BD ','#F61886 ', '#EE9B00','#CA6702','#BB3E03']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpen[i])
    arc(
      275,3120,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespen[i])
    );
    lastAngle += radians(anglespen[i]);
  }
  // Data Pendidikan
  fill('white')
  //rect(100,2953,350,450)
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pendidikan",195,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Tidak/Belum Sekolah  = 0",170,3250)
  text("Belum Tamat SD       = 0",170,3270)
  text("SD/Sederajat         = 285",170,3290)
  text("SLTP/Sederajat       = 303",170,3310)
  text("SLTA/Sederajat       = 436",170,3330)
  text("DIPLOMA              = 17",170,3350)
  text("STRATA I             = 37",170,3370)
  text("STRATA II            = 1",170,3390)
  
  fill(piecolorpen[0]) ;
  circle(300,3245,10);
  fill(piecolorpen[1]) ;
  circle(300,3265,10);
   fill(piecolorpen[2]) ;
  circle(300,3285,10);
   fill(piecolorpen[3]) ;
  circle(300,3305,10);
   fill(piecolorpen[4]) ;
  circle(300,3325,10);
   fill(piecolorpen[5]) ;
  circle(300,3345,10);
   fill(piecolorpen[6]) ;
  circle(300,3365,10);
   fill(piecolorpen[7]) ;
  circle(300,3385,10);
}
function pieChartpek(diameterpek, dataPekerjaan) {
  let lastAnglepek = 0;
  var piecolorpek = ['#30525F','#4FCFEA ','#49A64D ','#FF9800 ','#E9D8A6 ', '#8C74F0','#613C17','#AA6A4B','#AE2012','#710BA5']
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(piecolorpek[i])
    arc(
      720,3120,
      diameterpek,
      diameterpek,
      lastAnglepek,
      lastAnglepek + radians(anglespek[i])
    );
    lastAnglepek += radians(anglespek[i]);
  }
  //Data Pekerjaan
  fill('white')
  //rect(545,2953,350,450)
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pekerjaan",660,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Petani                       = 646",600,3250)
  text("Buruh Tani                   = 28",600,3270)
  text("Pegawai Negeri Sipil         = 35",600,3290)
  text("Pengrajin Rumah Tangga       = 37",600,3310)
  text("Pedagang Keliling            = 7",600,3330)
  text("Peternak                     = 2",600,3350)
  text("Montir                       = 2",600,3370)
  text("Bidan Swasta                 = 4",600,3390)
  text("TNI                          = 5",600,3410)
  text("Lainnya                      = 341",600,3430)
  
  //penanda warna
  fill(piecolorpek[0]) ;
  ellipse(780,3245,10,10);
  fill(piecolorpek[1]) ;
  ellipse(780,3265,10,10);
  fill(piecolorpek[2]) ;
  ellipse(780,3285,10,10);
  fill(piecolorpek[3]) ;
  ellipse(780,3305,10,10);
  fill(piecolorpek[4]) ;
  ellipse(780,3325,10,10);
  fill(piecolorpek[5]) ;
  ellipse(780,3345,10,10);
  fill(piecolorpek[6]) ;
  ellipse(780,3365,10,10);
  fill(piecolorpek[7]) ;
  ellipse(780,3385,10,10);
  fill(piecolorpek[8]) ;
  ellipse(780,3405,10,10);
  fill(piecolorpek[9]) ;
  ellipse(780,3425,10,10);
}