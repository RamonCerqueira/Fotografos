import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { nanoid } from 'nanoid';

export interface AnalyticsData {
  visits: {
    total: number;
    unique: number;
    recurring: number;
    history: { date: string; count: number }[];
  };
  clicks: {
    total: number;
    byElement: Record<string, number>;
    bySection: Record<string, number>;
  };
  metrics: {
    bounceRate: number; // Simulated
    avgTimeOnPage: number; // Seconds
    topPages: Record<string, number>;
    devices: { desktop: number; mobile: number; tablet: number };
    sources: { direct: number; social: number; organic: number; referral: number };
    locations: Record<string, number>; // Simulated
  };
}

const STORAGE_KEY = 'site_analytics_data';
const VISITOR_KEY = 'site_visitor_id';

export function useTrafficTracking() {
  const [location] = useLocation();
  const [data, setData] = useState<AnalyticsData | null>(null);

  // Initialize or update tracking on mount/navigation
  useEffect(() => {
    const initTracking = () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const now = new Date();
      const today = now.toISOString().split('T')[0];
      
      let analytics: AnalyticsData = storedData ? JSON.parse(storedData) : {
        visits: { total: 0, unique: 0, recurring: 0, history: [] },
        clicks: { total: 0, byElement: {}, bySection: {} },
        metrics: { 
          bounceRate: 45, 
          avgTimeOnPage: 120, 
          topPages: {}, 
          devices: { desktop: 0, mobile: 0, tablet: 0 },
          sources: { direct: 0, social: 0, organic: 0, referral: 0 },
          locations: {}
        }
      };

      // Visit Tracking
      analytics.visits.total++;
      
      const visitorId = localStorage.getItem(VISITOR_KEY);
      if (!visitorId) {
        localStorage.setItem(VISITOR_KEY, nanoid());
        analytics.visits.unique++;
        
        // Simulate device tracking for new visitor
        const width = window.innerWidth;
        if (width < 768) analytics.metrics.devices.mobile++;
        else if (width < 1024) analytics.metrics.devices.tablet++;
        else analytics.metrics.devices.desktop++;

        // Simulate source
        const sources = ['direct', 'social', 'organic', 'referral'] as const;
        const randomSource = sources[Math.floor(Math.random() * sources.length)];
        analytics.metrics.sources[randomSource]++;

        // Simulate location
        const locations = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];
        const randomLoc = locations[Math.floor(Math.random() * locations.length)];
        analytics.metrics.locations[randomLoc] = (analytics.metrics.locations[randomLoc] || 0) + 1;

      } else {
        analytics.visits.recurring++;
      }

      // History tracking
      const historyEntry = analytics.visits.history.find(h => h.date === today);
      if (historyEntry) {
        historyEntry.count++;
      } else {
        analytics.visits.history.push({ date: today, count: 1 });
        // Keep only last 7 days
        if (analytics.visits.history.length > 7) analytics.visits.history.shift();
      }

      // Page View Tracking
      const currentPath = window.location.pathname === '/' ? 'Home' : window.location.pathname;
      analytics.metrics.topPages[currentPath] = (analytics.metrics.topPages[currentPath] || 0) + 1;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
      setData(analytics);
    };

    initTracking();
  }, [location]);

  // Click Tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (!storedData) return;

      const analytics: AnalyticsData = JSON.parse(storedData);
      analytics.clicks.total++;

      // Element Tracking
      const target = e.target as HTMLElement;
      const elementTag = target.tagName;
      analytics.clicks.byElement[elementTag] = (analytics.clicks.byElement[elementTag] || 0) + 1;

      // Section Tracking (Heatmap approximation)
      const section = target.closest('section') || target.closest('header') || target.closest('footer');
      if (section) {
        const sectionId = section.id || section.tagName.toLowerCase();
        analytics.clicks.bySection[sectionId] = (analytics.clicks.bySection[sectionId] || 0) + 1;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
      
      // Update local state if needed (debounced ideally, but here direct)
      setData(analytics);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return data;
}
