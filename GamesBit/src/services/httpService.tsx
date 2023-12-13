import AsyncStorage from '@react-native-async-storage/async-storage';

const httpService = {
    login: (data: any) => {
      return fetch("http://10.5.0.50:3333/login", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    createUser: (data: any) => {
      return fetch("http://10.5.0.50:3333/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  
    createProduct: async (data: any) => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await fetch('http://10.5.0.50:3333/api/product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token || '',
            },
            body: JSON.stringify(data),
          });
    
          return response;
        } catch (error) {
          console.error('Erro na requisição createProduct:', error);
          throw error;
        }
      },
  
    getUser: async (data: any) => {
        const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/users", {
        method: "GET",
        
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',
        },
      });
    },
    getProducts: async () => {
      const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',
        },
      });
    },
    updateProduct: async (data: any) => {
        const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/product", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',

        },
        body: JSON.stringify(data),
      });
    },
    deleteProduct: async (data: any) => {
        const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',
        },
        body: JSON.stringify(data),
      });
    },
    createCart: async (data: any) => {
        const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',
        },
        body: JSON.stringify(data),
      });
    },
    deleteCart: async (data: any) => {
        const token = await AsyncStorage.getItem('token');
      return fetch("http://10.5.0.50:3333/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || '',
        },
        body: JSON.stringify(data),
      });
    },
    createProfile: async (formData: any) => {
      const token = await AsyncStorage.getItem('token');
      
      return fetch("http://10.5.0.50:3333/api/profile", {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token || '',
        },
        body: formData,
      });
    },
    
  };
  
  export default httpService;
  