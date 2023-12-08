# Socket Programlama Örneği

Bu proje, Node.js tabanlı bir örnek uygulamadır ve Socket.io ve Robot.js kütüphanelerini kullanarak sunucu ve istemci arasında veri iletişimini sağlar.

## Başlangıç

1. Projeyi klonlayın ve projenin ana dizinine gidin:

    ```bash
    git clone <proje_linki.git>
    cd proje-klasoru
    ```

2. Gerekli paketleri yükleyin:

    ```bash
    npm install
    ```

3. Sunucuyu başlatın:

    ```bash
    node server.js
    ```

4. Yeni bir terminal sekmesinde istemciyi başlatın:

    ```bash
    node client.js
    ```

## Görevler ve Açıklamalar

- **Sunucu (server.js)**:
    - Klavye tuşlarına basılmasını dinler ve ilgili işlemi gerçekleştirir.
    - Fare koordinatlarına göre işlem yapar.

- **İstemci (client.js)**:
    - Kullanıcıdan klavye tuş girişi alır ve sunucuya gönderir.
    - Belirli aralıklarla fare koordinatlarını sunucuya gönderir.

Bu uygulama, sunucu ve istemci arasında eş zamanlı olarak klavye tuşları, fare koordinatları ve ekran görüntüsü gibi verilerin paylaşımını sağlar.

## Kaynaklar

- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)
- [Robot.js](https://github.com/octalmage/robotjs)
