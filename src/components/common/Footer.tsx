import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030014] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-4 group">
              <img 
                src="/images/logo.png" 
                alt="Websozo Logo" 
                className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-500">
                Websozo
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg">
              Engineering the future of digital experiences with cutting-edge tech and futuristic design.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com/websozo/?hl=en" },
                { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61579932183743" },
                { 
                  icon: () => (
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
                    </svg>
                  ), 
                  href: "https://wa.me/923239518506?text=Hello%20Websozo!%20I'm%20interested%20in%20building%20a%20website.%20Can%20you%20help%20me?" 
                }
              ].map((social, idx) => (
                <Link 
                  key={idx}
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Capabilities</h4>
            <ul className="space-y-4">
              {['Web Systems', 'Cloud Solutions', 'Cyber Security', 'E-commerce Engine', 'Performance Tuner'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-1">Send Signal</p>
                  <span className="text-gray-300 font-medium">webbssozo@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shrink-0 group-hover:border-purple-500 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-1">Direct Line</p>
                  <span className="text-gray-300 font-medium">03239518506</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:border-blue-500 transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-1">Base Location</p>
                  <span className="text-gray-300 font-medium text-sm">North Nazimabad, Karachi, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase font-black space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Websozo Operations. All systems optimized.</p>
          <div className="flex space-x-10">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Protcol</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Service Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
