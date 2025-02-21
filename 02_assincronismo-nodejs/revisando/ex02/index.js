
// Crie uma função getUser() que retorna uma Promise que resolve um usuário após 2 segundos.
// Utilize .then() e .catch() para lidar com a Promise.

const getUser= () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      const error = false;
      if(error) {
        return reject("Deu ruim");
      }
      resolve({name: 'aaaa', age: 21, email: "blabal@gmail.com", city: "blumenal"});
    });
  });
};

const fetchData = async () =>{
  const user = await getUser();
  console.log("Info:", user);
}

const user = getUser()
.then((user) => {
  console.log("Usuario recuperado com sucesso!!");
  console.log("Informações: ", user);
})
.catch((erro) => {
  console.log(erro);
})

fetchData();