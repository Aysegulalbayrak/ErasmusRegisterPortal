# Erasmus Başvuru Uygulaması

Bu proje, Node.js, React ve Bootstrap kullanılarak geliştirilmiştir. MySQL veritabanı kullanılarak tamamen başvuru ve kullanıcı odaklı bir web sayfası içeriği oluşturulmuştur. Projem, bir portal benzeri bir web sayfasını içermektedir.


## Proje Özellikleri

- Kullanıcı Girişi: Kullanıcılar web sayfasına giriş yaptıktan sonra web sayfasının sunduğu tüm içeriklere erişebilirler. Kullanıcı hesapları MySQL veritabanında tutulur.
- Hesap Oluşturma: Kullanıcılar aynı web sayfası üzerinden hesap oluşturabilirler ve bu hesaplar MySQL veritabanında saklanır.
- Başvuru Formu: Kullanıcılar giriş yaptıktan sonra başvuru formuna ulaşabilirler. Başvuru formunda gönderilen bilgiler yine veritabanında bir tabloda tutulur.
- Şifre Değiştirme: Kullanıcılar giriş yaptıktan sonra şifre değiştirme içeriğine erişebilirler.
- Giriş Kontrolleri: Tüm giriş bilgileri varlığının kontrolü yapılır ve kullanıcıya gerekli uyarılar verilir.
- Başvuru Detayları: Kullanıcının başvurusunun detayları okunabilir bir şekilde bir bileşen içerisinde sunulur. Bu bileşene erişim, gerekli yönlendirmelerle sağlanır.


## Kurulum

1. Projeyi bilgisayarınıza klonlayın.
2. Terminalde proje dizinine gidin: `cd project`
3. Bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
4. Veritabanına erişebilmek için XAMMP açın ve mysql ve apache'yi başlatın.
5. Bir terminal daha açın ve terminale `cd project\src\server` komutunu yazın.
6. Sonrasında `node app.js` komutunu çalıştırınız.
7.Terminalde proje dizinine gidin: `cd project`
8.Projeyi başlatmak için `npm start` komutunu çalıştırın.

## Kullanılan Teknolojiler

- Node.js
- React
- Bootstrap
- MySQL

## Bağımlılıklar


- @testing-library/jest-dom: 5.16.5
- @testing-library/react: 13.4.0
- @testing-library/user-event: 13.5.0
- axios: 1.3.5
- bootstrap: 5.2.3
- cors: 2.8.5
- express: 4.18.2
- mysql: 2.18.1
- react: 18.2.0
- react-dom: 18.2.0
- react-router-dom: 6.10.0
- react-scripts: 5.0.1
- web-vitals: 2.1.4
 

## Katkıda Bulunma
Her türlü katkıya açığım. Düzeltmeler, iyileştirmeler veya yeni özellikler eklemek için "pull request" oluşturabilirsiniz.

