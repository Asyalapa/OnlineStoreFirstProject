'use strict'

// https://reqres.in/api/users

fetch('https://reqres.in/api/users?per_page=12')
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log('Пункт №1:');
    body?.data.forEach((item) => {
      console.log(item);
    });
    console.log('-----------');
    console.log('Пункт №2:');
    body?.data.forEach((item) => {
      console.log(item.last_name);
    });
    console.log('-----------');
    console.log('Пункт №3:');
    console.log(body?.data.filter(item => item.last_name[0] === 'F'));
    console.log('-----------');
    console.log('Пункт №4:');
    const result = body?.data.reduce((accumulator, item, index, array) => {
      if (item.id !== 12) accumulator += item.first_name + ' ' + item.last_name + ', ';
      else accumulator += item.first_name + ' ' + item.last_name;
      
      return accumulator;
    },'');
    console.log('Наша база содержит данные следующих пользователей: ', result);
    console.log('-----------');
    console.log('Пункт №5:');
    console.log(`Объект пользователя содержит следующие ключи: ${Object.keys(body?.data['0'])}`);
  });
