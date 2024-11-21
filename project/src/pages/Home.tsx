import { Users, Video, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Professional Counseling for a Better Tomorrow
              </h1>
              <p className="mt-4 text-lg text-purple-100">
                Expert guidance and support for students and individuals. Start your journey to mental wellness today.
              </p>
              <div className="mt-8">
                <a href="/booking" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Book a Session
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Counseling Session" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide comprehensive support tailored to your needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Expert Counselors</h3>
              <p className="mt-2 text-gray-600 text-center">
                Licensed professionals with years of experience
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Video className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Online Sessions</h3>
              <p className="mt-2 text-gray-600 text-center">
                Convenient video counseling from anywhere
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Confidential</h3>
              <p className="mt-2 text-gray-600 text-center">
                Your privacy is our top priority
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Student Discounts</h3>
              <p className="mt-2 text-gray-600 text-center">
                Special rates for students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Take the First Step?</h2>
          <p className="mt-4 text-lg text-purple-100">
            Book your session today and start your journey to better mental health
          </p>
          <div className="mt-8">
            <a href="/booking" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}