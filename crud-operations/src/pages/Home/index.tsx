// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import ErrorFallback from '@components/ErrorBoundary';

const Home = () => {
  // throw new Error('This is a test error for the error boundary');
  return (
    <section className="container">
      <aside className="side-bar">
        <section>
          <section>
            Logo
          </section>
          <section>
            Use information
          </section>
          <section>
            <nav>
              Menubar
            </nav>
          </section>
        </section>
        <section>
          Loggout
        </section>
      </aside>
      <main>
        <header className="header">
          Header
        </header>
        <section className="table-header">
          Table header
        </section>
        <section className="list-students">
          <table width={"100%"} cellPadding={0} cellSpacing={0} className="student-table">
            <thead>
              <tr className="student-header">
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enroll Number</th>
                <th>Date of admission</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows will be populated here */}
              <tr className="student-item">
                <td><img src="https://i.pravatar.cc/150?img=12" alt="Karthi" width={65} height={55} className="student-avatar" /></td>
                <td>Karthi</td>
                <td>karthi@gmmail.com</td>
                <td>7305477760</td>
                <td>1234567305477760</td>
                <td>08-Dec, 2021</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </section>
  )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;