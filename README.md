# Väderapp, grupp 7
webApp för att kolla upp väder globalt med över 200000 städer möjliga att söka.

Skapat med 
* html,
* css
* js

med hjälp av
* openweather api (city väder info)
* google maps api (geo city resolver)

Alla wireframes och mockups till mobil och desktop finns i länken nedan  
https://www.figma.com/file/i1qA0q9DLhVR4xu0zdNazF/Untitled?node-id=0%3A1&t=DjCLiusxaAGIyl3L-1

# HTML
Vi har skapat totalt 4 sidor 
* index som då är första sidan

och sedan 3 andra sidor
* geo
* about us
* contact us

Alla består av navbar och footer
sen är första sidan och geo sidan styrd med ett väder api och js.

# CSS
Stylat sidorna efter vår mockup kanske har skett lite små ändringar på vägens gång men mestadels är stylad fint och smidigt för en användare.
svart navbar svart footer våran loga och även logos till sociala medier. 

# Javascript
weatherApp har 2 funktioner som bas,
* weatherApp(city)
* prognosWeather(city)

både som tar en stad och sedan söker det i openweather API för att ta fram data som sedan visas i html.
GEO funktionen som kollar upp användarens plats för att sedan ladda information om vädret använder sig av google maps API för att ta fram stad baserat på lat,long och sedan kör den weatherApp(city) samt prognosWeather(city) för användarens stad.

### Made with love by,
### Abdullah, Elias, Mohammed, Nermin & Oscar

