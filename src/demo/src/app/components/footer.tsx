import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">KP-DEEP</h3>
            <p className="text-sm mb-4">
              Empowering SMEs in Khyber Pakhtunkhwa through digital transformation and access to financial services.
            </p>
            <p className="text-sm" dir="rtl" lang="ur">
              خیبر پختونخوا میں چھوٹے کاروباروں کو ڈیجیٹل تبدیلی کے ذریعے بااختیار بنانا
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Program
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">
                  Check Eligibility
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-white transition-colors">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#vendors" className="hover:text-white transition-colors">
                  Software Vendors
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Training & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white transition-colors">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-white transition-colors">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>KP-DEEP Office, Civil Secretariat, Peshawar</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>0800-KPDEEP (0800-53333)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>support@kpdeep.gov.pk</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            © 2026 Government of Khyber Pakhtunkhwa. All rights reserved.
          </p>
          <p className="mt-2" dir="rtl" lang="ur">
            © 2026 حکومت خیبر پختونخوا۔ تمام حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
}
