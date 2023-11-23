const product = [
    // Array de objetos representando produtos
    {
        id: 0,
        image: 'image/livro1.png',
        title: 'livro 1',
        price: 15,
    },
    {
        id: 1,
        image: 'image/livro2.png',
        title: 'livro 2',
        price: 20,
    },
    {
        id: 2,
        image: 'image/livro8.png',
        title: 'livro 3',
        price: 20,
    },
    {
        id: 3,
        image: 'image/livro9.png',
        title: 'livro4',
        price: 15,
    } // Mapeamento dos itens para a marcação HTML
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>adicione ao carrinho</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    //Função criada para adicionar itens ao carrinho
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){// Lógica para exibir o carrinho na página
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}