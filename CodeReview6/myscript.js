var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Places = /** @class */ (function () {
    function Places(a, b, c) {
        this.name = "";
        this.location = "";
        this.img = "";
        this.name = a;
        this.location = c;
        this.img = c;
    }
    Places.prototype.sentence = function () {
        return '<div class="Places"><img src="${this.img}"><br></div>';
    };
    Places.prototype.sentenceX = function () {
        return "<br>" + this.location + "<br>" + this.name;
    };
    return Places;
}());
var church = new church("Name:St.Charles Church", "location:Vienna,Karlsplatz 1.1010 Vienna", "../img/church.jpg");
document.write(church.sentence());
var Zoovienna = /** @class */ (function (_super) {
    __extends(Zoovienna, _super);
    function Zoovienna(a, b, c, d) {
        var _this = _super.call(this, a, b, c) || this;
        _this.address = "";
        _this.address = d;
        return _this;
    }
    Zoovienna.prototype.sentence1 = function () {
        return '<div class="Zoovienna"><img src="${this.img}"><br></div>';
    };
    Zoovienna.prototype.sentenceX = function () {
        return "<br>" + this.address;
    };
    return Zoovienna;
}(Places));
var zoo = new zoo("Name:Zooz Vienna", "location:Wien", "address:Maxingstraße 13b.1130.wien", "../zoo.jpg");
document.write(zoo.sentence());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(a, b, c, d, e, f, g, k) {
        var _this = _super.call(this, a, b, c) || this;
        _this.name1 = "";
        _this.location = "";
        _this.link = "";
        _this.phoneNamber = "";
        _this.sort = "";
        _this.link = f;
        _this.phoneNamber = g;
        _this.sort = k;
        return _this;
    }
    Restaurants.prototype.sentence2 = function () {
        return '<div class=" Restaurants"><img src="${this.img}"><br></div>';
    };
    Restaurants.prototype.sentenceX = function () {
        return "<br>" + this.location + "<br>" + this.name + "<br>" + this.link + "<br>" + this.phoneNamber + "<br>" + this.sort;
    };
    return Restaurants;
}(Places));
var food = new food("Name:Lemon Leaf Thai Restaurant", "location:Maxingstraße 13b.1130 Wien", "phoneNamber:234266", "sort:syrian", "www.lemonleaf.at", "../zoo.jpg");
document.write(food.sentence());
var SIXTA = /** @class */ (function (_super) {
    __extends(SIXTA, _super);
    function SIXTA(a, b, c, d, e, f, g, h) {
        var _this = _super.call(this, a, b, c) || this;
        _this.link = "";
        _this.phoneNamber = "";
        _this.classification = "";
        _this.link = f;
        _this.phoneNamber = g;
        _this.classification = h;
        return _this;
    }
    SIXTA.prototype.sentence = function () {
        return "<br><div class=\"SIXTA\">" + _super.prototype.sentence.call(this) + "</div>";
    };
    SIXTA.prototype.sentenceX = function () {
        return "" + _super.prototype.sentenceX.call(this) + this.link + "<br>" + this.phoneNamber + "<br>" + this.classification + "!";
    };
    return SIXTA;
}(Places));
var bar = new bar("Name:SIXTA", "location:1050 Wien, Schönbrunner Straße 21", "phoneNamber:+43 1 58 528 56 l +43 1 58 528 56", "link:http://www.sixta-restaurant.at/", "../zoo.jpg");
document.write(bar.sentence());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(a, b, c, d, y, x, z, m) {
        var _this = _super.call(this, a, b, c) || this;
        _this.link = "";
        _this.title = "";
        _this.date = "";
        _this.ticketprice = "";
        _this.link = y;
        _this.title = x;
        _this.date = z;
        _this.ticketprice = m;
        return _this;
    }
    Events.prototype.sentence = function () {
        return "<br><div class=\"SIXTA\">" + _super.prototype.sentence.call(this) + "</div>";
    };
    Events.prototype.sentenceX = function () {
        return "" + _super.prototype.sentenceX.call(this) + this.link + "<br>" + this.link + "<br>" + this.title + "<br>" + this.date + "<br>" + this.ticketprice + "!";
    };
    return Events;
}(Places));
var party = new party("Name:Events", "location:Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "title:Kris Kristofferson", "date:Fr., 15.11.2019. 20:00", "link:http://kriskristofferson.com/", "ticketprice:58,50 EUR", "../zoo.jpg");
document.write(party.sentence());
var arr = [Places, zoo, Restaurants, SIXTA, Events];
for (var i in arr) {
    document.getElementsByClassName("result")[i].innerHTML += arr[i].sentenceX();
}
