/* eslint-disable cypress/no-unnecessary-waiting */
import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns';

const url = "http://localhost:3000/login";

const yearInSeconds = 31536*1000;
const dayInSeconds = 86400;
var x = 1;


describe("run front-page", {testIsolation: false}, () => {
        it("Checks the first date", () => {
		cy.visit(url);
		cy.contains("Login to your account");
		
	});
});

/*

describe("run login", {testIsolation: false}, () => {
	it("Checks the first date", () => {
	cy.visit(url);
	cy.contains("Login to your account");

	cy.get('input[name="email"]').type('phillip.g.bradford@gmail.com');
	cy.get('input[name="password"]').type('31017549377');
	cy.get('button[type="submit"]').click();
	
});
});
*/

describe("run login go to calendar", {testIsolation: false}, () => {
	it("Checks the first date", () => {

	const now = new Date(2024, 8, 14)
	//const now=Date.now()
	cy.clock(now,['Date'])
	cy.visit(url);
	cy.contains("Login to your account");

	cy.get('input[name="email"]').type('phillip.g.bradford@gmail.com');
	cy.get('input[name="password"]').type('31017549377');
	cy.get('button[type="submit"]').click();

	
	cy.wait(3000);
	cy.get('button[class="btn btn-light"]').click()
    cy.get('.small-size-sidebar-outer').contains("Activity Calendar").click()

	cy.wait(2000)

	cy.get('.activity-main').should('contain','September 2024')
	cy.get('.rbc-date-cell.rbc-now.rbc-current').find('button').should('contain','14')

	cy.tick((yearInSeconds+1)*1000)

	cy.get('.rbc-date-cell.rbc-now.rbc-current').find('button').should('contain','15')



	
	});
});


/* 
describe("run non-isolated clock fast", {testIsolation: false}, () => {

        before(() => {
        });

        beforeEach(() => {
		cy.clock();
        });

        it("Checks the first date", () => {


		cy.clock(new Date(2024,1,14).getTime());
	        cy.visit(url);

		cy.wait(1000*3);
		cy.wait(1000*3);
		//cy.wait(1000*3);
		//cy.wait(1000*3);

		cy.get('input[name="email"]').type('phillip.g.bradford@gmail.com');
		cy.get('input[name="password"]').type('12345ABC');
		cy.get('button[type="submit"]').click();

        });



        it("Checks the first date", () => {
        	cy.tick((dayInSeconds -1)*1000);
			//No test yet
        });

        it("Checks the second date", () => {
        	cy.tick(dayInSeconds*1000);
        });

});

*/


