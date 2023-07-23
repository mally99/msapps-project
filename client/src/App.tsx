import React, { useState } from 'react';
import { Image } from './components/image/Image';
import { Main } from './components/main/Main';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { useAsync } from './hooks/useAsync';
import { getImagesByCategoryAndPageIndex } from './api/Api';
import { IImagesResponse } from './components/main/types';
import { setImages } from './redux/AppSlice';
import { Loader } from './components/loader/Loader';

export const App = () => {
  const { loading, images } = useAppSelector(state => state.app)
  const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [category, setCategory] = useState("");

  useAsync({
    request: category ? () => getImagesByCategoryAndPageIndex(category, pageIndex) : undefined,
    onSuccess: (response: IImagesResponse) => dispatch(setImages(response)),
    dependencies: [pageIndex, category]
  })

  return (
    <>
      {loading && <Loader />}
      <Main setPageIndex={setPageIndex} category={category} setCategory={setCategory} />
    </>
  );
}

