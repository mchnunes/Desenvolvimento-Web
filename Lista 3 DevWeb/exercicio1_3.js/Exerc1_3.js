var artista1 = {
    nomeArtistaBanda: "Maroon 5",
    anoLançamentoPrimeiroCd: 1995,
    generoMusical: "Popindia, Pop/Rock",
    topMusicas: [
        musica1 = "Payphone",
        musica2 = "Animals",
        musica3 = "Moves Like Jagger",
        musica4 = "Girls Like You",
        musica5 = "Sugar"
    ],
    informacoesArtista: [
        {
            nomeCompleto: "Adam Levine",
            pais: "Los Angeles, Califórnia, EUA",
            idade: "44 anos"
        }
    ]
}
var artista1 = {
    nomeArtistaBanda: "50Cent",
    anoLançamentoPrimeiroCd: 1999,
    generoMusical: "Hip-Hop/rap",
    topMusicas: [
        musica1 = "In da Club",
        musica2 = "Many Men",
        musica3 = "Candy Shop",
        musica4 = "21 Questions",
        musica5 = "P.I.M.P."
    ],
    informacoesArtista: [
        {
            nomeCompleto: "Curtis James Jackson III",
            pais: "South Jamaica, Nova Iorque, Nova York, EUA",
            idade: "47 anos"
        }
    ]
}
var artista1 = {
    nomeArtistaBanda: "Eminem",
    anoLançamentoPrimeiroCd: 1996,
    generoMusical: "Hip hop, Gangsta rap,",
    topMusicas: [
        musica1 = "Not Afraid",
        musica2 = "Superman",
        musica3 = "Slim Shady",
        musica4 = "Mockinbird",
        musica5 = "Till I Collapse"
    ],
    informacoesArtista: [
        {
            nomeCompleto: "Marshall Bruce Mathers III",
            pais: "Setor Joseph, Missouri, EUA",
            idade: "50 anos"
        }
    ]
}
var database =[];
database.push(artista1)
database.push(artista2)
database.push(artista3)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)