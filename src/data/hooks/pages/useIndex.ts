import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from "../../services/ApiService";
import { AxiosError } from 'axios';

export function useIndex() {
    const [listPets, setListPets] = useState<Pet[]>([]),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [price, setPrice] = useState(''),
        [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((response) => {
                setListPets(response.data);
            })
    }, [])

    useEffect(() => {
        if(selectedPet === null) {
            clearForm();
        }
    }, [selectedPet])

    function adopt() {
        if(selectedPet !== null) {
            if(validateAdoptionData()) {
                ApiService.post('/adocoes', {
                    pet_id: selectedPet.id,
                    email: email,
                    price: price
                })
                    .then(() => {
                        setSelectedPet(null);
                        setMessage('Pet adotado com sucesso!');
                        clearForm();
                    })
                    .catch((error: AxiosError) => {
                        setMessage(error.response?.data.message);
                    })
            } else {
                setMessage('Preencha todos os campos corretamente!');
            }
        }
    }

    function validateAdoptionData() {
        return email.length > 0 && price.length > 0;
    }

    function clearForm() {
        setEmail('');
        setPrice('');
    }

    return {
        listPets: listPets,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        price,
        setPrice,
        message,
        setMessage,
        adopt
    };
}