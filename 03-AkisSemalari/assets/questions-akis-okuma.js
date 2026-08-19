window.QUIZ_TITLE = "Sayısal Akış Okuma";
window.QUIZ_QUESTIONS = [
  {
    "id": "r1",
    "type": "single",
    "q": "Bu akışta sayac > N koşulu Evet olduğunda ne olur?",
    "visual": "<img src=\"assets/flows/10-1-n-yazdir.svg\" alt=\"1 den N e kadar sayıları yazdırma akış şeması\">",
    "options": [
      "Akış Bitir'e gider",
      "sayac tekrar 1 olur",
      "N yeniden alınır",
      "sayac yazdırılır"
    ],
    "answer": 0,
    "explanation": "sayac > N doğru olduğunda üst sınır aşılmıştır ve döngü sona ererek Bitir'e gider."
  },
  {
    "id": "r2",
    "type": "single",
    "q": "1'den N'e kadar sayıları yazdıran akışta sayac çıktısından sonra hangi işlem yapılır?",
    "options": [
      "sayac = sayac + 1",
      "sayac = 1",
      "N = N + 1",
      "toplam = toplam + sayac"
    ],
    "answer": 0,
    "explanation": "Sayaç yazdırıldıktan sonra 1 artırılır ve koşul yeniden değerlendirilir."
  },
  {
    "id": "r3",
    "type": "single",
    "q": "Bu akışta toplam değişkeninin başlangıç değeri nedir?",
    "visual": "<img src=\"assets/flows/11-1-n-toplam.svg\" alt=\"1 den N e kadar tamsayıların toplamı akış şeması\">",
    "options": [
      "0",
      "1",
      "N",
      "sayac"
    ],
    "answer": 0,
    "explanation": "Toplam biriktirileceği için başlangıçta toplam = 0 olarak hazırlanır."
  },
  {
    "id": "r4",
    "type": "multi",
    "q": "1'den N'e kadar tamsayıların toplamı akışındaki döngüde hangi iki işlem tekrar edilir? Birden fazla seç.",
    "options": [
      "sayac = sayac + 1",
      "toplam = toplam + sayac",
      "toplam = 0",
      "N"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "Her turda sayaç artırılır ve yeni sayaç değeri toplama eklenir."
  },
  {
    "id": "r5",
    "type": "single",
    "q": "Bu akışta mod = 0 koşulu Hayır olduğunda hangi anlam ortaya çıkar?",
    "visual": "<img src=\"assets/flows/12-tek-toplam-mod.svg\" alt=\"Tek sayıların mod kontrollü toplamı akış şeması\">",
    "options": [
      "sayac tektir ve toplama eklenir",
      "sayac çifttir ve toplama eklenmez",
      "N sıfırdır",
      "Döngü sona erer"
    ],
    "answer": 0,
    "explanation": "mod = sayac % 2 olduğundan mod = 0 koşulunun Hayır olması sayacın tek olduğunu gösterir; bu çözümde tek sayı toplama eklenir."
  },
  {
    "id": "r6",
    "type": "single",
    "q": "Tek sayıların kısa çözümünde neden mod işlemi ve mod = 0 kararı yoktur?",
    "visual": "<img src=\"assets/flows/13-tek-toplam-kisa.svg\" alt=\"Tek sayıların kısa toplam akış şeması\">",
    "options": [
      "sayac 1'den başlayıp 2'şer arttığı için yalnızca tek değerlere gelir",
      "N kullanılmadığı için",
      "Toplam hesaplanmadığı için",
      "Karar sembolü kullanılamadığı için"
    ],
    "answer": 0,
    "explanation": "Sayaç 1, 3, 5, 7... biçiminde ilerlediği için tek/çift kontrolüne gerek kalmaz."
  },
  {
    "id": "r7",
    "type": "single",
    "q": "Çift sayıların kısa çözümünde sayac = 0 ile başlamanın sonucu nedir?",
    "options": [
      "İlk olarak 0 eklenir; toplam değişmez ve sonra sayaç 2'şer artar",
      "Algoritma yanlış sonuç verir",
      "Yalnızca tek sayılar işlenir",
      "Döngü hiçbir zaman başlamaz"
    ],
    "answer": 0,
    "explanation": "0 toplamanın etkisiz elemanıdır; sonraki sayaç değerleri 2, 4, 6... olur."
  },
  {
    "id": "r8",
    "type": "single",
    "q": "Faktöriyel akışında sonuc = sonuc × sayac işleminden hemen sonra hangi işlem gelir?",
    "visual": "<img src=\"assets/flows/16-faktoriyel.svg\" alt=\"Faktöriyel akış şeması\">",
    "options": [
      "sayac = sayac + 1",
      "sonuc = 0",
      "N = N + 1",
      "sonuc çıktısı"
    ],
    "answer": 0,
    "explanation": "Çarpımdan sonra sayaç 1 artırılır ve sayac > N koşulu yeniden kontrol edilir."
  },
  {
    "id": "r9",
    "type": "single",
    "q": "Üç sayıdan en büyüğünü bulan akışta enBuyuk = a işleminden sonra ilk karşılaştırma hangisidir?",
    "visual": "<img src=\"assets/flows/18-uc-sayi-en-buyuk.svg\" alt=\"Üç sayıdan en büyüğünü bulma akış şeması\">",
    "options": [
      "b > enBuyuk",
      "c > enBuyuk",
      "a = b",
      "enBuyuk = 0"
    ],
    "answer": 0,
    "explanation": "Önce b mevcut enBuyuk ile karşılaştırılır; gerekirse enBuyuk = b yapılır."
  },
  {
    "id": "r10",
    "type": "single",
    "q": "N'den 1'e geriye sayma akışında sayac = sayac - 1 işleminden sonra hangi koşul yeniden değerlendirilir?",
    "options": [
      "sayac < 1",
      "sayac > N",
      "sayac = 0",
      "N < 1"
    ],
    "answer": 0,
    "explanation": "Her azaltmadan sonra sayac < 1 koşuluna dönülür."
  },
  {
    "id": "r11",
    "type": "single",
    "q": "Başarı durumu akışında ortalama ≥ 50 koşulu Evet olduğunda hangi çıktı üretilir?",
    "visual": "<img src=\"assets/flows/21-basari-durumu.svg\" alt=\"Başarı durumu akış şeması\">",
    "options": [
      "Geçti",
      "Kaldı",
      "ortalama",
      "50"
    ],
    "answer": 0,
    "explanation": "Koşul sağlandığında akış 'Geçti' çıktısına gider."
  },
  {
    "id": "r12",
    "type": "multi",
    "q": "Döngülü bir akışın sonlu olmasını değerlendirmek için hangileri özellikle kontrol edilmelidir? Birden fazla seç.",
    "options": [
      "Döngü değişkeninin uygun yönde değişmesi",
      "Bitiş koşulunun yeniden değerlendirilmesi",
      "Koşul sağlandığında döngüden çıkış yolunun bulunması",
      "Evet ve Hayır oklarının mutlaka aynı sembole gitmesi"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Sonluluk için döngü değişkeni ilerlemeli, koşul yeniden test edilmeli ve bitişe götüren bir çıkış yolu bulunmalıdır."
  }
];
