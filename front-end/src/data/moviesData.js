const TMDB = 'https://image.tmdb.org/t/p/w500'
const BACKDROP = 'https://image.tmdb.org/t/p/original'

const BACKDROPS = {
  1: `${BACKDROP}/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg`,
  5: `${BACKDROP}/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg`,
  101: `${BACKDROP}/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg`,
  102: `${BACKDROP}/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`,
  106: `${BACKDROP}/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg`,
  107: `${BACKDROP}/suopoADq0k8YZr4dQXcU6pToj6s.jpg`,
  108: `${BACKDROP}/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg`,
  109: `${BACKDROP}/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg`,
  110: `${BACKDROP}/56v2KjBlU4XaOv9rVYEQypROD7P.jpg`,
  116: `${BACKDROP}/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg`,
}

export const moviesData = [
  item(1, 'Mad Max Estrada da Furia', 'Mad Max: Fury Road', 'FILME', 'Acao', 2015, `${TMDB}/hA2ple9q4qnwxp3hKVNhroipsir.jpg`, 'Em um mundo pos-apocaliptico, Max se junta a Furiosa em uma fuga explosiva contra um tirano.', 'Rotten Tomatoes: 97%', 'IMDb: 8.1/10', true),
  item(2, 'John Wick', 'John Wick', 'FILME', 'Acao', 2014, `${TMDB}/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg`, 'Um ex-assassino lendario retorna ao submundo apos perder tudo que amava.', 'Rotten Tomatoes: 86%', 'IMDb: 7.4/10'),
  item(3, 'The Boys', 'The Boys', 'SERIE', 'Acao', 2019, `${TMDB}/stTEycfG9928HYGEISBFaG1ngjM.jpg`, 'Um grupo tenta expor super-herois corruptos controlados por uma poderosa corporacao.', 'Rotten Tomatoes: 93%', 'IMDb: 8.7/10'),
  item(4, 'Reacher', 'Reacher', 'SERIE', 'Acao', 2022, `${TMDB}/31GlRQMiDunO8cl3NxTz34U64rf.jpg`, 'Jack Reacher investiga conspiracoes perigosas usando forca, inteligencia e instinto militar.', 'Rotten Tomatoes: 92%', 'IMDb: 8.0/10'),

  item(5, 'Interestelar', 'Interstellar', 'FILME', 'Ficcao Cientifica', 2014, `${TMDB}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`, 'Astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade.', 'Metascore: 74/100', 'IMDb: 8.7/10', true),
  item(6, 'Duna', 'Dune', 'FILME', 'Ficcao Cientifica', 2021, `${TMDB}/d5NXSklXo0qyIYkgV94XAgMIckC.jpg`, 'Paul Atreides enfrenta disputas politicas e espirituais no planeta desertico Arrakis.', 'Rotten Tomatoes: 83%', 'IMDb: 8.0/10'),
  item(7, 'Stranger Things', 'Stranger Things', 'SERIE', 'Ficcao Cientifica', 2016, `${TMDB}/49WJfeN0moxb9IPfGn8AIqMGskD.jpg`, 'Criancas enfrentam forcas sobrenaturais e segredos governamentais em uma pequena cidade.', 'Rotten Tomatoes: 92%', 'IMDb: 8.7/10'),
  item(8, 'Black Mirror', 'Black Mirror', 'SERIE', 'Ficcao Cientifica', 2011, `${TMDB}/7PRddO7z7mcPi21nZTCMGShAyy1.jpg`, 'Historias independentes exploram os impactos sombrios da tecnologia na sociedade.', 'Rotten Tomatoes: 83%', 'IMDb: 8.7/10'),

  item(9, 'Corra', 'Get Out', 'FILME', 'Terror', 2017, `${TMDB}/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg`, 'Um jovem visita a familia da namorada e descobre uma realidade perturbadora.', 'Rotten Tomatoes: 98%', 'IMDb: 7.8/10'),
  item(10, 'Hereditario', 'Hereditary', 'FILME', 'Terror', 2018, `${TMDB}/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg`, 'Apos uma tragedia familiar, segredos sombrios transformam o luto em horror.', 'Rotten Tomatoes: 90%', 'IMDb: 7.3/10'),
  item(11, 'A Maldicao da Residencia Hill', 'The Haunting of Hill House', 'SERIE', 'Terror', 2018, `${TMDB}/38PkhBGRQtmVx2drvPik3F42qHO.jpg`, 'Uma familia confronta memorias traumaticas ligadas a uma mansao assombrada.', 'Rotten Tomatoes: 93%', 'IMDb: 8.5/10'),
  item(12, 'The Last of Us', 'The Last of Us', 'SERIE', 'Terror', 2023, `${TMDB}/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg`, 'Em um mundo devastado por uma infeccao, Joel protege Ellie em uma jornada perigosa.', 'Rotten Tomatoes: 96%', 'IMDb: 8.7/10', true),

  item(13, 'Parasita', 'Parasite', 'FILME', 'Drama', 2019, `${TMDB}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`, 'Uma familia pobre se infiltra na rotina de uma familia rica, gerando tensao e tragedia.', 'Rotten Tomatoes: 99%', 'IMDb: 8.5/10', true),
  item(14, 'O Poderoso Chefao', 'The Godfather', 'FILME', 'Drama', 1972, `${TMDB}/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`, 'A familia Corleone enfrenta disputas de poder no submundo da mafia americana.', 'Metascore: 100/100', 'IMDb: 9.2/10'),
  item(15, 'Breaking Bad', 'Breaking Bad', 'SERIE', 'Drama', 2008, `${TMDB}/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg`, 'Um professor de quimica passa a produzir metanfetamina apos descobrir um cancer.', 'Metascore: 87/100', 'IMDb: 9.5/10', true),
  item(16, 'The Crown', 'The Crown', 'SERIE', 'Drama', 2016, `${TMDB}/1M876KPjulVwppEpldhdc8V4o68.jpg`, 'A trajetoria da Rainha Elizabeth II e retratada entre crises politicas e dramas pessoais.', 'Rotten Tomatoes: 81%', 'IMDb: 8.6/10'),

  item(17, 'Superbad', 'Superbad', 'FILME', 'Comedia', 2007, `${TMDB}/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg`, 'Dois amigos tentam aproveitar uma ultima festa antes da faculdade.', 'Rotten Tomatoes: 88%', 'IMDb: 7.6/10'),
  item(18, 'As Branquelas', 'White Chicks', 'FILME', 'Comedia', 2004, `${TMDB}/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg`, 'Dois agentes do FBI se disfarcam para proteger herdeiras envolvidas em uma investigacao.', 'Rotten Tomatoes: 15%', 'IMDb: 5.8/10'),
  item(19, 'Brooklyn Nine-Nine', 'Brooklyn Nine-Nine', 'SERIE', 'Comedia', 2013, `${TMDB}/hgRMSOt7a1b8qyQR68vUixJPang.jpg`, 'Detetives de uma delegacia do Brooklyn vivem casos policiais e situacoes absurdas.', 'Rotten Tomatoes: 95%', 'IMDb: 8.4/10'),
  item(20, 'The Office', 'The Office', 'SERIE', 'Comedia', 2005, `${TMDB}/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg`, 'Funcionarios de uma empresa de papel lidam com o cotidiano caotico do escritorio.', 'Rotten Tomatoes: 81%', 'IMDb: 9.0/10'),

  item(101, 'Oppenheimer', 'Oppenheimer', 'FILME', 'Drama, Biografia, Historia', 2023, `${TMDB}/ptpr0kGAckfQkJeJIt8st5dglvd.jpg`, 'A trajetoria de J. Robert Oppenheimer, o fisico responsavel por liderar o projeto que criou a bomba atomica.', 'Rotten Tomatoes: 93%', 'IMDb: 8.3/10', true, true),
  item(102, 'Duna Parte Dois', 'Dune: Part Two', 'FILME', 'Ficcao Cientifica, Aventura', 2024, `${TMDB}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`, 'Paul Atreides se une aos Fremen em sua jornada de vinganca e ascensao no planeta Arrakis.', 'Rotten Tomatoes: 92%', 'IMDb: 8.5/10', true, true),
  item(103, 'Top Gun Maverick', 'Top Gun: Maverick', 'FILME', 'Acao, Drama', 2022, `${TMDB}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`, 'Maverick retorna para treinar uma nova geracao de pilotos em uma missao quase impossivel.', 'Rotten Tomatoes: 96%', 'IMDb: 8.2/10', false, true),
  item(104, 'Gladiador', 'Gladiator', 'FILME', 'Acao, Drama, Historia', 2000, `${TMDB}/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg`, 'Um general romano traido busca vinganca enquanto se torna simbolo de resistencia nas arenas.', 'Rotten Tomatoes: 80%', 'IMDb: 8.5/10', false, true),
  item(105, 'Clube da Luta', 'Fight Club', 'FILME', 'Drama, Suspense', 1999, `${TMDB}/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`, 'Um homem insatisfeito com sua vida cria um clube secreto que se transforma em algo maior e perigoso.', 'Rotten Tomatoes: 80%', 'IMDb: 8.8/10', false, true),
  item(106, 'Matrix', 'The Matrix', 'FILME', 'Ficcao Cientifica, Acao', 1999, `${TMDB}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`, 'Um hacker descobre que a realidade em que vive e uma simulacao controlada por maquinas.', 'Rotten Tomatoes: 83%', 'IMDb: 8.7/10', false, true),
  item(107, 'Game of Thrones', 'Game of Thrones', 'SERIE', 'Fantasia, Drama, Aventura', 2011, `${TMDB}/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg`, 'Familias poderosas disputam o Trono de Ferro em um mundo marcado por guerras e traicoes.', 'Rotten Tomatoes: 89%', 'IMDb: 9.2/10', true, true),
  item(108, 'The Last of Us', 'The Last of Us', 'SERIE', 'Drama, Terror, Pos-apocaliptico', 2023, `${TMDB}/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg`, 'Joel e Ellie atravessam os Estados Unidos apos uma pandemia devastadora mudar o mundo.', 'Rotten Tomatoes: 96%', 'IMDb: 8.7/10', true, true),
  item(109, 'Breaking Bad', 'Breaking Bad', 'SERIE', 'Drama, Crime', 2008, `${TMDB}/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg`, 'Um professor de quimica comeca a produzir metanfetamina apos ser diagnosticado com cancer.', 'Metascore: 87/100', 'IMDb: 9.5/10', true, true),
  item(110, 'Stranger Things', 'Stranger Things', 'SERIE', 'Ficcao Cientifica, Terror', 2016, `${TMDB}/49WJfeN0moxb9IPfGn8AIqMGskD.jpg`, 'Criancas enfrentam fenomenos sobrenaturais e experiencias secretas em uma pequena cidade.', 'Rotten Tomatoes: 92%', 'IMDb: 8.7/10', false, true),
  item(111, 'Avatar', 'Avatar', 'FILME', 'Ficcao Cientifica, Aventura', 2009, `${TMDB}/kyeqWdyUXW608qlYkRqosgbbJyK.jpg`, 'Um ex-fuzileiro participa de uma missao em Pandora e se conecta ao povo Navi.', 'Rotten Tomatoes: 81%', 'IMDb: 7.9/10'),
  item(112, 'Avatar O Caminho da Agua', 'Avatar: The Way of Water', 'FILME', 'Ficcao Cientifica, Aventura', 2022, `${TMDB}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`, 'Jake Sully e sua familia buscam refugio entre os povos dos oceanos de Pandora.', 'Rotten Tomatoes: 76%', 'IMDb: 7.5/10'),
  item(113, 'Vingadores Ultimato', 'Avengers: Endgame', 'FILME', 'Acao, Super-heroi, Aventura', 2019, `${TMDB}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`, 'Os Vingadores restantes tentam reverter os efeitos devastadores causados por Thanos.', 'Rotten Tomatoes: 94%', 'IMDb: 8.4/10'),
  item(114, 'Homem-Aranha Sem Volta Para Casa', 'Spider-Man: No Way Home', 'FILME', 'Acao, Aventura, Fantasia', 2021, `${TMDB}/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg`, 'Peter Parker enfrenta consequencias multiversais apos tentar apagar sua identidade.', 'Rotten Tomatoes: 93%', 'IMDb: 8.2/10'),
  item(115, 'Coringa', 'Joker', 'FILME', 'Drama, Crime', 2019, `${TMDB}/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg`, 'Arthur Fleck, um homem marginalizado, mergulha em uma jornada psicologica sombria.', 'Rotten Tomatoes: 69%', 'IMDb: 8.4/10'),
  item(116, 'Batman O Cavaleiro das Trevas', 'The Dark Knight', 'FILME', 'Acao, Crime, Drama', 2008, `${TMDB}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`, 'Batman enfrenta o Coringa, um criminoso imprevisivel que ameaca Gotham.', 'Metascore: 84/100', 'IMDb: 9.0/10', false, true),
  item(117, 'O Lobo de Wall Street', 'The Wolf of Wall Street', 'FILME', 'Biografia, Comedia, Crime', 2013, `${TMDB}/pWHf4khOloNVfCxscsXFj3jj6gP.jpg`, 'Jordan Belfort constroi um imperio financeiro marcado por excessos, fraudes e ambicao.', 'Rotten Tomatoes: 80%', 'IMDb: 8.2/10'),
  item(118, 'Whiplash', 'Whiplash', 'FILME', 'Drama, Musica', 2014, `${TMDB}/7fn624j5lj3xTme2SgiLCeuedmO.jpg`, 'Um jovem baterista enfrenta um professor abusivo em busca da perfeicao musical.', 'Rotten Tomatoes: 94%', 'IMDb: 8.5/10', false, true),
  item(119, 'La La Land', 'La La Land', 'FILME', 'Romance, Drama, Musical', 2016, `${TMDB}/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg`, 'Uma atriz e um musico se apaixonam enquanto tentam realizar seus sonhos em Los Angeles.', 'Rotten Tomatoes: 91%', 'IMDb: 8.0/10'),
  item(120, 'Blade Runner 2049', 'Blade Runner 2049', 'FILME', 'Ficcao Cientifica, Suspense', 2017, `${TMDB}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`, 'Um novo blade runner descobre um segredo capaz de alterar o futuro da humanidade.', 'Rotten Tomatoes: 88%', 'IMDb: 8.0/10'),
  item(121, 'House of the Dragon', 'House of the Dragon', 'SERIE', 'Fantasia, Drama', 2022, `${TMDB}/z2yahl2uefxDCl0nogcRBstwruJ.jpg`, 'A casa Targaryen enfrenta conflitos internos antes dos eventos de Game of Thrones.', 'Rotten Tomatoes: 86%', 'IMDb: 8.3/10', false, true),
  item(122, 'Peaky Blinders', 'Peaky Blinders', 'SERIE', 'Crime, Drama', 2013, `${TMDB}/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg`, 'A familia Shelby constroi um imperio criminoso na Inglaterra do pos-guerra.', 'Rotten Tomatoes: 93%', 'IMDb: 8.8/10', false, true),
  item(123, 'Dark', 'Dark', 'SERIE', 'Ficcao Cientifica, Misterio', 2017, `${TMDB}/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`, 'O desaparecimento de uma crianca revela segredos ligados a viagens no tempo.', 'Rotten Tomatoes: 95%', 'IMDb: 8.7/10', false, true),
  item(124, 'The Mandalorian', 'The Mandalorian', 'SERIE', 'Ficcao Cientifica, Aventura', 2019, `${TMDB}/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg`, 'Um cacador de recompensas atravessa a galaxia protegendo uma crianca misteriosa.', 'Rotten Tomatoes: 90%', 'IMDb: 8.6/10', false, true),
  item(125, 'The Witcher', 'The Witcher', 'SERIE', 'Fantasia, Acao', 2019, `${TMDB}/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg`, 'Geralt de Rivia cruza seu destino com uma princesa e uma feiticeira.', 'Rotten Tomatoes: 80%', 'IMDb: 8.0/10'),
  item(126, 'Loki', 'Loki', 'SERIE', 'Fantasia, Ficcao Cientifica', 2021, `${TMDB}/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg`, 'Loki e capturado por uma organizacao que monitora linhas do tempo alternativas.', 'Rotten Tomatoes: 87%', 'IMDb: 8.2/10'),
  item(127, 'Wandinha', 'Wednesday', 'SERIE', 'Misterio, Comedia, Fantasia', 2022, `${TMDB}/9PFonBhy4cQy7Jz20NpMygczOkv.jpg`, 'Wandinha Addams investiga assassinatos e segredos sobrenaturais em uma escola peculiar.', 'Rotten Tomatoes: 73%', 'IMDb: 8.1/10'),
  item(128, 'Round 6', 'Squid Game', 'SERIE', 'Drama, Suspense', 2021, `${TMDB}/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg`, 'Pessoas endividadas participam de jogos infantis mortais em busca de um premio milionario.', 'Rotten Tomatoes: 95%', 'IMDb: 8.0/10', false, true),
  item(129, 'Arcane', 'Arcane', 'SERIE', 'Animacao, Acao, Fantasia', 2021, `${TMDB}/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg`, 'Duas irmas sao separadas por conflitos politicos e sociais entre Piltover e Zaun.', 'Rotten Tomatoes: 100%', 'IMDb: 9.0/10', false, true),
  item(130, 'Narcos', 'Narcos', 'SERIE', 'Crime, Drama', 2015, `${TMDB}/rTmal9fDbwh5F0waol2hq35U4ah.jpg`, 'A ascensao dos carteis de drogas colombianos e retratada pela historia de Pablo Escobar.', 'Rotten Tomatoes: 89%', 'IMDb: 8.8/10', false, true),

  item(201, 'Divertida Mente 2', 'Inside Out 2', 'FILME', 'Animacao, Comedia, Familia', 2024, `${TMDB}/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg`, 'Riley entra na adolescencia e novas emocoes aparecem para transformar completamente sua mente.', 'Rotten Tomatoes: 91%', 'IMDb: 7.5/10', false, true, true),
  item(202, 'Deadpool & Wolverine', 'Deadpool & Wolverine', 'FILME', 'Acao, Comedia, Super-heroi', 2024, `${TMDB}/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`, 'Deadpool se une a Wolverine em uma missao caotica envolvendo multiverso, pancadaria e muito humor acido.', 'Rotten Tomatoes: 78%', 'IMDb: 7.5/10', false, true, true),
  item(203, 'Godzilla Minus One', 'Godzilla Minus One', 'FILME', 'Acao, Drama, Ficcao Cientifica', 2023, `${TMDB}/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg`, 'No Japao pos-guerra, a populacao precisa enfrentar uma nova ameaca devastadora: Godzilla.', 'Rotten Tomatoes: 98%', 'IMDb: 7.7/10', false, true, true),
  item(204, 'Furiosa: Uma Saga Mad Max', 'Furiosa: A Mad Max Saga', 'FILME', 'Acao, Aventura, Pos-apocaliptico', 2024, `${TMDB}/iADOJ8Zymht2JPMoy3R7xceZprc.jpg`, 'A origem de Furiosa e revelada em uma jornada brutal pelo deserto antes dos eventos de Estrada da Furia.', 'Rotten Tomatoes: 90%', 'IMDb: 7.5/10', false, true, true),
  item(205, 'Planeta dos Macacos: O Reinado', 'Kingdom of the Planet of the Apes', 'FILME', 'Ficcao Cientifica, Acao, Aventura', 2024, `${TMDB}/gKkl37BQuKTanygYQG1pyYgLVgf.jpg`, 'Muitos anos apos Cesar, novos clas de macacos disputam poder enquanto humanos tentam sobreviver.', 'Rotten Tomatoes: 80%', 'IMDb: 6.9/10', false, true, true),
  item(206, 'O Duble', 'The Fall Guy', 'FILME', 'Acao, Comedia, Romance', 2024, `${TMDB}/tSz1qsmSJon0rqjHBxXZmrotuse.jpg`, 'Um duble precisa encontrar um astro desaparecido enquanto tenta recuperar sua carreira e um antigo amor.', 'Rotten Tomatoes: 81%', 'IMDb: 6.9/10', false, false, true),
  item(207, 'Wonka', 'Wonka', 'FILME', 'Fantasia, Musical, Familia', 2023, `${TMDB}/qhb1qOilapbapxWQn9jtRCMwXJF.jpg`, 'Antes de se tornar dono da famosa fabrica de chocolate, Willy Wonka enfrenta desafios para realizar seu sonho.', 'Rotten Tomatoes: 82%', 'IMDb: 7.0/10', false, false, true),
  item(208, 'Assassinos da Lua das Flores', 'Killers of the Flower Moon', 'FILME', 'Crime, Drama, Historia', 2023, `${TMDB}/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg`, 'Uma serie de assassinatos contra membros da nacao Osage revela ganancia, racismo e corrupcao.', 'Rotten Tomatoes: 93%', 'IMDb: 7.6/10', false, true, true),
  item(209, 'Napoleao', 'Napoleon', 'FILME', 'Drama, Guerra, Historia', 2023, `${TMDB}/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg`, 'A ascensao de Napoleao Bonaparte e retratada entre batalhas, ambicao politica e sua relacao com Josefina.', 'Rotten Tomatoes: 58%', 'IMDb: 6.3/10', false, false, true),
  item(210, 'Pobres Criaturas', 'Poor Things', 'FILME', 'Comedia, Drama, Fantasia', 2023, `${TMDB}/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg`, 'Bella Baxter embarca em uma jornada de autodescoberta, liberdade e choque contra as normas da sociedade.', 'Rotten Tomatoes: 92%', 'IMDb: 7.8/10', false, true, true),
  item(211, 'Anatomia de uma Queda', 'Anatomy of a Fall', 'FILME', 'Drama, Crime, Misterio', 2023, `${TMDB}/kQs6keheMwCxJxrzV83VUwFtHkB.jpg`, 'Uma escritora vira a principal suspeita da morte do marido em um julgamento cheio de duvidas e tensoes familiares.', 'Rotten Tomatoes: 96%', 'IMDb: 7.7/10', false, true, true),
  item(212, 'Guerra Civil', 'Civil War', 'FILME', 'Acao, Drama, Guerra', 2024, `${TMDB}/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg`, 'Jornalistas atravessam os Estados Unidos em meio a uma guerra civil moderna e violenta.', 'Rotten Tomatoes: 81%', 'IMDb: 7.0/10', false, true, true),
]

export const homeSections = [
  section('Mais Relevantes', (movie) => movie.relevant),
  section('Filmes em Alta', (movie) => movie.trending),
  section('Filmes', (movie) => movie.type === 'Filme'),
  section('Series', (movie) => movie.type === 'Serie'),
  section('Acao', (movie) => movie.genre.includes('Acao')),
  section('Ficcao Cientifica', (movie) => movie.genre.includes('Ficcao Cientifica')),
  section('Terror', (movie) => movie.genre.includes('Terror')),
  section('Drama', (movie) => movie.genre.includes('Drama')),
  section('Comedia', (movie) => movie.genre.includes('Comedia')),
]

function section(title, predicate) {
  return {
    title,
    movies: moviesData.filter(predicate),
  }
}

function item(id, titulo, originalTitle, tipo, genero, ano, poster, sinopse, criticScore, imdbRating, featured = false, relevant = featured, trending = false) {
  const isSeries = tipo === 'SERIE'
  const rating = Number(imdbRating.match(/\d+(\.\d+)?/)?.[0] || 8)
  const tags = genero.split(',').map((tag) => tag.trim()).filter(Boolean)

  return {
    id: `classic-${id}`,
    title: titulo,
    titulo,
    originalTitle,
    type: isSeries ? 'Serie' : 'Filme',
    tipo,
    genre: genero,
    genero,
    year: ano,
    ano,
    poster,
    backdrop: BACKDROPS[id] || poster,
    synopsis: sinopse,
    sinopse,
    criticScore,
    imdbRating,
    featured,
    relevant,
    trending,
    relevance: `${Math.round(rating * 10)}% relevante`,
    maturityRating: tags.includes('Familia') || tags.includes('Animacao') ? '10' : '14',
    seasons: isSeries ? '6 temporadas' : undefined,
    duration: isSeries ? undefined : '2h 10min',
    cast: ['Catalogo TMDb IESPFLIX', originalTitle],
    tags,
    episodeTitle: isSeries ? 'T1:E1 Episodio piloto' : undefined,
    duracaoMinutos: isSeries ? 45 : 118,
    relevancia: rating,
    elenco: 'Catalogo TMDb IESPFLIX',
  }
}
