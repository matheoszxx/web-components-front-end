//Criando uma tag HTML pelo JS (Component)
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }

    build() {
        const componentRoot = document.createElement("div")
        //setando a prop na div 
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        //pegando as Props dos sub elementos do component
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)


        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")

        const newsImage = document.createElement("img")
        //pegando as Props dos sub elementos do component
        newsImage.src = this.getAttribute("photo") || "assets/default-profile.png"
        newsImage.alt = "Foto da noticia"

        cardRight.appendChild(newsImage)

        //são filhas do componentRoot que no HTML é o "card"
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
    
        /* trabalhando com a classe .card */
        .card {
            width: 80%;
            display: flex;
            flex-direction: row;
            box-shadow: 10px -1px 28px -4px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 10px -1px 28px -4px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 10px -1px 28px -4px rgba(0, 0, 0, 0.75);
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        /* classe acessando uma tag para manusear o que está dentro dela*/
        .card_left > a {
            margin-top: 20px;
            font-size: 25px;
            text-decoration: none;
            font-weight: bold;
            color: black;
        }
        
        .card_left>p {
            color: gray;
            padding-right: 10px;
        }
        
        .card_left>span {
            font-weight: 400;
            padding-bottom: 10px;
        }
        
        `
        return style
    }
}

customElements.define("card-news", CardNews);