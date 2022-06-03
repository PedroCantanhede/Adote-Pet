import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { Description, Photo } from '../ui/components/List/List.style';

const Home: NextPage = () => {
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
          pets={[
            {
              id: 1,
              name: 'Bidu',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos tempora ipsum quasi quo rerum deserunt sequi quidem dolore similique natus harum consectetur eaque veniam veritatis iste soluta, consequatur provident!',
              photo: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg'
            },
            {
              id: 2,
              name: 'Scooby',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos tempora ipsum quasi quo rerum deserunt sequi quidem dolore similique natus harum consectetur eaque veniam veritatis iste soluta, consequatur provident!',
              photo: 'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          ]}
        />
    </div>
  )
}

export default Home
