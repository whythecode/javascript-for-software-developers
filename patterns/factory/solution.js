// factory

/**
 * 1.
 */
function makeTicketMachine (attraction) {

  let number = 0;
//    ^
//    |_ at this point, the variable is scoped to the attraction

  return function (passenger) {

    number++;
//  ^
//  | and it can be accessed or changed from lower scopes
//  |-------------------------------|
//                                  |
//                                  ⌄
    return `${attraction} Ticket #${number} for ${passenger}`;
  }
}
