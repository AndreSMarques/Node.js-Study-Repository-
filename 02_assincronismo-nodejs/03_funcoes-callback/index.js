const loginUser = (email, password, onSucess, onError) => {
  //chamar banco de dados  para pegar dados do usuario (operção que leva tempo para ser executada)

  setTimeout(()=>{
    const error = false;
    if (error) {
      return onError("Erro na conexao do banco")
    }
    console.log("Usuario verificado no banco de dados");

    onSucess({ email });
  }, 3000);
};

const getUserVideos = (onSucess)=> {
  //chamar o banco de dados para pegar os videos
  setTimeout(()=>{
    onSucess(["video01", "video02", "video03"])
  }, 2000)

};

const user = loginUser("minhanossa@gmail.com", "12345", (user)=> {
  console.log("Usuario logado com sucesso!");
  console.log(user);

  getUserVideos((videos)=>{
    console.log("videos do usuario recuperados com sucesso!", videos);
  }) 
},
(error) => {
  console.log(error);
}
);
