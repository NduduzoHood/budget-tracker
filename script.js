function showTopExpenseCategory() {
  let map = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  let top = Object.entries(map).sort((a,b) => b[1] - a[1])[0];

  if (top) {
    document.getElementById("insight").innerText =
      "Top Spending: " + top[0] + " (R" + top[1] + ")";
  }
}


function getAnalytics() {
  let income = 0;
  let expense = 0;

  let categories = {};

  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;

    if (!categories[t.type]) categories[t.type] = 0;
    categories[t.type] += t.amount;
  });

  console.log("Income:", income);
  console.log("Expense:", expense);
  console.log("Categories:", categories);
getAnalytics();
}
