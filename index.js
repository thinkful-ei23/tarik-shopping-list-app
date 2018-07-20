/* global $ */
'use strict';

console.log('hello world');

function editShoppingList () {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newListItem = $(this).find('input').val();
    console.log(newListItem);
    $('ul').append(
      `
      <li>
        <span class="shopping-item">${newListItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `
    );
  });
  $('.shopping-list').on('click', '.button-label', function(event){
    if ($(this).text() === 'check') {
      const parent = $(this).closest('li');
      $(parent).children('span').toggleClass('shopping-item__checked');
    } else {
      $(this).closest('li').remove();
    }
  });
}

$(editShoppingList);