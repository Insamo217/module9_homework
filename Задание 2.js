//написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const jsonObj = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const data = JSON.parse(jsonObj);

const list = data.list;

const result = { list: [] };
list.forEach(item => {
  let name  = item.name;
  let age  = item.age;
  let prof  = item.prof;
  result.list.push(`{name: ${name}, age: ${age}, prof: ${prof}}`);
});

console.log(result)
//  {
//    "list": [
//       "{name: Petr, age: 20, prof: mechanic}",
//       "{name: Vova, age: 60, prof: pilot}"
//    ]
// }
