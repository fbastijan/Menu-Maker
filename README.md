**Dokumentacija:  Menu Maker** 

1. **Opis aplikacije** 

Menu maker je aplikacija  koja služi za kreiranje  jelovnika restorana. Na jednostavan način vlasnik  restorana može dodati ime  i logo svog restorana, definirati kategorije,  te dodavati stavke u te kategorije kako bi kreirao svoj jelovnik. Prilikom kreacije aplikacija generira qr kod i dopušta korisniku  da skine qr kod u png formatu koji kasnije može iskoristiti za ispis  qr kodova koje će postaviti po restoranu. 

2. **UML -  Use case dijagram** 

Naša aplikacija podržava 2 tipa korisnika: administratora i gosta u restoranu. Gost može jedino pregledavati cjenik tako da skenira generirani qr kod. Administrator je korisnik koji ima pravo kreiranja i uređivanja/izmjenjivanja  cjenika. Kreiranje cjenika uključuje  Dodavanje naziva i cijena stavkama, te definiranje kategorija koje nisu zadane sustavom. Sustav će se pobrinuti da za taj menu kreira QR  kod.  Arhiviranje cjenika se događa automatski kada korisnik mijenja menu  kako  bi  administrator  znao  kako  je  i  što  mijenjao  u  datom  trenutku. 

![alt text](https://i.imgur.com/FfWJkFF.png)

3. **UML - class dijagram** 

![alt text](https://i.imgur.com/lB3fkif.png)

Aplikacija se sastoji  od klasa: vlasnik lokala, menu arhiva, arhivirane stavke i stavke menu.  

Vlasnik lokala je ujedno i klasa koja određuje administratora i ona se sastoji od korisničkog imena, passworda i email-a,  te je jedan naprema jedan povezana sa klasom menu, što znači jedan korisnik jedan menu. Klasa koja povezuje cijelu aplikaciju je klasa menu. Menu klasa je povezana sa više instanci stavki, te sa više instanci klase arhiva te se sastoji od atributa naziv i atributa kategorije  koji je objekt koji se sastoji od 3 ključa/kategorije  hrana, piće i ostalo. Arhiva se sastoji od datuma promjene te služi kao preslika klase menu u nekom trenutku, tako i arhivirane stavke su preslika stavki koje su se u tom trenutku nalazile na jelovniku. 

4. **Middleware** 

**VerifyToken** je jedini middleware koji provjerava ispravnost tokena, pomoću json web token paketa i funkcijom  verify. Zgodno je jer  će kada se ovo izvrši korisnik biti autenticiran i proslijedit će userId dalje sljedećoj ruti. U ovoj aplikaciji  će se ova ruta izvršiti  samo ako korisnik nešto mijenja.  

5. **Image rute na backendu**

**POST api/image/upload**  - Ovu rutu koristimo kako bi prenijeli  našu sliku u cloud storage. Točnije, firebase cloud storage kojemu ćemo poslati sliku u base64 formatu, a kao referencu 

na tu sliku ćemo koristiti menuId što je id naše klase menu. Oba parametra ćemo poslati kao body. Ova ruta je zaštićena verifyToken middlewareom. 

**GET api/image/download** - Ovu rutu koristimo kako bi pomoću menuId koji ćemo postaviti kao query parametar, dobili link koji ćemo na frontend-u postaviti kao source za tag <img>. To smo učinili putem getDownloadUrl što se nalazi unutar firebase paketa. 

6. **Menu rute** 

**GET  api/menu/:menuId/items?pageNumber=1?type=”hrana”?subtype=”kava”  -**  Ova ruta će vratiti samo stranicu definiranu parametrom pageNumber, odnosno vratit će 10 stavki koje odgovaraju type-u i subtype-u, uz 10 stavki, vratit će i  hasPrevPage i hasNextPage u koje će spremiti podatak postoji li prošla i sljedeća stranica kako bi na frontend-u znali možemo li ići na sljedeću li prošlu stranicu. 

**GET api/menu/:userId –** ova ruta pomoću userId-a vraća iz kolekcije menu podatke o meniju, odnosno njegov naziv, \_id i podatke o kategorijama 

**DELETE api/menu/item/:itemId-** ova ruta će preko id-a stavke obrisati stavku iz baze  

**GET api/menu/:menuId/ -** ova ruta će vratiti sve podatke o jelovniku uključujući i njegove stavke** 

**PUT api/menu -** ova ruta će inicijalizirati  klasu menu u slučaju da ne postoji, u slučaju da postoji samo će osvježiti postojeće zapise. Ona u body dijelu prima cijeli menu i pridružuje mu UserId, koji dobiva iz verifytoken middlewarea, prije spremanja provjerava postoji li već zapis sa UserId-om, u slučaju da, da postavlja samo promjene, u slučaju da ne, generira novi zapis u kolekciji menu. 

**POST api/menu/item/:menuId  –** ruta koja prima polje stavki menu-a i sprema ih u bazu kao posebne dokumente u mongo bazi. Također povezuje svaku stavku sa menu-om na kojem se nalazi, tako da svakom dokumentu još i doda menuId atribut. 

**PATCH api/menu/item/:itemId-**  ruta koja ce pomoću itemId parametra pronaći stavku, te zamjeniti cijeli dokument sa objektom koji se nalazi u body-u requesta.  

**POST api/menu/:menuId/arhiva  -** ovo je ruta koja će uzeti cijeli menu i od njega generirati presliku  stanja u trenutku kad je  poslan  zahtjev prema  backend-u. Svim  atributima menu kolekcije pridružit će još i  datum arhiviranja.  Ova ruta će kreirati i kopiju svi dokumenata stavki  povezanih  sa  menuId-em  kojeg  arhiviramo,  spremit  će  ih  u  posebnu  kolekciju arhivaItems.  

**GET api/arhiva?pageNumber=1 –** na frontendu hoćemo zapise arhive paginirano pa je ovo slično onome kako smo dohvaćali stavke-menu-a, kao query parametar poslat ćemo trenutnu stranicu, a kao odgovor dobit ćemo stranicu od 10 zapisa iz kolekcije arhiva i informaciju o tome postoji li sljedeća i prošla stranica ili ne. 

**GET api/arhiva/:arhivaId**  – ova ruta će kao parametar  primiti  arhivaId, po kojem ćemo napraviti upit prema bazi i dobiti informacije o arhivi iz kolekcije arhiva. 

**GET api/arhiva/:arhivaId/item-**  radi se o ruti koja će vratiti polje arhiviranih stavki preko parametra arhivaId.** 

7. **User rute** 

**POST api/register-** ova ruta će provjeriti postoji li već netko u bazi sa korisničkim imenom i mailom  koje je  dobila iz  body-a, te je li  password potvrđen ako jest onda će enkriptirati password paketom “bcrypt” i poslati cijelog novog Usera u bazu. 

GET api/login-  ruta koja će u bazi  pronaći usera zadanog query parametrima,  username  i password, koje smo zadali zahtjevu. Te vratiti potpisani JWT  koji ćemo koristiti kao provjeru identiteta user-a nadalje u aplikaciji. 

**GET api/User -** ruta koja nam služi kako bi iz tokena dobili user-ov id za daljnje pretraživanje baze 

8. **Uputstva za korištenje** 

Nakon što se korisnik  registra i ulogira pritiskom  na Get Started gumb korisnik dolazi na sljedeći screen: 

![alt text](https://imgur.com/lB3fkif)

-Na ovom ekranu korisnik može promijeniti ime menu-a upisivanjem u polje.  

-Pritiskom na gumb background korisnik će dobiti mogućnost drag and dropanja slike u aplikaciju 

- kategorije po kojima će menu biti razvrstan mogu se dodavati upisivanjem u polje i pritiskom gumba dodaj ili dodavanjem u polje ispod u novi red 
- pritiskom tipke završi dolazimo na drugi ekran. 

![](Aspose.Words.885d4f4e-227d-48d1-b7da-0e9d92d26fad.004.jpeg)

- Pritiskom na tipku dodaj stavku otvorit ćemo izbornik u kojem ćemo upisati stavke koje želimo dodati na menu. Ako upišemo stavku i stisnemo dodaj, ona će se dodati na listu promjena ispod, te promjene možemo potvrditi pritiskom na save changes 
- Ako stisnemo na gumb arhiva, dobit ćemo listu spremljenih snapshotova menu-a, klikom na oko možemo vidjeti taj snapshot 
- U padajućem izborniku izaberemo super tip (hrana, pice ili ostalo) , nakon toga izaberemo tip, i stisnemo pretraži po tome što smo izabrali će se pojaviti stavke na menu-u 
- Pritiskom na olovku stavke dobivamo izbornik za mijenjanje stavke, tu možemo mijenjati sve što smo do sad zapisali  
- Pritiskom na smeće brišemo stavku 
- Pritiskom na next i previous navigiramo po stranicama stavki 
- Pritiskom na download skidamo qr kod u png formatu 

Na kraju ako skeniramo qr kod pametnim telefonom  dobijemo Menu koji smo zadali. Qr kod se može skenirati u bilo kojem trenutku kako bi se vidjele promjene. 
