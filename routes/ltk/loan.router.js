const express = require("express");
const loanController = require("./loan.controller");
const loanRouter = express.Router();

loanRouter.get("/", loanController.getLoans);
loanRouter.get("/:loanId", loanController.getLoanById);
loanRouter.post("/", loanController.createLoan);
loanRouter.patch("/:loanId/borrowers/:pairId", loanController.updateBorrowers);
loanRouter.delete("/:loanId/borrowers/:pairId", loanController.removeBorrower);
loanRouter.delete("/:loanId", loanController.removeLoan);

module.exports = loanRouter;
