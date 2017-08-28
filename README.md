# SWEDesigner
Un editor UML che genera dai diagrammi codice Java funzionante.

## Guida all'installazione

### Requisiti
* JDK 8 o superiore
* JRE 8 o superiore
* Node.js 6 o superiore
* OS:
    * Window 7/8.1/10
    * Ubuntu 16.04lts 64bit
    * macOs Sierra ver 10.12.6
## Installazione

1. Clonare la *repository* sul proprio PC.

2. Avviare il comando *nmp install* all'interno della directory *SWEDsigner-App/Front-End* per installare tutte le dipendenze del client.

3. Avviare il comando *ng run build* all'interno della directory *SWEDsigner-App/Front-End* per avviare la build del programma.

4. Copiare la cartella *dist* appena creatosi all'interno della directory *SWEDsigner-App/Front-End*, all'interno della directory *SWEDsigner-App/Back-End*

5. Copiare la driectory *SWEDsigner-App/Back-End* all'interno del server su cui si ha intenzione di avviare il programma.

6. Avviare il comando *npm start* all'interno della directory *SWEDsigner-App/Back-End* per avviare il server.

In alternativa è possibile utilizzare gli script bash presenti all'interno della *repository* per agevolare il procedimento di installazione.

1. Clonare la *repository* all'interno del server su cui si vuole installare l'applicazione
2. Avviare il comando *sh install.sh*
3. Avviare il comando *sh start.sh*

## Risoluzione dei problemi

* I problemi, conosciuti, su cui si potrebbe incorrere utilizzando __SWEDesigner__ possono riguardale i requisiti richiesti per il funzionamento basilare dell'applicazione.
* Potrebbe, inoltre, verificarsi qualche problema nel momento in cui si svolgo troppe operazioni di seguito che potrebbero sovraccaricare il server.
* Quando viene creato un commento all'interno dell'editor, il menù di modifica non viene trascinato insieme a lui. Il team sta lavorando alla risolzuione di questo problema.
* Se viene creata una classe a cui viene aggiunto il main e poi viene eliminata, la prossima classe creata non permette l'inserimento di un nuovo main. Il team sta lavorando alla risolzuione di questo problema.
* Non è possibile eliminare una relazione.
* Va generata prima la classe che deve stare più in alto. Il team è al lavoro sul parametrizzare la compilazione.
* Possono essere creati più nodi di inizio e di fine peri metodi. Il team sta lavorando alla risolzuione di questo problema.
* Per qualsiasi altro problema non indicato all'interno della lista è possibile contattarci all'indirizzo *sweet.bit.group@gmail.com* 
oppure creare un __New Issue__ nell'apposita sezione di GitHub.

## Manuali Sviluppatore e Manutentore

Tutta la manualistica legata al codice, sia del *Back-End* che del *Front-End*, è reperibile all'indirizzo https://sweetbitgroup.github.io/SWEDesigner-App/

## Demo

Una demo funzionante del prodotto è disponibile all'indirizzo http://swedesigner.westeurope.cloudapp.azure.com:3000
__ATTENZIONE__ Non garantiamo la completa disponibilità online della demo.