# V19 Agency

> A modern, minimalist agency portfolio showcasing full-stack development and creative digital solutions.

**[Live Portfolio](https://v19.tech)** | **[Contact](https://v19.tech/contact)**

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)

## ✨ About

V19 Agency builds digital products, brand sites, and business platforms that balance design and performance. This portfolio highlights recent work across health, travel, SaaS, and commerce.

**Highlights:**
- 🌟 **15+ Production Applications** across diverse industries
- 🚀 **Modern Tech Stack** with cutting-edge tools and frameworks  
- 🎨 **Design-First Approach** combining functionality with aesthetics
- 🌍 **Global Impact** - projects serving users worldwide

## 🎯 Featured Projects

### 🏥 **Health & Wellness**
- **[Hita](https://hita.v19.tech)** - Comprehensive wellness platform for healthier lifestyles

### 🌐 **Blockchain & Web3**
- **[Vikraya](https://vikraya.v19.tech)** - Blockchain-powered crop auction platform for farmers
- **[Nidhi](https://nidhi.v19.tech)** - Decentralized fundraising with community rewards

### 🏨 **Travel & Hospitality**  
- **[Lost Escapes](https://lostescapes.com/)** - Boutique travel booking experience
- **[The Baga Village](https://bagavillage.vercel.app/)** - Premium hotel chain website
- **[Why Kerala?](https://whykerala.v19.tech/)** - Interactive trip planner and destination guide

### 💼 **SaaS & Business Solutions**
- **[Kāryakramah](https://karyakramah.v19.tech)** - Comprehensive venue and service booking platform
- **[Kanri](https://kanri.v19.tech/)** - Advanced backend management dashboard

### 🌱 **AgriTech & IoT**
- **[Krushi](https://github.com/Vashishta-Mithra-Reddy/Agro_T)** - IoT-based soil and livestock monitoring system

### 🎭 **Personal & Creative**
- **[Ishta](https://ishta.v19.tech)** - Personal identity and showcase platform
- **[Infernia (Dragon's Realm)](https://infernia.v19.tech)** - Personal vault with diary and diet tracking

## 🛠️ Tech Stack

### **Frontend**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - Latest React with concurrent features
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Smooth animations

### **UI & UX**
- [Next Themes](https://github.com/pacocoursey/next-themes) - Dark/light mode
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- Custom animations with intersection observers

### **Development**
- [ESLint](https://eslint.org/) - Code linting
- [PostCSS](https://postcss.org/) - CSS processing
- Hot reload with Turbopack
- Custom font integration (Geist, Satoshi)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vashishta-Mithra-Reddy/v19.git
   cd v19
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or  
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
v19/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── animations/        # Animation components
│   ├── blocks/            # Layout blocks (header, nav, footer)
│   ├── ui/               # UI components
│   ├── Projects.tsx       # Main projects showcase
│   └── LoadingAnimation.tsx
├── public/               # Static assets
│   ├── logos/           # Project logos
│   ├── socials/         # Social media icons
│   └── sounds/          # Audio feedback files
├── package.json         # Dependencies and scripts
└── README.md           # You are here!
```

## 🎨 Key Features

- **🌓 Theme Switching** - Seamless dark/light mode with system preference detection
- **📱 Responsive Design** - Optimized for all screen sizes and devices
- **⚡ Performance Optimized** - Fast loading with Next.js optimization
- **🎭 Smooth Animations** - Engaging micro-interactions with Framer Motion
- **♿ Accessible** - Built with accessibility best practices
- **🔧 Type-Safe** - Full TypeScript implementation for better DX

## 🔧 Customization

This portfolio can serve as a template for other developers. Here's how to customize it:

### **Update Personal Information**
1. Modify `app/layout.tsx` for site metadata
2. Update contact details in `app/contact/page.tsx`
3. Replace project data in `components/Projects.tsx`

### **Styling**
- Colors and themes: `app/globals.css`
- Component styling: Individual component files
- Fonts: `app/layout.tsx` (Geist and Satoshi)

### **Add New Projects**
```typescript
// In components/Projects.tsx
const newProject = {
  title: "Your Project",
  description: "Brief description",
  link: "https://yourproject.com",
  logo: "/logos/your-logo.png"
};
```

## 📞 Connect With Me

- **🌐 Website**: [vashishtamithra.com](https://www.vashishtamithra.com)
- **📧 Email**: [me@vashishtamithra.com](mailto:me@vashishtamithra.com)
- **💼 LinkedIn**: [vashishta-mithra](https://www.linkedin.com/in/vashishta-mithra/)
- **🐦 Twitter**: [@v19tech](https://x.com/v19tech)
- **📱 Instagram**: [@vashishta_mithra_reddy](https://instagram.com/vashishta_mithra_reddy)
- **👨‍💻 GitHub**: [@Vashishta-Mithra-Reddy](https://github.com/Vashishta-Mithra-Reddy)
- **🎭 Profile**: [ishta.v19.tech/vashishta](https://ishta.v19.tech/vashishta)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><em>Built with ❤️ using Next.js and modern web technologies</em></p>
  <p><strong>⭐ Star this repo if you found it helpful!</strong></p>
</div>
