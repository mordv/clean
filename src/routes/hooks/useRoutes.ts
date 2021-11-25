import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

interface Routes {
  redirectToHome(): void;
  redirectToPage(pageId: number): void;
}

export const useRoutes = (): Routes => {
  const history = useHistory();

  const redirectToHome = useCallback(() => history.push(`/`), [history]);

  const redirectToPage = useCallback((caseId: number) => history.push(`/pages/${caseId}`), [history]);

  return { redirectToPage, redirectToHome };
};
