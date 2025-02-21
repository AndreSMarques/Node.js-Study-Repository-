const loginUser = (email, password) => {
  //retornar uma promise
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const erro = false ;
      
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

const getUserData = async () => {
 try {
  const user = await loginUser("test@gmail.com", "adfasdfe412"); 

  console.log(user);

  const videos = await getUserVideos();
  console.log("Lista de videos: ", videos);
 
  const details = await getVideosDetails();
  console.log("Videos fetails", details);
 } catch(error) {
  console.log(error);
 }
};

getUserData();