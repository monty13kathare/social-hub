// components/dashboard/PlatformHealth.tsx
import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Server, Database, Globe, Cpu, Shield, RefreshCw } from 'lucide-react';

interface ServiceStatus {
  id: number;
  name: string;
  status: 'operational' | 'degraded' | 'down';
  responseTime: number;
  uptime: number;
  lastUpdated: string;
  icon: any;
}

const services: ServiceStatus[] = [
  {
    id: 1,
    name: 'API Gateway',
    status: 'operational',
    responseTime: 42,
    uptime: 99.99,
    lastUpdated: '2 min ago',
    icon: Globe,
  },
  {
    id: 2,
    name: 'Database',
    status: 'operational',
    responseTime: 18,
    uptime: 99.95,
    lastUpdated: '5 min ago',
    icon: Database,
  },
  {
    id: 3,
    name: 'Authentication',
    status: 'degraded',
    responseTime: 156,
    uptime: 99.8,
    lastUpdated: '1 min ago',
    icon: Shield,
  },
  {
    id: 4,
    name: 'Media Server',
    status: 'operational',
    responseTime: 89,
    uptime: 99.97,
    lastUpdated: '10 min ago',
    icon: Server,
  },
  {
    id: 5,
    name: 'Cache Layer',
    status: 'operational',
    responseTime: 5,
    uptime: 99.99,
    lastUpdated: 'Just now',
    icon: Cpu,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'degraded': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'down': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational': return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'degraded': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    case 'down': return <XCircle className="h-5 w-5 text-red-500" />;
    default: return <AlertCircle className="h-5 w-5 text-gray-500" />;
  }
};

export default function PlatformHealth() {
  const operationalServices = services.filter(s => s.status === 'operational').length;
  const avgResponseTime = Math.round(services.reduce((sum, s) => sum + s.responseTime, 0) / services.length);
  const avgUptime = services.reduce((sum, s) => sum + s.uptime, 0) / services.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Server className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Platform Health</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">System status & performance</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Overall Status */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{operationalServices}/{services.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Services Operational</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{avgResponseTime}ms</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg. Response Time</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Overall Uptime</span>
            <span>{avgUptime.toFixed(2)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
              style={{ width: `${avgUptime}%` }}
            />
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {service.responseTime}ms
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{service.uptime}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">uptime</p>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
              </div>
              
              {/* Response Time Indicator */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Response Time</span>
                  <span>{service.responseTime}ms</span>
                </div>
                <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      service.responseTime < 50 ? 'bg-green-500' :
                      service.responseTime < 100 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(service.responseTime / 200 * 100, 100)}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Last updated: {service.lastUpdated}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            Last incident: 14 days ago
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">All systems normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}