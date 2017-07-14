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
    [ { "_id": "59173d676b591f17111328ba", "nome": "Pró Sangue Faria Lima",
    "endereco": "Av. Faria Lima, 1020 - Pinheiros - São Paulo", "lat": "-23.6174120", "lng": "-46.6376067" },
    { "_id": "5968371472b0791b37dba19e", "nome": "Pró Sangue Paulista",
    "endereco": "Av. Paulista, 517 - Bela Vista - São Paulo", "lat": "-23.5658403", "lng": "-46.6778561" } ]
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
