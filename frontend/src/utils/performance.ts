// Utilidades para optimización de rendimiento y Core Web Vitals
import { lazy } from 'react';

// Lazy loading de imágenes con Intersection Observer
export const lazyLoadImage = (imageElement: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );

  observer.observe(imageElement);
};

// Optimización de carga de componentes con React.lazy
export const preloadComponent = (componentImport: () => Promise<any>) => {
  const component = lazy(componentImport);
  
  // Preload en segundo plano
  setTimeout(() => {
    componentImport();
  }, 2000);
  
  return component;
};

// Medición de rendimiento
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Optimización de scroll con throttle
export const throttleScroll = (callback: () => void, delay: number = 100) => {
  let timeoutId: number | null = null;
  let lastExecTime = 0;
  
  return () => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      callback();
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        callback();
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Detección de conexión lenta
export const isSlowConnection = () => {
  interface NetworkInformation {
    saveData?: boolean;
    effectiveType?: string;
  }
  
  interface NavigatorWithConnection extends Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
  
  const nav = navigator as NavigatorWithConnection;
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  if (!connection) return false;
  
  return connection.saveData || 
         connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g';
};

// Optimización de animaciones según dispositivo
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isSlowConnection();
};

// Precarga de recursos críticos
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/banner.png',
    '/favicon.ico'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.png') ? 'image' : 'icon';
    document.head.appendChild(link);
  });
};

// Web Vitals monitoring
export const reportWebVitals = (onPerfEntry?: (metric: { name: string; value: number; id: string }) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      // onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};
