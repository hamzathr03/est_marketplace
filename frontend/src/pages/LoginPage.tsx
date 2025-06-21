import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import LoginForm from '../components/auth/LoginForm';
import { Leaf } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <Leaf className="h-10 w-10 text-primary-600" />
            <span className="ml-2 text-2xl font-bold">LocalMarket</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {activeTab === 'login' ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {activeTab === 'login' ? (
            <>
              Or{' '}
              <button
                className="font-medium text-primary-600 hover:text-primary-500"
                onClick={() => setActiveTab('signup')}
              >
                create a new account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="font-medium text-primary-600 hover:text-primary-500"
                onClick={() => setActiveTab('login')}
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm type="login" />
            </TabsContent>
            <TabsContent value="signup">
              <LoginForm type="signup" />
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm-1.786 15.264h-2.38V7.264h2.38v8zm-1.188-8.933c-.766 0-1.388-.622-1.388-1.388 0-.766.622-1.388 1.388-1.388.767 0 1.388.622 1.388 1.388 0 .766-.622 1.388-1.388 1.388zm9.39 8.933h-2.38v-4.366c0-.766-.622-1.388-1.387-1.388-.766 0-1.387.622-1.387 1.388v4.366h-2.38V7.264h2.38v.766c.622-.622 1.387-.766 2.38-.766 1.91 0 2.774 1.387 2.774 3.297v4.703z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-primary-600 hover:text-primary-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;