import React from 'react';
import { useParams } from 'react-router-dom';
import { TestComponent } from '../components/TestComponent';

interface PageParams {
  pageId: string;
}

export const Page: React.FC = () => {
  const { pageId } = useParams<PageParams>();

  return <TestComponent name={`page: ${pageId}`} />;
};
