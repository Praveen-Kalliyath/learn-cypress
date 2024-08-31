export class Homecreen{

    navigate(url){
        cy.visit(url)
    }

    enterData(){
        let el = cy.get('.gLFyf').click()
        el.type('Praveen Kalliyath{ENTER}')
    }

    clickElement(){
        let el=cy.get('#search>div>div>div:nth-of-type(3) h3',{timeout:3000})
        el.click()
    }

}