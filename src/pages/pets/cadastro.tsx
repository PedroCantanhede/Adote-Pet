import { NextPage } from 'next';
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import Title from '../../ui/components/Title/Title';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';

const Cadastro: NextPage = () => {
    const {
        name,
        description,
        photo,
        setName,
        setDescription,
        setPhoto,
        register,
        message,
        setMessage
    } = useCadastro();

    return (
        <>
            <Title
                title={'Cadastro de Pets para Adoção'}
                subtitle={'Preencha os dados do novo Pet'}
            />

            <Paper sx={{maxWidth: 970, marginX: 'auto', padding: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            label={'Descrição do Pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereço de imagem do pet'}
                            fullWidth
                        />

                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component={'a'}
                            href={'http://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={register}
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar 
                open={message.length > 0}
                autoHideDuration={2500}
                message={'Pet cadastrado com sucesso!'}
            />
        </>
    )
}

export default Cadastro;