

import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
    baseURL: API_URL, // قاعدة الـ API الأساسية
    headers: {
        'Content-Type': 'application/json' // التأكد من إرسال البيانات بصيغة JSON
    },
    withCredentials: true // إذا كنت تستخدم الكوكيز للمصادقة
});

export default axiosInstance;
