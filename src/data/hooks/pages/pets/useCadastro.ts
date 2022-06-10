import { useState } from "react";
import { ApiService } from "../../../services/ApiService";
import { AxiosError } from 'axios';

export function useCadastro() {
    const [name, setName] = useState(''),
          [description, setDescription] = useState(''),
          [photo, setPhoto] = useState(''),
          [message, setMessage] = useState('');

    function register() {
        if(formValidate()) {
            ApiService.post('/pets', {
                name, 
                description,
                photo
            })
                .then(() => {
                    clean();
                    setMessage('Pet cadastrado com sucesso!');
                })
                .catch((error: AxiosError) => {
                    setMessage(error.response?.data.message);
                })
        } else {
            setMessage('Preencha todos os campos!');
        }
    }

    function formValidate() {
        return name.length > 2 && description.length > 20 && photo.length > 5;
    }

    function clean() {
        setName('');
        setDescription('');
        setPhoto('');
    }

    return {
        name,
        description,
        photo,
        setName,
        setDescription,
        setPhoto,
        register,
        message,
        setMessage
    }
}