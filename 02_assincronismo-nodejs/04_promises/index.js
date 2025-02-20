const loginUser = (email, password) => {
  //retornar uma promise
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const erro = false;
      
      if (erro){
       return reject("erro na conexão do banco");
      }
      console.log("Usuario logado com sucesso");
      resolve({ email, password })
    }, 3000);
   });
};

const getUserVideos = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Video01", "Video02", "Video03"]);
    }, 2000);
  });
};

const getVideosDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id:"1", name:"node", duration: 1});
    }, 2000);
  });
};

const user = loginUser("teste.tes.com", "123423")
  .then((user) => {
    console.log("Dados de usuario: ", user);

    return getUserVideos();
  }).then((videos) => {
    console.log("Lista de videos: ", videos);

    return getVideosDetails();
  }).then((details)=>{
     console.log("Videos fetails", details);
  }) 
  .catch((errorMessage)=>{
    console.log(errorMessage);
  });