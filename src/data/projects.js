export const projects = [
  {
    id: 'shamain-store',
    title: 'Shamain Store',
    tagline: 'Full-stack e-commerce platform',
    description:
      'A full-stack e-commerce platform with customer authentication, an admin dashboard, shopping cart, wishlist and order management — built end to end.',
    longDescription: [
      'Shamain Store is a live, production e-commerce site built solo across the full stack. Customers can browse products, manage a wishlist, add items to a cart, and check out, while a separate authenticated admin dashboard handles product and order management.',
      'The backend is a REST API built with Express.js and MongoDB, with JWT handling authentication for both customer and admin roles. The frontend is a React single-page app styled with Tailwind CSS, focused on fast page loads and a clean checkout flow.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    features: [
      'Customer authentication with JWT-based sessions',
      'Admin dashboard for product & order management',
      'Shopping cart and wishlist with persistent state',
      'Order history and status tracking',
      'Responsive storefront built with Tailwind CSS',
    ],
    year: '2025',
    status: 'Live',
    category: 'E-commerce',
    liveUrl: 'https://www.shamain.store/',
    githubUrl: 'https://github.com/hoodakram',
    accent: '#5eead4',
  },
  {
    id: 'medovate',
    title: 'Medovate',
    tagline: 'Hospital management system',
    description:
      'A hospital web app with a protected admin dashboard for doctor CRUD, an AI-powered chatbot wired through n8n webhooks, and a native OPD token system.',
    longDescription: [
      'Medovate is a hospital management web app built around three real workflows: an admin dashboard for managing doctor records, an AI-powered chatbot for patient questions, and an OPD (Out-Patient Department) token system for queue management.',
      'The admin dashboard is JWT-protected and supports full CRUD on doctor records. The chatbot is wired to an n8n workflow via webhooks — during development this involved solving a CORS issue between the React app and the webhook, resolved with a Vite dev proxy. Global state is managed with React Context, and the app degrades gracefully if the backend is unreachable rather than breaking the UI. The OPD token form was rebuilt from an embedded iframe into a native React form posting directly to the n8n webhook, for a smoother in-app experience.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS v4', 'React Router v6', 'Context API', 'n8n'],
    features: [
      'JWT-protected admin dashboard with full doctor CRUD',
      'AI-powered chatbot connected via n8n webhooks',
      'Native OPD token form (replacing an earlier iframe embed)',
      'Global state management with React Context API',
      'Graceful fallback when the backend is unreachable',
    ],
    year: '2025 – 2026',
    status: 'Case study',
    category: 'Healthcare',
    liveUrl: null,
    githubUrl: 'https://github.com/hoodakram',
    accent: '#a48bfa',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
