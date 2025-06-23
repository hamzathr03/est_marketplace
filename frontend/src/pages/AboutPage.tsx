import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, ShieldCheck, Truck, MapPin, Heart } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Leaf className="h-16 w-16 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Estmarket
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting local producers with conscious consumers. We're building a sustainable
            future for local commerce, one product at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Estmarket was founded with a simple yet powerful mission: to make local,
              quality products accessible to everyone while supporting small producers and
              artisans. We believe in creating a marketplace that values transparency,
              sustainability, and community.
            </p>
            <p className="text-gray-600">
              By connecting producers directly with consumers, we're eliminating unnecessary
              intermediaries and ensuring that more value goes back to the people who create
              these amazing products. This approach not only supports local economies but
              also reduces environmental impact through shorter supply chains.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">
              Building strong connections between local producers and consumers, fostering
              a sustainable community-based economy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Every seller is carefully vetted to ensure they meet our high standards
              for product quality and business practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Efficient local delivery ensures your products arrive fresh and on time,
              while minimizing environmental impact.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-600 text-white rounded-lg shadow-sm p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Active Sellers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-primary-100">Products Delivered</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Support Local Producers?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of conscious consumers and local producers. Start
            discovering quality products from your region today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg">Browse Products</Button>
            </Link>
            <Link to="/sellers">
              <Button variant="outline" size="lg">Meet Our Sellers</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
