# Organismo_Misterioso
Contexto: Você faz parte de uma equipe de pesquisa que encontrou um novo organismo misterioso no fundo do oceano, perto de fontes hidrotermais. Sua equipe nomeia o organismo, Pila aequor (P. aequor), e descobre que ele é composto apenas por 15 bases de DNA. As pequenas amostras de DNA e a frequência com que sofre mutações devido às fontes hidrotermais fazem  de P. aequor um espécime interessante para estudar. No entanto, P. aequor não pode sobreviver acima do nível do mar e localizar P. aequor no mar profundo é difícil e caro. Seu trabalho é criar objetos que simulem o DNA de P. aequor para sua equipe de pesquisa estudar.
À medida que você avança pelas etapas, use as instruções terminal e console.log() para verificar a saída de seus loops e funções.

__returnRandBase__: Esta função retorna uma base de DNA aleatória. As bases de DNA são ‘A’, ‘T’, ‘C’, ‘G’. A função seleciona uma dessas bases aleatoriamente.

__mockUpStrand__: Esta função retorna uma única fita de DNA aleatória contendo 15 bases. Ela usa a função returnRandBase para gerar cada base de DNA.

__pAequorFactory__: Esta é uma fábrica de funções que cria um novo organismo. Cada organismo tem um número de espécime e uma sequência de DNA. Além disso, cada organismo tem as seguintes funções:

__mutate__: Esta função mutaciona uma base aleatória na sequência de DNA do organismo. Ela garante que a nova base é diferente da base original.

__compareDNA__: Esta função compara a sequência de DNA do organismo com a de outro organismo. Ela calcula a porcentagem de bases idênticas nas duas sequências de DNA.

__willLikelySurvive__: Esta função verifica se o organismo tem chances de sobreviver com base na porcentagem de bases ‘C’ e ‘G’ em sua sequência de DNA. Se a porcentagem for maior ou igual a 60%, o organismo provavelmente sobreviverá.

__create30SurvivingInstances__: Esta função cria 30 instâncias de organismos que provavelmente sobreviverão. Ela usa a função __mockUpStrand__ para gerar a sequência de DNA e a função __pAequorFactory__ para criar o organismo. Se o organismo provavelmente sobreviverá (determinado pela função __willLikelySurvive__), ele será adicionado à lista de instâncias sobreviventes.

__instancesArray__: Esta é uma variável que armazena as 30 instâncias de organismos que provavelmente sobreviverão, criadas pela função __create30SurvivingInstances__.



