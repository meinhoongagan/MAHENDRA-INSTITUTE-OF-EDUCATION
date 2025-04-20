import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/apiConfig';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS library

const Test = () => {
  const { user } = useAuth();
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    course: '',
    testTitle: '',
    score: '',
    totalMarks: '',
    answers: []
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchTestResults();
  }, []);

  const fetchTestResults = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.testResults.getAll, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch test results');
      const data = await response.json();
      setTestResults(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.testResults.add, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed to add test result');
      await fetchTestResults();
      setShowForm(false);
      setFormData({
        course: '',
        testTitle: '',
        score: '',
        totalMarks: '',
        answers: []
      });
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Test Results
          </h2>
          <p className="mt-6 text-lg text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Test Results
          </h2>
          <p className="mt-6 text-lg text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50" id="test-results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Test Results
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            View your test performance and track your progress over time.
          </p>
          {user && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {showForm ? 'Cancel' : 'Add New Test Result'}
            </button>
          )}
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Add New Test Result</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Test Title</label>
                <input
                  type="text"
                  name="testTitle"
                  value={formData.testTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Score</label>
                  <input
                    type="number"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Total Marks</label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={formData.totalMarks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Submit Result
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testResults.map((result, index) => (
            <div
              key={result._id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{result.testTitle}</h3>
                  <p className="text-gray-600 mt-1">Course: {result.course}</p>
                  <p className="text-gray-600">Student Name: {result.user}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{result.percentage}%</p>
                  <p className="text-gray-600">
                    {new Date(result.attemptedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Score:</span>
                  <span>{result.score}/{result.totalMarks}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Total Questions:</span>
                  <span>{result.answers.length}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Correct Answers:</span>
                  <span>{result.answers.filter(a => a.isCorrect).length}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Status:</span>
                  <span className={`font-semibold ${result.percentage >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                    {result.percentage >= 60 ? 'Passed' : 'Failed'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;