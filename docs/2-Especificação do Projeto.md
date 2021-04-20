# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

**Joana Angélica** tem 33 anos, é gerente de marketing, solteira e trabalha para uma multinacional com sede em Cingapura. Devido ao fuso horário com 11 horas de diferença, a jornada de trabalho de Joana é bem diferenciada, não restando tempo livre quando as lavanderias estão abertas. Joana procura por um serviço que possa facilitar o acesso a um serviço de lavanderia, restando mais tempo para dedicar a seus hobbies.

**Lucas Moreno** tem 44 anos, é representante comercial de uma multinacional e solteiro.
Lucas viaja muito a trabalho e isso dificulta muito a conciliação do seu tempo para afazeres domésticos. Lucas busca o serviço de lavagem por assinatura pelo fato de poder agendar a lavagem a qualquer momento quando o mesmo estiver em viagem. Lucas vê como vantagem, a liberdade que assinatura de lavagem de roupas pode proporcionar trazendo um custo/benefícios muito considerado. Lucas poderá solicitar a busca das suas roupas sujas em seu prédio, onde as roupas dele serão lavadas e entregues a portaria do seu prédio devidamente limpas.

**Dona Arminda** tem 82 anos, casada há 50 anos com Seu Jonas. Aposentada, ajuda seus três filhos a cuidar dos 5 netinhos, que se revezam em sua casa. Sempre muito atribulada com as visitas, Dona Arminda procura um serviço prático de lavanderia; assim, pode dedicar mais tempo brincando com seus netinhos e assistindo seu seriado favorito no Netflix com Seu Jonas.

**Mário Fernandes** tem 40 anos é solteiro e médico de plantão, tem 3 filhos pequenos e não tem tempo de fazer todas as tarefas em casa. Ganha entre R$ 4.820 e R$ 8.147, tem um gasto mensal com compras em supermercados e roupas. Por sua falta de tempo ele precisa de ajuda com algumas tarefas, uma delas e nosso serviço de Lavanderia por Assinatura que busca, lava, passa e entrega suas roupas e de seus filhos em casa.

**Cintia Ramires** tem 26 anos e é solteira, trabalha como comissária de voo, mora em São Paulo, mas devido sua profissão vive viajando e muita das vezes não tem tempo de se dedicar com as tarefas de casa. Cintia necessita de praticidade e compromisso, já viaja toda semana a trabalho, como ela não tem uma rotina definida, precisa de uma lavanderia a sua disposição com facilidade de acesso.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`|PARA ... `MOTIVO/VALOR`                   |
|--------------------|-----------------------------------|------------------------------------------|
|Joana Angélica      | Agendar o serviço via WebApp, pagando com cartão de crédito. | Para não precisar se ausentar da reunião. |
|Dona Arminda        | Contratar o serviço via WhatsApp, interagindo com um atendente real, se necessário. | Para dedicar seu tempo a tarefas mais divertidas. |
|Funcionário do SAC  | Acessar um Dashboard intuitivo com pesquisa de clientes e histórico de cada operação. | Para oferecer com agilidade o melhor serviço para nossos clientes. |
|Mário Fernandes| Contatar serviço via rede social, se necessário por ligação. | Para não se ausentar dos seus serviços. |
|Gerente |Acessar um Dashboard que possua um módulo financeiro e um módulo de estoque.  |Garantir uma melhor gestão para proporcionar um melhor serviço com um menor custo. |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
