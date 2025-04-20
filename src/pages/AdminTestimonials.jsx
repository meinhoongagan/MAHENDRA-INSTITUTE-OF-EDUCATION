import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/apiConfig';

const AdminTestimonials = () => {
  const { user } = useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAllTestimonials();
    }
  }, [user]);

  const fetchAllTestimonials = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.testimonials.getNonApproved, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.testimonials.approve(id)}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to approve testimonial');
      fetchAllTestimonials();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    
    try {
      const response = await fetch(`${API_ENDPOINTS.testimonials.delete}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to delete testimonial');
      fetchAllTestimonials();
    } catch (err) {
      setError(err.message);
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600">Access Denied</h2>
          <p className="mt-4 text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Manage Testimonials
          </h2>
          <p className="mt-6 text-lg text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Manage Testimonials
          </h2>
          <p className="mt-6 text-lg text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Manage Testimonials
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Review and manage student testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className={`bg-white p-8 rounded-xl shadow-md ${
                !testimonial.isApproved ? 'border-l-4 border-yellow-500' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || '/images/default-avatar.png'}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                    {testimonial.occupation && (
                      <p className="text-gray-600">{testimonial.occupation}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {!testimonial.isApproved && (
                    <button
                      onClick={() => handleApprove(testimonial._id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-4">{testimonial.message}</p>
              
              <div className="text-sm text-gray-500">
                <p>Submitted on: {new Date(testimonial.createdAt).toLocaleDateString()}</p>
                <p>Status: {testimonial.isApproved ? 'Approved' : 'Pending Approval'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonials; 