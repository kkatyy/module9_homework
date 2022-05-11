const parser = new DOMParser;
const xmlString = `<list>
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
</list>`;
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const studentNode = xmlDOM.querySelector('student');
let result = {
    list: []
  };
  for (let i=0; i<student.length; i++){
      firstName=studentNode[i].querySelector('first').textContent;
      surname=studentNode[i].querySelector('second').textContent;
      age=studentNode[i].querySelector('age').textContent;
      prof=studentNode[i].querySelector('prof').textContent;
      lang = studentNode[i].querySelector('name').getAttribute('lang');

      let student = {
        name: `${firstName} ${surname}`,
        age: age,
        prof: prof,
        lang: lang,
      }
      result.list.push(student);
  }
  comsole.log(result);