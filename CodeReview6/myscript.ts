
class Places{
	name="";
	location="";
	img="";

	constructor(a,b,c){
		this.name=a;
		this.location=c;
		this.img=c;

	}
	sentence(){
		return '<div class="Places"><img src="${this.img}"><br></div>'
	}


	
	sentenceX(){
		return `<br>${this.location}<br>${this.name}`
	}

}
var church = new church("Name:St.Charles Church","location:Vienna,Karlsplatz 1.1010 Vienna","../img/church.jpg");
document.write(church.sentence());


class Zoovienna extends Places{
	address="";

	constructor(a,b,c,d){
		super(a,b,c,);
		this.address=d;
	}
	sentence1(){
		return '<div class="Zoovienna"><img src="${this.img}"><br></div>'	
	}


	
	sentenceX(){
		return `<br>${this.address}`

	}
}

var  zoo =new zoo ("Name:Zooz Vienna","location:Wien","address:Maxingstraße 13b.1130.wien","../zoo.jpg");
document.write(zoo.sentence1());



class Restaurants extends Places{
	name1="";
	location="";
	link="";
	phoneNamber="";
	sort="";

	constructor(a,b,c,d,e,f,g,k){
		super(a,b,c,);
		this.link=f;
		this.phoneNamber=g;
		this.sort=k;

	}

	sentence2(){
		return '<div class=" Restaurants"><img src="${this.img}"><br></div>'
		
		
	}

	sentenceX(){
		return `<br>${this.location}<br>${this.name}<br>${this.link}<br>${this.phoneNamber}<br>${this.sort}`
	}

}

var  food =new food ("Name:Lemon Leaf Thai Restaurant","location:Maxingstraße 13b.1130 Wien","phoneNamber:234266","sort:syrian","www.lemonleaf.at","../zoo.jpg");
document.write(food.sentence2());





class SIXTA extends Places{
	link="";
	phoneNamber="";
	classification="";

	constructor(a,b,c,d,e,f,g,h){
		super(a,b,c,);
		this.link=f;
		this.phoneNamber=g;
		this.classification=h;
	}
	sentence3(){
		return `<br><div class="SIXTA">${super.sentence()}</div>`
		
	}
	sentenceX(){
		return `${super.sentenceX()}${this.link}<br>${this.phoneNamber}<br>${this.classification}!`
	}
	
}
var  bar=new bar("Name:SIXTA","location:1050 Wien, Schönbrunner Straße 21","phoneNamber:+43 1 58 528 56 l +43 1 58 528 56","link:http://www.sixta-restaurant.at/","../zoo.jpg");
document.write(bar.sentence3());



class Events extends Places{
	link="";
	title="";
	date="";
	ticketprice="";

	constructor(a,b,c,d,y,x,z,m){
		super(a,b,c,);
		this.link=y;
		this.title=x;
		this.date=z;
		this.ticketprice=m;
	}
	sentence4(){
		return `<br><div class="SIXTA">${super.sentence()}</div>`
		
	}
	sentenceX(){
		return `${super.sentenceX()}${this.link}<br>${this.link}<br>${this.title}<br>${this.date}<br>${this.ticketprice}!`
	}
	
}
var  party=new party("Name:Events","location:Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien","title:Kris Kristofferson","date:Fr., 15.11.2019. 20:00","link:http://kriskristofferson.com/","ticketprice:58,50 EUR","../zoo.jpg");
document.write(party.sentence4());




var arr = [Places,zoo,Restaurants,SIXTA,Events];
for(let i in arr){
	
	document.getElementsByClassName("result")[i].innerHTML+=arr[i].sentenceX();

}