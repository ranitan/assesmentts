"use strict";
function getname() {
    return fetch("name.json")
        .then((res) => res.json())
        .then((res) => {
        return res;
    });
}
getname().then((name) => {
    console.log(name.map((name) => name.id + ":" + name.pname + ":" + name.pdescription + ":" + name.price + ":").toString());
});
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
