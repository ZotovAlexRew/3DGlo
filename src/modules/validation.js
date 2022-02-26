const validation = () => {
  const calcItemNumbers = document.querySelectorAll('.calc-item');
  const inputText = document.querySelectorAll('input[id*=name], input.mess');
  const emails = document.querySelectorAll('input[type="email"]');
  const phone = document.querySelectorAll('input[type="tel"]');


  function noMoreSpace(expr) {
    let reg = /\s+/g;
    expr.value = expr.value.replace(reg, ' ');
    if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {
      expr.value = expr.value.trim();
    }
  }

  function noMoreHyphen(expr) {
    let reg = /\-+/g;
    expr.value = expr.value.replace(reg, '-');
    if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {
      expr.value = expr.value.replace(reg, '');
    }
  }

  function letter(expr) {
    let regBig = /[А-Я]/;
    let regSmall = /[а-я]/;
    let arr = expr.value.split(' ');
    let result = [];
    arr.forEach( item => {
      if(regSmall.test(item[0]))
      {
        item = item[0].toUpperCase() + item.slice(1).toLowerCase();
      }
      else
      {
        item = item;
      }

      if (regBig.test(item.slice(1)))
      {
        item = item[0].toUpperCase() + item.slice(1).toLowerCase();
      }
      else
      {
        item = item;
      }

      result.push(item);
      expr.value = result.join(' ');
    });
  }

  calcItemNumbers.forEach(item => {
    item.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  });

  inputText.forEach(item => {
    item.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/[^а-яА-я\s\-]/g, '');
    });
  });

  inputText.forEach(item => {
    item.addEventListener('blur', function() {
      noMoreSpace(item);
      noMoreHyphen(item);
      letter(item);
    });
  });

  emails.forEach(item => {
    item.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, '');
    });
  });

  emails.forEach(item => {
    item.addEventListener('blur', function() {
      noMoreHyphen(item);
    });
  });

  phone.forEach(item => {
    item.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, '');
    });
  });

  phone.forEach(item => {
    item.addEventListener('blur', function() {
      noMoreHyphen(item);
    });
  });
};


export default validation;