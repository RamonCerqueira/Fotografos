import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  BarChart2, 
  Users, 
  MousePointer2, 
  Globe, 
  Smartphone, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTrafficTracking, AnalyticsData } from '@/hooks/useTrafficTracking';

interface AnalyticsDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function AnalyticsDashboard({ isOpen, onClose }: AnalyticsDashboardProps) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Poll for data updates every 30s
  useEffect(() => {
    const fetchData = () => {
      const stored = localStorage.getItem('site_analytics_data');
      if (stored) {
        setData(JSON.parse(stored));
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-[#1A1A1A] w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <BarChart2 className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tempo Real • Atualização automática a cada 30s</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 bg-gray-50/50 dark:bg-[#0F0F0F]">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : (
                <Tabs defaultValue="overview" className="w-full space-y-6">
                  <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                    <TabsTrigger value="audience">Audiência</TabsTrigger>
                    <TabsTrigger value="behavior">Comportamento</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <KPICard 
                        title="Total de Visitas" 
                        value={data?.visits.total || 0} 
                        icon={<Users size={20} />} 
                        trend="+12%" 
                      />
                      <KPICard 
                        title="Visitantes Únicos" 
                        value={data?.visits.unique || 0} 
                        icon={<Users size={20} />} 
                        trend="+5%" 
                      />
                      <KPICard 
                        title="Taxa de Rejeição" 
                        value={`${data?.metrics.bounceRate}%`} 
                        icon={<ArrowUpRight size={20} />} 
                        trend="-2%" 
                        inverse
                      />
                      <KPICard 
                        title="Tempo Médio" 
                        value={`${Math.floor((data?.metrics.avgTimeOnPage || 0) / 60)}m ${(data?.metrics.avgTimeOnPage || 0) % 60}s`} 
                        icon={<Clock size={20} />} 
                        trend="+8%" 
                      />
                    </div>

                    {/* Main Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Histórico de Visitas</CardTitle>
                          <CardDescription>Últimos 7 dias</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data?.visits.history || []}>
                              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                              <XAxis dataKey="date" />
                              <YAxis />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#1A1A1A', border: 'none', borderRadius: '8px', color: '#fff' }}
                              />
                              <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Origem do Tráfego</CardTitle>
                          <CardDescription>Canais de aquisição</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Direto', value: data?.metrics.sources.direct },
                                  { name: 'Social', value: data?.metrics.sources.social },
                                  { name: 'Orgânico', value: data?.metrics.sources.organic },
                                  { name: 'Referência', value: data?.metrics.sources.referral },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {COLORS.map((color, index) => (
                                  <Cell key={`cell-${index}`} fill={color} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Audience Tab */}
                  <TabsContent value="audience" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Dispositivos</CardTitle>
                          <CardDescription>Mobile vs Desktop vs Tablet</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                              { name: 'Desktop', value: data?.metrics.devices.desktop },
                              { name: 'Mobile', value: data?.metrics.devices.mobile },
                              { name: 'Tablet', value: data?.metrics.devices.tablet },
                            ]}>
                              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip cursor={{ fill: 'transparent' }} />
                              <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Geolocalização</CardTitle>
                          <CardDescription>Principais cidades</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {Object.entries(data?.metrics.locations || {}).map(([city, count], idx) => (
                              <div key={city} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                                    {idx + 1}
                                  </div>
                                  <span className="font-medium">{city}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-500">{count} visitas</span>
                                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-blue-500" 
                                      style={{ width: `${(count / (data?.visits.total || 1)) * 100}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Behavior Tab */}
                  <TabsContent value="behavior" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="md:col-span-2">
                        <CardHeader>
                          <CardTitle>Heatmap de Cliques</CardTitle>
                          <CardDescription>Áreas mais interagidas</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {Object.entries(data?.clicks.bySection || {}).map(([section, count]) => (
                              <div key={section} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="capitalize font-medium">{section}</span>
                                  <span className="text-gray-500">{count} cliques</span>
                                </div>
                                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((count / (data?.clicks.total || 1)) * 100, 100)}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full absolute left-0 top-0 ${
                                      count > 10 ? 'bg-red-500' : count > 5 ? 'bg-orange-500' : 'bg-green-500'
                                    }`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Elementos Top</CardTitle>
                          <CardDescription>Tipos de elementos clicados</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {Object.entries(data?.clicks.byElement || {}).map(([tag, count]) => (
                              <div key={tag} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                <span className="font-mono text-sm text-blue-600 dark:text-blue-400">&lt;{tag.toLowerCase()} /&gt;</span>
                                <span className="font-bold">{count}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function KPICard({ title, value, icon, trend, inverse = false }: { title: string; value: string | number; icon: React.ReactNode; trend: string; inverse?: boolean }) {
  const isPositive = trend.startsWith('+');
  const trendColor = inverse 
    ? (isPositive ? 'text-red-500' : 'text-green-500')
    : (isPositive ? 'text-green-500' : 'text-red-500');

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
            {icon}
          </div>
          <span className={`text-sm font-bold ${trendColor} bg-opacity-10 px-2 py-1 rounded-full`}>
            {trend}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
