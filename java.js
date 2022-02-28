class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
            <a href='index.html'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='about.html'>About us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='contact.html'>contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='doctor.html'>doctor</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='service.html'>service</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        Copyright (c) 2022 Ranjan kumar 
        
        `

    }
}
customElements.define('my-footer', MyFooter)