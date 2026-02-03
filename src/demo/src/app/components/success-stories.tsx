import { Card } from '@/app/components/ui/card';
import { Quote, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const successStories = [
  {
    name: 'Ahmed Khan',
    nameUrdu: 'احمد خان',
    business: 'Textile Manufacturing',
    businessUrdu: 'ٹیکسٹائل مینوفیکچرنگ',
    location: 'Peshawar',
    image: 'https://images.unsplash.com/photo-1709109769928-74940d9ecbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzaG9wfGVufDF8fHx8MTc3MDA4ODg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Digital tools helped me get a PKR 2M loan in just 7 days. My inventory management is now automatic!',
    quoteUrdu: 'ڈیجیٹل ٹولز نے مجھے صرف 7 دنوں میں 20 لاکھ روپے کا قرضہ حاصل کرنے میں مدد کی۔',
    metrics: [
      { icon: Clock, label: 'Time Saved', value: '40%' },
      { icon: DollarSign, label: 'Loan Amount', value: 'PKR 2M' },
      { icon: TrendingUp, label: 'Growth', value: '35%' },
    ],
  },
  {
    name: 'Fatima Bibi',
    nameUrdu: 'فاطمہ بی بی',
    business: 'Retail Grocery Store',
    businessUrdu: 'خوردہ گروسری اسٹور',
    location: 'Mardan',
    image: 'https://images.unsplash.com/photo-1659355894431-1baa5d9bad74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjB3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MDA4ODg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The digital khata system transformed how I track customer payments. No more paper records!',
    quoteUrdu: 'ڈیجیٹل کھاتہ نظام نے میرے گاہکوں کی ادائیگیوں کو ٹریک کرنے کا طریقہ بدل دیا۔',
    metrics: [
      { icon: Clock, label: 'Time Saved', value: '50%' },
      { icon: DollarSign, label: 'Revenue Up', value: '28%' },
      { icon: TrendingUp, label: 'Collections', value: '+45%' },
    ],
  },
  {
    name: 'Bilal Afridi',
    nameUrdu: 'بلال آفریدی',
    business: 'Electronics Repair Shop',
    businessUrdu: 'الیکٹرانکس مرمت کی دکان',
    location: 'Abbottabad',
    image: 'https://images.unsplash.com/photo-1651443565600-f37fab179379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDA4ODg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Automated invoicing made tax filing so easy. I used to spend days, now it takes minutes!',
    quoteUrdu: 'خودکار انوائسنگ نے ٹیکس فائلنگ کو بہت آسان بنا دیا۔',
    metrics: [
      { icon: Clock, label: 'Time Saved', value: '60%' },
      { icon: DollarSign, label: 'Tax Savings', value: 'PKR 50K' },
      { icon: TrendingUp, label: 'Efficiency', value: '+70%' },
    ],
  },
];

export function SuccessStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from KP SMEs
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl" lang="ur">
            کے پی کے چھوٹے کاروباروں کی کامیابی کی کہانیاں
          </h2>
          <p className="text-lg text-gray-600">
            Real results from businesses like yours
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {successStories.map((story, index) => (
              <div key={index} className="px-2">
                <Card className="p-8 bg-white shadow-lg">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image Section */}
                    <div className="md:col-span-2">
                      <div className="relative">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-blue-600">
                            {story.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      {/* Quote */}
                      <div className="mb-6">
                        <Quote className="w-8 h-8 text-blue-300 mb-3" />
                        <p className="text-lg text-gray-700 italic mb-3">
                          "{story.quote}"
                        </p>
                        <p className="text-lg text-gray-700 italic mb-4" dir="rtl" lang="ur">
                          "{story.quoteUrdu}"
                        </p>

                        {/* Name and Business */}
                        <div>
                          <p className="font-bold text-gray-900 text-lg">
                            {story.name}
                          </p>
                          <p className="font-bold text-gray-900 text-lg" dir="rtl" lang="ur">
                            {story.nameUrdu}
                          </p>
                          <p className="text-sm text-gray-600">
                            {story.business}
                          </p>
                          <p className="text-sm text-gray-600" dir="rtl" lang="ur">
                            {story.businessUrdu}
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {story.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 bg-blue-50 rounded-lg">
                            <metric.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                            <div className="text-xl font-bold text-blue-600">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
