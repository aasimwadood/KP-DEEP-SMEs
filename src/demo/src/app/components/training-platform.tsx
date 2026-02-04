import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import {
  PlayCircle, BookOpen, Award, Users, Calendar,
  Clock, Star, Download, MessageCircle, Search, ArrowLeft
} from 'lucide-react';
import { Progress } from '@/app/components/ui/progress';

interface TrainingPlatformProps {
  onBack?: () => void;
}

const courses = [
  {
    id: '1',
    title: 'Digital Literacy Fundamentals',
    titleUrdu: 'ڈیجیٹل خواندگی کی بنیادیں',
    category: 'Digital Literacy',
    difficulty: 'Beginner',
    duration: '2 hours',
    language: ['Urdu', 'English'],
    enrolled: 850,
    completed: 720,
    rating: 4.8,
    progress: 65,
  },
  {
    id: '2',
    title: 'Inventory Management Mastery',
    titleUrdu: 'انوینٹری مینجمنٹ میں مہارت',
    category: 'Inventory Control',
    difficulty: 'Intermediate',
    duration: '3 hours',
    language: ['Urdu', 'Pashto', 'English'],
    enrolled: 620,
    completed: 480,
    rating: 4.9,
    progress: 40,
  },
  {
    id: '3',
    title: 'Tax Compliance for SMEs',
    titleUrdu: 'چھوٹے کاروبار کے لیے ٹیکس تعمیل',
    category: 'Tax Compliance',
    difficulty: 'Advanced',
    duration: '4 hours',
    language: ['Urdu', 'English'],
    enrolled: 420,
    completed: 350,
    rating: 4.7,
    progress: 85,
  },
];

const workshops = [
  {
    id: '1',
    title: 'POS System Setup Workshop',
    date: 'Feb 10, 2026',
    time: '10:00 AM',
    type: 'Physical',
    venue: 'Peshawar Chamber of Commerce',
    seats: '50 / 120',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Digital Accounting Best Practices',
    date: 'Feb 15, 2026',
    time: '2:00 PM',
    type: 'Virtual',
    venue: 'Zoom Webinar',
    seats: '180 / 500',
    status: 'Open',
  },
];

export function TrainingPlatform({ onBack }: TrainingPlatformProps) {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Training & Capacity Building</h1>
              <h2 className="text-xl font-bold text-gray-900" dir="rtl" lang="ur">
                تربیت اور صلاحیت سازی
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">48</div>
                <div className="text-sm text-gray-600">Available Courses</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1,420</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">850</div>
                <div className="text-sm text-gray-600">Certificates Issued</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Upcoming Workshops</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="workshops">Live Workshops</TabsTrigger>
              <TabsTrigger value="community">Community Forum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses">
              {/* Search and Filters */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search courses..." className="pl-10" />
                </div>
                <Button variant="outline">All Categories</Button>
                <Button variant="outline">All Levels</Button>
                <Button variant="outline">All Languages</Button>
              </div>

              {/* Course Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-4">
                      {/* Header */}
                      <div className="mb-3">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2" dir="rtl" lang="ur">
                          {course.titleUrdu}
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                          <Badge variant="outline" className="text-xs">{course.difficulty}</Badge>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="flex gap-2 mb-3">
                        {course.language.map((lang, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{lang}</Badge>
                        ))}
                      </div>

                      {/* Progress */}
                      {course.progress > 0 && (
                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                        <div>{course.enrolled} enrolled</div>
                        <div>{course.completed} completed</div>
                      </div>

                      {/* Action */}
                      <Button className="w-full">
                        {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Workshops Tab */}
            <TabsContent value="workshops">
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="p-6">
                    <div className="grid md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                        <Badge variant="secondary">{workshop.type}</Badge>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600">Date</div>
                        <div className="font-medium text-gray-900">{workshop.date}</div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600">Time</div>
                        <div className="font-medium text-gray-900">{workshop.time}</div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600">Venue</div>
                        <div className="font-medium text-gray-900 text-sm">{workshop.venue}</div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-600">Seats: {workshop.seats}</div>
                        <Button size="sm" className="w-full">Register Now</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community">
              <div className="space-y-4">
                <div className="flex gap-4 mb-6">
                  <Input placeholder="Ask a question or share your experience..." className="flex-1" />
                  <Button>Post</Button>
                </div>

                {[
                  { user: 'Ahmed Khan', question: 'How to integrate POS with accounting software?', replies: 12, votes: 23 },
                  { user: 'Fatima Ali', question: 'Best practices for inventory management in retail?', replies: 8, votes: 15 },
                ].map((post, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">▲</Button>
                        <span className="font-semibold text-gray-900">{post.votes}</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">▼</Button>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{post.question}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Posted by {post.user}</span>
                          <span>{post.replies} replies</span>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Document Library</h3>
                  <div className="space-y-3">
                    {[
                      'Invoice Template (Urdu/English)',
                      'Business Plan Template',
                      'Cash Flow Checklist',
                      'Tax Filing Guide',
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-gray-900">{doc}</span>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Video Tutorials</h3>
                  <div className="space-y-3">
                    {[
                      'Getting Started with Digital Tools',
                      'Creating Your First Invoice',
                      'Understanding Your Dashboard',
                      'Generating Financial Reports',
                    ].map((video, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <PlayCircle className="w-8 h-8 text-blue-600" />
                        <span className="text-gray-900">{video}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
