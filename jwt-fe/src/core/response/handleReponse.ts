export interface IResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const handleResponse = async <T>(response: Response, succesMessage: string) => {
  const data = await response.json();

  if (response.ok) {
    return { success: true, message: succesMessage, data: data as T };
  } else {
    const errorMessage = Array.isArray(data.message) ? data.message[0] : data.message;
    return { success: false, message: errorMessage || 'Ocurrió un error' };
  }
};