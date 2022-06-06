import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { Description, Photo } from '../ui/components/List/List.style';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
    listPets,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    price,
    setPrice,
    message,
    setMessage,
    adopt
  } = useIndex();

  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />

        <List
          pets={listPets}
          onSelect={(pet) => setSelectedPet(pet)}
        />

        <Dialog 
          open={selectedPet !== null}
          fullWidth
          PaperProps={{ sx: { padding: 5 } }}
          onClose={() => setSelectedPet(null)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={'E-mail'}
                  type={'email'}
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label={'Quantia por mês'}
                  type={'number'}
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
            </Grid>

            <DialogActions sx={{marginTop: 5}}>
              <Button
                color={'secondary'}
                onClick={() => setSelectedPet(null)}
              >
                Cancelar
              </Button>
              <Button
                variant={'contained'}
                onClick={() => adopt()}
              >
                Confirmar adoção
              </Button>
            </DialogActions>
        </Dialog>

        <Snackbar
          open={message.length > 0}
          message={message}
          autoHideDuration={2500} // milisegundos = 2s e meio
          onClose={() => setMessage('')}
        />

    </div>
  )
}

export default Home
