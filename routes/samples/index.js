let loans = [
  {
    loanId: 1,
    borrowers: [
      { pairId: 1, firstName: "John", lastName: "Doe", phone: "111-2222" },
      { pairId: 2, firstName: "Test", lastName: "Kevin", phone: "333-4444" },
    ],
  },
  {
    loanId: 2,
    borrowers: [
      {
        pairId: 1,
        firstName: "Borrower1",
        lastName: "Last",
        phone: "113-2222",
      },
      {
        pairId: 2,
        firstName: "Borrower2",
        lastName: "Kevin",
        phone: "334-4444",
      },
    ],
  },
];

module.exports = { loans };
