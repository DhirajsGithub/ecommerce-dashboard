# Sharp Dash Craft 🚀

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS. This project showcases a comprehensive admin dashboard with multiple views including eCommerce analytics and project management.

[Click to view live E-commerce Dashboard](https://ecommerce-dashboard-three-murex.vercel.app/)

![Dashboard Preview](/public/demo-gif.gif)

## ✨ Features

### 🎯 Core Dashboard Features
- **Multi-View Dashboard**: Switch between eCommerce and Projects views
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Built-in theme switching with system preference detection
- **Collapsible Sidebar**: Space-efficient navigation with collapsible sidebar
- **Real-time Notifications**: Notification panel with real-time updates

### 📊 eCommerce Dashboard
- **Key Metrics Cards**: Customers, Orders, Revenue, and Growth tracking
- **Interactive Charts**: Revenue trends with Recharts integration
- **Geographic Analytics**: World map showing revenue by location
- **Product Analytics**: Top-selling products with detailed insights
- **Sales Projections**: Future revenue forecasting with visual charts

### 📋 Projects Management
- **Project Table**: Comprehensive project listing with search and filtering
- **Status Tracking**: Multiple project statuses (In Progress, Complete, Pending, Approved, Rejected)
- **User Management**: Project assignments with user avatars and details
- **Advanced Search**: Real-time search functionality across projects
- **Sorting & Filtering**: Multiple sorting options and advanced filtering

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface with shadcn/ui components
- **Smooth Animations**: Tailwind CSS animations and transitions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Loading States**: Skeleton loaders and loading indicators
- **Toast Notifications**: User feedback with toast messages

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### Key Libraries
- **Recharts** - Data visualization and charting
- **React Router DOM** - Client-side routing
- **React Query** - Data fetching and caching
- **Lucide React** - Beautiful icon library
- **React SVG Worldmap** - Interactive world map component
- **Next Themes** - Theme management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript ESLint** - TypeScript-specific linting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DhirajsGithub/ecommerce-dashboard
   cd ecommerce-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
sharp-dash-craft/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── dashboard/      # Dashboard-specific components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── RevenueChart.tsx
│   │   │   ├── WorldMap.tsx
│   │   │   └── ...
│   │   ├── ui/            # Reusable UI components
│   │   ├── Ecommerce.tsx  # eCommerce dashboard view
│   │   └── Projects.tsx   # Projects management view
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── assets/            # Images and static assets
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Theme Customization
The project uses CSS custom properties for theming. You can customize colors in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more custom properties */
}
```

### Adding New Dashboard Views
1. Create a new component in `src/components/`
2. Add the route to the sidebar navigation in `Sidebar.tsx`
3. Update the main dashboard switch logic in `Index.tsx`

### Styling Components
The project uses Tailwind CSS with custom design tokens. You can:
- Modify `tailwind.config.ts` for global styling changes
- Use the existing design system classes
- Add new utility classes as needed

## 📊 Data Visualization

The dashboard includes several chart types:
- **Line Charts**: Revenue trends and projections
- **World Map**: Geographic revenue distribution
- **Progress Bars**: Location-based revenue comparison
- **Metric Cards**: Key performance indicators

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full sidebar and multi-column layouts
- **Tablet**: Collapsible sidebar with adaptive grid layouts
- **Mobile**: Stacked layout with mobile-optimized navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Lucide](https://lucide.dev/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework


---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
