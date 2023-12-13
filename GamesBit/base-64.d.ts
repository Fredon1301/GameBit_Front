declare module 'base-64' {
    const base64: {
      encode: (input: string) => string;
      decode: (input: string) => string;
    };
    export default base64;
  }
  