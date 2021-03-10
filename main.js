console.log("Financer");
let mesAtual = new Date().getMonth();
class Expense {
    constructor(str) {
        let list = str.split(',');
        switch (list.length) {
            case 2:
                this.name = list[0];
                this.value = parseFloat(list[1]);
                this.plots = 1;
                this.timestamp = new Date();
                break;
            case 3:
                this.name = list[0];
                this.value = parseFloat(list[1]);
                this.plots = parseInt(list[2]);
                this.timestamp = new Date();
                break;
            case 4:
                this.name = list[0];
                this.value = parseFloat(list[1]);
                this.plots = parseInt(list[2]);
                this.actualPlot = parseInt(list[3]);
                this.remainingPlots = list[2]-list[3];
                this.timestamp = new Date();
                break;

            default:
                this.name = 'INVALID ENTRY';
                this.value = 0;
                this.plots = 0;
                this.actualPlot = 0;
                this.remainingPlots = 0;
                this.timestamp = new Date();
        }
    }
}

let anos = [];
let meses = [];
for (let i=0; i<10; i++) {
    anos.push(new Date().getFullYear()+i);
}
for (let i=0; i<12; i++) {
    meses.push(new Date(2021,i).toString().split(' ')[1].toLowerCase());
}
console.log(anos);
console.log(meses);

let next10years = {};
for (let i=0; i<anos.length; i++) {
    next10years[`ano${anos[i]}`] = {};
    for (let j=0; j<meses.length; j++) {
        next10years[`ano${anos[i]}`][meses[j]] = {};
    }
}
console.log(next10years);

function ex(str) {
    return new Expense(str);
}

let lancamentos = [
    'description',
    'value',
    'day',
    'month',
    'year',
    'hour',
    'minute',
    'second',
    'account',
    'category',
    'repeat?',
    'obs',
    'tags',
    'atachment',

];

let cardNubank = [
    [],
    [],
    [
    'Netflix.com,21.90',
    'Uber *Eats,41.97',
    'Recarga de celular,10',
    'Lider Pedreira Lj,41.27',
    'Meio A Meio Preco Baix,4.76',
    'Estacao Cosmeticos,48.99,2,1',
    'Ultrapopular,55.11',
    'Meio A Meio Preco Baix,54.81',
    'Meio A Meio Preco Baix,3.94',
    'Saito Comercio de Comb,96.02,3,1',
    'O Batistao,26.5',
    'Meio A Meio Preco Baix,175.69,2,1',
    'Uber *Trip Help.Uber.C,12.99',
    'Recarga de celular,25',
    'Recarga de celular,10',
    'Localiza Rac Acbel4,54.21,2,1',
    'Meio A Meio Preco Baix,4.28',
    'Sol It Center,79.9',
    'Uber * Pending,9.63',
    'Meio A Meio Preco Baix,11.72',
    'P Tio Bel M - Pa,27.98,10,8',
    'Universidade Estacio,54.47,6,3',
    'Economico Pedreira,117.35,2,2',
    'Saito Comercio de Comb,44.42,3,2',
    'Ame Digital,133.25,12,8',
    'Mercpago *Mercadop,12.11,10,2',
    'Meio A Meio Preco Baix,87.91,2,2',
    'Ame Digital,41.99,6,4'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

let cardInter = [
    [],
    [],
    [
    'Mercpago *mercado,175.41,5,2',
    'Meio A Meio Preco Baix,99.55,2,2'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

let cardDigio = [
    [],
    [],
    [
    'Amazon.Com.Br Digital Ama,14.9',
    'Mercpago *Mercadop,294.82,11,1',
    'Amazonprimebr,9.9,2,1',
    'Garcia Educacao e Tecno,225,12,2',
    'Rota 24Hs Gps Veicul,24,5,3',
    'Ame Digital,249.83,12,4',
    'Superbella,297.5,4,4',
    'Localiza Sn Vcmab0,753.8,10,4',
    'Embeleze Belem,159.58,12,9'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

let cardClick = [
    [],
    [],
    [
    'Mp *Mercadopago,260,10,2',
    'Yes Cosmetics,41.45,6,3'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

let cardWay = [
    [],
    [],
    [
    'Mercpago *Mercadop,252.23,10,1',
    'Cloudwa*Biana Cosmetic,325,12,3',
    'Cloudwa*Garcia Educaca,166.66,12,3',
    'Embeleze,159.58,12,9'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
//let stringg = cardNubank[2].map((el)=>el='nubank,'+el)
//stringg.map(el=>stringg2+=`'${el}',\n`)
let boxes = [
    'nubank,Netflix.com,21.90',
    'nubank,Uber *Eats,41.97',
    'nubank,Recarga de celular,10',
    'nubank,Lider Pedreira Lj,41.27',
    'nubank,Meio A Meio Preco Baix,4.76',
    'nubank,Estacao Cosmeticos,48.99,2,1',
    'nubank,Ultrapopular,55.11',
    'nubank,Meio A Meio Preco Baix,54.81',
    'nubank,Meio A Meio Preco Baix,3.94',
    'nubank,Saito Comercio de Comb,96.02,3,1',
    'nubank,O Batistao,26.5',
    'nubank,Meio A Meio Preco Baix,175.69,2,1',
    'nubank,Uber *Trip Help.Uber.C,12.99',
    'nubank,Recarga de celular,25',
    'nubank,Recarga de celular,10',
    'nubank,Localiza Rac Acbel4,54.21,2,1',
    'nubank,Meio A Meio Preco Baix,4.28',
    'nubank,Sol It Center,79.9',
    'nubank,Uber * Pending,9.63',
    'nubank,Meio A Meio Preco Baix,11.72',
    'nubank,P Tio Bel M - Pa,27.98,10,8',
    'nubank,Universidade Estacio,54.47,6,3',
    'nubank,Economico Pedreira,117.35,2,2',
    'nubank,Saito Comercio de Comb,44.42,3,2',
    'nubank,Ame Digital,133.25,12,8',
    'nubank,Mercpago *Mercadop,12.11,10,2',
    'nubank,Meio A Meio Preco Baix,87.91,2,2',
    'nubank,Ame Digital,41.99,6,4'
];



let totalGeral = 0;
let totalGeralNext = 0;
function swCards(aray) {
    let mapped = aray[mesAtual].map((el)=>ex(el)); // padroniza itens com constructor de Expense
    
    let total = 0;
    mapped.forEach((el)=> total += el.value); // calcula a soma total de .value de todos os itens

    let totalNext = 0;
    mapped.forEach((el)=>{ // calcula a soma total de .value de todos os itens que tem parcelas acima de 0
        if (el.remainingPlots > 0) {
            totalNext += el.value;
        }
    });

    totalGeral += total;
    totalGeralNext += totalNext;
    console.log(`Mês atual: ${total.toFixed(2)}`);
    console.log(`Mês próximo: ${totalNext.toFixed(2)}`);
}

function cards() {
    console.log('Nubank');
    swCards(cardNubank);
    console.log('Inter');
    swCards(cardInter);
    console.log('Digio');
    swCards(cardDigio);
    console.log('Click');
    swCards(cardClick);
    console.log('Way');
    swCards(cardWay);
    console.log(`========================================\nMês atual GERAL: ${totalGeral.toFixed(2)}\nMês próximo GERAL: ${totalGeralNext.toFixed(2)}`);
}
cards();
