// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { StudentList, ErrorFallback } from '@components/index';

// Layouts
import Main from '@layouts/main';

const Home = () => {    
    return (
        <Main>
            <StudentList />
        </Main>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;