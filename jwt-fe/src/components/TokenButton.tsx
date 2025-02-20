import { toast } from "react-toastify";
import { deleteToken, generateToken, verifyToken } from "../services/token.service";
import { getLocalStorage, setLocalStorage } from "../core/helpers/localstorage";
import { ITokenCreate } from "../interfaces/token.interfaces";

interface TokenButtonsProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const TokenButtons: React.FC<TokenButtonsProps> = ({ inputRef }) => {
  const onSubmit = async () => {
    const userName = inputRef.current?.value;
    if (!userName) {
      toast.error('Ingrese un nombre para generar el payload');
      return;
    }
    const response = await generateToken<ITokenCreate>(userName);
    if (!response.success) {
      return toast.error(response.message);
    }
    setLocalStorage<string>('token', response.data!.token);
    toast.success(response.message);
  };

  const onVerify = async () => {
    const token = getLocalStorage<string>('token');
    if (!token) {
      toast.error('No hay token almacenado');
      return;
    }
    const response = await verifyToken(token);
    if (!response.success) {
      return toast.error(response.message);
    }
    toast.success(response.message);
  };


  const onDelete = async () => {
    const token = getLocalStorage<string>('token');
    if (!token) {
      toast.error('No hay token almacenado');
      return;
    }
    const response = await deleteToken(token);
    if (!response.success) {
      return toast.error(response.message);
    }
    localStorage.removeItem('token');
    toast.success(response.message);
  };

  return (
    <div className='buttons'>
      <button onClick={onSubmit}>Generar token</button>
      <button onClick={onVerify}>Verificar token</button>
      <button className='btn-delete' onClick={onDelete}>Eliminar token</button>
    </div>
  );
};

export default TokenButtons;