describe('Cypress E2E test', () => {
  it('Open home page and check the order button', () => {
    cy.visit('/');
    cy.get('[data-test-id = "main-order-button"]').click()
  })
  it('check order notes', () => {
    cy.visit('/order-pizza');
    cy.get('#special-text')
    .type('Siparis notu')
    .clear();
    cy.get(".error").should("have.length", 1);
  })
  it("check the pizza selection button", () => {
    cy.visit('/order-pizza');
    
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="test-pizza-name"]').contains("Kopernik"); 
    cy.get('[data-cy="test-pizza-price"]').contains("89"); 

    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="test-pizza-name"]').contains("Techno"); 
    cy.get('[data-cy="test-pizza-price"]').contains("99"); 

    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="test-pizza-name"]').contains("Travis"); 
    cy.get('[data-cy="test-pizza-price"]').contains("109"); 
  })
  it('select size of pizza', ()=>{
    cy.visit('/order-pizza');
    cy.get('[data-cy="radio1"]').check("Küçük");
    cy.get('[data-cy="radio2"]').check("Orta");
    cy.get('[data-cy="radio3"]').check("Büyük");
    
  })
  it('select hamur-type of pizza', ()=>{
    cy.visit('/order-pizza');
    cy.get('[data-cy="dropdown1"]').contains("İnce");
    cy.get('[data-cy="dropdown2"]').contains("Orta");
    cy.get('[data-cy="dropdown3"]').contains("Kalın");
  })
  it('try to submit', ()=>{
    cy.visit('/order-pizza');
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="radio1"]').click();
    cy.get('[data-cy="toggle-dd"]').click();
    cy.get('[data-cy="dropdown2"]').click();
    for(let i=0; i<13; i++){
      cy.get(`[data-cy-checkbox="${i}"]`).click();      
    }
    for(let i=5; i<9; i++){
      cy.get(`[data-cy-checkbox="${i}"]`).click();        
    }
    cy.get('#special-text').type('Siparis notu');      
    
    cy.get('[data-cy="increase"]').dblclick();
    cy.get('[data-cy="decrease"]').click();
    cy.get('[data-cy="order-button"]').click();


    

  })
})