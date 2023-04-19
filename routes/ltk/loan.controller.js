const { loans } = require("../samples");

module.exports = {
  getLoans(req, res) {
    res.json(loans);
  },

  getLoanById(req, res) {
    const loan = loans.find(
      (item) => item.loanId === Number(req.params.loanId)
    );

    if (!loan) {
      return res.status(404).send("Loan not found");
    }

    res.json(loan);
  },

  createLoan(req, res) {
    const loan = req.body;
    loan.loanId = loans.length + 1;
    loans.push(loan);

    res.status(201).json(loan);
  },

  updateBorrowers(req, res) {
    const loan = loans.find(
      (item) => item.loanId === Number(req.params.loanId)
    );
    if (!loan) {
      return res.status(404).send("Loan not found");
    }

    const borrower = loan.borrowers.find(
      (borrower) => borrower.pairId === Number(req.params.pairId)
    );
    if (!borrower) {
      return res.status(404).send("Borrower not found");
    }

    if (!req.body.firstName && !req.body.lastName && !req.body.phone) {
      return res
        .status(400)
        .send("First name or last name or phone should exist");
    }

    borrower.firstName = req.body.firstName;
    borrower.lastName = req.body.lastName;
    borrower.phone = req.body.phone;

    res.json(loan);
  },

  removeBorrower(req, res) {
    const loan = loans.find(
      (item) => item.loanId === Number(req.params.loanId)
    );
    if (!loan) {
      return res.status(404).send("Loan not found");
    }

    const borrowerIndex = loan.borrowers.findIndex(
      (borrower) => borrower.pairId === Number(req.params.pairId)
    );
    if (borrowerIndex === -1) {
      return res.status(404).send("Borrower not found");
    }

    loan.borrowers.splice(borrowerIndex, 1);
    res.json(loan);
  },

  removeLoan(req, res) {
    const loanIndex = loans.findIndex(
      (item) => item.loanId === Number(req.params.loanId)
    );
    if (loanIndex === -1) {
      return res.status(404).send("Loan not found");
    }

    loans.splice(loanIndex, 1);
    res.sendStatus(204);
  },
};
