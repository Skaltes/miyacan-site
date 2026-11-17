// Miyacan doğum haritası yorumları, kişisel uyum ve gezegen geçişleri. © 2026 Caner Yaşayan. Tüm hakları saklıdır.
// astro.js'den sonra yüklenir.

// ---- DOĞUM HARİTASI YORUMLARI (burç sırası: Koç ... Balık) ----
const DOGUM_AY=[
"Duygularını hızlı ve açık yaşarsın; tepkin anlıktır, bağımsız hissetmeye ihtiyaç duyarsın.",
"Güvende, rahat ve istikrarlı hissetmek istersin; duygusal bağın yavaş ama kalıcıdır.",
"Duygularını konuşarak işlersin; merak, sohbet ve çeşitlilik ruhunu besler.",
"Çok duygusal ve koruyucusun; yuva, aile ve güvenli bağlar senin için her şeydir.",
"Sevilmek, takdir görmek ve neşeli olmak duygusal ihtiyacındır; sıcak ve cömert bir kalbin var.",
"Duygularını düzenle ve yardım ederek ifade edersin; hizmet etmeyi seversin ama kendine eleştirel olabilirsin.",
"Uyum, nezaket ve ilişki içinde huzur bulursun; çatışma seni duygusal olarak yorar.",
"Duyguların yoğun ve derindir; güven duymadan açılmaz, bağlandığında bütün kalbinle bağlanırsın.",
"Özgürlük, umut ve yeni deneyimlerle şarj olursun; sıkıldığında duygusal olarak uzaklaşırsın.",
"Duygularını kontrollü yaşarsın; güvende hissetmek için sorumluluk ve düzen gerekir.",
"Duygusal alanına ve özgürlüğüne ihtiyaç duyarsın; duyguları önce zihninle anlamaya çalışırsın.",
"Çok sezgisel ve empatiksin; başkalarının duygusunu hissedersin, sınır koymak öğrenme alanındır."];
const DOGUM_YUK=[
"Dünyaya cesur, atılgan ve enerjik görünürsün; ilk izlenimin kararlılık ve hareket.",
"Sakin, güvenilir ve duyusal bir izlenim bırakırsın; yavaş ve emin adımlarla ilerlersin.",
"Meraklı, konuşkan ve esprili görünürsün; ilk izlenimin genç ve zeki bir enerji.",
"Yumuşak, şefkatli ve korumacı bir izlenim verirsin; ilk bakışta kolayca güven uyandırırsın.",
"Karizmatik, sıcak ve dikkat çeken bir duruşun var; odaya girdiğinde fark edilirsin.",
"Düzenli, ölçülü ve zeki bir izlenim bırakırsın; ayrıntıya dikkat eden biri olarak görünürsün.",
"Zarif, nazik ve çekici görünürsün; ilk izlenimin uyumlu ve diplomatik.",
"Yoğun, gizemli ve etkileyici bir izlenim bırakırsın; bakışların derindir.",
"Açık sözlü, neşeli ve maceracı görünürsün; iyimser ve özgür bir enerji taşırsın.",
"Ciddi, olgun ve güvenilir görünürsün; ilk izlenimin sorumluluk sahibi biri.",
"Özgün, bağımsız ve biraz farklı görünürsün; kalıplara uymayan bir havan var.",
"Hayalperest, nazik ve sezgisel bir izlenim bırakırsın; yumuşak ve gizemli bir hava taşırsın."];
const DOGUM_MER=[
"Hızlı düşünür, doğrudan konuşursun; sabırsız ama net bir iletişimin var.",
"Yavaş ve sağlam düşünürsün; konuştuğunda ne dediğini bilirsin, fikrini zor değiştirirsin.",
"Çok hızlı, meraklı ve esprili bir zihnin var; aynı anda birçok konuyu takip edersin.",
"Duygularınla ve hafızanla düşünürsün; sezgisel ve koruyucu bir iletişim kurarsın.",
"Etkileyici, hevesli ve gösterişli konuşursun; fikirlerini sahiplenirsin.",
"Analitik, detaycı ve pratik düşünürsün; eleştirel zekân çok güçlüdür.",
"Dengeli, nazik ve diplomatik konuşursun; her iki tarafı da görmeye çalışırsın.",
"Derin, sorgulayıcı ve gözlemci bir zihnin var; satır aralarını okursun.",
"Büyük resmi görür, açık sözlü konuşursun; felsefe ve öğrenme seni heyecanlandırır.",
"Planlı, ciddi ve stratejik düşünürsün; sözlerin ölçülüdür.",
"Özgün, bağımsız ve ilerici fikirler üretirsin; kalıpların dışında düşünürsün.",
"Hayal gücü ve sezgiyle düşünürsün; sözlerden çok duyguları anlarsın."];
const DOGUM_VEN=[
"Aşkta doğrudan ve tutkulusun; heyecanı ve fethetmeyi seversin.",
"Sadık, sakin ve duyusal seversin; sevgiyi dokunuş, güven ve zamanla gösterirsin.",
"Flörtte esprili ve meraklısın; zihinsel bağ kurduğun kişiye aşık olursun.",
"Şefkatli ve koruyucu seversin; güvenli, yuva gibi bir ilişki ararsın.",
"Cömert, romantik ve dramatik seversin; takdir edilmek ve özel hissetmek istersin.",
"Sevgini küçük ilgilerle ve yardımla gösterirsin; güvenilirliği ve düzeni önemsersin.",
"Zarif, romantik ve uyumlu seversin; ilişkide denge ve estetik ararsın.",
"Derin, tutkulu ve sadık seversin; ya hep ya hiç yaklaşımın vardır.",
"Özgür, eğlenceli ve maceracı seversin; birlikte keşfedebileceğin biri ararsın.",
"Ciddi ve sadık seversin; yavaş açılırsın ama kalıcı bağ kurarsın.",
"Önce arkadaşlık kurarsın; özgürlük ve zihinsel uyum aşk için şarttır.",
"Romantik, fedakâr ve hayalperest seversin; ruh eşi ararsın."];
const DOGUM_MAR=[
"Enerjin doğrudan ve güçlü; harekete geçmekte hızlısın, rekabeti seversin.",
"Enerjin sabır ve dayanıklılıkla akar; yavaş başlar, bırakmazsın.",
"Enerjini zihinsel işlere ve iletişime harcarsın; aynı anda birçok işle uğraşırsın.",
"Enerjin duygulara bağlı; sevdiklerini korumak için harekete geçersin.",
"Enerjin gösterişli ve cesur; liderlik etmek ve parlamak istersin.",
"Enerjin detaylı ve verimli; işi kusursuz yapmaya odaklanırsın.",
"Enerjin nazik ve diplomatik; çatışmadan kaçar, uyum için çabalarsın.",
"Enerjin yoğun, stratejik ve kararlı; hedefine odaklanınca durmazsın.",
"Enerjin maceracı ve özgür; hareket, spor ve keşif seni besler.",
"Enerjin disiplinli ve azimli; hedefe sabırla ilerlersin.",
"Enerjin özgün ve değişime açık; sıra dışı yollarla harekete geçersin.",
"Enerjin dalgalı ve sezgisel; ilham geldiğinde çok güçlüsün."];
// Ay'ın yükselen burca göre evi (günlük yorumda kişiselleştirme)
const EV_AY=[
"Ay senin 1. evinde: duygularının ve ruh halinin dışarıdan fark edildiği bir gün.",
"Ay 2. evinde: para, değerler ve güvenlik duygusu gündemde.",
"Ay 3. evinde: konuşma, mesajlaşma ve yakın çevreyle ilgili bir gün.",
"Ay 4. evinde: ev, aile ve içe dönme isteği öne çıkıyor.",
"Ay 5. evinde: eğlence, aşk ve yaratıcılık için güzel bir gün.",
"Ay 6. evinde: iş, sağlık ve günlük düzen gündemde.",
"Ay 7. evinde: ilişkiler ve başkalarıyla karşılaşmalar öne çıkıyor.",
"Ay 8. evinde: derin duygular, ortak konular ve dönüşüm gündemde.",
"Ay 9. evinde: öğrenme, seyahat ve geniş düşünme isteği öne çıkıyor.",
"Ay 10. evinde: iş, hedefler ve toplumsal görünürlük gündemde.",
"Ay 11. evinde: arkadaşlıklar, topluluklar ve gelecek planları öne çıkıyor.",
"Ay 12. evinde: dinlenme, iç dünya ve yalnız kalma ihtiyacı artıyor."];

// ---- KİŞİSEL UYUM (iki doğum haritası arasında) ----
const SYN_BASLIK={gunes:"☀️ Güneş–Güneş (temel karakter)",ay:"🌙 Ay–Ay (duygusal uyum)",venmar:"💞 Venüs–Mars (çekim ve tutku)",mer:"☿ Merkür–Merkür (iletişim)",yuk:"🌅 Yükselen–Güneş (ilk izlenim ve çekim)"};
const SYN_METIN={
 gunes:["Temel karakterleriniz birbirine uyumlu; yaşam bakışınız ve hedefleriniz kolayca örtüşür.","Karakterleriniz farklı yönler taşıyor ama birbirini tamamlayabilir.","Temel bakış açılarınız farklı; birbirinizi anlamak için emek gerekir."],
 ay:["Duygusal ihtiyaçlarınız örtüşüyor: yanınızda kendinizi güvende ve anlaşılmış hissedersiniz.","Duygu dilleriniz biraz farklı; ihtiyaçlarınızı açıkça söylemek işe yarar.","Duygusal tepkileriniz birbirinden çok farklı; hassasiyetlere dikkat etmek gerekir."],
 venmar:["Aranızda güçlü çekim ve kimya var; sevgi gösterme tarzlarınız birbirine karşılık veriyor.","Çekim var, ama arzu ve ilgi gösterme biçimleriniz farklı olabilir.","Çekim zayıf ya da sürtünmeli; birbirinizin sevgi dilini öğrenmeniz gerekir."],
 mer:["İletişiminiz akıcı: birbirinizi kolay anlar, rahat konuşursunuz.","Düşünme ve konuşma tarzlarınız farklı; dinlemek önemli.","Anlatım tarzlarınız çatışabilir; yanlış anlaşılmalara dikkat edin."],
 yuk:["İlk izlenimleriniz ve birbirinizin özüne duyduğunuz çekim yüksek.","Birbirinizi zamanla daha iyi tanıyıp seversiniz.","İlk izlenimde anlaşmak zor olabilir; birbirinizi tanıdıkça fikir değişebilir."]};
// Venüs–Mars açı puanı: kavuşum, komşu, sekstil, kare, üçgen, kuinkonks, karşıt (kare de güçlü kimya verir)
const CEKIM=[90,55,82,70,88,55,85];
const _uz=(a,b)=>{const d=((b-a)%12+12)%12;return Math.min(d,12-d)};
function kisiselUyum(A,B){
  const par=[],ekle=(k,skor,w,detay)=>par.push({k,skor:Math.round(skor),w,detay,metin:SYN_METIN[k][skor>=80?0:skor>=60?1:2]});
  ekle("gunes",uyumHesap(A.gunes,B.gunes).genel,25,[A.gunes,B.gunes]);
  ekle("ay",uyumHesap(A.ay,B.ay).genel,25,[A.ay,B.ay]);
  ekle("venmar",(CEKIM[_uz(A.venus,B.mars)]+CEKIM[_uz(B.venus,A.mars)])/2,25,[A.venus,B.mars,B.venus,A.mars]);
  ekle("mer",uyumHesap(A.merkur,B.merkur).genel,10,[A.merkur,B.merkur]);
  if(A.yuk!=null&&B.yuk!=null)ekle("yuk",(uyumHesap(A.yuk,B.gunes).genel+uyumHesap(B.yuk,A.gunes).genel)/2,15,[A.yuk,B.gunes,B.yuk,A.gunes]);
  const w=par.reduce((t,p)=>t+p.w,0),genel=Math.round(par.reduce((t,p)=>t+p.skor*p.w,0)/w);
  return {genel,etiket:UY_ETIKET(genel),par};
}
