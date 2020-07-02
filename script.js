var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

var product = [
    {
        id: 0,
        image: 'img/neon.jpg',
        name: "Nintendo Switch V2 Neon Console",
        description: "Nintendo Switch V2 Neon Console",
        price: "Php 17,990"
    },
    {
        id: 1,
        image: 'img/grey.png',
        name: "Nintendo Switch V2 Grey Console",
        description: "Nintendo Switch V2 Grey Console",
        price: "Php 17,990"
    },
    {
        id: 2,
        image: 'img/acnh.png',
        name: "Nintendo Switch V2 ACNH Console",
        description: "Limited Edition Nintendo Switch V2 Animal Crossing: New Horizons Console",
        price: "Php 19,990"
    },
    {
        id: 3,
        image: 'img/eevee.jpg',
        name: "Nintendo Switch V1 Eevee Console",
        description: "Limited Edition Nintendo Switch V1 Eevee Console",
        price: "Php 17,990"
    },
    {
        id: 4,
        image: 'img/zandzlite.jpg',
        name: "Nintendo Switch Lite Zacian and Zamazenta Console",
        description: "Limited Edition Nintendo Switch Lite Zacian and Zamazenta Console",
        price: "Php 13,990"
    },
    {
        id: 5,
        image: 'img/coral.jpg',
        name: "Nintendo Switch Lite Coral Console",
        description: "Limited Edition Nintendo Switch Lite Coral Console",
        price: "Php 13,990"
    },
    {
        id: 6,
        image: 'img/yellow.jpg',
        name: "Nintendo Switch Lite Yellow Console",
        description: "Nintendo Switch Lite Yellow Console",
        price: "Php 12,990"
    },
    // {
    //     id: 7,
    //     image: 'img/greylite.jpg',
    //     name: "Nintendo Switch Lite Grey Console",
    //     description: "Nintendo Switch Lite Grey Console",
    //     price: "Php 12,990"
    // },
    {
        id: 8,
        image: 'img/blue.jpg',
        name: "Nintendo Switch Lite Turquoise Console",
        description: "Nintendo Switch Lite Turquoise Console",
        price: "Php 12,990"
    }  
];


insert_divs = function() {
    var parent = document.getElementById("main");
    
    for (let index =0; index < product.length; index++){
        var name = document.createElement('p');
        var description = document.createElement('p');
        var price = document.createElement('p');
        var img = document.createElement('img'); 
        var div = document.createElement('div');
        var br = document.createElement('br');
        var buy = document.createElement('button');
        var span_name = document.createTextNode("Name: "+product[index].name);
        var span_description = document.createTextNode("Description: "+product[index].description);
        var span_price = document.createTextNode("Price: "+product[index].price);
        var buy_btn = document.createTextNode("BUY");
        name.appendChild(span_name)+br;
        description.appendChild(span_description);+br
        price.appendChild(span_price);
        buy.appendChild(buy_btn);
        buy.setAttribute('id', 'button'+index)
        img.setAttribute('src', product[index].image)
        buy.classList.add('btn');
        div.classList.add('box');
        div.classList.add('zone');
        
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(buy);
            
        parent.appendChild(div);
    }  
  }
  
window.onload = insert_divs
 var cart = [];
 document.addEventListener('click',function(e){
  if(e.target && e.target.id== "button0"){
     cart.push({
      image: 'img/neon.jpg',
      name: "Nintendo Switch V2 Neon Console",
      description: "Nintendo Switch V2 Neon Console",
      price: "Php 17,990"       
     });
   }
  else if(e.target && e.target.id== "button1"){
    cart.push({
      image: 'img/grey.png',
      name: "Nintendo Switch V2 Grey Console",
      description: "Nintendo Switch V2 Grey Console",
      price: "Php 17,990"
    });
  }
  else if(e.target && e.target.id== "button2"){
    cart.push({
      image: 'img/acnh.png',
      name: "Nintendo Switch V2 ACNH Console",
      description: "Limited Edition Nintendo Switch V2 Animal Crossing: New Horizons Console",
      price: "Php 19,990"  
    });
  }
  else if(e.target && e.target.id== "button3"){
    cart.push({
      image: 'img/eevee.jpg',
      name: "Nintendo Switch V1 Eevee Console",
      description: "Limited Edition Nintendo Switch V1 Eevee Console",
      price: "Php 17,990"       
    });
  }
  else if(e.target && e.target.id== "button4"){
    cart.push({
      image: 'img/zandzlite.jpg',
      name: "Nintendo Switch Lite Zacian and Zamazenta Console",
      description: "Limited Edition Nintendo Switch Lite Zacian and Zamazenta Console",
      price: "Php 13,990"       
    });
  }
  else if(e.target && e.target.id== "button5"){
    cart.push({
      image: 'img/coral.jpg',
      name: "Nintendo Switch Lite Coral Console",
      description: "Limited Edition Nintendo Switch Lite Coral Console",
      price: "Php 13,990"      
    });
  }
  else if(e.target && e.target.id== "button6"){
    cart.push({
      image: 'img/yellow.jpg',
      name: "Nintendo Switch Lite Yellow Console",
      description: "Nintendo Switch Lite Yellow Console",
      price: "Php 12,990"
    });
  }
  else if(e.target && e.target.id== "button7"){
    cart.push({
      image: 'img/greylite.jpg',
      name: "Nintendo Switch Lite Grey Console",
      description: "Nintendo Switch Lite Grey Console",
      price: "Php 12,990"       
    });
  }
  else if(e.target && e.target.id== "button8"){
    cart.push({
      image: 'img/blue.jpg',
      name: "Nintendo Switch Lite Turquoise Console",
      description: "Nintendo Switch Lite Turquoise Console",
      price: "Php 12,990"      
    });
  }
});

addToCart = function() {
  var modalparent = document.getElementById("orders");
  if (cart.length>0){
      for (let counter =0; counter<cart.length; counter++){
        console.log(cart[counter].name);
        console.log(cart[counter].description);
        console.log(cart[counter].price);
        console.log(cart[counter].image);
        var cname = document.createElement('p');
        var cdescription = document.createElement('p');
        var cprice = document.createElement('p');
        var cimg = document.createElement('img'); 
        var cdiv = document.createElement('div');
        var cbr = document.createElement('br');
        var cspan_name = document.createTextNode("Name: "+cart[counter].name);
        var cspan_description = document.createTextNode("Description: "+cart[counter].description);
        var cspan_price = document.createTextNode("Price: "+cart[counter].price);
        cname.appendChild(cspan_name)+cbr;
        cdescription.appendChild(cspan_description);+cbr
        cprice.appendChild(cspan_price);
        cimg.setAttribute('src', cart[counter].image)
        cdiv.classList.add('box-modal');
        
        cdiv.appendChild(cimg);
        cdiv.appendChild(cname);
        cdiv.appendChild(cdescription);
        cdiv.appendChild(cprice);
            
        modalparent.appendChild(cdiv);
    }    
  }
  else{
    var nodiv = document.createElement('div');
    var span = document.createElement('p');
    var span_text =  document.createTextNode("Nothing in here..");
    span.appendChild(span_text);
    nodiv.appendChild(span);
    modalparent.appendChild(nodiv);
  }
modal.style.display = "block";
}
var btnCart = document.getElementById("mybtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
btnCart.onclick = addToCart;
span.onclick = function() {
  modal.style.display = "none";
  document.querySelector('#orders').innerHTML='';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector('#orders').innerHTML='';
  }
}
