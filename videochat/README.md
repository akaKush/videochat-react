# Videochat App per SAD

- [Videochat App per SAD](#videochat-app-per-sad)
- [Create React App](#create-react-app)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn build`](#yarn-build)
- [Com funciona l'aplicació?](#com-funciona-laplicació)
  - [Què hem desenvolupat? (overview)](#què-hem-desenvolupat-overview)
  - [Daily API](#daily-api)
    - [State 1: meeting room state](#state-1-meeting-room-state)
    - [State #2: participant state](#state-2-participant-state)
    - [Conclusions del Daily call object](#conclusions-del-daily-call-object)

---

# Create React App

Aquest projecte s'ha creat amb create-react-app [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Un cop dins el directori del projecte podeu executar diversos scripts, els més comuns són:

### `yarn start`

Executa la app en mode de desenvolupament, obrir localhost:3000 per fer-la correr en localhost.

Si editeu el codi, la pàgina s'actualitzarà sola.\
Veureu els errors a la pàgina en cas de tenir-ne.



### `yarn build`

Construeix la app per producció a la carpeta `build`.
En el nostre cas no hem executat build ja que l'aplicació està feta simplement a mètode demostratiu per l'assignatura de SAD.

---

# Com funciona l'aplicació?

Abans de comentar el codi, expliquem ràpidament què hem escollit per crear aquesta aplicació, i també com funciona la **API de Daily**.

## Què hem desenvolupat? (overview)

En la nostre app, quan un usuari clica per començar una trucada, l'app crea una **sala de reunions**, li envia la URL de la sala a un nou **Daily call object**, i s'uneix a la trucada.

Aquest call object, manté informació important sobre la trucada, com per exemple:
- Els altres participants (incloent els seus tracks de audio i video)
- Les accions que fan els altres participants (mutejar el videeo, audio, etc)
- Proveeix mètodes per interactuar a la reunió

L'aplicació utilitza aquest objecte per actualitzar l'estat de les trucades com toca, i per dur a terme les accions dels usuaris, com hem comentat als punts previs.

Un cop un usuari surt de la trucada, el call object es destrueix.

## Daily API

L'objecte Daily call, és com cridar directament a la Daily API. Ens dóna control sobre la videotrucada.

Si invoquem `DailyIframe.createCallObject()` creem un call object.

Un cop creat, enviem la URL de la sala al call object per unir-nos a la trucada.

A part de tot això, el call object manté un registre de l'estat de la nostre trucada, tant de **l'estat de la trucada** en sí, com de **l'estat dels participants.**

### State 1: meeting room state

L'estat de la meeting room fa un seguiment de en quin estat l'actual participant de la trucada es troba.
Aquest es pot trobar en els següents estats:
- unir-se a trucada
- estar dins una trucada
- abandonar una trucada
- tenir un error en la trucada

Podem comprovar en l'estat que ens trobem dins la trucada mitjançant: `callObject.meetingState()`. *(Per exemple, si un participant s'està unint a la trucada, es retornarà l'estat "joining-meeting").*

### State #2: participant state

El **participant state** monitoritza *TOTS* els participants d'una trucada (incloent el local user), juntament amb l'àudio, video, o altres coses que estiguin compartint amb tots els altres participants.

**`callObject.participants()`** retorna un set d'objectes que pertanyen als participants, indexats per un ID que identifica quin és l'usuari.
Els objectes de cada participant inclouen camps com `audioTrack` o `videoTrack`.

Quan un usuari en concret fa un canvi del seu estat, els quals poden ser "participant-left", "participant-joined" o "participant-updated", aquest canvi s'envia a broadcast, així la resta de participants estan al corrent del seu estat.


### Conclusions del Daily call object

Ara que ja hem vist com funciona el Daily call object proporcionat per [Daily](https://docs.daily.co/docs), i com interactuen els estats dintre la nostre aplicació, passem a explicar l'aplicació.

