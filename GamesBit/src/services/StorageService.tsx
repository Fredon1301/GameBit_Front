import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageService = {
  save: async (key: string, value: any) => {
    try {
      const serializedValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  },
  get: async (key: string) => {
    try {
      const serializedValue = await AsyncStorage.getItem(key);
      if (serializedValue !== null) {
        return JSON.parse(serializedValue);
      }
      return null;
    } catch (error) {
      console.error("Erro ao obter do AsyncStorage:", error);
      return null;
    }
  },
};

export default StorageService;
