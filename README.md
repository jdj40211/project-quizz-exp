# Vocabulary Quiz Application

This is a React-based vocabulary quiz application designed to be embedded in a Framer website. It replicates the functionality of vocabulary assessment quizzes that test a user's knowledge of English words.

## Features

- Multi-step quiz with progress tracking
- Word selection with visual feedback
- Results calculation and visualization
- Email collection for sending results
- Mobile-responsive design

## How to Deploy and Embed in Framer

### Option 1: Embed as an iframe

1. Build and deploy this React application to a hosting service (Netlify, Vercel, etc.)
2. In Framer, add an HTML embed element and use the following code:

```html
<iframe 
  src="https://your-deployed-app-url.com" 
  width="100%" 
  height="650" 
  frameborder="0"
  style="border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
</iframe>
```

### Option 2: Use Framer's Code Component

1. Build this React application
2. In Framer, create a new Code Component
3. Copy the built files into the Code Component
4. Use the component directly in your Framer design

## Customization

You can customize various aspects of the quiz:

- Word lists in each step
- Styling and branding
- Result calculation logic

## Development

This project was built with:

- React
- TypeScript
- Tailwind CSS
- Vite as the build tool

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```