
//const url = 'https://randomuser.me/api/?gender=female&results=5'
const url = 'https://randomuser.me/api/'
const buscaDados = (url) => {
   

    // Faz uma requisição a um usuarío com um ID expecifico
    axios.get(url)
      .then(function (response) {
        // manipula o sucesso da requisição
        const people = response.data.results;
        let container = document.getElementById('container');
        console.log(container);
        console.log(people);
        //container.innerText = '';
        container.innerText = '';
        people.forEach((item) => {
            
            let html = "";
            html += `<article>`;
            html += `<p>ID: ${item.cell} </p>`;
            html += `<p>Idade: ${item.dob.age} </p>`;
            html += `<p>Data de Nascimento: ${moment(item.dob.date).format("DD/MM/YYYY (HH:MM:SS)")} </p>`;
            html += `<p>e-mail: ${item.email} </p>`;
            html += `<p>Identidade: ${item.id.value} - Orgão: ${item.id.name} </p>`;
            html += `<p>Pais: ${item.location.country} </p>`;
            html += `<p>Usuário: ${item.login.username} </p>`;
            html += `<p>uuid: ${item.login.uuid} </p>`;
            html += `<p>Nome: ${item.name.first} ${item.name.last} </p>`;
            html += `<p>Fone: ${item.phone} </p>`;
            html += `<img src="${item.picture.large}" alt="large-${item.login.username}">`
            html += `<img src="${item.picture.medium}" alt="medium-${item.login.username}">`
            html += `<img src="${item.picture.thumbnail}" alt="thumbnail-${item.login.username}">`
            html += `</article>`;
            html += `<hr>`;
            container.insertAdjacentHTML('afterbegin',html);
        
        })
     
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
}

const buscaDadosQtde = () => {
    let quantidade = document.getElementById('qtde').value;
    if (quantidade === "" || Number(quantidade <= 0)) {
        quantidade = 1;
    }
    
    let url = `https://randomuser.me/api/?results=${quantidade}`;
    buscaDados(url);
}

buscaDados(url);