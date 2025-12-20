import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">Selamat datang di halaman utama</p>
      <Button onClick={() => navigate('/about')} className="text-white">
        Pergi ke About
      </Button>
    </div>
  );
};

export default Home;
