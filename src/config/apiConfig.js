const BASE_URL = 'https://mi-backend-z8gx.onrender.com/api';

const API_ENDPOINTS = {
    // Auth endpoints
    auth: {
        login: `${BASE_URL}/user/login`,
        logout: `${BASE_URL}/user/logout`,
        addUser: `${BASE_URL}/user`,
        getuser: `${BASE_URL}/user`,
        deleteUser: (id) => `${BASE_URL}/user/${id}`
    },
    
    // Courses endpoints
    courses: {
        getAll: `${BASE_URL}/courses`,
        getById: (id) => `${BASE_URL}/courses/${id}`,
        create: `${BASE_URL}/courses`,
        update: (id) => `${BASE_URL}/courses/${id}`,
        delete: (id) => `${BASE_URL}/courses/${id}`,
    },
    
    // Tests endpoints
    tests: {
        getAll: `${BASE_URL}/test-results`,
        getById: (id) => `${BASE_URL}/test-results/${id}`,
        create: `${BASE_URL}/tests`,
        update: (id) => `${BASE_URL}/test-results/${id}`,
        delete: (id) => `${BASE_URL}/test-results/${id}`,
    },
    
    // Testimonials endpoints
    testimonials: {
        getAll: `${BASE_URL}/testimonials`,
        getNonApproved: `${BASE_URL}/testimonials/non-approved`,
        create: `${BASE_URL}/testimonials`,
        approve: (id) => `${BASE_URL}/testimonials/${id}/approve`,
        delete: (id) => `${BASE_URL}/testimonials/${id}`,
    },
    
    // Test Results endpoints
    testResults: {
        getAll: `${BASE_URL}/test-results`,
        create: `${BASE_URL}/test-results`,
        update: (id) => `${BASE_URL}/test-results/${id}`,
        delete: (id) => `${BASE_URL}/test-results/${id}`,
    },
    
    // Academic Results endpoints
    academicResults: {
        getAll: `${BASE_URL}/academic-results`,
        create: `${BASE_URL}/academic-results`,
        update: (id) => `${BASE_URL}/academic-results/${id}`,
        delete: (id) => `${BASE_URL}/academic-results/${id}`,
    },
    
    // Notifications endpoints
    notifications: {
        getAll: `${BASE_URL}/notifications`,
        create: `${BASE_URL}/notifications`,
        delete: (id) => `${BASE_URL}/notifications/${id}`,
        update: (id) => `${BASE_URL}/notifications/${id}`,
    }
};

export { BASE_URL, API_ENDPOINTS };