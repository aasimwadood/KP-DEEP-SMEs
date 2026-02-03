# 🚀 KP-DEEP (Khyber Pakhtunkhwa Digital Enterprise Enablement Program)

A comprehensive digital transformation platform for Small and Medium Enterprises (SMEs) in Khyber Pakhtunkhwa, Pakistan. This project consists of three interconnected applications that work together to digitize, formalize, and empower SMEs.

## 📱 Three Integrated Applications

### 1. **Main Portal** (Port: 3000)
**Web-based administrative and informational portal** for program management, grant distribution, and SME onboarding.

### 2. **Slides Presentation** (Port: 3001)
**Full-screen presentation application** for stakeholder presentations, demonstrations, and project showcases.

### 3. **Interactive Demo** (Port: 3002)
**Interactive demonstration platform** showcasing the KP-DEEP mobile app features and capabilities.

## 🏗️ Project Architecture

```
kp-deep/
├── main-app/          # Main Portal Application (Port 3000)
├── slides-app/        # Presentation App (Port 3001)
├── demo-app/         # Interactive Demo (Port 3002)
└── shared/           # Shared components and utilities
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm 9+ or 10+
- Modern web browser

### Installation

#### Method 1: Automated Setup (Recommended)
```powershell
# Clone or extract the project
# Run the setup script
.\setup.ps1
```

#### Method 2: Manual Setup
```powershell
# Install dependencies for all three apps
cd .\main-app
npm install

cd ..\slides-app
npm install

cd ..\demo-app
npm install

cd ..  # Return to root
```

### Running All Applications

#### Windows PowerShell:
```powershell
# Method 1: Using the provided script
.\run-all.ps1

# Method 2: Manual start
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '.\main-app'; npm run dev"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '.\slides-app'; npm run dev"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '.\demo-app'; npm run dev"
```

#### Command Prompt (CMD):
```cmd
# Open three separate command prompts

# Prompt 1:
cd main-app
npm run dev

# Prompt 2:
cd slides-app
npm run dev

# Prompt 3:
cd demo-app
npm run dev
```

#### Using Concurrently (If installed globally):
```bash
concurrently "cd main-app && npm run dev" "cd slides-app && npm run dev" "cd demo-app && npm run dev"
```

## 🌐 Access Points

Once running, access the applications at:

| Application | URL | Port | Description |
|------------|-----|------|-------------|
| **Main Portal** | [http://localhost:3000](http://localhost:3000) | 3000 | Administrative dashboard and SME portal |
| **Slides App** | [http://localhost:3001](http://localhost:3001) | 3001 | Full-screen presentation mode |
| **Demo App** | [http://localhost:3002](http://localhost:3002) | 3002 | Interactive demonstration |
| **All Apps** | [http://localhost:3000/dashboard](http://localhost:3000/dashboard) | - | Unified dashboard with iframe integration |

## 📊 Application Details

### 1. Main Portal (`main-app/`)
**Technology Stack:**
- React 18 + TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication

**Features:**
- SME registration and onboarding
- Grant management dashboard
- Digital Health Score visualization
- Vendor marketplace
- Real-time analytics
- Admin control panel

**Project Structure:**
```
main-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript types
│   └── assets/        # Images, fonts, etc.
├── public/            # Static assets
└── vite.config.js     # Vite configuration
```

### 2. Slides Presentation (`slides-app/`)
**Technology Stack:**
- React 18
- Reveal.js integration
- Custom presentation components
- Animated transitions

**Features:**
- 10-minute executive presentation
- Interactive slides
- Embedded demos
- Export to PDF
- Presenter notes
- Remote control support

**Presentation Sections:**
1. Executive Summary
2. Problem Statement
3. Solution Overview
4. Technical Architecture
5. Implementation Roadmap
6. Financial Model
7. Team & Partners
8. Risk Mitigation
9. Impact Metrics
10. Next Steps

### 3. Interactive Demo (`demo-app/`)
**Technology Stack:**
- React Native Web
- Interactive UI components
- Mock API simulations
- Real-time data visualization

**Features:**
- Mobile app simulation
- Digital Khata (Ledger) demo
- Inventory management simulation
- Digital Health Score calculator
- Bank integration demo
- Offline mode demonstration

**Demo Modules:**
- SME Dashboard
- Digital Ledger
- Smart Inventory
- Invoicing System
- Bankability Hub
- Reports & Analytics

## 🔧 Development

### Available Scripts (for each app)

```bash
# Development
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run type-check    # TypeScript type checking

# Testing
npm run test          # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate test coverage
```

### Environment Variables

Each app has its own `.env` file:

**.env.example:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=KP-DEEP
VITE_ENVIRONMENT=development
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

Copy `.env.example` to `.env` and update values:
```bash
cp .env.example .env
```

## 📁 Project Structure

### Shared Components (`shared/` directory)
Components and utilities shared across all three applications:

```
shared/
├── components/
│   ├── KPButton/          # Standardized button component
│   ├── KPCard/           # Card component
│   ├── KPTable/          # Data table
│   └── KPModal/          # Modal dialog
├── hooks/
│   ├── useAuth/          # Authentication hook
│   ├── useAPI/           # API calling hook
│   └── useLocalStorage/  # Local storage hook
├── utils/
│   ├── formatters/       # Data formatting utilities
│   ├── validators/       # Form validation
│   └── constants/        # Shared constants
└── types/
    └── index.ts          # Shared TypeScript types
```

## 🔗 Integration Points

### API Integration
```javascript
// Example API endpoint structure
{
  "baseURL": "https://api.kpdeep.kp.gov.pk/v1",
  "endpoints": {
    "auth": "/auth",
    "smes": "/smes",
    "grants": "/grants",
    "scores": "/scores",
    "reports": "/reports"
  }
}
```

### External Services
- **KPITB Data Center**: Hosting and infrastructure
- **Bank of Khyber**: Banking integration
- **FBR**: Tax integration
- **KPRA**: Provincial revenue authority
- **SMEDA**: SME database

## 🧪 Testing

```bash
# Run tests for all apps
cd main-app && npm test
cd ../slides-app && npm test
cd ../demo-app && npm test

# Or use the test script
.\test-all.ps1
```

## 📦 Build & Deployment

### Production Build
```bash
# Build all applications
.\build-all.ps1

# Output will be in:
# main-app/dist/
# slides-app/dist/
# demo-app/dist/
```

### Docker Deployment
```dockerfile
# Build Docker images
docker-compose build

# Run all services
docker-compose up -d

# Services will be available on:
# Main: http://localhost:8080
# Slides: http://localhost:8081
# Demo: http://localhost:8082
```

## 🚢 Deployment

### Static Hosting (Recommended)
```bash
# Deploy to Netlify/Vercel/S3
npm run build
# Upload dist/ folder to hosting provider
```

### Self-Hosted
```bash
# Using Nginx
sudo cp nginx.conf /etc/nginx/sites-available/kpdeep
sudo ln -s /etc/nginx/sites-available/kpdeep /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

## 📈 Monitoring & Analytics

### Built-in Analytics
- **Performance monitoring**: Page load times, API response times
- **User analytics**: Page views, feature usage
- **Error tracking**: JavaScript errors, API failures
- **Business metrics**: SME onboarding, loan applications

### Integration with:
- Google Analytics
- Sentry for error tracking
- LogRocket for session replay
- Custom dashboard for KPITB

## 🔐 Security

### Security Features
- JWT-based authentication
- Role-based access control (RBAC)
- Data encryption at rest and in transit
- Regular security audits
- DDoS protection
- SQL injection prevention
- XSS protection

### Compliance
- GDPR compliance for data protection
- Local data sovereignty (hosted in KPITB data center)
- Regular security audits
- Penetration testing

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

### Code Standards
```bash
# Before committing
npm run lint
npm run type-check
npm run test
```

### Commit Convention
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code formatting
refactor: Code restructuring
test: Add or update tests
chore: Maintenance tasks
```

## 📞 Support & Contact

### Development Team
| Name | Role | Contact |
|------|------|---------|
| Tanzeel Ur Rehman | Project Supervisor | 03339636797 |
| Muhammad Luqman | Technical Lead | 03327360332 |
| Asim Wadood | Mobile Lead | 03333083467 |

### Support Channels
- **Email**: support@kpdeep.kp.gov.pk
- **Issue Tracker**: [GitHub Issues](https://github.com/kp-gov/kp-deep/issues)
- **Documentation**: [docs.kpdeep.kp.gov.pk](https://docs.kpdeep.kp.gov.pk)

## 📄 License

This project is proprietary and owned by the Government of Khyber Pakhtunkhwa. All rights reserved.

## 🙏 Acknowledgments

- KP Information Technology Board (KPITB)
- Bank of Khyber
- Small and Medium Enterprises Development Authority (SMEDA)
- Federal Board of Revenue (FBR)
- Khyber Pakhtunkhwa Revenue Authority (KPRA)
- Government Girls Postgraduate College, Kohat

---

## 🆘 Troubleshooting

### Common Issues

1. **"vite is not recognized"**
   ```powershell
   # Solution 1: Use npx
   npx vite --port 3000
   
   # Solution 2: Install globally
   npm install -g vite
   
   # Solution 3: Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use**
   ```powershell
   # Find process using port
   netstat -ano | findstr :3000
   
   # Kill the process
   taskkill /PID <PID> /F
   ```

3. **Build errors**
   ```powershell
   # Clear cache and rebuild
   npm cache clean --force
   rm -rf node_modules dist
   npm install
   npm run build
   ```

### Performance Tips
- Use Chrome DevTools for profiling
- Enable gzip compression in production
- Implement lazy loading for routes
- Use CDN for static assets
- Optimize images before deployment

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Development