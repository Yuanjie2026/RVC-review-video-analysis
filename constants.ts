// ==========================================
// 用户自定义输出模版 (USER DEFINED TEMPLATE)
// ==========================================

/**
 * 您可以在这里直接修改 Markdown 格式。
 * AI 会严格按照这个模版的结构进行填充。
 * 
 * You can edit this Markdown template directly.
 * The AI will strictly follow this structure.
 */
const OUTPUT_TEMPLATE = `
## 产品优势 (Product Strengths)
**功能/组件名称**
- [具体分析摘要 (中文)]
  [Timestamp] "[Original Quote (Translated to English)]"

## 问题与痛点 (Issues & Pain Points)
**功能/组件名称**
- [具体分析摘要 (中文)]
  [Timestamp] "[Original Quote (Translated to English)]"
`;

// ==========================================
// AI 模型指令配置 (AI PROMPT ENGINEERING)
// ==========================================

export const SYSTEM_INSTRUCTION = `
Role: You are a Senior UX Researcher specialized in Robotic Vacuums (brand: Dreame, Roborock, Ecovacs, Eufy, etc).
Task: Analyze the provided YouTube video transcript based on the following template.

MANDATORY OUTPUT FORMAT:
You must strictly follow the Markdown structure defined below. Do not change the headers or the bullet point format.

${OUTPUT_TEMPLATE}

Detailed Rules for Filling the Template:
1. **Structure**: 
   - Start with a bullet point "-" for the summary.
   - **CRITICAL**: The [Timestamp] and Quote must be on the **NEXT LINE** immediately below the summary, NOT in a new bullet point.
   - Do NOT add a blank line between the summary and the timestamp.
2. **Language Rules (STRICT)**: 
   - **Headers**: Use the provided bilingual headers.
   - **Feature Name**: Write strictly in **Simplified Chinese (简体中文)** (e.g., "边角清洁", "避障功能").
   - **Summary**: Write strictly in **Simplified Chinese (简体中文)**. Explain the feedback clearly.
   - **Quote**: Write strictly in **English**. 
     - If the transcript is in English, use the original quote.
     - If the transcript is in another language (e.g., Italian, Chinese, German), you **MUST TRANSLATE** the quote to English.
3. **Content**:
   - **Feature Name**: Be specific.
   - **Summary**: Describe the feedback, context (e.g., "on carpets"), and the specific pro/con.
   - **Evidence**: Provide the closest timestamp (e.g., 04:20) and the exact sentence (in English).
4. **Tone**: Professional, critical, rigorous, structured, and evidence-driven.
5. **No Emojis**: Do not use emojis in the generated text.

If the transcript is messy, extract the semantic meaning regarding product performance.
`;

// ==========================================
// 品牌与 UI 颜色常量 (BRAND & UI COLORS)
// ==========================================

export const YOUTUBE_RED = '#FF0000';    // Primary action color
export const YOUTUBE_BLACK = '#0F0F0F';  // Primary text color (Dark mode bg)
export const YOUTUBE_GRAY = '#606060';   // Secondary text color

// ==========================================
// 示例数据 (SAMPLE DATA)
// ==========================================

/**
 * A sample transcript used for the "Try this Template" feature.
 * This allows users to test the application without needing to go to YouTube first.
 * Content: An Italian review comparing Dreame L10s Pro Ultra Heat (or similar models).
 */

export const SAMPLE_TRANSCRIPT = `Introduzione
0:00
Questo video andremo a confrontare due
0:01
robot spir il Dreamy Acqua 10 Roller e
0:03
il Dreamy Acqua 10 Truck. Guardandoli
0:06
così sono praticamente identici. Cambia
0:08
però il sistema di lavaggio. Da una
0:10
parte abbiamo il rullo, dall'altra parte
0:11
abbiamo il cingolato e sono state
0:13
tantissime le vostre domande. Poderak,
0:15
tu chi sceglieresti? In realtà vi ho già
0:17
raccontato la mia sul sito nel confronto
0:20
con il Z60, il Narval Flow, anche nel
0:22
gruppo di Facebook de Robot
0:23
aspirapolvere già abbiamo discusso. Vi
0:25
ho detto chi preferisco, chi meno e vi
0:28
anticipo già è tutta una questione di
0:30
politica di prezzo perché se dovesse
0:33
cambiare questa cosa poi l'opinione
0:35
potrebbe anche ribaltarsi, ma nello
0:37
stato attuale entrambi vengono venduti a
0:39
€1499
0:41
e capiamo spendendo questa cifra anche
0:44
magari con le offerte perché adesso è
0:46
andato in offerta lui a 1299 e lui a
0:49
1499, ma anche lui prima era a 1299
0:52
€1499,
0:54
però ci sono delle considerazioni,
0:55
secondo me, importanti da tenere a mente
0:57
per alla fine scegliere quello
0:59
definitivo. Per il sistema di lavaggio,
1:01
alla fine da una parte abbiamo 912 N con
1:05
il rullo regolabile. Nel truck abbiamo
1:07
questo rullo che volendo si scalda anche
1:10
a 45°, ma su questo argomento andremo a
1:12
fondo più avanti. E abbiamo una
1:14
pressione da 18 N, quindi teoricamente
1:17
strofina di più, lava meglio, ma è
1:20
l'unico aspetto che bisogna considerare,
1:22
no? perché ci sono anche altre
1:24
caratteristiche che poi alla fine mi
1:27
hanno fatto apprezzare. Dream Acqua 10
1:29
Roller. Partiamo da questo presupposto e
Differenze Roller vs Track
1:33
vediamo insomma quali sono le
1:35
differenze. Da un punto di vista
1:36
estetico cambia ben poco. Considerate
1:38
però che da quanto ho capito per quanto
1:41
riguarda il kit che tra l'altro speriamo
1:43
arrivi presto, considerando ormai siamo
1:46
quasi da un mese dal lancio, insomma
1:48
speriamo che Dreamy adesso ce li faccia
1:49
recapitare. Abbiamo però un kit per
1:52
l'alacio idrico, da quanto ho capito,
1:54
differente per ciascuna base. Infatti
1:56
anche le dimensioni sono leggermente
1:58
differenti. Non ho una conferma ancora
2:00
definitiva, ma mi sembra di aver capito
2:03
questo, va bene? Quindi tenetele solo a
2:05
mente quando uscirà, insomma,
2:07
assicuratevi che effettivamente sia
2:10
compatibile un kit con l'altro, ma poi
2:13
sul mio sito, nel gruppo, vi darò la
2:15
conferma quando usciranno. Però vediamo
2:18
le differenze concrete al di là
2:20
dell'estetica, da una parte una parte
2:22
grigia qui nel track l'hanno fatto un
2:24
po' più carino, sembra quasi effetto
2:26
marmo, ma alla fine abbiamo lo stesso
2:29
design a livello di sacchetto, serbatoi,
2:32
doppio detergente, stessa cosa, cambia
2:34
un pochino il contenuto della
2:35
confezione. del truck abbiamo tre rulli,
2:39
ad esempio, che invece nel roller è
2:42
solamente uno, ma alla fine a livello di
2:44
contenuto entrambi sono venduti con la
2:46
versione complete, quindi con tutti gli
2:49
accessori, 3 anni di garanzia. Eh, la
2:53
differenza sostanziale però sta nel
2:55
fatto che comunque il truck di fatto è
2:58
un dispositivo depotenziato perché se
3:02
consideriamo il motore teoricamente
3:05
nell'acqua 10 Roller 30.000 Pascal, nel
3:08
track 25.000 Pascal. Differenze concrete
3:12
no. Nel senso, io alla fine, se mi
3:14
avessero detto che uno e l'altro avevano
3:16
la stessa aspirazione non me ne sarei
3:18
accorto, però di fatto qui su carta il
3:21
truck è leggermente inferiore, così come
3:23
inferiore anche nel superare i gradini,
3:25
ne supera massimo 6 cm, mentre il
3:28
roller, come abbiamo visto, fino a 8 cm.
3:32
Anche questa è una piccolezza che però
3:34
può fare le differenze. Magari è proprio
3:36
quel gradino alto, magari 4 + 4 che con
3:40
il roller puoi gestire con il track 4 +
3:43
2 e magari non ci riesce. Altra
3:46
considerazione è il sistema lavaggio che
3:49
vabbè da una parte 18 Nel truck e
3:53
dall'altra invece 9-12 N regolabili la
3:56
pressione, ma nel roller c'è la
3:58
tecnologia a scudo, se c'è un tappeto va
4:02
a chiudere con questo scudo, cosa
4:04
completamente assente invece nel track.
4:07
truck che semplicemente solleva di 14
4:11
mm, però insomma per esempio i tappeti a
4:13
pelo lungo eventualmente se ti sei
4:15
dimenticato di dire prima spira e poi
4:18
lava, c'è il rischio che insomma c'è un
4:20
contatto. Entrambi si sollevano con il
4:23
telaio volendo, per i tappeti a pelo
4:25
lungo, ma almeno nel roller c'è questo
4:28
scudo che si può attivare. A livello di
4:29
base cambia praticamente nulla, se non
4:34
roller abbiamo solo l'asciugatura del
4:37
sacchetto, nel truck oltre l'asciugatura
4:41
la sterilizzazione UV, quindi una cosa
4:43
in più, però una cosa in meno per la
4:46
manutenzione. Nel roller abbiamo un
4:49
coperchio che fa una specie di prefiltro
4:51
durante la fase di lavaggio che si
4:53
sporca, tu lo stacchi, lo lavi sotto il
4:56
lavandino. Nel caso del truck non c'è
4:58
nessun supporto, il rullo va a contatto
5:00
con la base e la base non ha nulla che
5:02
si può staccare, quindi ti devi
5:04
abbassare lì con la schiena, devi
5:06
strofinare poi con la spazzola.
5:08
Attenzione però per i serbatoi interni
5:11
del robot perché se nel roller abbiamo
5:13
100 ml di acqua pulita, 140 ml per
5:16
l'acqua sporca, nel truck l'azienda
5:19
dichiara 160 ml per l'acqua bollita, 150
5:22
ml per l'acqua sporca. In soldoni cosa
5:25
significa? Significa che volendo può
5:28
stare più a lungo fuori rispetto al
Funzionamento acqua calda
5:30
roller, avendo questi serbatoi interni
5:32
un pochino più voluminosi. Siamo adesso
5:34
di questi 45° perché molti nei commenti
5:37
hanno scritto "No, ho paura che mi
5:39
indeneggia il parquet" oppure altri
5:40
hanno scritto "No, prendo questo robot
5:43
proprio perché lava d'acqua calda
5:44
rispetto agli altri". Questi 45° però
5:48
valgono più per attivare il detergente,
5:52
per rendere più spugnoso il rulo,
5:54
considerando che cingolato non è
5:56
cilindrico, che è più mirato, deve
5:58
essere spugnoso per catturare
6:01
soprattutto lo sporco liquido, tipo
6:04
ketchup, oppure sostanze che, insomma,
6:07
hanno la necessità di entrare con
6:09
un'acqua che è a temperatura ambiente. è
6:12
fredda, come avviene la lavatrice,
6:15
insomma, non è molto spugnoso, non si
6:17
raccoglie bene, mentre mantenendo
6:18
costante la temperatura del rullo riesce
6:21
a raccogliere più sporco. Ma non è che
6:23
lava ad acqua calda, infatti, come
6:25
vedrete da queste immagini della
6:27
termocamera, sì, c'è un leggero alone,
6:29
ma non sono, ad esempio, come gli 80°
6:32
che abbiamo nel Dreamy H15 Pro IT la
6:34
lava pavimenti che lava con acqua calda.
6:36
Lì effettivamente si vede la fascia di
6:39
calore che viene lasciato sul pavimento.
6:41
Qui invece no, perché appunto ha lo
6:43
scopo di rendere un po' più spugnosa la
6:45
parte del rullo. Come qualcuno può
6:47
immaginare questa caratteristica incide
6:50
anche sull'autonomia. Seppur loro hanno
6:52
la stessa batteria, il track dura,
6:55
direi, quasi un 10-15-20%
6:58
in meno rispetto l'acqua 10 Roller. In
7:01
un appartamento di 100 m² è riuscito
7:03
comunque a coprire con l'aspirazione, il
7:07
lavaggio senza dover poi fermarsi e
7:09
ripartire, però insomma in grandi
7:12
appartamenti, considerando che appunto
7:14
ha questi serbatoi più grandi interni di
7:17
160-150 ml. Poi c'è però l'aspetto
7:20
autonomia batteria che insomma un po'
7:23
castra le potenzialità di questo robot
7:26
in un appartamento grande, anche
7:28
particolari soprattutto a livello di
7:29
rumorosità. Se alla fine a livello di
7:31
decibel se vai a misurare lì dice gli
7:33
stessi valori. In realtà nella fase di
Differenze Rumore
7:35
lavaggio nel track si sente il rumore
7:39
della distribuzione dell'acqua, tipo
7:41
bollitore. Non saprei spiegare questo
7:43
rumore.
7:46
[Musica]
7:57
sente un pochino di più, soprattutto
7:58
rispetto al roller, che invece tende a
8:00
essere più silenzioso.
8:11
E infine, non per ultimo, l'aspetto
8:13
manutenzione. Se nel roller un pulsante
8:16
e il rullo esce facilmente, nel track,
8:20
nel mio caso, vabbè, è unità
8:21
preproduzione, anche un pochino più dura
8:24
per toglierla, ma quello penso perché è
8:26
la mia unità, ma in più, una volta
8:28
rimosso il rullo devi sfilarlo dal suo
Manutenzione
8:31
supporto per poi mettere quello nuovo e
8:33
riagganciarlo. Nel roller, invece, è un
8:35
click, togli tutto il rullo e lo
8:37
rimetti. Non ci vuole una laurea, eh,
8:39
attenzione, semplice anche nel truck,
8:41
però a livello di manutenzione mi sembra
8:42
un po' più complicato, ricollegandoci
8:44
anche al fatto rispetto la pulizia nel
8:47
roller, almeno abbiamo quella vaschetta
8:49
che possiamo togliere, ok, che anche
8:50
sotto si sporca, però il grosso magari
8:52
rimane sopra e lo puoi andare a pulire,
8:54
invece nel truck devi per forza
8:56
inclinarti con la schiena. Differenze e
8:58
riconoscimento ostacolo, intelligenza
8:59
artificiale, navigazione.
Riepilogo differenze
9:02
Io personalmente non ho percepito nulla,
9:03
seppure in alcuni forum viene detto che
9:05
in teoria il roll era un'intelligenza
9:07
superiore rispetto al truck, ma a
9:10
livello riconoscimento sta in
9:11
navigazione io non ho percepito alcun
9:13
tipo di differenza. Riassumiamo e
9:15
concludiamo. Quali sono le differenze
9:17
principali? Nell'acqua 10 roller abbiamo
9:20
il rullo cilindrico, nel truck il
9:22
cingolato. Nel roller però abbiamo
9:25
30.000 pascal rispetto ai 25.000 del
9:28
truck. supera gradini fino a 8 cm contro
9:30
i 6 cm del truck. Rullo regolabile da 9
9:33
a 12 Nel roller. Rullo fisso a 18 Nel
9:38
track. Manutenzione molto più semplice
9:40
nel roller, sia a livello di base che
9:42
abbiamo un supporto che possiamo
9:43
rimuovere, sia a livello di robot il
9:46
rullo si stacca con un click. Nel track
9:48
non abbiamo questo supporto nella base e
9:51
in più il cingolato richiede un po' di
9:54
praticità in più. Nel truck però a
9:56
livello di base abbiamo anche la
9:57
sterilizzazione OV che però è una
9:59
considerazione che poco conta
10:01
considerando che nel roller abbiamo
10:03
comunque l'asciugatura del sacchetto che
10:05
è l'aspetto che alla fine consideri di
10:07
più soprattutto se hai degli animali che
10:09
puzza il pelo. Nel roller hai lo scudo
10:11
che si attiva che va a evitare a bagnare
10:13
i tappeti. Nel truck invece si solleva
10:16
solamente. In compenso però abbiamo dei
10:18
serbatoi più grandi nel truck
10:19
internamente al robot da 160 per l'acqua
10:22
pulita, 150 per l'acqua sporca, 100 ml
10:25
140 ml per il roller. Però a livello di
10:28
autonomia attualmente la batteria dura
10:32
un 10-20% in meno nel truck rispetto al
10:34
roller, probabilmente dovuto al fatto
10:36
che il rullo si scalda fino a 45°, che
10:40
però non è una temperatura tale da dire
10:42
che può sciogliere il grasso dello
10:44
sporco sul pavimento. Sono più che altro
10:46
di 18 N sul pavimento che aiutano a
10:48
stroare un pochino meglio. Penso che ora
10:50
che vi ho raccontato le differenze
10:52
principali sarete più d'accordo con me
10:54
sulla mia posizione riguardo
10:56
all'apprezzamento dell'acqua 10 Roller
10:58
rispetto al truck, soprattutto perché
Considerazioni scelta
11:00
vengono venduti allo stesso prezzo, al
11:02
di là che adesso uno è in offerta e
11:04
l'altro no, però al lancio e anche per
11:06
le offerte adesso sono pari, ovvero
11:08
€1499 sono andati in offerta €1299,
11:12
anche se secondo me non dovrebbe essere
11:13
così. Per quanto il truck ha delle
11:15
caratteristiche interessanti in più,
11:17
però ha anche diverse funzioni
11:19
importanti in meno. A quale prezzo
11:20
allora tu, Poderack, inizieresti a
11:22
considerare anche il truck? inizierei a
11:24
pensarci semplicemente quando costerà
11:27
meno, quando ci sarà una differenza
11:29
fissa di almeno €50-100 rispetto al
11:32
roller, perché voglio ricordare a tutti
11:34
che oltre a questi due c'è un altro
11:36
competitor, MOVA, con il suo modello Z60
11:39
Ultra che viene venduto a €1399,
Differenze MOVA Z60 Roller
11:42
giustamente a €100 in meno rispetto
11:45
all'acqua ma attenzione, non perché MOVA
11:47
vuole essere più economica rispetto a
11:49
Dreamy, ma perché nel Dreamy abbiamo la
11:52
possibilità di collegarci all'allaccio
11:54
idrico e nel MOVA no. Però questa non è
11:57
una caratteristica che importa molti,
11:58
dato che quasi il 90% non lo colerà
12:01
l'impianto idrico, però ha modo di
12:03
risparmiare e in compenso Mova, ha anche
12:06
il rullo a 18 N, così come il track.
12:10
Quindi in conclusione, se vi interessa
12:11
solo perché ha una pressione in più,
12:13
tanto vale prendere il Z60, perché a
12:15
livello tecnologico è praticamente
12:17
simile all'acqua 10 roller, solo che
12:19
appunto quella piccolezza riguardo all
12:21
laccio idrico sì, alla laccio idrico no.
12:23
Ecco perché l'acqua 10 Truck, se vuole
12:25
essere competitivo, considerando le sue
12:26
mancanze, perlomeno anche lui deve
12:28
costare €100 in meno rispetto al roller,
12:30
altrimenti secondo me non ha molto
12:32
senso. Sì, direi che qui alla fine è più
12:34
una questione di prezzo. Possiamo dire
12:36
non tutte le ciambelle escono con il
12:37
buco, però si può sistemare questa cosa.
12:39
Magari chissà Dreamy un ripensamento, è
Conclusioni
12:42
d'accordo con il nostro ragionamento e
12:44
magari cambia i prezzi e sarà tutt'altra
12:47
storia. Voglio aspettare i vostri
12:48
feedback qui sotto in descrizione. In
12:50
ogni caso se siete interessati a uno o
12:52
l'altro trovate tutti i riferimenti su
12:54
Amazon, così come gruppo de robot
12:56
aspirapolvere, così come abbiamo anche
12:58
trattato le problematiche soluzioni
13:01
riguardo l'acqua 10 roller, feedback,
13:04
novità, tante belle cose interessanti,
13:07
tipo quando arriverà finalmente il kit d
13:09
laaccio idrico, sicuramente nel gruppo
13:11
vi bombarderò di notizie e mi
13:14
raccomando, lasciate mi piace, fatemi
13:15
sapere cosa ne pensate. Ci vediamo alla
13:17
prossima. Ciao.`;