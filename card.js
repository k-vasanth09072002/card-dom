//    let cars=[{
// 	id:1,
// 	imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gqSTsdJSp8c3kBNqvpWe2kcKtFIcEWXcYA&usqp=CAU",
// 	vihicle:"car",
// 	name:"Mercedez Benz c300 2022",
// 	mileage:"Mileage:4,000 miles",
// 	fuel:"Fuel:25mpg",
// 	safe:"safety",
// 	color:"Pick a color",
// 	amount:"$134,450",
// 	amt:"$140,500",
// 	cart:"Add to Cart"
// }]

// let container=document.querySelector(".container");
// //row
// let card=document.createElement("div");
// 	card.classList.add("row");
// 	container.appendChild(card);

// cars.forEach(function(e){
//     //col
// 	let rows=document.createElement("div");
//           rows.classList.add("col")
// 		card.appendChild(rows);

       

//    //img	//	
// 	let img=document.createElement("img");
// 		img.src=e.imgurl;
// 		rows.appendChild(img);

//     //vihicle//
//         let vihicle=document.createElement("span")
//            vihicle.innerText=e.vihicle;
//            rows.appendChild(vihicle)
    

//       //name//
      
//       let name=document.createElement("h1");
//       name.innerText=e.name;
//       rows.appendChild(name);



//       //icons div//
//       let divs=document.createElement("div");
//       divs.classList.add("div");
//       name.appendChild(divs);

//       //icon//


//       let icon=document.createElement("i");
//       icon.setAttribute("class","bi bi-car-front-fill");
//         divs.appendChild(icon);

//         let mileage=document.createElement("p");
//            mileage.innerText=e.mileage;
//            divs.appendChild(mileage);

//            //fueal//

//        let icons=document.createElement("i");
//        icons.setAttribute("class","bi bi-fuel-pump-fill")
//           mileage.appendChild(icons);


//           let fuel=document.createElement("p");
//           fuel.innerText=e.fuel;
//           divs.appendChild(fuel);
           

//     //   salary//

//     let salary=document.createElement("p");
//     salary.innerText=e.safe;
//     divs.appendChild(salary);

//     //icons

    






//     /// color


//     let color=document.createElement("







let cars=[{
	id:1,
	imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gqSTsdJSp8c3kBNqvpWe2kcKtFIcEWXcYA&usqp=CAU",
	imgurl2:"reds1.jpg",
    imgurl3:"blues.jpg",
    vihicle:"CAR",
	vihicle2:"CAR",
	vihicle3:"CAR",
	name:"Mercedez Benz c300 2022",
	mileage:"Mileage:4,000 miles",
	fuel:"Fuel:25mpg",
	safe:"safety:",
	color:"Pick a color",
	amount:"$134,450",
	amt:"$140,500",
	cart:"Add to Cart"
}]

let container=document.querySelector(".container");

let card=document.createElement("div");
	card.classList.add("row");
	container.appendChild(card);

cars.forEach(function(e){
	let rows=document.createElement("div");
		card.appendChild(rows);
		
	let img=document.createElement("img");
		img.src=e.imgurl;
		rows.appendChild(img);
		
		//next div
		
		let cols=document.createElement("div");
			cols.setAttribute("class","head");
			card.appendChild(cols);
		
		let model=document.createElement("p");
			model.setAttribute("class","car-p");
			model.innerText=e.vihicle;
			cols.appendChild(model);
			
		let name=document.createElement("h3");
			name.innerText=e.name;
			cols.appendChild(name);
			
		let add=document.createElement("div");
			add.setAttribute("class","icons");
			cols.appendChild(add);
			
		let mile=document.createElement("div");
			add.appendChild(mile);
			
		let caricon=document.createElement("i");
			caricon.setAttribute("class","bi bi-car")
			mile.appendChild(caricon);
			
		let mileage=document.createElement("span");
			mileage.innerText=e.mileage;
			mile.appendChild(mileage);
			
		let fuel=document.createElement("div");
			add.appendChild(fuel);
			
		let fuelicon=document.createElement("i");
			fuelicon.setAttribute("class","bi bi-car")
			fuel.appendChild(fuelicon);
			
		let fu=document.createElement("span");
			fu.innerText=e.fuel;
			fuel.appendChild(fu);
			
		let safety=document.createElement("div");
			add.appendChild(safety);
			
		let safeicon=document.createElement("i");
			safeicon.setAttribute("class","bi bi-car")
			safety.appendChild(safeicon);
			
		let safe=document.createElement("span");
			safe.innerText=e.safe;
			safety.appendChild(safe);
			
			let staricon=document.createElement("i");
			staricon.setAttribute("class","bi bi-star")
			safety.appendChild(staricon);
			
			let staricon2=document.createElement("i");
			staricon2.setAttribute("class","bi bi-star")
			safety.appendChild(staricon2);
			
			let staricon3=document.createElement("i");
			staricon3.setAttribute("class","bi bi-star")
			safety.appendChild(staricon3);
			
			let staricon4=document.createElement("i");
			staricon4.setAttribute("class","bi bi-star")
			safety.appendChild(staricon4);
			
			let staricon5=document.createElement("i");
			staricon5.setAttribute("class","bi bi-star")
			safety.appendChild(staricon5);
			
			
			
		let color=document.createElement("p");
			color.setAttribute("class","color-p");
			color.innerText=e.color;
			cols.appendChild(color);
			
		let btn1=document.createElement("button");
			btn1.setAttribute("class","btn1");
			cols.appendChild(btn1);
			
		let btn2=document.createElement("button");
			btn2.setAttribute("class","btn2");
			cols.appendChild(btn2);
			
		let btn3=document.createElement("button");
			btn3.setAttribute("class","btn3");
			cols.appendChild(btn3);
			
		let amount=document.createElement("span");
			amount.innerText=e.amount;
			amount.setAttribute("class","amount");
			cols.appendChild(amount);
			
		let amt=document.createElement("span");
			amt.innerText=e.amt;
			amt.setAttribute("class","amt");
			cols.appendChild(amt);
			
		let addto=document.createElement("div");
			addto.setAttribute("class","addto");
			cols.appendChild(addto);
			
		let carticon=document.createElement("i");
			carticon.setAttribute("class","bi bi-cart-fill");
			addto.appendChild(carticon);
			
		let cart=document.createElement("span");
			cart.setAttribute("class","car-cart");
			cart.innerText=e.cart;
			addto.appendChild(cart);


      

            btn1.addEventListener("click",function(){
                img.src=e.imgurl2;

            });


            btn2.addEventListener("click",function(){
                img.src=e.imgurl;
            })

            btn3.addEventListener("click",function(){
           img.src=e.imgurl3;
            })
        })




