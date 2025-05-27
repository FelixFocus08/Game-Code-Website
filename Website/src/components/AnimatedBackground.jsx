import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Code2, Lightbulb, Ticket, Users, Youtube as YoutubeIcon, MonitorPlay, Puzzle, Server, ShieldCheck, Bot, Settings2, FileText, MessageCircle, History, Home, Palette, Info, Users2, BookOpen } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const AnimatedObject = ({ icon, size, initialX, initialY, initialOpacity, initialRotate, duration, color }) => {
  const IconComponent = icon;
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        opacity: initialOpacity,
        rotate: initialRotate,
        color: color, 
      }}
      animate={{
        x: [0, Math.random() * 80 - 40, Math.random() * -80 + 40, 0],
        y: [0, Math.random() * 80 - 40, Math.random() * -80 + 40, 0],
        rotate: initialRotate + (Math.random() > 0.5 ? 180 : -180),
        opacity: [initialOpacity, initialOpacity * 0.4, initialOpacity],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }}
    >
      <IconComponent style={{ width: '100%', height: '100%' }} strokeWidth={1.2} />
    </motion.div>
  );
};


const backgroundStylesConfig = (isDarkMode) => ({
  default: {
    gradient: isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900' : 'bg-gradient-to-br from-slate-100 via-slate-200 to-neutral-300',
    objects: [{ icon: Puzzle, count: 3 }, { icon: Settings2, count: 3 }, { icon: Info, count: 2 }],
    objectColor: isDarkMode ? 'hsla(var(--muted-foreground) / 0.2)' : 'hsla(var(--muted-foreground) / 0.3)',
    particleColor: isDarkMode ? 'rgba(120, 120, 255, 0.15)' : 'rgba(100, 100, 200, 0.15)',
  },
  '/': { 
    gradient: isDarkMode ? 'bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-slate-900' : 'bg-gradient-to-br from-purple-200/60 via-blue-200/50 to-slate-50',
    objects: [{ icon: Home, count: 3 },{ icon: Gamepad2, count: 2 }, { icon: Code2, count: 2 }, { icon: Lightbulb, count: 2 }],
    objectColor: isDarkMode ? 'hsla(var(--primary) / 0.35)' : 'hsla(var(--primary) / 0.45)',
    particleColor: isDarkMode ? 'rgba(150, 150, 255, 0.3)' : 'rgba(170, 170, 230, 0.3)',
  },
  '/gaming': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-black via-purple-900/80 to-black' : 'bg-gradient-to-br from-purple-200/70 via-violet-300/60 to-purple-100/50',
    objects: [{ icon: Gamepad2, count: 6 }, { icon: Puzzle, count: 3 }],
    objectColor: isDarkMode ? 'hsla(280, 80%, 65%, 0.3)' : 'hsla(280, 70%, 55%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(200, 100, 255, 0.25)' : 'rgba(220, 150, 255, 0.25)',
  },
  '/coding': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-black via-green-900/80 to-black' : 'bg-gradient-to-br from-green-200/70 via-emerald-300/60 to-green-100/50',
    objects: [{ icon: Code2, count: 5 }, { icon: Server, count: 3 }, { icon: Bot, count: 2 }],
    objectColor: isDarkMode ? 'hsla(140, 70%, 55%, 0.35)' : 'hsla(140, 60%, 45%, 0.45)', 
    particleColor: isDarkMode ? 'rgba(100, 220, 150, 0.25)' : 'rgba(130, 240, 180, 0.25)',
  },
  '/tips': {
    gradient: isDarkMode ? 'bg-gradient-to-tr from-yellow-900/50 via-orange-900/40 to-slate-900' : 'bg-gradient-to-tr from-yellow-200/50 via-orange-200/40 to-slate-50',
    objects: [{ icon: Lightbulb, count: 5 }, { icon: Settings2, count: 3 }],
    objectColor: isDarkMode ? 'hsla(40, 100%, 60%, 0.3)' : 'hsla(40, 80%, 55%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(255, 200, 80, 0.25)' : 'rgba(255, 210, 120, 0.25)',
  },
   '/tickets': {
    gradient: isDarkMode ? 'bg-gradient-to-bl from-sky-900/50 via-blue-900/40 to-slate-900' : 'bg-gradient-to-bl from-sky-200/50 via-blue-200/40 to-slate-50',
    objects: [{ icon: Ticket, count: 4 }, { icon: MessageCircle, count: 3 }, { icon: ShieldCheck, count: 2 }],
    objectColor: isDarkMode ? 'hsla(190, 100%, 60%, 0.3)' : 'hsla(190, 80%, 55%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(80, 170, 255, 0.25)' : 'rgba(120, 180, 255, 0.25)',
  },
  '/partners': {
    gradient: isDarkMode ? 'bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900' : 'bg-gradient-to-r from-indigo-200/50 via-purple-200/40 to-slate-50',
    objects: [{ icon: Users2, count: 5 }, { icon: FileText, count: 3 }],
    objectColor: isDarkMode ? 'hsla(250, 100%, 70%, 0.3)' : 'hsla(250, 80%, 65%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(140, 100, 255, 0.25)' : 'rgba(160, 130, 255, 0.25)',
  },
  '/youtube-channels': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-red-900/70 via-red-800/60 to-slate-900' : 'bg-gradient-to-br from-red-300/70 via-red-200/60 to-slate-100',
    objects: [{ icon: YoutubeIcon, count: 4 }, { icon: MonitorPlay, count: 3 }],
    objectColor: isDarkMode ? 'hsla(0, 80%, 65%, 0.35)' : 'hsla(0, 70%, 60%, 0.45)', 
    particleColor: isDarkMode ? 'rgba(255, 100, 100, 0.3)' : 'rgba(255, 130, 130, 0.3)',
  },
  '/github-profiles': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-neutral-800 via-gray-900 to-black' : 'bg-gradient-to-br from-neutral-200 via-gray-300 to-slate-50',
    objects: [{ icon: Code2, count: 4 }, { icon: Users, count: 3 }],
    objectColor: isDarkMode ? 'hsla(210, 10%, 60%, 0.3)' : 'hsla(210, 15%, 50%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(200, 200, 210, 0.2)' : 'rgba(150, 150, 160, 0.2)',
  },
  '/changelog': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-slate-800 via-neutral-800 to-stone-900' : 'bg-gradient-to-br from-slate-200 via-neutral-200 to-stone-300',
    objects: [{ icon: History, count: 4 }, { icon: FileText, count: 3 }],
    objectColor: isDarkMode ? 'hsla(220, 15%, 60%, 0.25)' : 'hsla(220, 20%, 50%, 0.35)', 
    particleColor: isDarkMode ? 'rgba(180, 180, 190, 0.15)' : 'rgba(140, 140, 150, 0.15)',
  },
  '/social-stats': {
    gradient: isDarkMode ? 'bg-gradient-to-tl from-pink-900/50 via-rose-900/40 to-slate-900' : 'bg-gradient-to-tl from-pink-200/50 via-rose-200/40 to-slate-50',
    objects: [{ icon: Users, count: 3 }, { icon: YoutubeIcon, count: 2 }, { icon: Gamepad2, count: 2 }, { icon: Palette, count: 2 }],
    objectColor: isDarkMode ? 'hsla(320, 100%, 70%, 0.3)' : 'hsla(320, 80%, 65%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(255, 100, 180, 0.25)' : 'rgba(255, 130, 190, 0.25)',
  },
   '/login': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900/40 to-blue-900/30' : 'bg-gradient-to-br from-slate-100 via-purple-200/40 to-blue-200/30',
    objects: [{ icon: ShieldCheck, count: 5 }],
    objectColor: isDarkMode ? 'hsla(230, 80%, 70%, 0.3)' : 'hsla(230, 70%, 60%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(160, 160, 255, 0.2)' : 'rgba(180, 180, 240, 0.2)',
  },
  '/register': {
    gradient: isDarkMode ? 'bg-gradient-to-tl from-slate-900 via-green-900/40 to-teal-900/30' : 'bg-gradient-to-tl from-slate-100 via-green-200/40 to-teal-200/30',
    objects: [{ icon: Users2, count: 5 }],
    objectColor: isDarkMode ? 'hsla(150, 70%, 60%, 0.3)' : 'hsla(150, 60%, 50%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(140, 255, 190, 0.2)' : 'rgba(160, 230, 190, 0.2)',
  },
  '/admin': {
    gradient: isDarkMode ? 'bg-gradient-to-b from-neutral-900 via-gray-800 to-slate-900' : 'bg-gradient-to-b from-neutral-200 via-gray-300 to-slate-300',
    objects: [{ icon: Server, count: 3 }, { icon: ShieldCheck, count: 3 }, {icon: Settings2, count: 3}],
    objectColor: isDarkMode ? 'hsla(210, 25%, 65%, 0.3)' : 'hsla(210, 35%, 55%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(200, 200, 220, 0.2)' : 'rgba(170, 170, 190, 0.2)',
  },
   '/faq': {
    gradient: isDarkMode ? 'bg-gradient-to-br from-cyan-900/50 via-sky-900/40 to-slate-900' : 'bg-gradient-to-br from-cyan-200/50 via-sky-200/40 to-slate-50',
    objects: [{ icon: Info, count: 4 }, { icon: MessageCircle, count: 3 }],
    objectColor: isDarkMode ? 'hsla(180, 70%, 60%, 0.3)' : 'hsla(180, 60%, 50%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(100, 200, 220, 0.2)' : 'rgba(130, 210, 230, 0.2)',
  },
  '/glossary': {
    gradient: isDarkMode ? 'bg-gradient-to-bl from-lime-900/50 via-emerald-900/40 to-slate-900' : 'bg-gradient-to-bl from-lime-200/50 via-emerald-200/40 to-slate-50',
    objects: [{ icon: BookOpen, count: 4 }, { icon: Lightbulb, count: 3 }],
    objectColor: isDarkMode ? 'hsla(100, 60%, 55%, 0.3)' : 'hsla(100, 50%, 45%, 0.4)', 
    particleColor: isDarkMode ? 'rgba(150, 220, 100, 0.2)' : 'rgba(180, 230, 130, 0.2)',
  },
});


const AnimatedBackground = () => {
  const location = useLocation();
  const { settings } = useSettings();
  const [currentKey, setCurrentKey] = useState(location.pathname + '-initial-' + settings.darkMode);
  
  const styles = backgroundStylesConfig(settings.darkMode);

  const currentStyle = useMemo(() => {
    return styles[location.pathname] || styles[location.pathname.split('/')[1]] || styles.default;
  }, [location.pathname, styles]);

  useEffect(() => {
    setCurrentKey(location.pathname + `-${Date.now()}-` + settings.darkMode); 
  }, [location.pathname, settings.darkMode]);

  const animatedObjects = useMemo(() => {
    if (!currentStyle.objects) return [];
    const objects = [];
    currentStyle.objects.forEach(objConfig => {
      for (let i = 0; i < objConfig.count; i++) {
        objects.push({
          id: `${objConfig.icon.displayName || objConfig.icon.name}-${i}-${currentKey}`,
          icon: objConfig.icon,
          size: Math.random() * 50 + 30, 
          initialX: `${Math.random() * 100}%`,
          initialY: `${Math.random() * 100}%`,
          initialOpacity: Math.random() * 0.1 + 0.03, 
          initialRotate: Math.random() * 360,
          duration: Math.random() * 25 + 20,
          color: currentStyle.objectColor || (settings.darkMode ? 'hsla(var(--primary) / 0.25)' : 'hsla(var(--primary) / 0.35)'),
        });
      }
    });
    return objects;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStyle.objects, currentStyle.objectColor, currentKey, settings.darkMode]);
  
  const generalParticlesArray = currentStyle.particleColor ? Array.from({ length: 25 }) : [];


  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentKey + '-bgbase'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 ${currentStyle.gradient}`}
        >
          {currentStyle.imageUrl && (
            <motion.img
              key={currentKey + '-bgimage'}
              src={currentStyle.imageUrl}
              alt="Dynamic Background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
           {currentStyle.overlay && <div className={`absolute inset-0 ${currentStyle.overlay}`}></div>}
        </motion.div>
      </AnimatePresence>

      {animatedObjects.map(obj => (
        <AnimatedObject
          key={obj.id}
          icon={obj.icon}
          size={obj.size}
          initialX={obj.initialX}
          initialY={obj.initialY}
          initialOpacity={obj.initialOpacity}
          initialRotate={obj.initialRotate}
          duration={obj.duration}
          color={obj.color}
        />
      ))}
      
      {generalParticlesArray.map((_, i) => (
        <motion.div
          key={`gp-${currentKey}-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2.5 + 1,
            height: Math.random() * 2.5 + 1,
            backgroundColor: currentStyle.particleColor || (settings.darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(50,50,50,0.08)'),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: (Math.random() - 0.5) * 2 * 70,
            y: (Math.random() - 0.5) * 2 * 70,
            scale: [1, Math.random()*0.6 + 0.8, 1],
            opacity: [0, Math.random()*0.25 + 0.05, 0],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear"
          }}
        />
      ))}

    </div>
  );
};

export default AnimatedBackground;