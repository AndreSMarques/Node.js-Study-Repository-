const loadproduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: "1", name: "mack", price: 1200}]);
    }, 3000)
  });
};

const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: "1", name: "note"}]);
    }, 3000)
  });
};

const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: "1", name: "felipe", age: 30}]);
    }, 3000)
  });
};

const init = async() => {
  // const product = await loadproduct();
  // const categories = await loadCategories();
  // const users = await loadUsers();

// promise.all executa varias  promises simultaniamente 
  const [product, categories, users] = await Promise.all.sette([ loadproduct(),  loadCategories(),  loadUsers()]);

  console.log({product, categories, users});

}

init();