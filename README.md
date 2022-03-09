# Parser for Media Markt

## This application parses the Media Markt website, returns a list of products in the selected category or a list of Details Pages

# 1. How to install ?

```javascript
1. git clone https://github.com/HelloBro89/parser-for-MODVISE.git
```

```javascript
2. cd parser-for-MODVISE
```

```javascript
3. npm install
```

# 2. Description of REST endpoints (how to use them)

```javascript
npm run start
```

## How to use ?

This app has two endpoints

| Enpoint   | Еndpoint method | Body (in JSON format)                                                                            |
| --------- | --------------- | ------------------------------------------------------------------------------------------------ |
| /category | GET             | { url $\color{red}{*}$ : $\color{blue}{string}$(url to category link) }                          |
| /details  | GET             | { urls $\color{red}{*}$ : $\color{blue}{string}$ $\color{green}{[ ]}$ (url to product details) } |

# 3. Example requests :

1. GET request to **details** endpoint (URL):

```javascript
http://localhost:3000/category
```

_BODY_ :

```javascript
{
    "urls": ["https://mediamarkt.pl/filmy/papillon-motylek-dvd-ksiazka", "https://mediamarkt.pl/foto-i-kamery/aparat-canon-eos-rp-rf-24-105-mm-f4-7-1-is-stm-czarny"]
}
```

2.  GET request to **category** endpoint (URL):

```javascript
http://localhost:3000/category
```

_BODY_ :

```javascript
{
    "url": "https://mediamarkt.pl/foto-i-kamery/aparaty-cyfrowe/aparaty-systemowe"
}
```

# 4. Example responses (output)

**_/details_:**

```javascript
[
    {
        productName: 'Papillon. Motylek (DVD) + Książka',
        price: '2,99 zl',
        availability: true,
    },
    {
        productName: 'Aparat CANON EOS RP + RF 24-105 mm F4-7.1 IS STM Czarny',
        price: '5988 zl',
        availability: false,
    },
];
```

**_/category_:**

```javascript
[
    {
        productName: 'Komputer stacjonarny HP 460-a200nw J3060/4GB/1TB/Win10H',
        price: '838 zl',
        availability: false,
        position: 1,
        url: 'https://mediamarkt.pl/komputery-i-tablety/komputer-stacjonarny-hp-460-a200nw-j3060-4gb-1tb-win10h-65',
        page: 1,
    },
    {
        productName: 'Komputer stacjonarny HP M01-F0008nw Ryzen 3 3200G/8GB/256GB SSD/INT/Win10H',
        price: '1912 zl',
        availability: true,
        position: 2,
        url: 'https://mediamarkt.pl/komputery-i-tablety/komputer-stacjonarny-hp-m01-f0008nw-ryzen-3-3200g-8gb-256gb-ssd-int-win10h-62',
        page: 1,
    },
];
```
