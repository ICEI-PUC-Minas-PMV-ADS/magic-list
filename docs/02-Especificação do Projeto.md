# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/ecad5c81-a616-490e-b357-98d7007bf56f)
</br></br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/3f7cebfc-9ca0-4ed9-b647-07e4cd4dc922) 
</br></br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/78493be5-aa8b-4477-bfe1-23487f7bd7c7) </br>


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários: </br>

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Eduardo Lima  | Quero um aplicativo para organizar minhas tarefas diárias.           | Estou constantemente esquecendo compromissos e prazos importantes, o que está afetando minha produtividade e causando estresse.               |
|Mariana Sousa       | Quero um aplicativo para criar listas de compras.                | Eu sempre esqueço de comprar itens essenciais quando vou ao mercado, e isso acaba resultando em várias idas extras e desperdício de tempo e dinheiro |
|Pedro Almeida       | Quero um aplicativo para planejar minha rotina de estudos.                | Estou me preparando para um concurso importante e preciso de uma maneira eficiente de organizar meu tempo e acompanhar meu progresso nas matérias. |
|Gabriela Santos       |Quero um aplicativo para organizar meu casamento.                |Com tantos detalhes para cuidar, desde a lista de convidados até a escolha do bolo, estou me sentindo sobrecarregada e preciso de uma ferramenta que me ajude a manter tudo sob controle. |
|Lucas Oliveira       |Quero um aplicativo para acompanhar minhas metas de condicionamento físico.                | Tenho dificuldade em manter uma rotina regular de exercícios e acredito que um aplicativo de acompanhamento me motivaria a alcançar meus objetivos de forma mais consistente. |
|Amanda Ferreira       |Quero um aplicativo para organizar minhas finanças pessoais.              | Estou tendo dificuldades em controlar meus gastos e manter um orçamento mensal, o que está impactando minha capacidade de economizar e planejar meu futuro financeiro. |
|Rafael Silva       | Quero um aplicativo para gerenciar meu projeto de construção civil.                | Estou liderando uma equipe de construção e preciso de uma ferramenta que me ajude a coordenar as diferentes etapas do projeto, desde o planejamento até a execução.|
|Fernanda Costa       |Quero um aplicativo para organizar minhas viagens.                | Estou sempre esquecendo detalhes importantes, como reservas de hotel e horários de voo, e gostaria de uma maneira mais eficiente de planejar e acompanhar minhas viagens. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

| **Indicador** | **Descrição** | **Métrica** | **Objetivo** |
|---------------|---------------|-------------|--------------|
| Tempo Médio de Sessão | Duração média das sessões de usuários na aplicação. | Tempo total em sessão / Número de sessões | Manter acima de 5 minutos |
| Tempo de Carregamento da Aplicação | Tempo que a aplicação leva para se tornar utilizável após o usuário iniciar. | Tempo médio em segundos | Manter abaixo de 3 segundos |
| Taxa de Crescimento de Recursos | Velocidade na qual novos recursos são adicionados à aplicação. | Novos recursos por mês | Lançar 2 novos recursos por mês |
| Satisfação e Engajamento da Equipe | Mede o nível de satisfação e engajamento da equipe com o projeto. | Pesquisas de engajamento e satisfação | Manter ou melhorar a pontuação de satisfação em 5% ao ano |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| Na tela deverão aparecer todas as tarefas que o usuário adicionou | Alta | 
|RF-02| Na tela deverá conter checkbox para o usuário assinalar o que fez durante o dia.   | Alta |
|RF-03| Na tela deverá ter um botão de apagar as tarefas.   | Média |
|RF-04| Na tela deverá ter um botão de resetar as tarefas que estão marcadas.   | Média |
|RF-05| Na tela deverá aparecer uma mensagem de parabéns após finalizar todas as tarefas.   | Baixa |
|RF-06| O sistema deverá verificar se existe usuário.   | Alta |
|RF-07| Na tela de login deverá conter o “esqueci minha senha” no qual redirecionará para uma nova página.   | Média |
|RF-08| A tela de “recuperar senha” deverá conter dois campos de usuário e e-mail.   | Média |
|RF-09| O sistema deverá permitir ao usuário criar quantas checklist o usuário desejar.   | Alta |
|RF-10| O sistema deverá deixar o usuário ter total controle sobre a parte de gerenciamento das checklist.   | Alta |
|RF-11| O sistema deve possibilitar abrir, editar nome e excluir um checklist desejável.   | Alta |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | Alta | 
|RNF-002| Sistema possui toda segurança, impossibilitando acessos restritos de hackers. |  Média | 
|RNF-003| Sistema com toda escalabilidade sendo capaz de aumentar ou diminuir. |  Média | 
|RNF-004| Sistema contém modificações das informações diariamente. |  Alta | 
|RNF-005| Sistema possui disponibilidade 24 horas. | Baixa  | 
|RNF-006| Sistema não deverá apresentar nenhuma lentidão independente do número ou tamanho de checklists. |  Alta | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação tem como prazo para a finalização do desenvolvimento até 23/06/2024. |
|02| O projeto deve se restringir as tecnologias básicas de uma aplicação móvel.        |
|03| A equipe não poderá subcontratar o desenvolvimento do projeto.        |
|04| Para realização do projeto a equipe deve definir e seguir em conjunto padrões de projeto.        |



## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Usando esse diagrama conseguimos analisar e visualizar da melhor forma um fluxo de nossas atividades, com dias que cada atividade deve durar,e a numeração das atividades listadas

![Imagem do WhatsApp de 2024-03-08 à(s) 20 54 45_0310a74b](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/54bb7d8b-0b1d-4606-8d57-9aba6d270b71)

Assim como o fluxograma acima, foi projetado pelo grupo uma tabela em que mostramos as tarefas listadas acima, contendo dias de duração data de inicio e término de cada atividade. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/26762236-f441-445b-8f7e-c9fcac8d7f31)


## Gerenciamento de Equipe

O gerenciamento de equipes foi montado e projetado com base nas datas de entrega da faculdade disponíveis até o momento. Nessa planilha podemos ver os períodos de cada atividade mostrando um periodo do tempo entre uma semana entre cada espaço. Também é de fácil visualização a tarefa que cada time deve exercer e o período de cada atividade proposta.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/b0bca994-300d-4d59-bd1e-8d298624f8de)

## Gestão de Orçamento

Com base em vários estudos realizados fizemos a nossa projeção de valores com base nesse projeto, levando em base que cada pessoa se dedique 2 horas por dia, de segunda a festa. Levando em base que são quatro pessoas no grupo e todas exerceram papel de QA tester mobile, desenvolvedor mobile e UX mobile, sendo essas funções todas como júnior, o resultado da projeção ficará dessa forma:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t8-ads-2024-1-e3-proj-magiclist/assets/85804740/64313078-59ec-453a-a203-97cb6beea951)

Valores baseados nos seguintes links: 
- https://fwctecnologia.com/blog/post/quanto-custa-criar-aplicativo-2023
- https://br.jooble.org/salary/qa-junior#:~:text=Quanto%20dinheiro%20posso%20ganhar%20como%20Qa%20junior%20por%20hora%20em,%24%207%2C84%20por%20hora.
- https://www.glassdoor.com.br/Salários/ux-designer-junior-salário-SRCH_KO0,18.htm
- https://www.portalinsights.com.br/perguntas-frequentes/quanto-ganha-um-dev-junior-android#:~:text=O%20salário%20médio%20de%20desenvolvedor,R%2418%2C46%20por%20hora.

