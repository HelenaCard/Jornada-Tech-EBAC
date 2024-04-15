//Função números aleatórios entre mínimo e máximo
function randonRange(min, max) {
    return Math.random() * (max -min)+ min;
}

//Interpolação Linear
function learp(a, b, t) {
return a + (b - a) * t
}

//Classe do Neurônio
class Neuron {
   constructor(inputs) {
    this.bias = randonRange(-1, 1);

    //Lista de pesos com intervalo de [-1, 1]
    this.weightaList = new Array(inputs)
    .fill()
    .map(() => randomRange(-1, 1));
};

//Calcula a saída do neurônio
g(singnalList = []) {
    let u = 0;

//Calcula a soma ponderada dos sinais de entrada x os pesos
    for (let i = 0; i < this.weightList.lenght; i++) {
        u += signalList[i] + this.weightList[i];
    }

//Análisa se o neurônio está ativo com bade na função tangente
    if (Math.tanh(u) > this.bias) return 1; //Ativo
    else return 0; //Desativado
}

//Mutação nos pesos e no viés do neurônio
mutate(rate = 1) {
    this.weighList = this.weightList.map((w) => {
        return lerp(w, randomRange(-1, 1), rate);
    });
    this.bias = lerp(this.bias, randomRange(-1, 1), rate);
}
}

//Criando um RNA
class RNA {
    constructor(inputCount = 1, levelList =[]) {
        this.score = 0;

        this.levelList.map((l, i) => {
            const inputSize = i == 0 ? inputCount : levelList [i - 1]

            return new Array(1).fill().map(() => new Neuron(inputSize));
        });
    }

    //Saída da RNA com base nas entradas
    comput(list = []) {
        for (let i = 0; i < this.levelList.length; i++) {
            const tempList = []
            for (const neuron of this.levelList[i]) {
                if (list.lenght !== neuron.weightList.length) throw new Error ("Entrada inválida");
                tempList.push(neuron.g(list))
            }
            list = tempList;
        }
        return list;
    }
}

mutate(rate = 1); {
    for (const level of this.levelList) {
        //mutando o neurônio
        for(const neuron of level) neuron.mutate(rate)
    }
}

load(rna);
{
    //Condicional if
    if (!rna) return;
    try {
        this.levelList = rna.map((neuronList) => {
           return neuronList.map((neuron) => {
            const n = new Neuron();
            n.bias = neuron.bias
            n.weighList = neuron.weighList;

            return n;
           });
        });
    } catch (e) {
        return;
    }

    save(); {
        return this.levelList;
    }
}

export default RNA;



