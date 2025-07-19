import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProperty, setActiveProperty] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Элитная квартира в центре",
      price: "15 500 000 ₽",
      area: "120 м²",
      rooms: "3 комнаты",
      description: "Просторная квартира с панорамными окнами и современным ремонтом",
      image: "/img/9ef40a36-2475-4cdb-a6eb-662893af2326.jpg"
    },
    {
      id: 2,
      title: "Загородный дом",
      price: "25 000 000 ₽",
      area: "250 м²",
      rooms: "5 комнат",
      description: "Уютный дом с участком и всеми удобствами",
      image: "/img/5339d9fc-ed2d-4325-ba84-b4827570bb27.jpg"
    },
    {
      id: 3,
      title: "Коммерческое помещение",
      price: "8 200 000 ₽",
      area: "85 м²",
      rooms: "Офис",
      description: "Идеально для бизнеса в престижном районе",
      image: "/img/6184f795-4fc4-45e5-bd2b-e1697268e917.jpg"
    }
  ];

  const services = [
    {
      icon: "Home",
      title: "Продажа недвижимости",
      description: "Полное сопровождение сделки от оценки до заключения договора"
    },
    {
      icon: "Key",
      title: "Аренда жилья",
      description: "Подбор идеального варианта аренды под ваши потребности"
    },
    {
      icon: "Calculator",
      title: "Оценка недвижимости",
      description: "Профессиональная оценка рыночной стоимости объекта"
    },
    {
      icon: "FileText",
      title: "Юридическое сопровождение",
      description: "Полная проверка документов и безопасность сделки"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 overflow-hidden">
        {/* 3D Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="relative w-full h-full animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
              <div className="absolute inset-8 border border-white/10 rounded-full"></div>
              <div className="absolute inset-16 border border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 3D House Model Placeholder */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-80 h-80 perspective-1000">
              <div className="relative w-full h-full transform-style-preserve-3d hover:rotate-y-12 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                  <div className="p-8 h-full flex items-center justify-center">
                    <Icon name="Building2" size={120} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30">
              ⭐ Ваш надёжный агент недвижимости
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Недвижимость 
              <br />
              <span className="text-4xl md:text-6xl">мечты</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Найдём идеальный дом, квартиру или коммерческую недвижимость. 
              Профессиональное сопровождение на всех этапах сделки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Icon name="Search" size={20} className="mr-2" />
                Найти недвижимость
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🏠 Лучшие предложения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Избранные объекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Тщательно отобранная недвижимость с лучшим соотношением цены и качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={property.id}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-rotate-1 ${
                  activeProperty === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
                onMouseEnter={() => setActiveProperty(index)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="h-64 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-blue-700">
                      <Icon name="Star" size={14} className="mr-1" />
                      Премиум
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {property.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{property.area}</Badge>
                      <Badge variant="outline">{property.rooms}</Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200">
              ⚡ Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Полный спектр услуг
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От поиска до заключения сделки — мы поможем на каждом этапе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-white"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:bg-blue-700">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30">
              📞 Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы найти дом мечты?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white font-medium">Что вас интересует?</label>
                  <Textarea 
                    placeholder="Расскажите о ваших потребностях..." 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:bg-white/20 transition-all duration-300 min-h-24"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-slate-800 hover:bg-blue-50 text-lg py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-blue-100">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@realestate.ru</p>
            </div>
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Офис</h3>
              <p className="text-blue-100">Москва, ул. Тверская, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Building2" size={32} className="text-blue-400 mr-3" />
            <span className="text-2xl font-bold">RealEstate Pro</span>
          </div>
          <p className="text-slate-400 mb-6">
            Ваш надёжный партнёр в мире недвижимости
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Facebook" size={24} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Instagram" size={24} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Linkedin" size={24} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;