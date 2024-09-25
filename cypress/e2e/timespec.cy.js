import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns';

const url = "http://localhost:3000";
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
		cy.clock(new Date(1929, 0, x).getTime());
		x = x+1;
        });

        it("Checks the first date", () => {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.reload(true);
        	cy.visit(url);
	        cy.contains("1/1/1929");
	});


        it("Checks the second date", () => {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.reload(true);
        	cy.visit(url);
	        cy.contains("1/2/1929");
	});

        it("Checks the third date", () => {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.reload(true);
        	cy.visit(url);
	        cy.contains("1/3/1929");
        });
  });


