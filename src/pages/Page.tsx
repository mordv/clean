import React from 'react';
import { useParams } from 'react-router-dom';

interface PageParams {
  pageId: string;
}

export const Page: React.VFC = () => {
  const { pageId } = useParams<PageParams>();

  return <div>{pageId}</div>;
};
