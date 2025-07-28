// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { StudentList, ErrorFallback } from '@components';

// Layouts
import Main from '@layouts/main';

const Home = () => {    
    return (
        <div className="container">
            <Main>
                <StudentList />
            </Main>
        </div>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;