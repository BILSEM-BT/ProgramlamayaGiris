# Operatörler, Değişkenler ve Sayaç Mantığı - Etkileşimli Ders

Bu klasör Niyazi Sayın Bilim ve Sanat Merkezi Bilişim Teknolojileri Dersi kapsamında Programlamaya Giriş bölümünün dördüncü dersi için hazırlanmıştır.

**Ders:** Bilişim Teknolojileri Dersi  
**Kurum:** Niyazi Sayın Bilim ve Sanat Merkezi  
**Öğretmen:** Ersin ŞANLI

## İçerik

- `index.html`: Ders giriş sayfası
- `konu-anlatimi.html`: Ayrıntılı konu anlatımı ve etkileşimli mini uygulamalar
- `uygulamalar.html`: Uygulama merkezi
- `uygulama-1-operatorler.html`: Operatörler - 16 soru
- `uygulama-2-degiskenler.html`: Değişken isimlendirme - 12 soru
- `uygulama-3-sayac.html`: Sayaç mantığı - 12 soru
- `kaynaklar.html`: Python resmî belgeleri ve PEP 8 kaynakları

Toplam **40 etkileşimli soru** bulunmaktadır.

## Konu Başlıkları

1. Önceki derslerle bağlantı
2. Operatör nedir?
3. Aritmetik operatörler
4. İşlem önceliği
5. Karşılaştırma operatörleri
6. Mantıksal operatörler
7. Atama operatörleri
8. `=` ve `==` farkı
9. Değişken nedir?
10. Değişken isimlendirme kuralları
11. İyi değişken isimleri ve `snake_case`
12. Sayaç mantığı
13. Sayaç ve biriktirici farkı
14. Sayaçta artış/azalış miktarı
15. Sınır değerleri ve bir eksik/bir fazla hataları
16. Çözümlü örnekler
17. Python'a geçiş
18. Araştırma temeli
19. Ders özeti

## Ders Standardı

Bu ders Python'a geçişi kolaylaştırmak için Python uyumlu temel gösterimleri kullanır.

### Aritmetik operatörler

```text
+   -   *   /   //   %   **
```

### Karşılaştırma operatörleri

```text
==   !=   >   <   >=   <=
```

### Mantıksal operatörler

```text
and   or   not
```

### Atama operatörleri

```text
=   +=   -=   *=   /=   //=   %=   **=
```

## Değişken İsimlendirme Standardı

Python teknik olarak Unicode tabanlı tanımlayıcıları destekler. Bu derste ise tutarlılık ve sonraki derslerde daha kolay takip için şu sınıf standardı kullanılacaktır:

- ASCII harfleri
- rakamlar (ilk karakter hariç)
- alt çizgi `_`
- küçük harf ağırlıklı `snake_case`
- anlamlı ve görevi açıklayan isimler

Örnek:

```text
ogrenci_sayisi
toplam_puan
not_ortalamasi
sayac
toplam
```

## Sayaç Mantığı

Sayaç için dört temel nokta belirlenir:

1. Başlangıç değeri
2. Bitiş koşulu
3. Artış/azalış miktarı
4. Sayaç değerinin kullanım amacı

Örnek:

```text
sayac = 1
sayac += 1
```

Tek sayılarda:

```text
sayac = 1
sayac += 2
```

Çift sayılarda:

```text
sayac = 0
sayac += 2
```

Sayaç ve biriktirici aynı görevde değildir:

```text
sayac = sayac + 1
toplam = toplam + sayac
```

`sayac` sırayı veya tekrar sayısını izler.  
`toplam` ise değerleri biriktirir.

## GitHub Klasör Yapısı

```text
ProgramlamayaGiris/
└── 04-Operatorler-Degiskenler-Sayac/
    ├── index.html
    ├── konu-anlatimi.html
    ├── uygulamalar.html
    ├── uygulama-1-operatorler.html
    ├── uygulama-2-degiskenler.html
    ├── uygulama-3-sayac.html
    ├── kaynaklar.html
    ├── README.md
    └── assets/
        ├── nsb-logo.png
        ├── style.css
        ├── konu.js
        ├── quiz-engine.js
        ├── questions-operatorler.js
        ├── questions-degiskenler.js
        └── questions-sayac.js
```

## GitHub Pages

```text
https://bilsem-bt.github.io/ProgramlamayaGiris/04-Operatorler-Degiskenler-Sayac/
```

## Dersler Arası Bağlantı

```text
Problem Çözme
↓
Algoritma
↓
Akış Şemaları
↓
Operatörler, Değişkenler ve Sayaç Mantığı
↓
Python
```

Bu ders Programlamaya Giriş bölümünün Python'a geçmeden önceki son hazırlık basamağıdır.
