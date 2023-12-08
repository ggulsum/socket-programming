# Socket Programlama

Bu proje, Node.js tabanlı bir uygulamadır ve Socket.io ve Robot.js kütüphanelerini kullanarak sunucu ve istemci arasında eş zamanlı olarak klavye tuşları, fare koordinatları verilerinin paylaşımını sağlar.

## Görevler 

- **Sunucu (server.js)**:
    - Klavye tuşlarına basılmasını dinler ve ilgili işlemi gerçekleştirir.
    - Fare koordinatlarına göre işlem yapar.

- **İstemci (client.js)**:
    - Kullanıcıdan klavye tuş girişi alır ve sunucuya gönderir.
    - Belirli aralıklarla fare koordinatlarını sunucuya gönderir.


## Projeyi Çalıştırma

Proje için gerekli kütüphanelerin kurulumları gerçekleştikten sonra, sunucu ve istemciyi iki ayrı terminalde çalıştırmanız gerekiyor.

### Sunucu (server.js)

Sunucuyu başlatmak için terminalde proje klasöründe aşağıdaki komutu çalıştırın:

```bash
node server.js
```

Sunucu başlatıldığında, istemci ile veri iletişimi sağlanacaktır.

### İstemci (client.js)

Yeni bir terminal sekmesi açın ve proje klasöründe aşağıdaki komutu çalıştırın:

```bash
node client.js
```

İstemci başlatıldığında, sunucu ile veri alışverişi yapılacaktır.

## Kaynaklar

- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)
- [Robot.js](https://github.com/octalmage/robotjs)
