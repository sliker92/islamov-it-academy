var formData = [
  {label: 'Разработчики:', kind: 'text', name: 'developer'},
  {label:'Название сайта:', kind:'text', name:'site_name'},
  {label:'URL сайта:', kind:'text', name:'site_url'},
  {label:'Дата запуска сайта:', kind:'text', name:'site_date'},
  {label:'Посетителей в сутки:', kind:'number', name:'site_guest'},
  {label:'E-mail для связи:',kind:'mailText', name:'email'},
  {label:'Рубрика каталога:', kind:'choose', name:'catalog',
    variants:[{text:'здоровье', value:1}, {text:'домашний уют', value:2}, {text:'бытовая техника', value:3}]},
  {label:'Размещение:', kind:'radio', name:'place',
    variants:[{text:'бесплатное', value:1}, {text:'платное', value:2}, {text:'VIP', value:3}]},
  {label:'Разрешить отзывы:', kind:'check',name:'feedback'},
  {label:'Описание сайта:',kind:'text-area',name:'site_desc'},
  {label:'Опубликовать:',kind:'submit'}
];

var form = document.forms.myForm;

function createForm(form,array) {
  var arr = array;
  var frm = form;

  function createInput(type) {
    var input = document.createElement('input');
    var label = document.createElement('label');
    var labelText = document.createTextNode(elem.label);
    input.type = type;
      label.innerHTML = '<div>'
      label.style.cssText = 'display: flex; padding: 2px';
      input.style.cssText = 'margin-left: 20px';

    if (input.type === 'submit') {
      delete input.name;
      input.value = elem.label;
      frm.appendChild(input);
    } else {
      input.name = elem.name;
      label.appendChild(labelText);
      frm.appendChild(label).appendChild(input);
    }
  }

  for(var i=0; i<arr.length; i++) {
    var elem = arr[i];

    if(elem.kind === 'text'){
      createInput('text');
    } else if (elem.kind === 'number') {
      createInput('number');
    } else if (elem.kind === 'mailText') {
      createInput('email');
    } else if (elem.kind === 'choose') {
      var options = elem.variants;

      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);
      var select = document.createElement('select');
      select.name = elem.name;

      label.appendChild(labelText);
      frm.appendChild(label).appendChild(select);

      options.forEach(function(item, i, arr) {
        var option = document.createElement('option');
        var optionText = document.createTextNode(item.text);
        option.value = item.value;
        select.appendChild(option).appendChild(optionText);
      });

    } else if (elem.kind === 'radio') {
      var radioItems = elem.variants;
      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);

      frm.appendChild(label).appendChild(labelText);

      radioItems.forEach(function(item, i, arr) {
        var input = document.createElement('input');
        var labell = document.createElement('label');
        var labellText = document.createTextNode(item.text);
        input.type = 'radio';
        input.name = elem.name;
        input.value = item.value;

        labell.appendChild(labellText);
        label.appendChild(labell).appendChild(input);
      });

    } else if (elem.kind === 'check') {
      createInput('checkbox');

    } else if (elem.kind === 'text-area') {
      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);
      var textarea = document.createElement('textarea');
      textarea.name = elem.name;
      label.appendChild(labelText);
      frm.appendChild(label).appendChild(textarea);

    } else if (elem.kind === 'submit') {
      createInput('submit');
    }
  }
}
createForm(form, formData);