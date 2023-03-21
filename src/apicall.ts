interface color {
  color: string;
  value: string;
}

function getcolor(): Promise<color[]> {
  return fetch("/color.json")
    .then((res) => res.json())
    .then((res) => {
      return res as color[];
    });
}

getcolor().then((color) => {
  console.log(color.map((c) => c.color + ":" + c.value + "\n").toString());
});

getcolor();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => console.log(json));


