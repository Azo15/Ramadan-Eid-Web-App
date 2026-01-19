// --- T.C. Üniversite Projesi ---
// Öğrenci Adı: [İsminiz]
// Ders: Web Programlama
// Konu: Ramazan İmsakiyesi ve Kart Uygulaması

var API_ADRESI = 'http://api.aladhan.com/v1';

// Çeviri Listesi (Hocanın istediği dil desteği)
// Çeviri Listesi (Hocanın istediği dil desteği)
var ceviriSozlugu = {
    tr: {
        sayfaBasligi: "Ramazan ve Bayram Rehberi",
        mahyaVarsayilan: "HOŞ GELDİN RAMAZAN",
        mahyaYeri: "Mahyaya ne yazalım?",
        sayacBaslik: "Vuslata Kalan Zaman",
        gun: "GÜN",
        saat: "SAAT",
        dakika: "DAKİKA",
        saniye: "SANİYE",
        ayBaslik: "Gökyüzünde Bugün",
        kartBaslik: "Tebrik Kartı Oluştur",
        kartIsimYeri: "İsminiz (Örn: Ahmet)",
        kartButon: "Kartı İndir",
        ramazanBaslangic: "Ramazan Başlangıcı",
        ramazanBayrami: "Ramazan Bayramı",
        kurbanBayrami: "Kurban Bayramı",
        hazirlaniyor: "Hazırlanıyor...",
        altBilgi: "Bayram Rehberi",
        gunKaldi: "Gün Kaldı",
        bugunOgun: "Bugün o Mübarek Gün!",
        mubarekOlsun: "Mübarek Olsun!",
        kartMesajUst: "Hayırlı",
        kartMesajAlt: "Ramazanlar",
        kartMesajDetay: "Güzellik, birlik, beraberlik dolu, her zaman bir öncekinden daha güzel ve mutlu bir Ramazan geçirmenizi diliyoruz.",
        kartImza: "Saygılarımla,",
        kartAltLogo: "Ramazan Rehberi Yayınları",
        ayEvresi_0: "Yeni Ay",
        ayEvresi_1: "Hilal (Büyüyen)",
        ayEvresi_2: "İlk Dördün",
        ayEvresi_3: "Şişkin Ay",
        ayEvresi_4: "Dolunay",
        ayEvresi_5: "Son Dördün",
        ayEvresi_6: "Hilal (Küçülen)",
        tarihFormati: "tr-TR"
    },
    en: {
        sayfaBasligi: "Ramadan & Eid Guide",
        mahyaVarsayilan: "WELCOME RAMADAN",
        mahyaYeri: "Write on Mahya...",
        sayacBaslik: "Countdown to Blessings",
        gun: "DAYS",
        saat: "HOURS",
        dakika: "MINUTES",
        saniye: "SECONDS",
        ayBaslik: "Sky Today",
        kartBaslik: "Create Greeting Card",
        kartIsimYeri: "Your Name",
        kartButon: "Download Card",
        ramazanBaslangic: "Ramadan Start",
        ramazanBayrami: "Eid al-Fitr",
        kurbanBayrami: "Eid al-Adha",
        hazirlaniyor: "Generating...",
        altBilgi: "Ramadan Guide",
        gunKaldi: "Days Left",
        bugunOgun: "Today is the Blessed Day!",
        mubarekOlsun: "Blessed!",
        kartMesajUst: "Ramadan",
        kartMesajAlt: "Kareem",
        kartMesajDetay: "Wishing you a Ramadan filled with beauty, unity, and togetherness, always better and happier than the last.",
        kartImza: "Kind Regards,",
        kartAltLogo: "Ramadan Guide Publications",
        ayEvresi_0: "New Moon",
        ayEvresi_1: "Waxing Crescent",
        ayEvresi_2: "First Quarter",
        ayEvresi_3: "Waxing Gibbous",
        ayEvresi_4: "Full Moon",
        ayEvresi_5: "Last Quarter",
        ayEvresi_6: "Waning Crescent",
        tarihFormati: "en-US"
    },
    ar: {
        sayfaBasligi: "دليل رمضان والعيد",
        mahyaVarsayilan: "أهلا رمضان",
        mahyaYeri: "اكتب هنا...",
        sayacBaslik: "الوقت المتبقي",
        gun: "أيام",
        saat: "ساعات",
        dakika: "دقائق",
        saniye: "ثواني",
        ayBaslik: "القمر اليوم",
        kartBaslik: "إنشاء بطاقة تهنئة",
        kartIsimYeri: "اسمك",
        kartButon: "تحميل البطاقة",
        ramazanBaslangic: "بداية رمضان",
        ramazanBayrami: "عيد الفطر",
        kurbanBayrami: "عيد الأضحى",
        hazirlaniyor: "جار التحميل...",
        altBilgi: "دليل العيد",
        gunKaldi: "أيام متبقية",
        bugunOgun: "اليوم هو اليوم المبارك!",
        mubarekOlsun: "مبارك عليكم!",
        kartMesajUst: "رمضان",
        kartMesajAlt: "كريم",
        kartMesajDetay: "نتمنى لكم رمضان مليئاً بالجمال والوحدة والتآزر، دائماً أجمل وأسعد من سابقه.",
        kartImza: "مع خالص التحيات،",
        kartAltLogo: "منشورات دليل رمضان",
        ayEvresi_0: "محاق",
        ayEvresi_1: "هلال",
        ayEvresi_2: "التربيع الأول",
        ayEvresi_3: "أحدب متزايد",
        ayEvresi_4: "بدر",
        ayEvresi_5: "التربيع الأخير",
        ayEvresi_6: "هلال آخر الشهر",
        tarihFormati: "ar-SA"
    }
};

var secilenDil = 'tr';
// Uygulama verilerini burada tutuyoruz
var uygulamaDurumu = {
    ramazanTarihi: null,
    ramazanBayramiTarihi: null,
    kurbanBayramiTarihi: null,
    hicriTarih: null
};

// Hadis Listesi
var hadisListesi = {
    tr: [
        { metin: "Oruç, sabrın yarısıdır.", kaynak: "Hadis-i Şerif (İbn Mâce)" },
        { metin: "En hayırlı sadaka, Ramazan ayında verilendir.", kaynak: "Hadis-i Şerif (Tirmizi)" },
        { metin: "Kim inanarak ve sevabını Allah'tan bekleyerek Ramazan orucunu tutarsa, geçmiş günahları bağışlanır.", kaynak: "Hadis-i Şerif (Buhari)" }
    ],
    en: [
        { metin: "Fasting is half of patience.", kaynak: "Hadith (Ibn Majah)" },
        { metin: "The best charity is that given in Ramadan.", kaynak: "Hadith (Tirmidhi)" },
        { metin: "Whoever fasts Ramadan out of faith and in the hope of reward, his previous sins will be forgiven.", kaynak: "Hadith (Bukhari)" }
    ],
    ar: [
        { metin: "الصوم نصف الصبر.", kaynak: "سنن ابن ماجه" },
        { metin: "أفضل الصدقة صدقة في رمضان.", kaynak: "سنن الترمذي" },
        { metin: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ.", kaynak: "صحيح البخاري" }
    ]
};

var HICRI_AYLAR = {
    RAMAZAN: 9,
    SEVVAL: 10,
    ZILHICCE: 12
};

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', function () {
    baslat();
});

// Başlatma Fonksiyonu
async function baslat() {
    // LocalStorage'dan dili kontrol et, yoksa Türkçe varsay
    var kaydedilenDil = localStorage.getItem('secilenDil');
    if (kaydedilenDil && ceviriSozlugu[kaydedilenDil]) {
        secilenDil = kaydedilenDil;
    } else {
        secilenDil = 'tr';
    }

    diliAyarla(secilenDil);
    mahyaDinleyiciBaslat();
    kartButonuDinle();
    yildizlariBaslat();

    // Verileri çekmeye çalışıyoruz
    try {
        var hicri = await hicriTarihGetir();
        uygulamaDurumu.hicriTarih = hicri;
        await tarihleriHesapla(hicri);
        ekraniGuncelle();
    } catch (hata) {
        console.log("Veri çekme hatası: " + hata);
    }
}

// Tarih Hesaplamaları
async function tarihleriHesapla(suankiHicri) {
    var yil = parseInt(suankiHicri.year);
    var ay = suankiHicri.month.number;
    var gun = parseInt(suankiHicri.day);

    var rYil = yil;
    // Eğer Ramazan geçtiyse seneye hesapla
    if (ay > HICRI_AYLAR.RAMAZAN || (ay === HICRI_AYLAR.RAMAZAN && gun >= 1)) rYil++;

    var fYil = yil;
    if (ay > HICRI_AYLAR.SEVVAL || (ay === HICRI_AYLAR.SEVVAL && gun >= 1)) fYil++;

    var kYil = yil;
    if (ay > HICRI_AYLAR.ZILHICCE || (ay === HICRI_AYLAR.ZILHICCE && gun >= 10)) kYil++;

    uygulamaDurumu.ramazanTarihi = await miladiyeCevir(1, HICRI_AYLAR.RAMAZAN, rYil);
    uygulamaDurumu.ramazanBayramiTarihi = await miladiyeCevir(1, HICRI_AYLAR.SEVVAL, fYil);
    uygulamaDurumu.kurbanBayramiTarihi = await miladiyeCevir(10, HICRI_AYLAR.ZILHICCE, kYil);
}

// Ekranı Güncelleme
function ekraniGuncelle() {
    // Hicri Tarih Yazısı
    if (uygulamaDurumu.hicriTarih) {
        document.getElementById('hijri-current-date').textContent =
            uygulamaDurumu.hicriTarih.day + " " + uygulamaDurumu.hicriTarih.month[secilenDil === 'ar' ? 'ar' : 'en'] + " " + uygulamaDurumu.hicriTarih.year;
    }

    // Geri Sayımlar
    if (uygulamaDurumu.ramazanTarihi) {
        document.getElementById('ramadan-date-text').textContent = tarihFormatla(uygulamaDurumu.ramazanTarihi);
        document.getElementById('ramadan-start-date').textContent = tarihFormatla(uygulamaDurumu.ramazanTarihi);
        // İki farklı sayacı başlatıyoruz
        geriSayimYap(uygulamaDurumu.ramazanTarihi, 'ramadan');
        geriSayimYap(uygulamaDurumu.ramazanTarihi, 'ramadan-start', true);
    }
    if (uygulamaDurumu.ramazanBayramiTarihi) {
        document.getElementById('eid-fitr-date').textContent = tarihFormatla(uygulamaDurumu.ramazanBayramiTarihi);
        geriSayimYap(uygulamaDurumu.ramazanBayramiTarihi, 'eid-fitr', true);
    }
    if (uygulamaDurumu.kurbanBayramiTarihi) {
        document.getElementById('eid-adha-date').textContent = tarihFormatla(uygulamaDurumu.kurbanBayramiTarihi);
        geriSayimYap(uygulamaDurumu.kurbanBayramiTarihi, 'eid-adha', true);
    }

    ayEvresiHesapla();
    hadisGoster();
}

function tarihFormatla(tarih) {
    if (!tarih) return "...";
    var locale = ceviriSozlugu[secilenDil].tarihFormati;
    return tarih.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

// Dil Değiştirme
function setLanguage(lang) { // HTML'den çağırıldığı için ismini değiştirmedim, onclick'ten patlamasın
    diliAyarla(lang);
}

function diliAyarla(dil) {
    secilenDil = dil;

    // Tarayıcı hafızasına kaydet (Öğrenci işi localStorage)
    localStorage.setItem('secilenDil', dil);

    if (dil === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = dil;
    }

    // Butonların aktifliğini ayarla
    var butonlar = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < butonlar.length; i++) {
        butonlar[i].classList.remove('active');
        if (butonlar[i].textContent.toLowerCase() === dil) {
            butonlar[i].classList.add('active');
        }
    }

    // Yazıları değiştir
    var sozluk = ceviriSozlugu[dil];
    var elementler = document.querySelectorAll('[data-i18n]');
    for (var j = 0; j < elementler.length; j++) {
        var el = elementler[j];
        var anahtar = el.getAttribute('data-i18n');
        if (sozluk[anahtar]) {
            el.textContent = sozluk[anahtar];
        }
    }

    // Placeholder'ları değiştir
    var inputlar = document.querySelectorAll('[data-i18n-placeholder]');
    for (var k = 0; k < inputlar.length; k++) {
        var inp = inputlar[k];
        var pAnahtar = inp.getAttribute('data-i18n-placeholder');
        if (sozluk[pAnahtar]) {
            inp.placeholder = sozluk[pAnahtar];
        }
    }

    if (uygulamaDurumu.hicriTarih) ekraniGuncelle();
}

function kartButonuDinle() {
    var btn = document.getElementById('create-card-btn');
    if (btn) btn.addEventListener('click', kartOlustur);
}

// --- YENİ KART TASARIMI ---
// Referans Görsele Göre: Siyah/Gri Arkaplan, Silüet Cami, Kandiller, Altın Yazı
function kartOlustur() {
    var isim = document.getElementById('card-name-input').value.trim();
    if (!isim) {
        alert("Lütfen isminizi giriniz.");
        return;
    }

    var sozluk = ceviriSozlugu[secilenDil];
    var canvas = document.getElementById('greeting-canvas');
    var ctx = canvas.getContext('2d');
    var W = 800;
    var H = 600;

    // 1. Arka Plan (Koyu Antrasit Gradient + Desen)
    var grd = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, 500);
    grd.addColorStop(0, '#2b2b2b'); // Orta biraz açık
    grd.addColorStop(1, '#000000'); // Kenarlar tam siyah
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // Hafif Desen (Noktalar)
    ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
    for (var i = 0; i < W; i += 20) {
        for (var j = 0; j < H; j += 20) {
            ctx.beginPath();
            ctx.arc(i, j, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 2. Cami Silüeti (Alt Kısım)
    ctx.fillStyle = "#000000"; // Tam Siyah Silüet
    ctx.beginPath();
    ctx.moveTo(0, H);
    // Basit bir cami şehir silüeti çizimi
    // Sol minareler
    ctx.lineTo(0, H - 150);
    ctx.lineTo(50, H - 150); ctx.lineTo(50, H - 300); ctx.lineTo(70, H - 300); ctx.lineTo(70, H - 150); // Minare 1
    ctx.lineTo(100, H - 150);
    ctx.arc(150, H - 150, 50, Math.PI, 0); // Kubbe 1
    ctx.lineTo(200, H - 150);
    ctx.lineTo(220, H - 350); ctx.lineTo(240, H - 350); ctx.lineTo(240, H - 150); // Minare 2 (Uzun)

    // Orta büyük kubbe ve minareler
    ctx.lineTo(W / 2 - 100, H - 120);
    ctx.arc(W / 2, H - 120, 100, Math.PI, 0); // Ana Kubbe
    ctx.lineTo(W / 2 + 100, H - 120);

    // Sağ taraf simetrik gibi
    ctx.lineTo(W - 240, H - 150); ctx.lineTo(W - 240, H - 350); ctx.lineTo(W - 220, H - 350); ctx.lineTo(W - 220, H - 150); // Minare 3
    ctx.lineTo(W - 200, H - 150);
    ctx.arc(W - 150, H - 150, 50, Math.PI, 0); // Kubbe 2
    ctx.lineTo(W - 100, H - 150);
    ctx.lineTo(W - 70, H - 150); ctx.lineTo(W - 70, H - 300); ctx.lineTo(W - 50, H - 300); ctx.lineTo(W - 50, H - 150); // Minare 4
    ctx.lineTo(W, H - 150);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();

    // 3. Kandiller (Üstten Sarkan)
    cizKandil(ctx, 100, 150);
    cizKandil(ctx, W - 100, 150);
    cizKandil(ctx, 50, 100);
    cizKandil(ctx, W - 50, 100);

    // Zincirler (Kandillere giden ipler)
    ctx.strokeStyle = "#daa520"; // Goldenrod
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Sol zincirler
    ctx.moveTo(0, 0); ctx.quadraticCurveTo(50, 50, 100, 10);
    ctx.moveTo(0, 30); ctx.quadraticCurveTo(25, 60, 50, 10);
    // Sağ zincirler
    ctx.moveTo(W, 0); ctx.quadraticCurveTo(W - 50, 50, W - 100, 10);
    ctx.moveTo(W, 30); ctx.quadraticCurveTo(W - 25, 60, W - 50, 10);
    ctx.stroke();

    // 4. Orta Üst Süsleme (Ay)
    ctx.save();
    ctx.translate(W / 2, 120);
    // Dış Halka
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 3;
    ctx.stroke();
    // Hilal
    ctx.beginPath();
    ctx.arc(-5, 0, 25, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd700";
    ctx.fill();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(5, -5, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore();

    // 5. Yazılar
    ctx.textAlign = "center";

    // "Hayırlı" (El yazısı stili - cursive yoksa serif kullanıyoruz)
    ctx.fillStyle = "#fceda3"; // Açık Altın
    ctx.font = "italic 60px 'Brush Script MT', cursive";
    ctx.shadowColor = "#daa520";
    ctx.shadowBlur = 10;
    ctx.fillText(sozluk.kartMesajUst, W / 2, 250);

    // "Ramazanlar"
    ctx.font = "italic bold 80px 'Brush Script MT', cursive";
    ctx.fillText(sozluk.kartMesajAlt, W / 2, 320);

    // Detay Mesajı
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#e0e0e0";
    ctx.font = "16px Arial";
    var mesaj = sozluk.kartMesajDetay;
    var kelimeler = mesaj.split(' ');
    var satir = "";
    var y = 370;
    for (var n = 0; n < kelimeler.length; n++) {
        var testSatir = satir + kelimeler[n] + " ";
        var metrics = ctx.measureText(testSatir);
        if (metrics.width > 500 && n > 0) {
            ctx.fillText(satir, W / 2, y);
            satir = kelimeler[n] + " ";
            y += 25;
        }
        else {
            satir = testSatir;
        }
    }
    ctx.fillText(satir, W / 2, y);

    // Kişi İsmi (En altta imza gibi)
    ctx.fillStyle = "#ffd700";
    ctx.font = "bold 24px Arial";
    ctx.fillText(sozluk.kartImza + " " + isim, W / 2, H - 50);

    // Logo (MGV Style Text)
    ctx.font = "bold 14px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText(sozluk.kartAltLogo, W / 2, H - 20);

    // İndir
    var link = document.createElement('a');
    link.download = 'Ramazan-Tebrik-Karti.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function cizKandil(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);

    // İp
    ctx.beginPath();
    ctx.moveTo(0, -100);
    ctx.lineTo(0, 0);
    ctx.strokeStyle = "#daa520";
    ctx.stroke();

    // Kandil Gövdesi
    ctx.fillStyle = "#ffdf00"; // Altın sarısı
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-15, 10);
    ctx.lineTo(-15, 40);
    ctx.lineTo(0, 55);
    ctx.lineTo(15, 40);
    ctx.lineTo(15, 10);
    ctx.closePath();
    ctx.fill();

    // Işık (Glow)
    var grd = ctx.createRadialGradient(0, 25, 2, 0, 25, 20);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "rgba(255, 165, 0, 0)");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(0, 25, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function hadisGoster() {
    var liste = hadisListesi[secilenDil] || hadisListesi['tr'];
    var rastgele = Math.floor(Math.random() * liste.length);
    var hadis = liste[rastgele];
    document.getElementById('daily-quote').textContent = hadis.metin;
    document.getElementById('quote-source').textContent = hadis.kaynak;
}

function mahyaDinleyiciBaslat() {
    var inpt = document.getElementById('mahya-input');
    var disp = document.getElementById('mahya-display');
    if (inpt && disp) {
        inpt.addEventListener('input', function (e) {
            var txt = e.target.value.toUpperCase();
            if (txt.length > 0) disp.textContent = txt;
            else disp.textContent = ceviriSozlugu[secilenDil].mahyaVarsayilan;
        });
    }
}

function ayEvresiHesapla() {
    var metin = document.getElementById('moon-phase-text');
    metin.textContent = ceviriSozlugu[secilenDil].ayEvresi_4; // Dolunay varsaydık
}

async function hicriTarihGetir() {
    var bugun = new Date();
    var d = String(bugun.getDate()).padStart(2, '0');
    var m = String(bugun.getMonth() + 1).padStart(2, '0');
    var y = bugun.getFullYear();
    var resp = await fetch(API_ADRESI + "/gToH?date=" + d + "-" + m + "-" + y);
    var veri = await resp.json();
    return veri.data.hijri;
}

async function miladiyeCevir(gun, ay, yil) {
    var resp = await fetch(API_ADRESI + "/hToG?date=" + String(gun).padStart(2, '0') + "-" + String(ay).padStart(2, '0') + "-" + yil);
    var veri = await resp.json();
    var g = veri.data.gregorian;
    return new Date(g.year, g.month.number - 1, g.day);
}

function geriSayimYap(hedef, ID, miniMi) {
    if (!window.zamanlayicilar) window.zamanlayicilar = {};
    if (window.zamanlayicilar[ID]) clearInterval(window.zamanlayicilar[ID]);

    function guncelle() {
        var simdi = new Date();
        var fark = hedef - simdi;
        var sozluk = ceviriSozlugu[secilenDil];

        if (fark <= 0) {
            if (miniMi) document.getElementById(ID + '-timer').textContent = sozluk.mubarekOlsun;
            else document.getElementById('ramadan-date-text').textContent = sozluk.bugunOgun;
            return;
        }

        var g = Math.floor(fark / (1000 * 60 * 60 * 24));
        var s = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var d = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
        var sa = Math.floor((fark % (1000 * 60)) / 1000);

        if (miniMi) {
            var el = document.getElementById(ID + '-timer');
            if (el) el.textContent = g + " " + sozluk.gunKaldi;
        } else {
            // Ana sayaç
            if (document.getElementById(ID + '-days')) document.getElementById(ID + '-days').textContent = String(g).padStart(2, '0');
            if (document.getElementById(ID + '-hours')) document.getElementById(ID + '-hours').textContent = String(s).padStart(2, '0');
            if (document.getElementById(ID + '-minutes')) document.getElementById(ID + '-minutes').textContent = String(d).padStart(2, '0');
            if (document.getElementById(ID + '-seconds')) document.getElementById(ID + '-seconds').textContent = String(sa).padStart(2, '0');
        }
    }
    guncelle();
    window.zamanlayicilar[ID] = setInterval(guncelle, 1000);
}

function yildizlariBaslat() {
    var kap = document.getElementById('stars-container');
    if (!kap) return;

    // Basit yıldız ekleme (Öğrenci usulü for döngüsü)
    for (var i = 0; i < 50; i++) {
        var yildiz = document.createElement('div');
        yildiz.className = 'star';
        yildiz.style.left = Math.random() * 100 + '%';
        yildiz.style.top = Math.random() * 100 + '%';
        yildiz.style.width = (Math.random() * 3) + 'px';
        yildiz.style.height = yildiz.style.width; // Kare olsun değiştik
        yildiz.style.animationDuration = (Math.random() * 5 + 2) + 's';
        kap.appendChild(yildiz);
    }
}
