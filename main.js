// Retorna uma base de DNA aleatória
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Retorna uma única fita de DNA aleatória contendo 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/**
 * Cria um novo organismo usando a fábrica pAequor.
 * @param {number} specimenNum - O número do espécime do organismo.
 * @param {string[]} dna - A sequência de DNA do organismo.
 * @returns {Object} - O organismo recém-criado.
 */
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    /**
     * Mutaciona uma base aleatória na sequência de DNA do organismo.
     * @returns {string[]} - A sequência de DNA mutada.
     */
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    /**
     * Compara a sequência de DNA do organismo com outro organismo.
     * @param {Object} otherOrganism - O outro organismo para comparar.
     */
    compareDNA(otherOrganism) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = (identicalBases / this.dna.length) * 100;
      console.log(`O Espécime ${this.specimenNum} e o Espécime ${otherOrganism.specimenNum} têm ${percentage}% de DNA em comum.`);
      console.log(`O Espécime ${this.specimenNum} e o Espécime ${otherOrganism.specimenNum} têm ${percentage}% de DNA em comum.`);
    },

    /**
     * Verifica se o organismo tem chances de sobreviver com base na porcentagem de bases C e G em sua sequência de DNA.
     * @returns {boolean} - True se o organismo tem chances de sobreviver, false caso contrário.
     */
    willLikelySurvive() {
      const countCG = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentage = (countCG / this.dna.length) * 100;
      return percentage >= 60;
    },
  }
};
  
    const create30SurvivingInstances = () => {
      const survivingInstances = [];
      let specimenNum = 1;
      while (survivingInstances.length < 30) {
        const dna = mockUpStrand();
        const organism = pAequorFactory(specimenNum, dna);
        if (organism.willLikelySurvive()) {
          survivingInstances.push(organism);
        }
        specimenNum++;
      }
      return survivingInstances;
    };

    const instancesArray = create30SurvivingInstances();
    console.log(instancesArray);