class Pedido {
  numero: number;
  cliente: string;
  valor: number;
  entregue: boolean;
  constructor(
    numero: number,
    cliente: string,
    valor: number,
    entregue: boolean,
  ) {
    this.numero = numero;
    this.cliente = cliente;
    this.valor = valor;
    this.entregue = entregue;
  }
}
let calcT = 0;
let naoEntregues = 0;
let entregues = 0;

let pedidos: Pedido[] = [
  new Pedido(1, "claudio", 20, true),
  new Pedido(2, "claudio", 20, false),
  new Pedido(3, "claudio", 20, true),
  new Pedido(4, "claudio", 20, true),
  new Pedido(5, "claudio", 20, false),
  new Pedido(6, "claudio", 20, true),
  new Pedido(7, "claudio", 20, true),
  new Pedido(8, "claudio", 20, false),
];

function calcularTotal(): number {
  for (let i = 0; i < pedidos.length; i++) {
    calcT += pedidos[i].valor;
  }
  return calcT;
}

for (let i = 0; i < pedidos.length; i++) {
  if (pedidos[i].entregue) {
    console.log(`pedido ${pedidos[i].numero} está entregue pai`);
    entregues++;
  }
}

let i = 0;
while (i < pedidos.length) {
  if (!pedidos[i].entregue) {
    naoEntregues++;
  }
  i++;
}

console.log(`Valor total vendido: ${(calcularTotal()).toFixed(2)}`);
console.log(`Quantidade de Pedidos entregues: ${entregues}`);
console.log(`Quantidade de Pedidos pendentes: ${naoEntregues}`);
console.log(`Ticket Médio: ${(calcularTotal() / pedidos.length).toFixed(2)}`);
