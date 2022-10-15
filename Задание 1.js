//написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const xmlObj = 
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlObj, "text/xml");

const student = xmlDOM.querySelectorAll("student");

const result = { list: [] };

student.forEach(item => {
  let firstName  = item.querySelector("first");
  let lastName  = item.querySelector("second");
  let age  = item.querySelector("age");
  let prof  = item.querySelector("prof");
  let nameLang = item.querySelector("name");
  let langAttr = nameLang.getAttribute("lang");
  result.list.push(`{name: ${firstName.textContent} ${lastName.textContent}, age: ${age.textContent}, prof: ${prof.textContent}, lang: ${langAttr}}`);
});

console.log(result) 
//  {
//    "list": [
//       "{name: Ivan Ivanov, age: 35, prof: teacher, lang: en}",
//       "{name: Петр Петров, age: 58, prof: driver, lang: ru}"
//    ]
// }
