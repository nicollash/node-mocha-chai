const request = require("supertest");
const { expect } = require("chai");
const app = require("../../app");

describe("Loan router test", () => {
  // Test creating loan
  describe("POST /loans", () => {
    it("should create a new loan", async () => {
      const res = await request(app)
        .post("/loans")
        .send({
          borrowers: [
            {
              pairId: 1,
              firstName: "Borrower4",
              lastName: "Last",
              phone: "143-2222",
            },
            {
              pairId: 2,
              firstName: "Borrower22",
              lastName: "Kevin33",
              phone: "337-4444",
            },
          ],
        });

      expect(res.statusCode).equal(201);
      expect(res.body.loanId).equal(3);
    });
  });

  // Test getting all loans
  // describe("GET /loans", () => {});

  // // Test getting loan by loanId
  // describe("GET /loans/:loanId", () => {});

  // // Test creating a borrower
  // describe("PATCH /loans/:loanId/borrowers/:pairId", () => {});

  // // Test deleting a borrower
  // describe("DELETE /loans/:loanId/borrowers/:pairId", () => {});

  // // Test deleting a loan
  // describe("DELETE /loans/:loanId", () => {});
});
