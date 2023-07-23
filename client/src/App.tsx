import React, { useState } from 'react';
import { Main } from './components/main/Main';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { useFetchImages } from './hooks/useFetchImages';
import { getImagesByCategoryAndPageIndex } from './api/Api';
import { setImages } from './redux/AppSlice';
import { ImagesResponse } from './types';
import { Loader } from './components/ui/loader/Loader';

export const App = () => {
  const { loading, category, pageIndex } = useAppSelector(state => state.app)

  useFetchImages();

  return (
    <>
      {loading && <Loader />}
      <Main />
    </>
  );
}

