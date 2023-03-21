interface name{
    "id":string;
    "pname":string;
    "pdescription":string;
    "price":string;
}

function getname(): Promise<name[]> {
    return fetch("name.json")
      .then((res) => res.json())
      .then((res) => {
        return res as name[];
      });
  }

getname().then((name) => {
    console.log(name.map((name) => name.id +":" + name.pname +":" +name.pdescription +":" + name.price +":").toString());
  });

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((json) => console.log(json));
