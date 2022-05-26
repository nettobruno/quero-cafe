import Head from 'next/head'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function onSubmit(data) {
    await signIn(data);
  }

  return (
    <>
      <Head>  
        <title>Index | Quero Café</title>
      </Head>

      <h1>Home page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          name='email'
          type='email'
          autoComplete='email'
          placeholder='E-mail'
          required
        />

        <input
          {...register('password')}
          name='password'
          type='password'
          autoComplete='current-password'
          placeholder='Senha'
          required
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default Home
