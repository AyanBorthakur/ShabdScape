# ShabdScape - Literature Portfolio

A beautiful, modern portfolio website for showcasing literature and creative writing.

## Features

✨ **Homepage** - Welcome page with featured sections
📝 **About Page** - Personal biography and writing philosophy
📚 **Works Directory** - Browse and explore all literary pieces
👍 **Like/Dislike System** - Interactive engagement with each work
📱 **Responsive Design** - Works seamlessly on all devices
🎨 **Modern UI** - Built with Tailwind CSS for a polished look

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AyanBorthakur/ShabdScape.git
cd ShabdScape
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

```
ShabdScape/
├── app/
│   ├── page.tsx          # Homepage
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── works/
│   │   └── page.tsx      # Works directory with like/dislike
│   ├── layout.tsx        # Root layout with navigation
│   └── globals.css       # Global styles
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
└── next.config.js        # Next.js config
```

## Customization

### Adding Your Works

Edit the `works` array in `/app/works/page.tsx` to add your own literary pieces:

```typescript
const initialWorks: Work[] = [
  {
    id: '1',
    title: 'Your Work Title',
    category: 'Poetry / Story / Essay',
    excerpt: 'Brief description...',
    content: 'Full content of your work...',
    likes: 0,
    dislikes: 0,
  },
  // Add more works here
]
```

### Updating the About Page

Edit `/app/about/page.tsx` to add your personal information and writing biography.

### Styling

The site uses Tailwind CSS. Modify `/tailwind.config.js` and `/app/globals.css` to customize colors and styles.

## Technologies Used

- **Next.js 14** - React framework with app router
- **TypeScript** - For type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Building for Production

```bash
npm run build
npm start
```

## Deployment

You can deploy ShabdScape to:

- **Vercel** (recommended - zero-config deployment)
- **GitHub Pages**
- **Netlify**
- **Any Node.js hosting**

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your ShabdScape repository
4. Click Deploy!

## Future Enhancements

- Add search functionality
- Implement persistent storage for likes/dislikes
- Add categories/tags filtering
- Create individual pages for each work
- Add comments section
- Newsletter signup
- Dark mode toggle

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, feel free to reach out!

---

**Made with ❤️ for literature lovers**
