import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">MindfulCare</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2">Home</Link>
            <Link to="/booking" className="text-gray-700 hover:text-purple-600 px-3 py-2">Book Session</Link>
            <Link to="/coupons" className="text-gray-700 hover:text-purple-600 px-3 py-2">Student Discounts</Link>
            <Link to="/admin" className="text-gray-700 hover:text-purple-600 px-3 py-2">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}