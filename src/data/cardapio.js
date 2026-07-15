const cardapioMock = [
    //Itens do cardápio com nome, preco, categoria (prato ou bebida), selecao (ex: "Brasil", "Alemanha") e um array de tags de restrição alimentar (como "vegano", "sem_gluten", etc.) para usarmos no filtro mais tarde.
    {
        id: 1,
        nome: "Coxinha de Frango",  
        descricao: "Coxinha de frango com recheio de catupiry",
        preco: 5.90,
        categoria: "prato",
        selecao: "Brasil",
        tags: ["contém_gluten"]
    },
    {
        id: 2,
        nome: "Chopp Heineken",
        descricao: "Chopp Heineken com 500ml",
        preco: 12.90,
        categoria: "bebida",
        selecao: "Brasil",
        tags: ["contém_gluten"]
    }, 
    {
        id: 3,
        nome: "Bratwurst",
        descricao: "Salsicha alemã com pão e mostarda",
        preco: 15.90,
        categoria: "prato",
        selecao: "Alemanha",
        tags: ["contém_gluten"]
    },
    {
        id: 4,
        nome: "Pizza Margherita",
        descricao: "Pizza tradicional italiana com molho de tomate, mussarela e manjericão",
        preco: 25.90,   
        categoria: "prato",
        selecao: "Itália",
        tags: ["vegetariano"]
    },
    {
        id: 5,
        nome: "Sushi de Salmão",
        descricao: "Sushi de salmão fresco com arroz e alga",
        preco: 30.90,
        categoria: "prato",
        selecao: "Japão",
        tags: ["sem_gluten"]
    },
    {
        id: 6,
        nome: "Cerveja Corona", 
        descricao: "Cerveja mexicana com 355ml",
        preco: 10.90,
        categoria: "bebida",
        selecao: "México",
        tags: ["contém_gluten"]
    },
    {
        id: 7,
        nome: "Caipirinha",
        descricao: "Bebida típica brasileira feita com cachaça, limão e açúcar",   
        preco: 15.90,
        categoria: "bebida",
        selecao: "Brasil",
        tags: ["sem_gluten"]
    }
];