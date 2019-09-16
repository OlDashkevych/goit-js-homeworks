'user strict';

//===================1=============
const quantityElementsChildrenList = document.querySelector('#categories')
  .children.length;

console.log(`There are ${quantityElementsChildrenList} categories in list`);

//===================2=============
const items = document.querySelectorAll('#categories > .item');

const categoriesInfo = listItem => {
  listItem.forEach(item => {
    const quantityElementsCategory = item.querySelectorAll('li').length;
    const title = item.querySelector('h2').textContent;
    console.log(
      `Number of elements: ${quantityElementsCategory} 
Category: ${title}`,
    );
  });
};

console.log(categoriesInfo(items));
