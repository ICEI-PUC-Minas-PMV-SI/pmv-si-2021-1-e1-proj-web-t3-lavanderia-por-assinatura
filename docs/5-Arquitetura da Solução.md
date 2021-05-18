# Arquitetura da Solução

O site da LaveBem ficará hospedado na plataforma (A DEFINIR). Será desenvolvido em linguagem de marcação (HTML), linguagem de folha de estilos (CSS) e linguagem de programação (JavaScript). O site também suportará arquivos de imagens (JPEG, PNG) e terá extensões para o processamento de pagamentos por boleto e cartões de crédito ou débito.
O site contará uma área do assinante, links redirecionando para redes sociais e descrições sobre os serviços, planos, valores, áreas atendidas, central de atendimento ao cliente, meios de contatos e depoimentos de usuários.
A página inicial apresentará com destaque os custos e benefícios do serviço de lavanderia por assinatura.
•	Home: Terá informações bem resumidas sobre os planos, história e o marketing principal;

• **Planos**: Terá todas as informações detalhadas dos serviços e seus benefícios, bem como informações sobre lavagem de peças de roupas avulsas, sem a necessidade de um plano de assinatura;

•	**Como funciona**: Terá um passo a passo detalhando como é feita a coleta de roupas na casa do cliente, todo o processo de lavagem e o processo da entrega das roupas no local que foi coletado;

•	**Áreas atendidas**: Terá um mini mapa adicionado no site onde mostrará as áreas em que a LaveBem atua;

•	**Contato**: Terá todas as informações necessárias e um chat onde o cliente possa entrar em contato direto com a LaveBem;

•	**Area do cliente**: Será um portal onde cliente terá todas as informações do andamento da sua solicitação de e demais detalhas específicos.
O site será acessado por meio da URL: (A DEFINIR) 

Diagrama de componentes
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
