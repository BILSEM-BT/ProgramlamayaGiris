# Algoritma - Etkileşimli Ders

Bu klasör Niyazi Sayın Bilim ve Sanat Merkezi Bilişim Teknolojileri Dersi kapsamında Programlamaya Giriş bölümünün ikinci dersi için hazırlanmıştır.

**Ders:** Bilişim Teknolojileri Dersi  
**Kurum:** Niyazi Sayın Bilim ve Sanat Merkezi  
**Öğretmen:** Ersin ŞANLI

## İçerik

- `index.html`: Ders giriş sayfası
- `konu-anlatimi.html`: Ayrıntılı Algoritma konu anlatımı ve örnekler
- `uygulamalar.html`: Uygulama merkezi
- `uygulama-1-gundelik.html`: Gündelik yaşam algoritmaları - 10 soru
- `uygulama-2-sayisal.html`: Sayısal algoritmalar - 10 soru
- `uygulama-3-karisik.html`: Karışık algoritma değerlendirmesi - 10 soru
- `kaynaklar.html`: Ders içeriğinde yararlanılan araştırma kaynakları

Toplam **30 etkileşimli soru** bulunmaktadır.

## Konu Anlatımı Başlıkları

1. Problem çözmeden algoritmaya
2. Algoritma nedir?
3. İyi algoritmanın özellikleri
4. Algoritma nasıl yazılır?
5. Algoritma yazım standardı
6. Gündelik yaşam algoritmaları
7. Çay demleme algoritması
8. Çoklu koşul örneği
9. Güncel yaşam örnekleri
10. Temel algoritma yapıları
11. Sıralı algoritmalar
12. Koşullu algoritmalar
13. Tekrarlı algoritmalar
14. Sözde kod
15. Sayısal ve matematiksel algoritmalar
16. Algoritmayı adım adım izleme
17. Algoritma hataları
18. Birden fazla algoritma
19. Akış şemasına geçiş
20. Araştırma temeli
21. Ders özeti

## Algoritma Yazım Standardı

Bu derste algoritmalar, Akış Şemaları dersine geçişi kolaylaştıracak ortak bir biçimde yazılır.

- İlk adım `A1: Başla.` şeklindedir.
- Son adım `Bitir.` şeklindedir.
- Adımlar `A1`, `A2`, `A3` ... biçiminde numaralandırılır.
- Koşul ve gidilecek adımlar aynı satırda açıkça belirtilir.
- Tekrarlı yapılarda geri dönülecek adım numarası yazılır.
- Algoritmanın bütün yollarının uygun koşullarda `Bitir` adımına ulaşması gerekir.

Örnek:

```text
A6: Su kaynadı mı? Kaynamadıysa A5'e git. Kaynadıysa A7'ye git.
```

## Sayısal Algoritma Örnekleri

Ders içinde, Akış Şemaları dersinde de aynı biçimde kullanılacak çok sayıda sayısal algoritma bulunmaktadır.

1. İki sayının ortalamasını hesaplama
2. İki sayıdan büyük olanı bulma
3. Sayının çift mi tek mi olduğunu bulma
4. Üç sayının ortalamasını hesaplama
5. Dikdörtgenin alanını ve çevresini hesaplama
6. 1'den N'e kadar sayıları ekrana yazdırma
7. 1'den N'e kadar tamsayıların toplamını hesaplama
8. 1'den N'e kadar tek tamsayıların toplamını hesaplama
9. Tek tamsayıların toplamı için daha kısa algoritma
10. 1'den N'e kadar çift tamsayıların toplamını hesaplama
11. Çift tamsayıların toplamı için daha kısa algoritma
12. Faktöriyel hesaplama
13. 3'e ve 5'e tam bölünebilme kontrolü
14. Üç sayıdan en büyüğünü bulma
15. N'den 1'e kadar geriye doğru yazdırma
16. Bir sayının karesini ve küpünü hesaplama
17. Not ortalamasına göre başarı durumunu belirleme
18. Çarpım tablosu oluşturma

Tek ve çift sayıların toplamı örneklerinde aynı problemin iki farklı algoritmayla çözülebileceği gösterilir. Bir çözümde her sayı `mod` işlemiyle kontrol edilirken, daha kısa çözümde sayaç doğrudan 2'şer artırılır.

## GitHub Klasör Yapısı

```text
ProgramlamayaGiris/
└── 02-Algoritma/
    ├── index.html
    ├── konu-anlatimi.html
    ├── uygulamalar.html
    ├── uygulama-1-gundelik.html
    ├── uygulama-2-sayisal.html
    ├── uygulama-3-karisik.html
    ├── kaynaklar.html
    ├── README.md
    └── assets/
        ├── nsb-logo.png
        ├── style.css
        ├── konu.js
        ├── quiz-engine.js
        ├── questions-gundelik.js
        ├── questions-sayisal.js
        └── questions-karisik.js
```

## GitHub Pages

Aşağıdaki adresi kopyalayıp adres çubuğuna yapıştırınız.

```text
https://bilsem-bt.github.io/ProgramlamayaGiris/02-Algoritma/
```

`index.html` giriş sayfası olarak açılır.

Bu ders sunucu, veritabanı, Python veya Colab gerektirmez.  
Tamamen HTML, CSS ve JavaScript ile çalışır.

## Dersler Arası Bağlantı

Programlamaya Giriş bölümünde öğrenme sırası:

```text
Problem Çözme
↓
Algoritma
↓
Akış Şemaları
↓
Programlama
```

Problem Çözme dersinde problem tanımlanır, analiz edilir, parçalanır ve uygun çözüm yolu seçilir.

Algoritma dersinde seçilen çözüm yolu açık, sıralı, sonlu ve uygulanabilir adımlara dönüştürülür.

Akış Şemaları dersinde bu derste kullanılan aynı algoritma örnekleri, aynı işlem ve karar mantığı korunarak standart akış şeması sembolleriyle görsel hale getirilecektir.

Daha sonra algoritmalar bir programlama diliyle koda dönüştürülecektir.
