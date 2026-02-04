import Slider from 'react-slick';
import { Card } from '@/app/components/ui/card';
import { Quote, Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SuccessStories() {
  const stories = [
    {
      name: 'Ahmed Khan',
      nameUrdu: 'احمد خان',
      business: 'Textile Shop Owner, Peshawar',
      businessUrdu: 'ٹیکسٹائل شاپ مالک، پشاور',
      story: "After joining KP-DEEP, I digitized my inventory and got a loan to expand. My revenue increased by 45% in just 6 months!",
      storyUrdu: 'کے پی ڈیپ میں شامل ہونے کے بعد، میں نے اپنی انوینٹری کو ڈیجیٹل بنایا اور توسیع کے لیے قرضہ حاصل کیا۔ میری آمدنی صرف 6 ماہ میں 45٪ بڑھ گئی!',
      rating: 5,
    },
    {
      name: 'Fatima Bibi',
      nameUrdu: 'فاطمہ بی بی',
      business: 'Handicrafts Business, Swat',
      businessUrdu: 'دستکاری کا کاروبار، سوات',
      story: 'The free POS software and training helped me manage my sales better. Now banks trust my records and gave me financing.',
      storyUrdu: 'مفت POS سافٹ ویئر اور تربیت نے مجھے اپنی فروخت کو بہتر طریقے سے منظم کرنے میں مدد کی۔ اب بینک میرے ریکارڈ پر اعتماد کرتے ہیں اور مجھے فنانسنگ دی گئی۔',
      rating: 5,
    },
    {
      name: 'Imran Shah',
      nameUrdu: 'عمران شاہ',
      business: 'Restaurant Owner, Abbottabad',
      businessUrdu: 'ریسٹورنٹ مالک، ایبٹ آباد',
      story: 'Digital khata made my accounting so easy. I can track daily expenses and profits on my phone. Game changer!',
      storyUrdu: 'ڈیجیٹل کھاتے نے میرے اکاؤنٹنگ کو بہت آسان بنا دیا۔ میں اپنے فون پر روزانہ کے اخراجات اور منافع کو ٹریک کر سکتا ہوں۔ گیم چینجر!',
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="success" className="py-16 px-4 bg-blue-50">
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
          <Slider {...sliderSettings}>
            {stories.map((story, index) => (
              <div key={index} className="px-2">
                <Card className="p-8 bg-white shadow-lg">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image Section */}
                    <div className="md:col-span-2">
                      <div className="relative">
                        <img
                          src={`https://images.unsplash.com/photo-1651443565600-f37fab179379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDA4ODg2MXww&ixlib=rb-4.1.0&q=80&w=1080`}
                          alt={story.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-blue-600">
                            {story.business.split(', ')[1]}
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
                          "{story.story}"
                        </p>
                        <p className="text-lg text-gray-700 italic mb-4" dir="rtl" lang="ur">
                          "{story.storyUrdu}"
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
                            {story.business.split(', ')[0]}
                          </p>
                          <p className="text-sm text-gray-600" dir="rtl" lang="ur">
                            {story.businessUrdu.split(', ')[0]}
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <Star className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                          <div className="text-xl font-bold text-blue-600">
                            {story.rating} Stars
                          </div>
                          <div className="text-xs text-gray-600">
                            Customer Rating
                          </div>
                        </div>
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