// Miyacan astroloji verileri ve hesapları. © 2026 Caner Yaşayan. Tüm hakları saklıdır.
// Burç sırası: Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova, Balık (SIGNS ile aynı).

// ---- BURÇ BİLGİLERİ (klasik/modern astroloji) ----
const SD=[
{el:"Ateş",mod:"Öncü",rul:"Mars",say:9,gun:"Salı",renk:["Kırmızı","#ff4d5e"],tas:"Kırmızı akik",anahtar:"cesur, girişken, bağımsız",guc:"cesaret, liderlik, hızlı karar",zayif:"sabırsızlık, çabuk öfkelenme, bencillik eğilimi",ask:"Aşkta tutkulu ve doğrudan; heyecanı ve fethetmeyi sever, ilgi çekici bir takip ister.",is:"Başlatıcıdır; yeni projelerde ve rekabette parlar, rutinde çabuk sıkılır."},
{el:"Toprak",mod:"Sabit",rul:"Venüs",say:6,gun:"Cuma",renk:["Yeşil","#46d37a"],tas:"Zümrüt",anahtar:"sabırlı, sadık, güvenilir",guc:"kararlılık, sadakat, pratiklik",zayif:"inatçılık, değişime direnç, sahiplenme",ask:"Yavaş ısınır ama bağlandığında çok sadıktır; güven, huzur ve duyusal keyif ister.",is:"Sabırlı ve istikrarlıdır; uzun vadeli işlerde ve güvenli kazançta başarılıdır."},
{el:"Hava",mod:"Değişken",rul:"Merkür",say:5,gun:"Çarşamba",renk:["Sarı","#ffd86b"],tas:"Akik",anahtar:"meraklı, esprili, çok yönlü",guc:"iletişim, uyum, zekâ",zayif:"dağınıklık, kararsızlık, yüzeysel kalma riski",ask:"Zihinsel bağ arar; sohbet, espri ve çeşitlilik onun için çekicidir.",is:"İletişim, yazı, satış ve çok yönlü işlerde parlar; tekdüzelikten kaçar."},
{el:"Su",mod:"Öncü",rul:"Ay",say:2,gun:"Pazartesi",renk:["Gümüş","#c8d0dc"],tas:"Ay taşı",anahtar:"duygusal, koruyucu, sezgisel",guc:"şefkat, sezgi, sadakat",zayif:"alınganlık, geçmişe takılma, kabuğuna çekilme",ask:"Derin duygusal bağ, güven ve yuva arar; sevdiğini kollar, ilgisiz kalınca kırılır.",is:"İnsanlara bakmayı ve güven vermeyi gerektiren işlerde iyidir; ortam huzursuzsa verimi düşer."},
{el:"Ateş",mod:"Sabit",rul:"Güneş",say:1,gun:"Pazar",renk:["Altın","#ffc83d"],tas:"Yakut",anahtar:"cömert, sıcak, kendinden emin",guc:"özgüven, cömertlik, yaratıcılık",zayif:"gurur, ilgi ihtiyacı, inat",ask:"Cömert ve sadık sever; takdir görmek ve özel hissettirilmek ister.",is:"Sahnede, liderlikte ve yaratıcı işlerde parlar; görülmediğini hissedince motivasyonu düşer."},
{el:"Toprak",mod:"Değişken",rul:"Merkür",say:4,gun:"Çarşamba",renk:["Zeytin yeşili","#7fae4a"],tas:"Safir",anahtar:"analitik, titiz, yardımsever",guc:"dikkat, düzen, çalışkanlık",zayif:"aşırı eleştirellik, endişe, mükemmeliyetçilik",ask:"Sevgisini küçük ilgilerle ve pratik yardımla gösterir; güvenilirlik ve düzen ister.",is:"Detay, analiz ve süreç işlerinde çok değerlidir; kendine fazla yüklenebilir."},
{el:"Hava",mod:"Öncü",rul:"Venüs",say:6,gun:"Cuma",renk:["Pembe","#ff7ab8"],tas:"Opal",anahtar:"dengeli, zarif, diplomatik",guc:"uyum, adalet duygusu, estetik",zayif:"kararsızlık, çatışmadan kaçma, onay arayışı",ask:"İlişkide denge, nezaket ve ortaklık arar; yalnız kalmayı pek sevmez.",is:"Ortaklık, diplomasi, tasarım ve hukuk gibi alanlarda iyidir; karar vermekte gecikebilir."},
{el:"Su",mod:"Sabit",rul:"Mars ve Plüton",say:9,gun:"Salı",renk:["Bordo","#b0304f"],tas:"Topaz",anahtar:"yoğun, tutkulu, gizemli",guc:"derinlik, kararlılık, sezgi",zayif:"kıskançlık, kontrol, affetmekte zorlanma",ask:"Ya hep ya hiç sever; derin sadakat ve yoğun bağ ister, güvenilmezlik hissederse kapanır.",is:"Araştırma, strateji ve kriz yönetiminde güçlüdür; odaklanınca bırakmaz."},
{el:"Ateş",mod:"Değişken",rul:"Jüpiter",say:3,gun:"Perşembe",renk:["Mor","#8d5cff"],tas:"Turkuaz",anahtar:"iyimser, özgür, maceracı",guc:"iyimserlik, dürüstlük, geniş vizyon",zayif:"patavatsızlık, sorumluluktan kaçma, sabırsızlık",ask:"Özgürlüğüne saygı duyan, birlikte keşfedebileceği bir partner ister; bağlanmadan önce nefes alanı arar.",is:"Eğitim, seyahat, yayıncılık ve büyük resmi gören işlerde parlar; ayrıntıda sıkılır."},
{el:"Toprak",mod:"Öncü",rul:"Satürn",say:8,gun:"Cumartesi",renk:["Lacivert","#3b5bdb"],tas:"Granat",anahtar:"disiplinli, hırslı, sorumluluk sahibi",guc:"azim, planlama, sorumluluk",zayif:"katılık, işkolik olma, duygularını gizleme",ask:"Geç açılır ama ciddi bağlanır; güven ve uzun vadeli planlar ister.",is:"Kariyer ve yönetimde güçlüdür; sabırla zirveye tırmanır."},
{el:"Hava",mod:"Sabit",rul:"Satürn ve Uranüs",say:5,gun:"Cumartesi",renk:["Turkuaz","#2fd6c8"],tas:"Ametist",anahtar:"özgün, bağımsız, ilerici",guc:"özgünlük, insancıllık, vizyon",zayif:"mesafeli durma, katı fikirlilik, duygusal soğukluk görüntüsü",ask:"Önce arkadaşlık ister; özgürlük ve zihinsel uyum olmadan bağ kurmaz.",is:"Teknoloji, bilim, toplumsal projeler ve yenilikte parlar; hiyerarşiye az uyum sağlar."},
{el:"Su",mod:"Değişken",rul:"Jüpiter ve Neptün",say:7,gun:"Perşembe",renk:["Deniz yeşili","#2fd6c8"],tas:"Akuamarin",anahtar:"hayalperest, merhametli, sanatsal",guc:"empati, hayal gücü, sezgi",zayif:"sınır koymakta zorlanma, gerçeklikten kaçış, aşırı duygusallık",ask:"Romantik ve fedakârdır; ruhsal bağ arar, kendi sınırlarını korumayı öğrenmesi gerekir.",is:"Sanat, şifa, müzik ve yardım alanlarında doğal yeteneklidir; baskı ve katı düzenden yorulur."}];

// ---- AÇILAR (iki burç arasındaki uzaklık; 0..6 burç) ----
const ASPECT=[
{ad:"Aynı burç",baz:72,anlam:"Aynı burçtan olmak birbirinizi aynada görmek gibidir: güçlü ve zayıf yanlarınız aynıdır. Anlayış kolaydır, ama kusurlar da birbirini büyütebilir.",guc:"Birbirinizi sözsüz anlarsınız.",dikkat:"Aynı zaaflar birbirini körükleyebilir.",tavsiye:"Birbirinizin farklılaşmasına alan tanıyın."},
{ad:"Komşu burçlar",baz:52,anlam:"Zodyakta yan yana duran burçlar birbirinden en az ortak noktası olanlardır: öncekinin yaşadığını sonraki henüz öğrenmemiştir. Anlamak emek ister, ama fark sizi besler.",guc:"Birbirinizden öğreneceğiniz çok şey var.",dikkat:"Öncelik ve bakış açısı farkı yanlış anlaşılma yaratabilir.",tavsiye:"Varsayım yapmayın, birbirinize sorun."},
{ad:"Sekstil (60°)",baz:80,anlam:"Ateş–hava ya da toprak–su gibi aynı yönü paylaşan burçlar arasındaki destekleyici açıdır. Fırsat yaratır; ilişkinin gelişmesi içinse çaba gerekir.",guc:"Kolay iletişim ve karşılıklı destek.",dikkat:"Fazla rahatlık ilişkiyi durağanlaştırabilir.",tavsiye:"Ortak hedefler ve projeler belirleyin."},
{ad:"Kare (90°)",baz:50,anlam:"Aynı niteliği taşıyıp farklı elementten olan burçlar arasındaki gerilimli açıdır. Sürtünme yaratır, ama hareket ve gelişim de çoğu zaman bu sürtünmeden doğar.",guc:"Birbirinizi harekete geçirir ve geliştirirsiniz.",dikkat:"Beklenti ve tempo farkı çatışma çıkarabilir.",tavsiye:"Küçük anlaşmazlıkları büyümeden konuşun."},
{ad:"Üçgen/trigon (120°)",baz:90,anlam:"Aynı elementi paylaşan burçlar arasındaki en uyumlu açıdır. Aynı dili konuşur, değerleriniz ve ritminiz örtüşür.",guc:"Doğal uyum ve güven.",dikkat:"Zorluk az olduğu için birlikte büyümek bilinçli çaba ister.",tavsiye:"Konfor alanınızdan birlikte çıkın."},
{ad:"Kuinkonks (150°)",baz:46,anlam:"Ortak elementi ya da niteliği olmayan burçlar arasındaki 'yabancılık' açısıdır. İlişkide sürekli ayarlama ve esneklik gerekir.",guc:"Birbirinizin bakış açısına hayran kalabilirsiniz.",dikkat:"Neden anlaşamadığınızı çözmek zor olabilir.",tavsiye:"Rutinlerinizi birbirinize göre ayarlayın."},
{ad:"Karşıt burçlar (180°)",baz:66,anlam:"Zodyakta karşılıklı duran burçlar birbirini tamamlar: biri eksik yanını diğerinde bulur. Güçlü çekim ve güçlü çekişme bir arada gelir.",guc:"Çok güçlü çekim ve tamamlama.",dikkat:"Zıt tutumlar sizi iki uca itebilir.",tavsiye:"Karşı tarafın yanını rakip değil tamamlayıcı olarak görün."}];

const EL_TXT={
"Ateş-Ateş":"İkiniz de ateşsiniz: tutku, enerji ve heyecan yüksek; ama sabırsızlık ve gurur çarpışabilir.",
"Hava-Hava":"İkiniz de havasınız: sohbet, merak ve fikir alışverişi bol; ancak duygusal derinliğe inmek gerekebilir.",
"Toprak-Toprak":"İkiniz de toprak: güven, pratiklik ve istikrar var; rutine saplanma riski de.",
"Su-Su":"İkiniz de su: derin duygusal bağ ve sezgi var; ruh hâlleri birbirine geçebilir.",
"Ateş-Hava":"Ateş havayla beslenir: heyecan ve fikirler birbirini büyütür. Klasik olarak uyumlu bir element eşleşmesidir.",
"Su-Toprak":"Su toprağı besler, toprak suya yatak olur: huzur, bağlılık ve güven. Klasik olarak uyumlu bir element eşleşmesidir.",
"Ateş-Toprak":"Ateş hızlı, toprak temkinlidir: biri 'hadi' der, öbürü 'dur bir düşünelim'. Denge kurulursa güçlü bir ekip olur.",
"Ateş-Su":"Ateş ile su zıt doğadadır: su ateşi söndürebilir, ateş suyu buharlaştırabilir. Duygusal tempo uyumu emek ister.",
"Hava-Su":"Hava mantıkla, su duyguyla yaklaşır: biri analiz eder, diğeri hisseder. Anlaşmak için birbirinizi 'çevirmek' gerekir.",
"Hava-Toprak":"Hava fikirlerle uçar, toprak yere basar: biri hayal, diğeri uygulama getirir. Tamamlayıcı da olabilir, uzak da."};
const EL_ADJ={"Ateş-Ateş":4,"Hava-Hava":3,"Toprak-Toprak":4,"Su-Su":3,"Ateş-Hava":6,"Su-Toprak":6,"Ateş-Toprak":-2,"Ateş-Su":-4,"Hava-Su":-2,"Hava-Toprak":-3};
const MOD_TXT={
"Öncü-Öncü":"İkiniz de öncü niteliktesiniz: ilişkiyi kimin yöneteceği konusunda çekişme olabilir, ama başlatma enerjisi çok yüksektir.",
"Sabit-Sabit":"İkiniz de sabit niteliktesiniz: sadakat ve dayanıklılık yüksek, ancak inat çatışmasını çözmek zor olabilir.",
"Değişken-Değişken":"İkiniz de değişken niteliktesiniz: uyum ve esneklik yüksek, fakat yön ve karar eksikliği yaşanabilir.",
"Sabit-Öncü":"Öncü başlatır, sabit sürdürür: iyi bir iş bölümü kurulabilir.",
"Değişken-Öncü":"Öncü yönlendirir, değişken uyum sağlar: akışkan bir denge.",
"Değişken-Sabit":"Sabit istikrar, değişken esneklik getirir: birbirinizi dengelersiniz."};
const MOD_ADJ={"Öncü-Öncü":-4,"Sabit-Sabit":-3,"Değişken-Değişken":-1,"Sabit-Öncü":0,"Değişken-Öncü":2,"Değişken-Sabit":3};
// Yönetici gezegen çekimi: Venüs–Mars (Boğa/Terazi–Koç/Akrep), Güneş–Ay (Aslan–Yengeç), Merkür–Venüs
const OZEL_BONUS={"0-1":4,"0-6":4,"1-7":4,"6-7":4,"3-4":6,"1-2":2,"2-6":2,"1-5":2,"5-6":2};
const OZEL_NOT={
"0-6":"Koç–Terazi klasik zıt kutuplardır: Koç'un cesareti ile Terazi'nin diplomasisi birbirini tamamlar; kararlılık ile uyum arasında denge kurulmalı.",
"1-7":"Boğa–Akrep: ikisi de sabit ve derin; güçlü bir çekim ve sadakat var, sahiplenme ve kıskançlık konusunda dikkat gerekir.",
"2-8":"İkizler–Yay: merak ile macera buluşur; özgürlüğü severler, ama sorumluluk paylaşımı konuşulmalı.",
"3-9":"Yengeç–Oğlak: duygu ile sorumluluk; biri yuva, diğeri hedef getirir. Birbirinin ihtiyacını anlamak ilişkiyi sağlamlaştırır.",
"4-10":"Aslan–Kova: sıcak kalp ile soğukkanlı akıl; ikisi de sabit ve kendi bildiğini yapar. Bu hem güçlü çekim hem inat demektir.",
"5-11":"Başak–Balık: düzen ile hayal; Başak Balık'a ayakları yere bastırmayı, Balık Başak'a kalbini hatırlamayı öğretir.",
"1-4":"Boğa–Aslan: ikisi de sabit burç ve aralarında kare açı var. Sadakat ve tutku yüksek, inat ve beklenti çatışması da yüksek. Boğa istikrar ve sakinlik, Aslan takdir ve görkem ister; bunu fark ederseniz güçlü, etmezseniz yorucu bir ilişki olur.",
"0-4":"Koç–Aslan: iki ateş burcu; tutku ve eğlence bol, ego çatışmasına dikkat.",
"4-8":"Aslan–Yay: ateş üçgeninde eğlenceli, cömert ve iyimser bir çift.",
"1-5":"Boğa–Başak: toprak üçgeninde istikrarlı, pratik ve güvenilir bir çift.",
"1-9":"Boğa–Oğlak: istikrar ve hedef; birlikte kalıcı bir yapı kurabilirler.",
"3-7":"Yengeç–Akrep: su üçgeninde derin duygusal bağ ve sezgisel anlayış.",
"3-11":"Yengeç–Balık: duyarlı ve şefkatli bir bağ; sınırlar ve gerçeklik konusunda dikkat gerekir.",
"6-10":"Terazi–Kova: hava üçgeninde zihinsel uyum, sohbet ve ortak ilgi alanları.",
"2-6":"İkizler–Terazi: hava üçgeninde eğlenceli, sosyal ve uyumlu bir ikili.",
"0-8":"Koç–Yay: macera, enerji ve özgürlük; birlikte hızlı ve heyecanlı bir hayat.",
"4-7":"Aslan–Akrep: ikisi de sabit ve güçlü; kare açı yoğun bir çekim ve güç mücadelesi getirir.",
"0-3":"Koç–Yengeç: kare açı; Koç'un doğrudanlığı Yengeç'i incitebilir, Yengeç'in alınganlığı Koç'u şaşırtabilir.",
"6-9":"Terazi–Oğlak: kare açı; uyum arayan ile hedef odaklı birinin tempoları farklıdır.",
"5-9":"Başak–Oğlak: toprak üçgeninde çalışkan, güvenilir ve planlı bir ikili.",
"7-11":"Akrep–Balık: su üçgeninde derin, ruhsal ve sezgisel bir bağ.",
"4-6":"Aslan–Terazi: sekstil; sosyal, zarif ve birbirini destekleyen bir ikili.",
"3-4":"Yengeç–Aslan: komşu burçlar, Ay ile Güneş: sıcak ve besleyici bir bağ, ama ihtiyaçlar farklıdır.",
"2-4":"İkizler–Aslan: sekstil; eğlenceli, sosyal ve yaratıcı bir ikili."};
// Kategori ayarları (açı uzaklığı 0..6 için): aşk, arkadaşlık, iş
const ADJ_ASK=[2,-3,0,-2,2,-4,6], ADJ_DOST=[3,-1,6,-4,5,-3,0], ADJ_IS=[0,-2,5,2,4,-1,2];
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const UY_ETIKET=g=>g>=85?"Çok uyumlu":g>=70?"Uyumlu":g>=55?"Orta düzeyde uyumlu":g>=42?"Zorlayıcı ama öğretici":"Çok zorlayıcı";

// İki burcun uyumu: yalnızca burç çiftine bağlıdır, hiç değişmez ve a↔b simetriktir.
function uyumHesap(a,b){
  const d0=((b-a)%12+12)%12,d=Math.min(d0,12-d0);
  const el=[SD[a].el,SD[b].el].sort().join("-"),mo=[SD[a].mod,SD[b].mod].sort().join("-");
  const pk=Math.min(a,b)+"-"+Math.max(a,b);
  const g=clamp(ASPECT[d].baz+(EL_ADJ[el]||0)+(MOD_ADJ[mo]||0)+(OZEL_BONUS[pk]||0),35,96);
  return {genel:g,ask:clamp(g+ADJ_ASK[d],30,97),dost:clamp(g+ADJ_DOST[d],30,97),is:clamp(g+ADJ_IS[d],30,97),
    d,asp:ASPECT[d],elTxt:EL_TXT[el],modTxt:MOD_TXT[mo],ozel:OZEL_NOT[pk]||"",etiket:UY_ETIKET(g)};
}

// Bir burcun en uyumlu eşi: uyum puanı en yüksek diğer burç (sabit; her sekmede aynı)
function enUyumluBurc(i){let b=-1,s=-1;for(let j=0;j<12;j++){if(j===i)continue;const g=uyumHesap(i,j).genel;if(g>s){s=g;b=j}}return b}

// ---- AY (gerçek hesap: Meeus, düşük duyarlıklı; burç ve evre için yeterli) ----
const _rad=Math.PI/180;
const _jd=d=>d.getTime()/86400000+2440587.5;
function _sunLon(J){const T=(J-2451545)/36525,M=(357.52911+35999.05029*T)*_rad;return(((280.46646+36000.76983*T+1.914602*Math.sin(M)+0.019993*Math.sin(2*M))%360)+360)%360}
function _moonLon(J){
  const T=(J-2451545)/36525,Lp=218.3164477+481267.88123421*T,D=(297.8501921+445267.1114034*T)*_rad,M=(357.5291092+35999.0502909*T)*_rad,Mp=(134.9633964+477198.8675055*T)*_rad,F=(93.272095+483202.0175233*T)*_rad;
  const l=Lp+6.288774*Math.sin(Mp)+1.274027*Math.sin(2*D-Mp)+0.658314*Math.sin(2*D)+0.213618*Math.sin(2*Mp)-0.185116*Math.sin(M)-0.114332*Math.sin(2*F)+0.058793*Math.sin(2*D-2*Mp)+0.057066*Math.sin(2*D-M-Mp)+0.053322*Math.sin(2*D+Mp)+0.045758*Math.sin(2*D-M);
  return((l%360)+360)%360;
}
function ayBilgi(date){
  const J=_jd(date),m=_moonLon(J),s=_sunLon(J),ph=(((m-s)%360)+360)%360;
  return {burc:Math.floor(m/30),derece:m%30,evre:ph,evreNo:Math.floor(((ph+22.5)%360)/45),aydinlik:Math.round((1-Math.cos(ph*_rad))/2*100)};
}
// Ay simgesi: ışıklı kısım gerçek evreye göre çizilir (büyürken sağ taraf, küçülürken sol taraf aydınlık)
function aySvg(ph){
  const r=28,c=32,rx=(r*Math.abs(Math.cos(ph*_rad))).toFixed(1),buyuyor=ph<180;
  const sweep=buyuyor?(ph<90?0:1):(ph>270?1:0);
  const yari=buyuyor?`M${c},${c-r} A${r},${r} 0 0 1 ${c},${c+r}`:`M${c},${c-r} A${r},${r} 0 0 0 ${c},${c+r}`;
  return `<svg width="56" height="56" viewBox="0 0 64 64" style="flex:none"><circle cx="${c}" cy="${c}" r="${r}" fill="#2c2750" stroke="#ffffff33"/><path d="${yari} A${rx},${r} 0 0 ${sweep} ${c},${c-r} Z" fill="#f7efc9"/></svg>`;
}
const AY_BURC_TXT=[
"eylem, cesaret ve hız ön planda; sabırsızlık ve çabuk parlama olabilir.",
"huzur, konfor ve duyusal keyif öne çıkar; işler yavaş ama sağlam ilerler.",
"merak, sohbet ve haberleşme artar; zihin hareketli, odak dağılabilir.",
"duygular, ev ve aile ön planda; sezgiler güçlü (Ay kendi burcunda).",
"yaratıcılık, neşe ve görünür olma isteği artar; takdir ihtiyacı yükselir.",
"düzen, detay ve toparlanma isteği öne çıkar; planlama için verimli.",
"ilişkiler, uyum ve estetik öne çıkar; karar vermek zor olabilir.",
"duygular yoğun ve derin; gizli konular, tutku ve sezgiler gündemde.",
"iyimserlik, macera ve öğrenme isteği artar; açık sözlülük yükselir.",
"ciddiyet, sorumluluk ve hedef odaklılık öne çıkar; duygular kontrollü.",
"özgürlük, arkadaşlık ve yenilik ön planda; duygusal mesafe ve fikir üretimi.",
"hayal gücü, empati ve sezgi yüksek; duygusal hassasiyet artar."];

// Ev numarası: kişinin burcundan sayılan 12 burç (tam burç sistemi)
const evNo=(kisi,gezegen)=>((gezegen-kisi+12)%12)+1;
// Günün puanı (burca özel): Ay'ın o burçla açısı (0..6 burç uzaklığı) ve Ay'ın parlaklığı yarı yarıya karışır;
// küçük, güne ve burca bağlı sapma her burcun puanını birbirinden ayırır.
const AY_ACI_E=[88,60,78,52,90,56,62];
function gunPuani(kisi,ayBurc,isik,gunAnahtar){
  const sonuc=[];
  for(let i=0;i<=kisi;i++){
    const d0=((ayBurc-i)%12+12)%12,e=AY_ACI_E[Math.min(d0,12-d0)];
    let p=clamp(Math.round(0.5*e+0.5*(45+0.5*isik))+(hash(gunAnahtar+"|"+i)%9)-4,20,98);
    while(sonuc.includes(p))p++; // iki burç aynı puanı almasın
    sonuc.push(p);
  }
  return sonuc[kisi];
}

// ---- GEZEGENLER (JPL "yaklaşık Kepler öğeleri", 1800–2050; burç tayini için yeterli duyarlık) ----
// Sıra: a, e, I, L, boylam(perihel), boylam(düğüm) ve yüzyıllık değişimleri.
const KEP={
 merkur:[0.38709927,0.20563593,7.00497902,252.25032350,77.45779628,48.33076593,0.00000037,0.00001906,-0.00594749,149472.67411175,0.16047689,-0.12534081],
 venus:[0.72333566,0.00677672,3.39467605,181.97909950,131.60246718,76.67984255,0.00000390,-0.00004107,-0.00078890,58517.81538729,0.00268329,-0.27769418],
 dunya:[1.00000261,0.01671123,-0.00001531,100.46457166,102.93768193,0.0,0.00000562,-0.00004392,-0.01294668,35999.37244981,0.32327364,0.0],
 mars:[1.52371034,0.09339410,1.84969142,-4.55343205,-23.94362959,49.55953891,0.00001847,0.00007882,-0.00813131,19140.30268499,0.44441088,-0.29257343],
 jupiter:[5.20288700,0.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-0.00011607,-0.00013253,-0.00183714,3034.74612775,0.21252668,0.20469106],
 saturn:[9.53667594,0.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-0.00125060,-0.00050991,0.00193609,1222.49362201,-0.41897216,-0.28867794]};
function _helio(ad,T){
  const k=KEP[ad],v=j=>k[j]+k[j+6]*T;
  const a=v(0),e=v(1),I=v(2)*_rad,L=v(3),pe=v(4),no=v(5)*_rad;
  const M=((((L-pe)%360)+540)%360-180)*_rad,w=(pe-no/_rad)*_rad;
  let E=M+e*Math.sin(M);for(let n=0;n<12;n++)E=M+e*Math.sin(E);
  const x=a*(Math.cos(E)-e),y=a*Math.sqrt(1-e*e)*Math.sin(E);
  const cw=Math.cos(w),sw=Math.sin(w),cO=Math.cos(no),sO=Math.sin(no),cI=Math.cos(I);
  return [(cw*cO-sw*sO*cI)*x+(-sw*cO-cw*sO*cI)*y,(cw*sO+sw*cO*cI)*x+(-sw*sO+cw*cO*cI)*y];
}
// Geosentrik ekliptik boylam (tropikal zodyak, tarihin ekinoksu)
function gezegenBoylam(ad,J){
  const T=(J-2451545)/36525,p=_helio(ad,T),d=_helio("dunya",T);
  return(((Math.atan2(p[1]-d[1],p[0]-d[0])/_rad+1.39697*T)%360)+360)%360;
}
const gezegenBurc=(ad,J)=>Math.floor(gezegenBoylam(ad,J)/30);
// Geri hareket (retro): boylam azalıyorsa
function retroMu(ad,J){const d=gezegenBoylam(ad,J+0.5)-gezegenBoylam(ad,J-0.5);return((d+540)%360-180)<0}

// ---- YÜKSELEN BURÇ ----
function yukselenBoylam(J,enlem,boylam){
  const T=(J-2451545)/36525;
  const gmst=280.46061837+360.98564736629*(J-2451545)+0.000387933*T*T-T*T*T/38710000;
  const th=(((gmst+boylam)%360)+360)%360*_rad,eps=(23.4392911-0.0130042*T)*_rad,f=enlem*_rad;
  return((Math.atan2(Math.cos(th),-(Math.sin(th)*Math.cos(eps)+Math.tan(f)*Math.sin(eps)))/_rad)%360+360)%360;
}

// ---- SAAT DİLİMİ: yerel doğum saatini UTC'ye çevirir (geçmiş yaz saati kurallarını tarayıcı bilir) ----
function _tzOfset(ms,tz){
  const f=new Intl.DateTimeFormat("en-US",{timeZone:tz,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),p={};
  f.formatToParts(new Date(ms)).forEach(x=>p[x.type]=+x.value);
  return(Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)-Math.floor(ms/1000)*1000)/60000;
}
function yerelUtc(y,mo,d,h,mi,tz){let t=Date.UTC(y,mo-1,d,h,mi);for(let k=0;k<3;k++)t=Date.UTC(y,mo-1,d,h,mi)-_tzOfset(t,tz)*60000;return t}

// ---- DOĞUM YERLERİ [ad, enlem, boylam, saat dilimi] ----
const TR="Europe/Istanbul";
const SEHIRLER=[
["Adana",37.00,35.32,TR],["Adıyaman",37.76,38.28,TR],["Afyonkarahisar",38.76,30.54,TR],["Ağrı",39.72,43.05,TR],["Aksaray",38.37,34.03,TR],["Amasya",40.65,35.83,TR],["Ankara",39.93,32.86,TR],["Antalya",36.90,30.70,TR],["Ardahan",41.11,42.70,TR],["Artvin",41.18,41.82,TR],["Aydın",37.85,27.84,TR],["Balıkesir",39.65,27.89,TR],["Bartın",41.64,32.34,TR],["Batman",37.88,41.13,TR],["Bayburt",40.26,40.23,TR],["Bilecik",40.14,29.98,TR],["Bingöl",38.88,40.50,TR],["Bitlis",38.40,42.11,TR],["Bolu",40.73,31.61,TR],["Burdur",37.72,30.29,TR],["Bursa",40.19,29.06,TR],["Çanakkale",40.15,26.41,TR],["Çankırı",40.60,33.62,TR],["Çorum",40.55,34.95,TR],["Denizli",37.78,29.09,TR],["Diyarbakır",37.91,40.24,TR],["Düzce",40.84,31.16,TR],["Edirne",41.68,26.56,TR],["Elazığ",38.67,39.22,TR],["Erzincan",39.75,39.49,TR],["Erzurum",39.90,41.27,TR],["Eskişehir",39.78,30.52,TR],["Gaziantep",37.07,37.38,TR],["Giresun",40.91,38.39,TR],["Gümüşhane",40.46,39.48,TR],["Hakkari",37.58,43.74,TR],["Hatay",36.40,36.35,TR],["Iğdır",39.92,44.04,TR],["Isparta",37.76,30.55,TR],["İstanbul",41.01,28.98,TR],["İzmir",38.42,27.14,TR],["Kahramanmaraş",37.58,36.94,TR],["Karabük",41.20,32.63,TR],["Karaman",37.18,33.22,TR],["Kars",40.60,43.10,TR],["Kastamonu",41.38,33.78,TR],["Kayseri",38.73,35.49,TR],["Kırıkkale",39.85,33.52,TR],["Kırklareli",41.74,27.23,TR],["Kırşehir",39.15,34.17,TR],["Kilis",36.72,37.12,TR],["Kocaeli",40.77,29.92,TR],["Konya",37.87,32.48,TR],["Kütahya",39.42,29.98,TR],["Malatya",38.35,38.31,TR],["Manisa",38.61,27.43,TR],["Mardin",37.31,40.74,TR],["Mersin",36.80,34.64,TR],["Muğla",37.22,28.36,TR],["Muş",38.74,41.49,TR],["Nevşehir",38.62,34.71,TR],["Niğde",37.97,34.68,TR],["Ordu",40.98,37.88,TR],["Osmaniye",37.07,36.25,TR],["Rize",41.02,40.52,TR],["Sakarya",40.69,30.44,TR],["Samsun",41.29,36.33,TR],["Siirt",37.93,41.94,TR],["Sinop",42.03,35.15,TR],["Sivas",39.75,37.02,TR],["Şanlıurfa",37.16,38.79,TR],["Şırnak",37.52,42.46,TR],["Tekirdağ",40.98,27.51,TR],["Tokat",40.31,36.55,TR],["Trabzon",41.00,39.72,TR],["Tunceli",39.11,39.55,TR],["Uşak",38.68,29.41,TR],["Van",38.49,43.38,TR],["Yalova",40.65,29.27,TR],["Yozgat",39.82,34.81,TR],["Zonguldak",41.46,31.80,TR],
["Lefkoşa (KKTC)",35.19,33.38,"Asia/Nicosia"],["Berlin",52.52,13.40,"Europe/Berlin"],["Köln",50.94,6.96,"Europe/Berlin"],["Frankfurt",50.11,8.68,"Europe/Berlin"],["Londra",51.51,-0.13,"Europe/London"],["Paris",48.86,2.35,"Europe/Paris"],["Amsterdam",52.37,4.90,"Europe/Amsterdam"],["Brüksel",50.85,4.35,"Europe/Brussels"],["Viyana",48.21,16.37,"Europe/Vienna"],["Zürih",47.38,8.54,"Europe/Zurich"],["Stockholm",59.33,18.07,"Europe/Stockholm"],["Bakü",40.41,49.87,"Asia/Baku"],["New York",40.71,-74.01,"America/New_York"]];

// ---- DOĞUM HARİTASI ----
// bilg: {y,m,d,h,mi (saat bilinmiyorsa h=null), sehir (SEHIRLER indeksi)}
function dogumHaritasi(b){
  const [,enlem,boylam,tz]=SEHIRLER[b.sehir],saatVar=b.h!=null;
  const ms=yerelUtc(b.y,b.m,b.d,saatVar?b.h:12,saatVar?b.mi:0,tz),J=ms/86400000+2440587.5;
  const ay=_moonLon(J),gunes=_sunLon(J);
  const sonuc={gunes:Math.floor(gunes/30),gunesD:gunes%30,ay:Math.floor(ay/30),ayD:ay%30,
    merkur:gezegenBurc("merkur",J),venus:gezegenBurc("venus",J),mars:gezegenBurc("mars",J),yuk:null,saatVar};
  if(saatVar){const y=yukselenBoylam(J,enlem,boylam);sonuc.yuk=Math.floor(y/30);sonuc.yukD=y%30}
  else{ // saat yoksa gün içinde Ay (ve diğerleri) burç değiştirdi mi?
    const g0=yerelUtc(b.y,b.m,b.d,0,0,tz)/86400000+2440587.5,g1=g0+1;
    sonuc.ayA=Math.floor(_moonLon(g0)/30);sonuc.ayB=Math.floor(_moonLon(g1-1/1440)/30);sonuc.ayKesin=sonuc.ayA===sonuc.ayB;
    sonuc.merkurKesin=gezegenBurc("merkur",g0)===gezegenBurc("merkur",g1-1/1440);
    sonuc.venusKesin=gezegenBurc("venus",g0)===gezegenBurc("venus",g1-1/1440);
  }
  return sonuc;
}
