# Especificações do Projeto

## Personas

**Joana Angélica** tem 33 anos, é gerente de marketing, solteira e trabalha para uma multinacional com sede em Cingapura. Devido ao fuso horário com 11 horas de diferença, a jornada de trabalho de Joana é bem diferenciada, não restando tempo livre quando as lavanderias estão abertas. Joana procura por um serviço que possa facilitar o acesso a um serviço de lavanderia, restando mais tempo para dedicar a seus hobbies.

**Pedro Silva** tem 29 anos, é Desenvolvedor de Projetos e trabalha em uma empresa multinacional. Ele viaja muito para treinar sua equipe de Desenvolvedores. É casado, tem 3 filhos. Quando retorna de viagem, que dura cerca de 3 dias, acaba deixando a tarefa das roupas para sua esposa. Porém, como sua esposa também trabalha fora, não consegue ter tempo para administrar sua lavanderia. Após fazerem os cálculos juntos, perceberam que a melhor opção seria fazer uma assinatura mensal com uma lavanderia de roupas. Isso pouca tempo para ele e para sua família, sempre recebendo as roupas limpas e passadas.

**Lucas Moreno** tem 44 anos, é representante comercial de uma multinacional e solteiro.
Lucas viaja muito a trabalho e isso dificulta muito a conciliação do seu tempo para afazeres domésticos. Lucas busca o serviço de lavagem por assinatura pelo fato de poder agendar a lavagem a qualquer momento quando o mesmo estiver em viagem. Lucas vê como vantagem, a liberdade que a assinatura de lavagem de roupas pode proporcionar trazendo um custo/benefício muito considerável. Lucas poderá solicitar a busca das suas roupas sujas em seu prédio, onde as roupas dele serão lavadas e entregues à portaria do seu prédio devidamente limpas.

**Dona Arminda** tem 82 anos, casada há 50 anos com Seu Jonas. Aposentada, ajuda seus três filhos a cuidar dos 5 netinhos, que se revezam em sua casa. Sempre muito atribulada com as visitas, Dona Arminda procura um serviço prático de lavanderia; assim, pode dedicar mais tempo brincando com seus netinhos e assistindo seu seriado favorito no Netflix com Seu Jonas.

**Mário Fernandes** tem 40 anos é solteiro e médico de plantão, tem 3 filhos pequenos e não tem tempo de fazer todas as tarefas em casa. Ganha entre R$ 4.820 e R$ 8.147, tem um gasto mensal com compras em supermercados e roupas. Por sua falta de tempo ele precisa de ajuda com algumas tarefas, uma delas e nosso serviço de Lavanderia por Assinatura que busca, lava, passa e entrega suas roupas e de seus filhos em casa.

**Cintia Ramires** tem 26 anos e é solteira, trabalha como comissária de voo, mora em São Paulo, mas devido sua profissão vive viajando e muita das vezes não tem tempo de se dedicar com as tarefas de casa. Cintia necessita de praticidade e compromisso, já viaja toda semana a trabalho, como ela não tem uma rotina definida, precisa de uma lavanderia a sua disposição com facilidade de acesso.

**Karine Albuquerque** tem 33 anos, é solteira e é gerente regional de um grande banco. Trabalha o dia todo, e a noite faz uma segunda graduação que é exigida pelo banco em que trabalha. Como Karine participa de várias apresentações, reuniões e visitas a clientes, ela precisa estar sempre bem vestida e, com a correria do dia a dia, busca um serviço de lavanderia que retire em sua casa, periodicamente, suas roupas usadas e sujas e as traga, já lavadas e passadas, para a portaria do seu condomínio.

**Pousada Vila Bella** é uma pousada sediada em Belo Horizonte na região hospitalar, a Pousada Vila Bela recebe muitas pessoas que viajam de outras cidades para consultar em Belo Horizonte e devido a sua proximidade com os hospitais as pessoas se hospedam muito nela. Com a lavagem por assinatura, o administrador da pousada teve a agilidade em planejar dias da semana onde as peças de roupas de cama e outros da pousada eram recolhidas para lavagem, com o tempo o administrador da pousada percebeu que também poderia cobrar uma taxa de lavagem das roupas dos hóspedes onde o mesmo repassava para ser recolhidas junto com os materias da pousada. A lavagem de roupas por assinatura proporcionou que uma pousada tivesse todos os seus materiais internos limpos em prazos menores e também que os hóspedes poderia lavar suas roupas por meio da assinatura da pousada.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`|PARA ... `MOTIVO/VALOR`                   |
|--------------------|-----------------------------------|------------------------------------------|
|Interessado nos serviços      | Buscar informações sobre os planos de assinatura disponíveis e serviços oferecidos | Para contratar um plano e entrar em contato, caso necessário |
|Assinante        | Ter acesso às suas informações de assinatura e serviços contratados | Para alterar o plano contratado, forma de pagamento, adicionar ou remover serviços extras e abrir chamado para algum problema com os serviços |
|Funcionário da Lavanderia|Acessar os dados das assinaturas dos clientes|Para confirmar recebimento das peças, verificar o plano contratado, realizar cobrança avulsa de serviços não inclusos e despachar as peças de volta à casa do cliente.
|Funcionário do SAC  | Acessar um Dashboard intuitivo com pesquisa de clientes e histórico de cada operação. | Para oferecer com agilidade o melhor serviço para nossos clientes. 
|Gerente |Acessar um Dashboard que possua um módulo financeiro e um módulo de estoque.  |Garantir uma melhor gestão para proporcionar um melhor serviço com um menor custo. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça um cadastro, inserindo suas informações de contato. | ALTA | 
|RF-002| Permitir que o usuário contrate o serviço através da Central de Marcação. | ALTA |
|RF-003| Módulo Central de Marcação, centralizando informações de pedidos feitos pelo site, WhatsApp e Ligação. | ALTA |
|RF-004| Permitir que o gerente acesse um Dashboard com informações dos clientes e histórico de operações. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA | 
|RNF-003| O sistema deve oferecer disponibilidade de 98.9% do tempo em dias de semana entre 08:00 e 20:00 e pelo menos 99.9% entre 10:00 e 13:00. | MÉDIA |
|RNF-004| A fonte utilizada deve estar em um tamanho adequado, permitindo uma boa leitura em telas pequenas. | BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto não deve extrapolar o orçamento definido    |
