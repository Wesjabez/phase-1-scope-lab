var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
  newBestCustomer='maybe bob';
}

function changeLeastFavoriteCustomer() {
    
    const leastFavoriteCustomer = 'Mathew';
    leastFavoriteCustomer = 'Tom';
}
