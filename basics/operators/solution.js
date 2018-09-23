// strict equals, && vs. ||

/**
 * 1.
 */
//-----------
//          | change double '=' into triple '=' so that no conversion is done
//          ⌄
if (value === '5') {
  console.log('hello text');
}


/**
 * 2.
 */
const result = ('a' && 'b') && 3 || 0 && (1 || 2 && 5);
//             |__________|    |    |                |
//                   |         |    |                |
//                  'b'  AND   3    |                |
//                   |_________|    |________________|
//                        |                 |
//                        3      OR     [whatever]
//                        |_________________|
//                                 3
