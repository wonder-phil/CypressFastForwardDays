import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns';

const url = "http://localhost:3000";

const yearInSeconds = 31536*1000;
const dayInSeconds = 86400;
var x = 1;

describe("Learn React checker", () => {
  it("displays Learn React, etc.", () => {
        cy.visit(url);
        cy.contains("reload");
        cy.contains("Learn React");
	cy.contains(format(new Date(), "M/d/yyyy").toString());
  });
});


describe("urls basic", () => {

        beforeEach(() => {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.reload(true);

		cy.clock(new Date(1929, 0, x).getTime());
		x = x+1;
        });

        it("Checks the first date", () => {
        	cy.visit(url);
	        cy.contains("1/1/1929");
	});


        it("Checks the second date", () => {
        	cy.visit(url);
	        cy.contains("1/2/1929");
	});

        it("Checks the third date", () => {
        	cy.visit(url);
	        cy.contains("1/3/1929");
        });
});


describe("run non-isolated clock fast", {testIsolation: false}, () => {

        before(() => {
		cy.clock();
	        cy.visit(url);
        });

        beforeEach(() => {
		cy.clock();
        });

        it("Checks the first date", () => {
        	cy.tick((dayInSeconds -1)*1000);
		cy.get('#refreshButton').click();
	        cy.contains("1970-01-01");
        });

        it("Checks the second date", () => {
        	cy.tick(dayInSeconds*1000);
		cy.get('#refreshButton').click();
	        cy.contains("1970-01-02");
        });

});


