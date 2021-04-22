import nlp from 'compromise'

nlp.extend(require('compromise-syllables'))

const recipe_1 = `
Preparazione

Impasto:
In un pentolino porti a bollore acqua, burro e sale. Spegni e getti tutta la farina in una sola volta e mescoli. Poi riaccendi il fuoco e continui a mescolare fino a quando l'impasto non si stacca dalle pareti.
Poi fai raffreddare e, quando è completamente freddo, aggiungi un uovo alla volta mescolando fino al completo assorbimento.
Con il sac-à-poche formi delle ciambelline sulla leccarda ricoperta di carta forno e inforni in forno ventilato preriscaldato a 200°. Dopo 20 minuti abbassi a 160°per altri 10 minuti

Crema:
Iniziamo versando il latte in una pentola, aggiungiamo la scorza di limone e lasciamolo riscaldare bene sul fuoco
Prendiamo un'altra pentola abbastanza capiente e iniziamo a rompere le uova e uniamo lo zucchero e la farina.
Con l'aiuto di una frusta, mescoliamo bene tutti gli ingredienti fino a ottenere un composto liscio e senza grumi.
Quando il latte è bollente, spegniamo il fuoco, togliamo la scorza di limone e uniamolo un po' alla volta nella pentola, continuando a mescolare con la frusta.
Quando il composto è ben amalgamato portiamo la pentola sul fuoco e sempre mescolando portiamo a ebollizione fino a che la crema si sarà ben addensata.
`
recipe_1.length

const recipe_2 = `
Preparazione

Impasto:
Miscelare farina con lievito e zucchero, aggiungere le uova fredde di frigo uno alla volta fino ad assorbimento, aggiungere sale, dividere il burro in pezzi da 10g ed aggiungere un pezzo alla volta inserendo il successivo solo dopo il completo assorbimento del precedente.

Lasciare lievitare fino al raddoppio (circa 3 ore)

Sgonfiare l’impasto, impastarlo velocemente  e inserirlo nello stampo ben imburrato.

Lasciare crescere nuovamente fino al raggiungimento del bordo dello stampo.

Cuocere in forno caldo a 180° per 15-20 minuti circa, attenzione a non bruciarlo sopra.

Lasciare raffreddare.

Bagna:
Riscaldare l’acqua fino allo scioglimento dello zucchero. Lasciare intiepidire fino a circa 50 gradi, quando il baba’ sara’ freddo bagnarlo.

Miscelare 100 ml della rimanente bagna con il rum sul fuoco e aggiungerlo direttamente sulle fette prima di mangiare.

`

recipe_2.length


let words = ['preparazione', 'procedura', 'directions']
var doc = nlp(recipe_1)

// Search ingredient
console.log(doc.splitBefore(doc.lookup(words).text()).json());

// Search directions
console.log(doc.splitAfter(doc.lookup(words).text()).json());

const sent = doc.splitAfter(doc.lookup(words).text()).sentences();

console.log(sent.length);

//console.log(sent.find(s => s.));


sent.forEach(s => {
  console.log('++++++++++++++++++++++');
  console.log(s.wordCount())
  console.log(s.text())
});


console.log(doc.paragraphs().text());
