import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/apiConfig';

const TestResults = () => {
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.testResults.getAll, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch test results');
      const data = await response.json();
      setResults(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
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
    <div className="py-16 bg-gray-50" id="results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Test Results
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            View your test performance and track your progress
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {results.map((result) => (
            <div
              key={result._id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{result.testTitle}</h3>
                  {result.course && (
                    <p className="text-gray-600 mt-1">Course: {result.course}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{result.percentage}%</p>
                  <p className="text-gray-600">
                    {result.score} / {result.totalMarks} marks
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Attempted on:</span>
                  <span>{new Date(result.attemptedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Correct Answers:</span>
                  <span>
                    {result.answers.filter(a => a.isCorrect).length} / {result.answers.length}
                  </span>
                </div>
              </div>

              {result.answers && result.answers.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Question-wise Analysis</h4>
                  <div className="space-y-3">
                    {result.answers.map((answer, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          answer.isCorrect ? 'bg-green-50' : 'bg-red-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Question {index + 1}</span>
                          <span
                            className={`px-2 py-1 rounded text-sm ${
                              answer.isCorrect
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {answer.isCorrect ? 'Correct' : 'Incorrect'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Your answer: {answer.selectedOption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestResults; 