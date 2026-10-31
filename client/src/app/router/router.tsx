import { createBrowserRouter } from 'react-router'
import { HomePage } from '@/pages/home'
import { InquiryPage } from '@/pages/inquiry'
import { NoticePage } from '@/pages/notice'
import { PostPage } from '@/pages/post'
import { ROUTES } from '@/shared/routes'
import { ContentLayout } from '../layouts/contentLayout/ui/ContentLayout'
import { RootLayout } from '../layouts/rootLayout/ui/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ContentLayout />,
        children: [
          { path: ROUTES.HOME, element: <HomePage /> },
          { path: ROUTES.NOTICE, element: <NoticePage /> },
          { path: ROUTES.POST, element: <PostPage /> },
          { path: ROUTES.INQUIRY, element: <InquiryPage /> },
        ],
      },
    ],
  },
])
