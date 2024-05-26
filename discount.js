let cart = []

const couponbtn = document.getElementById('coupon-btn')





document.getElementById('product1').addEventListener('click' , ()=>{
    console.log('connected product1')

    const price = document.getElementById('product-price1')
    const name = document.getElementById('product-name1')
    console.log(price.innerText , name.innerText)

    addtocalculation(price.innerText , name.innerText)
})


document.getElementById('product2').addEventListener('click' , ()=>{
   

    const price = document.getElementById('product-price2')
    const name = document.getElementById('product-name2')
    console.log(price.innerText , name.innerText)

    addtocalculation(price.innerText , name.innerText)
})

document.getElementById('product3').addEventListener('click' , ()=>{
   

    const price = document.getElementById('product-price3')
    const name = document.getElementById('product-name3')
    console.log(price.innerText , name.innerText)

    addtocalculation(price.innerText , name.innerText)
})



function addtocalculation(price , name){

    let total = 0;
    const calculation = document.getElementById('calculation-entry')

    const totalprice = document.getElementById('total')

    const discount = document.getElementById('discount')

    const total_amount = document.getElementById('total-amount');

    const finalpricetag = document.getElementById('finalprice')

    const count = calculation.childElementCount;

    const p = document.createElement('p');

    total = parseInt(total_amount.innerText)  + parseInt(price) ;

    
    // const finalprice =  parseInt(price);

  

    p.innerHTML = `<p class = 'my-8'>${count + 1} -  ${name}  </p>
    
    ` ;

    calculation.appendChild(p)

    const productprice = document.createElement('span');
    totalprice.innerHTML = `<p class = 'my-8 font-extrabold'> Total price  <span class="text-green-400" id="total-amount">${total}</span>  taka </p>
    ` 
    totalprice.appendChild(productprice)


   

    const finalpricespan = document.createElement('span');
    finalpricetag.innerHTML = `<p class = 'my-8 font-extrabold'> Total ${total}  taka </p>`
    finalpricetag.appendChild(finalpricespan)


    
    const purchasebtn = document.getElementById('Purchase');

    if (total > 0){

        purchasebtn.disabled = false;
        
    } 


    
document.getElementById('coupon-box').addEventListener('keyup', function(event){

    
    // console.log(event.target.value);
    let coupon = event.target.value;

    if(coupon === 'SELL200' &&  total > 200){

        couponbtn.disabled = false;

        

        


     
       
    }


})


document.getElementById('coupon-btn').addEventListener('click' , function(){

    const discountprice = total * 20 / 100 ;

    const finalprice = total - discountprice;

    const discountfinalprice = document.createElement('span');
    discount.innerHTML = `<p class = 'my-8 font-extrabold'> Discount  <span class="text-yellow-400">${discountprice}</span>   taka </p>`
    discount.appendChild(discountfinalprice)

    const finalpricespan = document.createElement('span');
    finalpricetag.innerHTML = `<p class = 'my-8 font-extrabold'> Total ${finalprice}  taka </p>`
    finalpricetag.appendChild(finalpricespan)
})



   




   


  

  



}



function refresh (){
    window.location.reload();
}


function couponcopy (){
    document.getElementById('coupon-box').value = 'SELL200'
    couponbtn.disabled = false;
}












