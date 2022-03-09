# Parser for Media Markt

## This application parses the Media Markt website, returns a list of products in the selected category or a list of Details Pages

## How to install ?

```javascript
1. git clone https://github.com/HelloBro89/parser-for-MODVISE.git
```

```javascript
2. cd parser-for-MODVISE
```

```javascript
3. npm install
```

## How to run ?

```javascript
npm run start
```

## How to use ?

This app has two endpoints

| Enpoint   | Еndpoint method | Body (in JSON format)                                                                            |
| --------- | --------------- | ------------------------------------------------------------------------------------------------ |
| /category | GET             | { url $\color{red}{*}$ : $\color{blue}{string}$(url to category link) }                          |
| /details  | GET             | { urls $\color{red}{*}$ : $\color{blue}{string}$ $\color{green}{[ ]}$ (url to product details) } |

## Examples:

$\color{red}{your-text-here}$

1. GET request to **details** endpoint (URL):

```javascript
http://localhost:3000/category
```

_BODY_ :

```javascript
{
    "urls": ["https://mediamarkt.pl/foto-i-kamery/aparat-canon-eos-r-body-czarny", "https://mediamarkt.pl/komputery-i-tablety/komputer-stacjonarny-hp-m01-f0008nw-ryzen-3-3200g-8gb-256gb-ssd-int-win10h-62", "https://mediamarkt.pl/foto-i-kamery/aparat-canon-eos-rp-rf-24-105-mm-f4-7-1-is-stm-czarny", "https://mediamarkt.pl/agd/pralka-whirlpool-tdlr6241bs-pl-n", "https://mediamarkt.pl/filmy/papillon-motylek-dvd-ksiazka", "https://mediamarkt.pl/agd-do-zabudowy/bateria-kuchenna-franke-115-0200-647-marina-chrom"]
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
