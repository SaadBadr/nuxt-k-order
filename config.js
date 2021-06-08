console.log(process.env.NODE_ENV)
export const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://127.0.0.1:8000/api/v1'
    : 'http://www.korder.com/api/v1'
