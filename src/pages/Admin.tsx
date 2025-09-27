import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [systemStatus, setSystemStatus] = useState({
    server: 'Online',
    lastUpdate: new Date().toLocaleString(),
    activeUsers: Math.floor(Math.random() * 100) + 50,
    totalVisits: Math.floor(Math.random() * 1000) + 500
  });

  const quickLinks = [
    { name: 'Página Principal', path: '/', description: 'Ver site principal' },
    { name: 'Thank You', path: '/thankyou', description: 'Página de agradecimento' },
    { name: 'FTR Page', path: '/ftr', description: 'Página FTR' },
    { name: 'LPW Page', path: '/lpw', description: 'Landing Page W' },
    { name: 'Upsell 1', path: '/upsell1', description: 'Primeira oferta upsell' },
    { name: 'Upsell 2', path: '/upsell2', description: 'Segunda oferta upsell' },
    { name: 'Upsell 3', path: '/upsell3', description: 'Terceira oferta upsell' },
    { name: 'Downsell 1', path: '/downsell1', description: 'Primeira oferta downsell' },
    { name: 'Downsell 2', path: '/downsell2', description: 'Segunda oferta downsell' }
  ];

  const adminActions = [
    { name: 'Limpar Cache', action: () => alert('Cache limpo com sucesso!') },
    { name: 'Recarregar Sistema', action: () => window.location.reload() },
    { name: 'Ver Logs', action: () => alert('Logs visualizados no console') },
    { name: 'Backup Dados', action: () => alert('Backup iniciado!') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        lastUpdate: new Date().toLocaleString(),
        activeUsers: Math.floor(Math.random() * 100) + 50
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🚀 EagleBoost Admin Dashboard</h1>
          <p className="text-gray-600">Painel de controle administrativo - Gerencie seu sistema</p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Status do Servidor</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600 font-medium">{systemStatus.server}</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Última Atualização</h3>
            <p className="text-sm text-gray-600">{systemStatus.lastUpdate}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Usuários Ativos</h3>
            <p className="text-2xl font-bold text-blue-600">{systemStatus.activeUsers}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total de Visitas</h3>
            <p className="text-2xl font-bold text-purple-600">{systemStatus.totalVisits}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🔗 Navegação Rápida</h2>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{link.name}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                    <span className="text-blue-500">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Admin Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">⚙️ Controles Administrativos</h2>
            <div className="space-y-3">
              {adminActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  {action.name}
                </button>
              ))}
            </div>

            {/* External Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">🌐 Links Externos</h3>
              <div className="space-y-2">
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors duration-200 text-center font-medium"
                >
                  🏠 Abrir Site Principal
                </a>
                <button
                  onClick={() => window.open('http://localhost:5173?admin=true', '_blank')}
                  className="w-full p-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  🔧 Modo Admin no Site
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">📊 Informações do Sistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <strong>Versão:</strong> 1.0.0
              </div>
              <div>
                <strong>Ambiente:</strong> Desenvolvimento
              </div>
              <div>
                <strong>Porta:</strong> 5173
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;