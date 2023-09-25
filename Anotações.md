COMANDOS HTML:
    - div.container (cria um container principal em uma div)

SHADOW DOM:
    -  Permite criarmos uma arvore dentro da arovore do navegador e temos total conotrole, ou seja, podemos criar uma sub arvore dentro de algum elemento. 
    - Trabalhamos de forma encapsulada 
    - Anexamos a SHADOW DOM na arvore principal atráves de um elemento customizado (custom element), criamos uma tag HTML para invocar o SHADOW DOM
    
    *As vantagens de se utilizar o SHADOW DOM* 
        - Conseguimos isolar e trabalhar toda a complexidade de algum elemento na tela (component) de maneira isolada e assim quando formos chamar ela no nosso arquivo HTML, chamamos somente a tag que foi dada na SHADOW DOM

DEFININDO UM COMPONENT
    - Todo component é uma função JS que vai acabar retornar mais HTML, CSS e JS