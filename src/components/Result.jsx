import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../config/apiConfig';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Result = () => {
  const [academicResults, setAcademicResults] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });

    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const token = localStorage.getItem('token');
      const [academicResponse, testResponse] = await Promise.all([
        fetch(API_ENDPOINTS.academicResults.getAll, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
        fetch(API_ENDPOINTS.testResults.getAll, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      ]);

      if (!academicResponse.ok || !testResponse.ok) {
        throw new Error('Failed to fetch results');
      }

      const academicData = await academicResponse.json();
      const testData = await testResponse.json();

      // Get only the first 3 results of each type
      setAcademicResults(academicData.slice(0, 3));
      setTestResults(testData.slice(0, 3));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 bg-gradient-to-b from-white to-blue-50" id="results">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
              Our Results
            </h2>
            <p className="mt-6 text-lg text-gray-600">Loading results...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 bg-gradient-to-b from-white to-blue-50" id="results">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
              Our Results
            </h2>
            <p className="mt-6 text-lg text-red-600">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50" id="results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Our Academic Excellence
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our students consistently achieve outstanding results in both academic and test performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Academic Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Academic Results</h3>
            <div className="space-y-4">
              {academicResults.map((result, index) => (
                <div
                  key={result._id}
                  className="bg-gray-50 p-4 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">{result.user}</h4>
                      <p className="text-gray-600">Class: {result.class}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600">{result.percentage}%</p>
                      <p className="text-sm text-gray-600">
                        {result.marksObtained} / {result.totalMarks}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/academic-results"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show More Academic Results
              </Link>
            </div>
          </div>

          {/* Test Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Test Results</h3>
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <div
                  key={result._id}
                  className="bg-gray-50 p-4 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">{result.user}</h4>
                      <p className="text-gray-600">{result.testTitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600">{result.percentage}%</p>
                      <p className="text-sm text-gray-600">
                        {result.score} / {result.totalMarks}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/test-results"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show More Test Results
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;