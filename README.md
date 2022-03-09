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

| Enpoint   | Еndpoint method | Body (in JSON format)                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /category | GET             | { url<span style="color:red">\* </span>: <span style="color:blue">string</span> (url to category link) }                                      | { "url": "https://mediamarkt.pl/foto-i-kamery/aparaty-cyfrowe/aparaty-systemowe"}                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| /details  | GET             | { urls<span style="color:red">\*</span>: <span style="color:blue">string</span><span style="color:green">[ ]</span> (url to product details)} | { "urls": ["https://mediamarkt.pl/foto-i-kamery/aparat-canon-eos-r-body-czarny", "https://mediamarkt.pl/komputery-i-tablety/komputer-stacjonarny-hp-m01-f0008nw-ryzen-3-3200g-8gb-256gb-ssd-int-win10h-62", "https://mediamarkt.pl/foto-i-kamery/aparat-canon-eos-rp-rf-24-105-mm-f4-7-1-is-stm-czarny", "https://mediamarkt.pl/agd/pralka-whirlpool-tdlr6241bs-pl-n", "https://mediamarkt.pl/filmy/papillon-motylek-dvd-ksiazka", "https://mediamarkt.pl/agd-do-zabudowy/bateria-kuchenna-franke-115-0200-647-marina-chrom"]} |
