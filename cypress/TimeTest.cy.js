const url = "http://localhost:3001";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

describe('TimeTest.cy.js', () => {
  it('playground', () => {
    // cy.mount()
   expect(true).to.equal(true);
  });


describe("Itinerary App", () => {
  it("displays an Itinerary with a reservation", () => {
	cy.visit(url);
	cy.contains("Itinerary");
	cy.contains("Donnie's Pizzeria");
  	});
  });


describe("viewing a future reservation", () => {
	before(() => {
  	const now = new Date(Date.parse("2021-01-01")).getTime();
  	cy.clock(now, ["Date"]); // Set "now" to BEFORE reservation
  	cy.visit(url);
	});

	it("displays the date and a cancel button", () => {
  	cy.contains("Sun Oct 10 2021");
  	cy.contains("Cancel");
	});
  });

});
