/**
 * Stan Gumeniuk i@igo.su
 * Date: 01.09.13
 * Time: 13:53
 */

window.onload = function(){
    if (window.localStorage && localStorage.loan_amount){
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
}
