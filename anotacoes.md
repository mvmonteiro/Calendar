  - Refatoração do código
    - o código é funcional mas passa diversas props -> paga em desempenho
      - chega uma hora que o código fica muito confuso
    - devemos aplicar o Recoil na refatoração
      - npm i recoil
      - assim o app pode crescer sem problemas
      - Resolve o problema de GERÊNCIAMENTO DE ESTADOS!
      - para o arquivo ter acesso ao recoil, este deve ser englobado pelo recoilRoot -> assim os estados podem ser migrados
    - arquivo atom.ts
      - no react os estados são compostos por vários atomos -> cada pedaço do estado é um atomo
      - cada atom deve ter uma key unica
      - dentro do padrão dele colocamos algum evento... no caso colocamos os eventos do calendario que eram padroes
      - as alterações que fizemos a partir desse átomo faz com que não precisamos mais ficar passando o evento como props
        - agora que é um átomo o recoil entrega a lista quando for necessária
        - o próprio recoil tem por de baixo dos panos uma renderização nova sempre que aqueles valores forem atualizados (igual useState)
        - Assim o recoil viabiliza a manutenção do Prop drilling!

  - Refatoração formulário
    - criamos o arquivo de ids que itera de 1 em 1
    - agora o formulário adiciona o id
    - precisamos definir o estado: pegar a lista de eventos, adicionar o novo evento e renderizar a página novamente -> utilizando RECOIL

  - Deletando eventos
    - utilizamos o useRecoilSetState com a lista padrão dos eventos
    - atualizamos ela a partir do onClick do usuário -> filtramos a lista somente com os ids diferentes daquele evento

  - Update do evento
  
  - ALTA COESAO
    - os componentes e classes tem responsabilidades bem definidas -> geralmente cada componente tem sua própria funcionalidade
    - como fizemos os hooks na mão por exemplo, podemos ver a otimização dos componentes
      - eles não veem mais a biblioteca do recoil descaradamente, ela está definida por de baixo dos panos quando usamos o hook
    - encapsulamento das bibliotecas -> fácil manipulação -> caso queira trocar o recoil por outro, é bem mais simples
      - não precisamos entrar em todos os arquivos trocando a biblioteca