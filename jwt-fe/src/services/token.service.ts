import { handleResponse, IResponse } from "../core/response/handleReponse"

const API_URL = 'http://localhost:3000'

export const generateToken = async <T>(userName: string): Promise<IResponse<T>> => {
  const payload = {
    userName
  }

  try {
    const response = await fetch(`${API_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    return handleResponse(response, 'Token generado correctamente');
  } catch (_) {
    return { success: false, message: 'Error de conexión' };
  }
}

export const verifyToken = async <T>(token: string): Promise<IResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}/token/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return handleResponse(response, 'Token verificado correctamente');
  } catch (_) {
    return { success: false, message: 'Error de conexión' };
  }
}