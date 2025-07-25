// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { StudentList, ErrorFallback } from '@components/';

// Layouts
import { SideBar, Main } from '@layouts/';

const Home = () => {    
    return (
        <div className="container">
            <SideBar />
            <Main children={<StudentList />} />
        </div>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;