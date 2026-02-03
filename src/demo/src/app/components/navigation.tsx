import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-2xl text-blue-600">
              KP-DEEP
            </div>
            <div className="ml-2 text-xs text-gray-600 hidden sm:block">
              Digital Transformation Portal
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium">
              Benefits
            </a>
            <a href="#eligibility" className="text-gray-700 hover:text-blue-600 font-medium">
              Eligibility
            </a>
            <a href="#success" className="text-gray-700 hover:text-blue-600 font-medium">
              Success Stories
            </a>
            <a href="#support" className="text-gray-700 hover:text-blue-600 font-medium">
              Support
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'اردو' : 'English'}
            </Button>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Benefits
              </a>
              <a href="#eligibility" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Eligibility
              </a>
              <a href="#success" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Success Stories
              </a>
              <a href="#support" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Support
              </a>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-full"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'اردو' : 'English'}
              </Button>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
