const nomeDoArrayOriginal = [5, 12, 7, true, false, "bom dia", "boa tarde"];

const nomeDoArrayOriginalCopia1 = nomeDoArrayOriginal.slice();

const nomeDoArrayOriginalCopia2 = nomeDoArrayOriginal.slice();

const nomeDoArrayOriginalCopia3 = nomeDoArrayOriginal.slice();

nomeDoArrayOriginalCopia1.push("93");
console.log(nomeDoArrayOriginal, nomeDoArrayOriginalCopia1);

nomeDoArrayOriginalCopia2.pop();
console.log(nomeDoArrayOriginal, nomeDoArrayOriginalCopia2);

nomeDoArrayOriginalCopia3.splice(1, 1);
console.log(nomeDoArrayOriginal, nomeDoArrayOriginalCopia3);
