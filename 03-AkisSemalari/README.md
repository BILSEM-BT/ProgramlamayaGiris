# Akış Şemaları - Etkileşimli Ders

Bu klasör Niyazi Sayın Bilim ve Sanat Merkezi Bilişim Teknolojileri Dersi kapsamında Programlamaya Giriş bölümünün üçüncü dersi için hazırlanmıştır.

**Ders:** Bilişim Teknolojileri Dersi  
**Kurum:** Niyazi Sayın Bilim ve Sanat Merkezi  
**Öğretmen:** Ersin ŞANLI

## İçerik

- `index.html`: Ders giriş sayfası
- `konu-anlatimi.html`: Akış Şemaları konu anlatımı ve sayısal örnekler
- `uygulamalar.html`: Uygulama merkezi
- `uygulama-1-semboller.html`: Semboller ve kurallar - 12 soru
- `uygulama-2-akis-okuma.html`: Sayısal akış şeması okuma - 12 soru
- `uygulama-3-donusum.html`: Algoritmadan akış şemasına - 12 soru
- `assets/flows/`: Sayısal algoritmaların SVG akış şemaları

Toplam **36 etkileşimli soru** ve **22 sayısal akış şeması** bulunmaktadır.

## Bu Sürümde Kullanılan Gösterim Standardı

- Paralelkenar yalnızca **giriş** için kullanılır.
- Çıktı için alt kenarı dalgalı ayrı bir **çıktı sembolü** kullanılır.
- Bağlayıcı sembolü kullanılmaz.
- Şekillerin içine `A1`, `A2`, `A3` gibi algoritma adım numaraları yazılmaz.
- Giriş sembolünde `N sayısını gir` yerine yalnızca `N` yazılır.
- İşlem dikdörtgeninde `ata`, `işlemini yap`, `artır` gibi tamamlayıcı ifadeler kullanılmaz.
- İşlem kutularında yalnızca `toplam = toplam + sayac` gibi matematiksel ifadeler bulunur.
- Karar sembolünde yalnızca `sayac > N` gibi koşul bulunur; koşulun sonuna soru işareti eklenmez.
- `A5'e dön`, `A8'e git` gibi yönlendirmeler şekillerin içine yazılmaz; yön oklarıyla gösterilir.
- Çıktı sembolünde yalnızca `toplam`, `ortalama`, `sayac` gibi sonuç değişkenleri veya kısa sonuç değerleri bulunur.

## Ders İçindeki Akış Şemaları

Bu sürümde gündelik yaşam algoritmalarının akış şemaları çizilmemiştir. Yalnızca sayısal ve matematiksel algoritmalar kullanılmıştır.

Akış şeması bulunan örnekler:

1. Dikdörtgenin alanını hesaplayan algoritma
2. Girilen bir sayının pozitif mi negatif mi olduğunu belirleyen algoritma
3. Girilen iki sayıdan küçük olanı belirleyen algoritma
4. 1 ile 1000 arasındaki sayıları ekrana yazdıran algoritma
5. Girilen iki sayının ortalamasını hesaplayan algoritma
6. Girilen iki sayıdan büyük olanı bulan algoritma
7. Girilen sayının çift mi tek mi olduğunu bulan algoritma
8. Girilen üç sayının ortalamasını hesaplayan algoritma
9. Dikdörtgenin alanını ve çevresini hesaplayan algoritma
10. 1'den N'e kadar olan sayıları ekrana yazdıran algoritma
11. 1'den N'e kadar olan tamsayıların toplamını hesaplayan algoritma
12. 1'den N'e kadar olan tek tamsayıların toplamını hesaplayan algoritma
13. Tek tamsayıların toplamı - kısa çözüm
14. 1'den N'e kadar olan çift tamsayıların toplamını hesaplayan algoritma
15. Çift tamsayıların toplamı - kısa çözüm
16. Girilen N sayısının faktöriyelini hesaplayan algoritma
17. Girilen sayının 3'e ve 5'e tam bölünüp bölünmediğini bulan algoritma
18. Girilen üç sayıdan en büyük olanı bulan algoritma
19. N sayısından 1'e kadar sayıları geriye doğru yazdıran algoritma
20. Girilen sayının karesini ve küpünü hesaplayan algoritma
21. Girilen not ortalamasına göre başarı durumunu belirleyen algoritma
22. N sayısının çarpım tablosunu 1'den 10'a kadar yazdıran algoritma

## GitHub Klasör Yapısı

```text
ProgramlamayaGiris/
└── 03-AkisSemalari/
    ├── index.html
    ├── konu-anlatimi.html
    ├── uygulamalar.html
    ├── uygulama-1-semboller.html
    ├── uygulama-2-akis-okuma.html
    ├── uygulama-3-donusum.html
    ├── kaynaklar.html
    ├── README.md
    └── assets/
        ├── nsb-logo.png
        ├── style.css
        ├── quiz-engine.js
        ├── questions-semboller.js
        ├── questions-akis-okuma.js
        ├── questions-donusum.js
        └── flows/
            └── *.svg
```

## GitHub Pages

```text
https://bilsem-bt.github.io/ProgramlamayaGiris/03-AkisSemalari/
```

## Dersler Arası Bağlantı

```text
Problem Çözme
↓
Algoritma
↓
Akış Şemaları
↓
Programlama
```

Algoritma dersindeki sayısal çözüm mantığı Akış Şemaları dersinde değiştirilmez.  
Sadece algoritma ifadeleri uygun sembollere dönüştürülür ve yönlendirmeler oklarla gösterilir.


## Karar Sembolü Ok Bağlantı Standardı

- Karar sembolünün içindeki koşulun sonuna soru işareti eklenmez.
- Aynı köşe hem giriş hem çıkış için kullanılmaz.
- Her köşeye en fazla bir ok bağlanır.
- Ana akış mümkün olduğunda üst köşeden karar sembolüne girer.
- Kararın iki çıkışı sağ ve alt köşeden ayrılır.
- Döngü veya birleşen ikinci bir giriş gerekiyorsa boş olan sol köşe kullanılır.
- Dallanma yönleri `Evet` ve `Hayır` etiketleriyle okların üzerinde gösterilir.


## Uygulama Sorularının Dağılımı

Uygulama merkezi üç bölümden oluşur:

1. **Semboller ve Kurallar - 12 soru**
   - Başla / Bitir sembolünü tanıma
   - İşlem dikdörtgenini tanıma
   - Giriş paralelkenarını tanıma
   - Çıktı sembolünü tanıma
   - Karar sembolünü tanıma
   - Akış okunu tanıma
   - Karar sembolünde köşe ve ok bağlantı kuralları
   - Şekil içindeki ifadelerin doğru yazımı

2. **Sayısal Akış Okuma - 12 soru**
   - 1'den N'e yazdırma
   - 1'den N'e toplam
   - Tek ve çift sayı toplamları
   - Faktöriyel
   - En büyük sayıyı bulma
   - Geriye sayma
   - Başarı durumu
   - Döngü ve sonluluk

3. **Algoritmadan Akış Şemasına - 12 soru**
   - Algoritma cümlesini sade şekil içeriğine dönüştürme
   - Girdi, çıktı, işlem ve karar sembolünü seçme
   - Geri dönüşü okla gösterme
   - Karar dallarını doğru bağlama
   - Akış şemasını sonluluk açısından kontrol etme
