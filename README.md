# REST API de Hemocentros
REST API desenvolvida para consulta de informações dos hemocentros para doação de sangue na cidade de São Paulo.

## Listar Todos Hemocentros
Retorna um JSON contendo todos os hemocentros e as suas informações.

* #### URL
  /hemocentros
* #### Method
  ``` GET ```  
* #### URL Params
  None
* #### Data Params
  None
* #### Success Response
  * **Code**: 200
  * **Content:**
  ```json
    [{"_id":"596be20c0861a43df32a583d","nome":"Hospital do Servidor Público Municipal","endereco":{"logradouro":"Rua","nomeLogradouro":"Castro Alves","numero":"60","bairro":"Aclimação","localidade":"São Paulo","estado":"SP"},"cep":"01532-001","lat":"-23.5738780","lng":"-46.6325440","telefone":["(11) 3277-5303"],"site":"www.colsan.org.br"},{"_id":"596bebbf0861a43df32a583e","nome":"Beneficência Portuguesa de São Paulo","endereco":{"logradouro":"Rua","nomeLogradouro":"Maestro Cardim","numero":"1041","bairro":"Bela Vista","localidade":"São Paulo","estado":"SP"},"cep":"01323-900","lat":"-23.5667749","lng":"-46.6413033","telefone":["(11) 3505-1150","3505-1158"],"site":"www.bsangue@bpsp.org.br"} ]
    ```
* #### Error Response
  * **Code**: 503 - Service Unavailable
* #### Sample Call
  ```javascript
  var parametros = {
            method: 'GET',
            url: 'https://174.138.68.160:3000/hemocentros'
        }

        $http(parametros).then(buscarSucesso, buscarErro);
  ```

## Listar Hemocentro
Retorna um JSON contendo apenas a latitude e a longitude do hemocentro especificado pelo id.

* #### URL
  /hemocentros/coordenadas/:id
* #### Method
  ``` GET ```
* #### URL Params
	##### Required:
    ```text
    id=[alphanumeric]
    ```
* #### Data Params
  None
* #### Success Response
  * **Code**: 200
  * **Content:**
  ```json
  { "lat":"-23.6174968","lng":"-46.6376137" }
  ```
* #### Error Response
  * **Code**: 503 - Service Unavailable
* #### Sample Call
  ```javascript
  var parametros = {
            method: 'GET',
            url: 'https://174.138.68.160:3000/hemocentros/coordenadas/_id'
        }

        $http(parametros).then(buscarSucesso, buscarErro);
  ```
