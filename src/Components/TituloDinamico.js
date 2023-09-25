class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //1ª base do component (<h1>Matheus</h1>)
        const componenteRoot = document.createElement('h1')
        componenteRoot.textContent = 'Matheus'

        //2ª estilizar o component
        const style =  document.createElement('style');
        style.textContent = `
            h1{
                color: red;
            }
        `
        //3ª enviar para a shadow
        shadow.appendChild(componenteRoot)
        shadow.appendChild(style);


    }
}

customElements.define('titulo-dinamico', TituloDinamico);