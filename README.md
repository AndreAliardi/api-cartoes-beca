# API Cartões treinamento beca!
## Tecnologia Server e Banco

 - NodeJS
	 - Express
	 - JWT Web Token
	 - MySQL
 - MySQL

## Requests

 - **Login**

| Info | Valor |
|--|--|
| Rota | /api/mobile/auth/login |
| Metodo | POST |
| **Headers** |  |
| Authorization| Basic YXNrZ2ZrZGtsZmpzbGtmajpzZGZzNDUxZHM1ZnNkcw== |
| **Body JSON** |  |
| user | String |
| pass | String |

 - **Lista de cartões**

| Info | Valor |
|--|--|
| Rota | /api/mobile/timeline/listacartoes |
| Metodo | GET |
| **Headers** |  |
| Authorization| Bearer (Token login) |

 - **Lista de compras**

| Info | Valor |
|--|--|
| Rota | /api/mobile/timeline/listacompras |
| Metodo | POST |
| **Headers** |  |
| Authorization| Bearer (Token login) |
| **Body JSON (Para filtro da lista)** |  |
| idCompraPaginacao | int (opcional) |
| dataInicial | String (format: yyyy-mm-dd) (opcional) |
| dataFinal | String (format: yyyy-mm-dd) (opcional) |
| idCompra| int (opcional) |
| loja| String (opcional) |
| descricao| String (opcional) |
| valor| float (opcional) |

## Desenvolvimento App, requisitos funcionais 

Desenvolva um App Android Nativo em Java ou Kotlin, no qual deve ter:

 - Tela de login com usuário e senha
	 - Deve conter a opção de desocultar a senha para o usuário
	 - Deve conter a opção de armazenar login e senha e posteriormente dar a opção para o usuário efetuar um login por autenticação biométrica ou reconhecimento facial
 - Tela de lista de cartões com lista de compras
	 - Deve conter em uma única scroll os dois componentes:
		 - Carrossel de cartões no formato e layout a baixo:

<img src="https://viniciusfragelli.s3-sa-east-1.amazonaws.com/catho/card_suggestion_anim.gif" width="200"/>

- Uma lista de compras com opção de filtro dessa lista para o usuário. Quando o filtro é aplicado, deve-se disparar para o serviço de lista de compras passando o filtro desejável. Também deve conter paginação de 15 em 15 itens da lista. A paginação deve ser acionada quando a scroll chegar no final, disparando para o serviço a solicitação de mais 15 itens usando o ID da compra do ultimo item da lista. A chamadas de serviço ao iniciar a tela devem acontecer em **PARALELO**

- Deve-se conter tratamentos de erro de serviço indisponível e layout indicando para o usuário que algo deu errado. **O serviços são independentes entre si, logo caso um de erro o app ainda tem que chamar o outro e exibir as informações caso retornem. 
- Ter uma tela de Filtros para a lista de compras quando o usuário clicar para filtar. Ao aplicar o filtro deve-se retornar os filtros desejaveis para a tela anterior e chamar o serviço.

## Requisitos não funcionais para Android 

O App Android deve ser desenvolvido usando as seguintes tecnologias e padrões

 - Arquitetura MVVM
 - Retrofit
 - RX ou Coroutines
 - LiveData ou databiding (opcional)
 - Injeção de dependências entre os môdulos usando Koin
 - Testes unitários da camadas de ViewModel, Model com Repository usando:
	 -   Mockito
	 -   JUnit 4
	 - Espresso
	 -  Test rules e Test runner para chamada de teste de tela (Extra)
 - RecyclerView
 - ViewPager

## Requisitos não funcionais para iOS

O App Android deve ser desenvolvido usando as seguintes tecnologias e padrões

 - Arquitetura MVVM ou MVVMC
 - Request nativo ou usando AlamoFire (de prefêrencia nativo)
 - Tratamento de thread nativo
 - Injeção de dependências entre os môdulos nativo
 - Testes unitários da camadas de ViewModel, Model com Repository usando:
	 -   XCTest
 - Scroll com StackView para a pagina como um todo
 - Scroll com StackView ou TableView para o carrossel
 - TableView para lista de compras
 - Layout de cards em View ou Cell desacoplando a View da tela anterior

## Cronograma de desenvolvimento

 - 1º semana: Tela de login com chamada do login
 - 2º semana: Armazenar o usuário e senha e dar a opção de efetuar o login por biometria ou reconhecimento facial
 - 3º e 4º semana: Construir carrossel de cartões e serviço do carrossel e sua tratativa de erro
 - 5º e 6º semana: Construir lista de compras e serviço do lista de compras, paginação da lista e sua tratativa de erro
 - 7º semana: Tela de filtro de lista de compras
 - 8º semana: Apresentação do resultado
