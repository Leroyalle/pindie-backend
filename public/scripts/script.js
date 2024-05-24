const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const generateGamesList = (gamesArray, template, parent) => {
  gamesArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = element.title;
    clone.querySelector('.text').textContent = element.description;
    clone.querySelector('.developer').textContent = element.developer;
    const catlist = clone.querySelector('.categories');
    element.categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.textContent = category.name;
      catlist.append(listItem);
    });
    const voteslist = clone.querySelector('.votes');
    element.users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.username;
      voteslist.append(listItem);
    });
    clone.querySelector('img').src = element.image;
    clone.querySelector('a').href = element.link;
    clone.querySelector('a').textContent = element.link;
    parent.append(clone);
  });
};

(async () => {
  const gamesArray = await getData('/games');
  const template = document.querySelector('#game-list-item');
  const parent = document.querySelector('.games-list');
  generateGamesList(gamesArray, template, parent);
})();

const generateUsersList = (usersArray, template, parent) => {
  usersArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = element.username;
    clone.querySelector('.email').textContent = element.email;
    parent.append(clone);
  });
}

(async () => {
  const usersArray = await getData('/users');
  const template = document.querySelector('#user-list-item');
  const parent = document.querySelector('.users-list');
  generateUsersList(usersArray, template, parent);
})();

const generateCategoriesList = (categoriesArray, template, parent) => {
  categoriesArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = element.name;
    parent.append(clone);
  });
}

(async () => {
  const categoriesArray = await getData('/categories');
  const template = document.querySelector('#category-list-item');
  const parent = document.querySelector('.categories-list');
  generateCategoriesList(categoriesArray, template, parent);
})();