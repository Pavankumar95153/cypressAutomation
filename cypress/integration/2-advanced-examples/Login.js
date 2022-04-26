
describe('MyFirst step',()=>{
    it('test for the execution',()=>{
        cy.visit('http://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');

    })
    it('enter item in searchBox and click',()=>{
        let searchInput ="input[type='text']"
        cy.get(searchInput).type("mac");
        cy.wait(6000);
        let macbookTestOnToolTip = "#ui-id-2"
        cy.get(macbookTestOnToolTip).click();

    })
    it('enter quantity in inputBox',()=>{
        let inputQuantity = ".qty-input"
        cy.get(inputQuantity).clear().type('2');
        
        
        
    })
    xit('click on AddCart Button',()=>{
        let addCartButton ='.add-to-cart-button'
        cy.get(addCartButton).click();
        cy.wait(6000)
        // let notificationBar = ".bar-notification error"
        // cy.get(notificationBar).should('eq','The minimum quantity allowed for purchase is 2.');
        // cy.get(inputQuantity).type('2');
    })

    xit('move to shopCart',()=>{
        let shopCart = ".ico-cart"
        cy.get(shopCart).click();
        let amount ="product-unit-price"
        cy.get(amount).should('eq','$1,800.00');
    })

})