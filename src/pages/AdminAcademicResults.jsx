import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/apiConfig';

const AdminAcademicResults = () => {
  const { user, isAdmin } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    user: '',
    class: '',
    subjects: [{ subjectName: '', marksObtained: '', totalMarks: '', grade: '' }],
    totalMarks: '',
    marksObtained: '',
    percentage: '',
    remarks: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (user && isAdmin()) {
      fetchResults();
    }
  }, [user]);

  const fetchResults = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.academicResults.getAll, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch academic results');
      const data = await response.json();
      setResults(data);
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

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      subjects: updatedSubjects
    }));
  };

  const addSubject = () => {
    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { subjectName: '', marksObtained: '', totalMarks: '', grade: '' }]
    }));
  };

  const removeSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing
        ? `${API_ENDPOINTS.academicResults.update(editingId)}`
        : API_ENDPOINTS.academicResults.create;

      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save academic result');
      }

      await fetchResults();
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this academic result?')) return;

    try {
      const response = await fetch(`${API_ENDPOINTS.academicResults.delete(id)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete academic result');
      await fetchResults();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (result) => {
    setFormData({
      user: result.user,
      class: result.class,
      subjects: result.subjects,
      totalMarks: result.totalMarks,
      marksObtained: result.marksObtained,
      percentage: result.percentage,
      remarks: result.remarks || ''
    });
    setIsEditing(true);
    setEditingId(result._id);
  };

  const resetForm = () => {
    setFormData({
      user: '',
      class: '',
      subjects: [{ subjectName: '', marksObtained: '', totalMarks: '', grade: '' }],
      totalMarks: '',
      marksObtained: '',
      percentage: '',
      remarks: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  if (!user || !isAdmin()) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Access Denied
          </h2>
          <p className="mt-6 text-lg text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Academic Results Management
          </h2>
          <p className="mt-6 text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Academic Results Management
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Name
              </label>
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class
              </label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Subjects</h3>
            {formData.subjects.map((subject, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    value={subject.subjectName}
                    onChange={(e) => handleSubjectChange(index, 'subjectName', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marks Obtained
                  </label>
                  <input
                    type="number"
                    value={subject.marksObtained}
                    onChange={(e) => {
                      handleSubjectChange(index, 'marksObtained', e.target.value);
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Marks
                  </label>
                  <input
                    type="number"
                    value={subject.totalMarks}
                    onChange={(e) => {
                      handleSubjectChange(index, 'totalMarks', e.target.value);
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade
                  </label>
                  <input
                    type="text"
                    value={subject.grade}
                    onChange={(e) => handleSubjectChange(index, 'grade', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {formData.subjects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSubject(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSubject}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              Add Subject
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Marks
              </label>
              <input
                type="number"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marks Obtained
              </label>
              <input
                type="number"
                name="marksObtained"
                value={formData.marksObtained}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Percentage
              </label>
              <input
                type="number"
                name="percentage"
                value={formData.percentage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isEditing ? 'Update Result' : 'Add Result'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="ml-4 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="grid grid-cols-1 gap-8">
          {results.map((result) => (
            <div
              key={result._id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{result.user}</h3>
                  <p className="text-gray-600 mt-1">Class: {result.class}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{result.percentage}%</p>
                  <p className="text-gray-600">
                    {result.marksObtained} / {result.totalMarks} marks
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Subjects</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {result.subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">{subject.subjectName}</p>
                      <p className="text-gray-600">
                        {subject.marksObtained} / {subject.totalMarks}
                      </p>
                      {subject.grade && (
                        <p className="text-gray-600">Grade: {subject.grade}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {result.remarks && (
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Remarks</h4>
                  <p className="text-gray-600">{result.remarks}</p>
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-600">
                  Created on: {new Date(result.createdAt).toLocaleDateString()}
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => handleEdit(result)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(result._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAcademicResults; 