var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var teams = [
  {
    id: 1,
    logo: 'http://www.logo-designer.co/wp-content/uploads/2017/01/2017-interbrand-logo-design-juventus-football.png',
    name: 'Juventus',
    country: 'Italie',
    stadium: 'Juventus Stadium',
    coach: 'Allegri',
    founded: 1897,
    nbCup: 5
  },
  {
    id: 2,
    name: 'PSG',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/768px-Paris_Saint-Germain_Logo.svg.png',
    country: 'France',
    stadium: 'Parc des Princes',
    coach: 'Emery',
    founded: 1970,
    nbCup: 2
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/fr/a/aa/Blason_RC_Strasbourg_1976.png',
    name: 'RC Strasbourg',
    country: 'France',
    stadium: 'La Meinau',
    coach: 'Laurent',
    founded: 1902,
    nbCup: 1
  },
  {
    id: 4,
    logo: 'http://www.logo20.com/logo-real-madrid/logo-real-madrid-2.png',
    name: 'Real Madrid',
    country: 'Espagne',
    stadium: 'Santiago Bernabeu',
    coach: 'Zidane',
    founded: 1912,
    nbCup: 6
  },
  {
    id: 5,
    logo: 'http://images.footmercato.net/club/400x400/13089.png',
    name: 'Gomido',
    country: 'Togo',
    stadium: 'Gomido Arena',
    coach: '',
    founded: 1974,
    nbCup: 2
  },
  {
    id: 6,
    logo: 'https://seeklogo.com/images/A/as-roma-60-s-logo-5422998DC3-seeklogo.com.png',
    name: 'AS Roma',
    country: 'Italie',
    stadium: 'Olimpico',
    coach: 'Di Francesco',
    founded: 1899,
    nbCup: 1
  },
];

var players = [
  {
    id: 1,
    picture: '',
    lastname: 'Del Piero',
    firstname: 'Ale',
    current_team: 'Juventus',
    country: 'Italie',
    position: 'Attaquant'
  },
  {
    id: 2,
    picture: '',
    lastname: 'Buffon',
    firstname: 'Gianluigi',
    current_team: 'Juventus',
    country: 'Italie',
    position: 'Gardien'
  },
  {
    id: 3,
    picture: '',
    lastname: 'Areola',
    firstname: 'Alphonse',
    current_team: 'PSG',
    country: 'France',
    position: 'Gardien'
  },
  {
    id: 4,
    picture: '',
    lastname: 'Rabiot',
    firstname: 'Adrien',
    current_team: 'PSG',
    country: 'France',
    position: 'Milieu'
  },
];

var students = [
    {
      id:1,
      lastname: 'Paul', 
      firstname: 'Toto', 
      notes: [7.55,8.55,9], 
      photo: 'data:image/jpeg;base64,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',
      group: 'POEI Java'
    },
    {
      id:2,
      lastname: 'Paolo', 
      firstname: 'Titi',
      notes: [10,11,12], 
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq03b80qvJsHgUGyifH4yTVAT3XyqJmF49i5Xfy3TBZ4A7V3mLEQ',
      group: 'POEI Java'
    },
    {
      id:3,
      lastname: 'Norton', 
      firstname: 'tata', 
      notes: [13,14,15], 
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeggROtHCMG5bXWPSR07IYD8h40vbWySAupNnSuttZJI7PYUgINg',
      group: 'ESD'
    }
  ]

books = [
  {
    Id:0,
    Dispo:true,
    Titre:'Le Père Goriot',
    Auteur: 'Honoré de Balzac',
    nbPages: 340,
    AnneeParution: 1832,
    nbEmprunt: 0
  },
  {
    Id:1,
    Dispo:true,
    Titre:'Marcovaldo',
    Auteur: 'Italo Calvino',
    nbPages: 181,
    AnneeParution: 1982,
    nbEmprunt: 0
  },
  {
    Id:2,
    Dispo:false,
    Titre:'Le seigneur des anneaux',
    Auteur: 'J.R.R. Tolkien',
    nbPages: 1344,
    AnneeParution: 1954,
    nbEmprunt: 0
  },
  {
    Id:3,
    Dispo:false,
    Titre:'Angular 6 pour les pros',
    Auteur: 'Adam Freeman',
    nbPages: 780,
    AnneeParution: 2018,
    nbEmprunt: 0
  }
]

// Middlewares
app.use(bodyParser.json()); // le body des requetes sont parsees (JSON -> js)
app.use(express.static('public'));

//permet les requetes cross-domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes

//get
app.get('/books', (req,res) => res.json(books));
// app.get('/books/:id', (req,res) => {
//   for (let i=0; i<books.length; i++){
//     if(books[i].id == id){
//       return res.status(200).json(books[i])
//     }
//   }
//   res.status(404).send('Livre inconnu')
// });
app.get('/authors', (req, res) => {
  listAuthors = []
  for (let i=0; i<books.length; i++){
    listAuthors.push(books[i].Auteur);
  }
  return res.json(listAuthors);
});
app.get('/students', (req, res) => res.json(students));
app.get('/students/:id', (req, res) => {
  let id = req.params.id;

  // recuperation de l'edutiant ciblé

    for (let i=0; i<students.length; i++){
      if(students[i].id == id){
        return res.json(students[i])
      }
    }
    
    res.status(404).send('Etudiant inconnu');
});

app.get('/teams', (req, res) => res.json(teams));
app.get('/players', (req, res) => res.json(players));
app.get('/teams/:team/players', (req, res) => {
  var team = req.params.team;
  var playersFiltered = players.filter(player => player.current_team == team);
  return res.json(playersFiltered);
})

// post
app.post('/teams', function(req, res) {
  var id = getLastId(teams);
  var team = {
    id: id + 1,
    logo: req.body.logo,
    name: req.body.name,
    country: req.body.country,
    stadium: req.body.stadium,
    coach: req.body.coach,
    founded: req.body.founded,
    nbCup: req.body.nbCup
  };
  teams.push(team);
  res.json(team);
})

//put
app.put('/students/:id', (req, res)=>{
  // mise a jour de l'edutiant ciblé
  if(req.body.id){
    for (let i=0; i<students.length; i++){
      if(students[i].id == req.body.id){
        students[i] = req.body;
        break;
      }
    }
    return res.json('mise à jour réussie');
  }

  res.status(500).end(); // envois du code erreur au client
})

// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
