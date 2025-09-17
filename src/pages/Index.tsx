import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Цемент М500', category: 'Стройматериалы', price: 450, stock: 150, status: 'В наличии' },
    { id: 2, name: 'Кирпич керамический', category: 'Стройматериалы', price: 12, stock: 5000, status: 'В наличии' },
    { id: 3, name: 'Арматура 12мм', category: 'Металлопрокат', price: 55, stock: 0, status: 'Нет в наличии' },
    { id: 4, name: 'Профнастил С8', category: 'Кровля', price: 890, stock: 85, status: 'В наличии' },
  ]);
  
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Иванов Петр', position: 'Менеджер', schedule: 'Пн-Пт 9:00-18:00', salary: 65000, workDays: 22 },
    { id: 2, name: 'Сидорова Анна', position: 'Кассир', schedule: 'Пн-Сб 8:00-20:00', salary: 45000, workDays: 26 },
    { id: 3, name: 'Козлов Андрей', position: 'Грузчик', schedule: 'Пн-Сб 8:00-17:00', salary: 40000, workDays: 24 },
    { id: 4, name: 'Федорова Елена', position: 'Бухгалтер', schedule: 'Пн-Пт 9:00-18:00', salary: 70000, workDays: 22 },
  ]);

  const statsCards = [
    { title: 'Общий доход', value: '2,847,350 ₽', change: '+12.5%', icon: 'TrendingUp', color: 'text-green-600' },
    { title: 'Товаров в наличии', value: '5,235', change: '+3.2%', icon: 'Package', color: 'text-blue-600' },
    { title: 'Сотрудников', value: '24', change: '+2', icon: 'Users', color: 'text-purple-600' },
    { title: 'Заказов сегодня', value: '156', change: '+8.1%', icon: 'ShoppingCart', color: 'text-orange-600' },
  ];

  const Navigation = () => (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Строймаркет</h1>
            <p className="text-sm text-gray-500">Панель управления</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {[
            { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
            { id: 'products', label: 'Товары', icon: 'Package' },
            { id: 'reports', label: 'Отчеты', icon: 'FileText' },
            { id: 'employees', label: 'Сотрудники', icon: 'Users' },
            { id: 'salary', label: 'Зарплата', icon: 'Wallet' },
            { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const DashboardContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
                  <p className={`text-sm mt-2 ${card.color}`}>{card.change} за месяц</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <Icon name={card.icon} size={24} className={card.color} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={20} />
              Продажи по дням
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[45, 62, 38, 71, 55, 48, 67].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-8 bg-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-500">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} />
              Товары на исходе
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.filter(p => p.stock < 100).map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">Остаток: {product.stock} шт.</p>
                  </div>
                  <Badge variant="destructive">Мало</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProductsContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Управление товарами</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Icon name="Plus" size={16} />
              Добавить товар
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить новый товар</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Название товара</Label>
                <Input id="name" placeholder="Введите название" />
              </div>
              <div>
                <Label htmlFor="category">Категория</Label>
                <Input id="category" placeholder="Введите категорию" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Цена (₽)</Label>
                  <Input id="price" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="stock">Количество</Label>
                  <Input id="stock" type="number" placeholder="0" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Описание</Label>
                <Textarea id="description" placeholder="Описание товара" />
              </div>
              <Button className="w-full">Добавить товар</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Товар</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Цена</TableHead>
                <TableHead>Остаток</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price} ₽</TableCell>
                  <TableCell>{product.stock} шт.</TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Edit" size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Trash2" size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const EmployeesContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Управление сотрудниками</h2>
        <Button className="flex items-center gap-2">
          <Icon name="UserPlus" size={16} />
          Добавить сотрудника
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>График работы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employees.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{employee.schedule}</p>
                    <p className="text-sm text-gray-500">Дней: {employee.workDays}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Зарплата за месяц</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employees.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{employee.salary.toLocaleString()} ₽</p>
                    <p className="text-sm text-gray-500">За {employee.workDays} дней</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ReportsContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Отчеты и аналитика</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Icon name="FileText" size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Отчет по товарам</h3>
            <p className="text-gray-600 mb-4">Полный список товаров и остатков для ревизии</p>
            <Button className="w-full">Сформировать отчет</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Icon name="BarChart3" size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Отчет по продажам</h3>
            <p className="text-gray-600 mb-4">Статистика продаж за выбранный период</p>
            <Button className="w-full">Сформировать отчет</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Icon name="Users" size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Отчет по сотрудникам</h3>
            <p className="text-gray-600 mb-4">Данные о работе и зарплате сотрудников</p>
            <Button className="w-full">Сформировать отчет</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'products':
        return <ProductsContent />;
      case 'employees':
      case 'salary':
        return <EmployeesContent />;
      case 'reports':
      case 'analytics':
        return <ReportsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {activeTab === 'dashboard' && 'Главная панель'}
            {activeTab === 'products' && 'Товары'}
            {activeTab === 'employees' && 'Сотрудники'}
            {activeTab === 'salary' && 'Зарплата'}
            {activeTab === 'reports' && 'Отчеты'}
            {activeTab === 'analytics' && 'Аналитика'}
          </h1>
          <p className="text-gray-600">
            Управление строительным магазином
          </p>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;