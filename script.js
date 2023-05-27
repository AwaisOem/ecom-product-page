let cart=0;
let dec= ()=> {
    if (cart>0)
        cart--;
    show();
}
let inc= ()=> {cart++;show();}
let show= ()=> 
{
    document.getElementById("qua").innerText=cart;
}
const carticn=document.getElementById("cart");
const cartmen=document.getElementById("cart-menu");
carticn.addEventListener('click',()=>{
    if(cartmen.className==="hide")
    cartmen.className="";
    else
    cartmen.className="hide";
});

let cartbtn=()=>
{
    const cartnum=document.getElementById("cartnumbers");
    const cartbtn=document.getElementById("cart-btn");
    if (cart===0) {
        cartnum.className="hide";
    }
    else
    {
        cartnum.className="";
        cartnum.innerText=cart;
    }
}
const profmen=document.getElementById("profile-menu");
const proficn=document.getElementById("pic");
proficn.addEventListener('click',()=>{
    if (profmen.className==="hide") {
        profmen.className=""
    }
    else
    {
        profmen.className="hide"
    }
});