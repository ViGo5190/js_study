/**
 * Stan Gumeniuk i@igo.su
 * Date: 01.09.13
 * Time: 13:51
 */

function save(amount, apr, years, zipcode){
    if (window.localStorage){
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}
