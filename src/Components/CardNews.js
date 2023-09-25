//Criando uma tag HTML pelo JS (Component)
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles)

    }

    build() { 
        const componentRoot = document.createElement("div")
        //setando a prop na div 
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")

        //são filhas do componentRoot que no HTML é o "card"
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() { }
}

customElements.define("card-news", CardNews);