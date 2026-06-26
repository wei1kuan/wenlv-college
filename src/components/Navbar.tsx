import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { navItems } from '@/data/mockData';
import { HuiwenBgTexture } from '@/components/HuiwenPattern';

function SmartLink({ to, children, className, onClick }: {
  to: string; children: React.ReactNode; className?: string; onClick?: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const hashIndex = to.indexOf('#');
  if (hashIndex > -1) {
    const pathname = to.substring(0, hashIndex);
    const hash = to.substring(hashIndex + 1);
    const isSamePage = location.pathname === pathname || location.pathname === '/';
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault(); onClick?.();
      if (isSamePage) { window.location.hash = hash; } else { navigate(to); }
    };
    return <a href={to} onClick={handleClick} className={className}>{children}</a>;
  }
  return <Link to={to} onClick={onClick} className={className}>{children}</Link>;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { setIsOpen(false); setMobileOpenDropdown(null); }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto bg-heritage-primary relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <HuiwenBgTexture color="#E8C547" opacity={0.14} />
        </div>
        <div className="px-0 lg:px-4 relative z-10">
        {/* 移动端 */}
        <div className="flex lg:hidden items-center justify-between px-4 h-12">
          <span className="text-sm font-bold text-white/90">文旅创意学院</span>
          <button onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* 桌面端 */}
        <div className="hidden lg:flex">
          {navItems.map((item) => (
            <div key={item.id} className="flex-1 text-center relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <SmartLink to={item.path}
                className={`block text-base font-bold py-3 transition-all duration-300 relative ${
                  location.pathname === item.path || activeDropdown === item.id
                    ? 'bg-black/25 text-white'
                    : 'text-white/85 hover:bg-black/20 hover:text-white hover:scale-[1.02]'
                }`}>
                {/* 选中态底部指示条 */}
                {(location.pathname === item.path || activeDropdown === item.id) && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-heritage-gold rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                <span className="flex items-center justify-center gap-1">
                  {item.name}
                  {item.children && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />}
                </span>
              </SmartLink>
              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div initial={{ opacity: 0, y: -8, scaleY: 0.95 }} animate={{ opacity: 1, y: 0, scaleY: 1 }} exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="absolute top-full left-0 min-w-full shadow-xl rounded-b-lg overflow-hidden z-50 border border-heritage-gold/30 origin-top"
                      style={{ background: 'linear-gradient(180deg, rgba(139,46,46,0.97) 0%, rgba(120,38,38,0.97) 100%)' }}>
                      {item.children.map((child) => (
                        <SmartLink key={child.id} to={child.path} onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 hover:pl-5 transition-all duration-200 text-left">
                          {child.name}
                        </SmartLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* 移动端展开 */}
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.25 }} className="lg:hidden overflow-hidden">
          <div className="pb-3 space-y-0.5 max-h-[calc(100vh-3rem)] overflow-y-auto border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.children ? (
                  <div>
                    <button onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.id ? null : item.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                        location.pathname === item.path ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'
                      }`}>
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileOpenDropdown === item.id && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }} className="ml-4 space-y-0.5 overflow-hidden bg-white/5 rounded">
                          {item.children.map((child) => (
                            <SmartLink key={child.id} to={child.path}
                              onClick={() => { setIsOpen(false); setMobileOpenDropdown(null); }}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                              {child.name}
                            </SmartLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <SmartLink to={item.path} onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'
                    }`}>
                    {item.name}
                  </SmartLink>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </nav>
  );
}
