import express from 'express';
import cors from 'cors'; // Import cors middleware

const app = express();
const port = 4000;
const router = express.Router();

// Some partner data
let partners = {
  "sftt": {
    "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
    "name": "Speak For The Trees",
    "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
    "isActive": true,
  }
}

// Parse request bodies as JSON
app.use(express.json());

// Enable CORS for the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type'],
}));

/*
  APPLICATION ROUTES
*/

app.get('/', (req, res) => {
  res.status(200).send(partners);
});

// Get all partners
router.get('/partners', (req, res) => {
  res.status(200).send(partners);
});

// Add a new partner
router.post('/partners', (req, res) => {
  const { id, partner } = req.body;
  if (id && partner) {
    partners[id] = partner;
    res.status(201).send({ message: 'Partner added successfully', partners });
  } else {
    res.status(400).send({ message: 'Invalid request' });
  }
});

// Delete a partner
router.delete('/partners/:id', (req, res) => {
  const { id } = req.params;
  if (partners[id]) {
    delete partners[id];
    res.status(200).send({ message: 'Partner deleted successfully', partners });
  } else {
    res.status(404).send({ message: 'Partner not found' });
  }
});

// Mount the router on the /api path
app.use('/api', router);

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
});
