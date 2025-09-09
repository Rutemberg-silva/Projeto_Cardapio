import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { DeleteModal } from './components/create-modal/delete-modal';
import { useFoodDataMutate, useFoodDeleteMutate } from './hooks/useFoodDataMutate';
import type { FoodData } from './interface/FoodData';

function App() {
  const { data } = useFoodData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState<number | null>(null);
  const { mutate: createMutate } = useFoodDataMutate();
  const { mutate: deleteMutate } = useFoodDeleteMutate();

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  
  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleOpenDeleteModal = (id: number) => {
    setSelectedFoodId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedFoodId(null);
  };

  const handleDelete = () => {
    if (selectedFoodId) {
        deleteMutate({ id: selectedFoodId }); // Simplifies the call to the mutate function
        handleCloseDeleteModal();
    }
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            key={foodData.id}
            id={foodData.id} 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            onDelete={() => handleOpenDeleteModal(foodData.id)}
          />
        )}
      </div>
      {isCreateModalOpen && <CreateModal closeModal={handleCloseCreateModal} />}
      {isDeleteModalOpen && selectedFoodId && <DeleteModal closeModal={handleCloseDeleteModal} onDelete={handleDelete} />}
      
      <button onClick={handleOpenCreateModal}>novo</button>
    </div>
  );
}

export default App;