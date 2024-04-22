
# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="08-Plano de Testes de Software.md"> Plano de Testes de Software</a>

<div align="justify">
  
Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

</div>

| CT a serem avaliados: |
| :---	|
| CT-001:Registro de usuário |
| CT-002:Login de Usuário	|
| CT-003:Registro de nova Checklist  |
| CT-004:Edição de checklist |
| CT-005:Deletar checklist   |
| CT-006:Adição de uma tarefa   |

| **Caso de Teste**| **CT-001: Registro de usuário** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Logar no sistema.<br> 2.Navegar até a página de registro.<br> 3.Preencher os campos.<br> 4.Cadastrar usuário.<br> |
| Resultado esperado |Um novo usuário será cadastrado ao sistema|
| Avaliação | O sistema validou as informações e cadastrou no sistema. |
| Evidência | ![Imagem do WhatsApp de 2024-04-21 à(s) 20 12 40_e69eea10](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/f846b521-bdb3-4b49-af2f-2153a8d10feb)  |

| **Caso de Teste** | **CT-002: Login de Usuário** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Logar no sistema.<br> 2.Navegar até a página de login.<br> 3.Preencher os campos.<br> 4.Clicar no botão de logar.<br> |
| Resultado esperado | Um novo usuário será logado ao sistema |
| Avaliação | O sistema validou as informações e logou no sistema. |
| Evidência | ![Imagem do WhatsApp de 2024-04-21 à(s) 20 13 01_cf0fe858](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/498abf88-3f67-4bd8-b152-6b3bc1303cc4) |

| **Caso de Teste**| **CT-003: Registro de nova Checklist** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Logar no sistema.<br> 2.Navegar até a página de Menu de checklist.<br> 3.Clicar no botão "+" no canto da tela.<br> 4.Adicionar o nome da checklist.<br> 5.Clicar para salvar a checklist.<br> 6.Confirmar a checklist no menu. |
| Resultado esperado | A checklist irá aparecer no menu para poder ser editada ou aceessada. | 
| Avaliação | O sistema validou a informação e inseriu na tela. |
| Evidência | ![Imagem do WhatsApp de 2024-04-21 à(s) 20 13 25_52d10fed](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/a45efba9-9ffe-48e0-aba9-bf7b6a7566c2) |

| **Caso de Teste** | **CT-004: Edição de checklist** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Acessar a página de Menu de checklist.<br> 2.Clicar em editar na checklist desejada.<br> 3.Escolher um nome diferente do existente.<br> 4.Confirmar o nome. |
| Resultado esperado | A checklist estará com o novo nome no Menu. |
| Avaliação | O sistema irá atualizar o nome da checklist |
| Evidência | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/9ef5a611-ae93-4249-a5de-a38a29761f3f) |

| **Caso de Teste** | **CT-005: Deletar checklist** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Acessar a página de Menu de checklist.<br> 2.Clicar em editar na checklist desejada.<br> 3.Clicar em excluir.<br> |
| Resultado esperado |A checklist seerá removida no Menu. |
| Avaliação | O sistema irá deletar a checklist |
| Evidência | ![Imagem do WhatsApp de 2024-04-21 à(s) 20 22 26_f1da05de](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/0622d069-5a4e-47b7-95d4-470b1cec5eaa) |

| **Caso de Teste**| **CT-006: Adição de uma tarefa** |
| :--- | :---: |
| Procedimentos (passo à passo) | 1.Acessar a página de Menu de checklist.<br> 2.Clicar em na checklist desejada.<br> 3.Clicar no botão "+" no canto da tela.<br> 4.Adicionar o nome da tarefa.</br> 5.Confirmar o nome. |
| Resultado esperado |A tarefa será exibida na página de checklist.|
| Avaliação | O sistema irá armazeenar e exibir as tarefas na checklist |
| Evidência | ![Imagem do WhatsApp de 2024-04-21 à(s) 20 21 02_0c4d3a8d](https://github.com/ICEI-PUC-Minas-PMV-ADS/magic-list/assets/85804740/08009a7b-67e8-46a4-9b6d-ed8a2edd49cf) |

