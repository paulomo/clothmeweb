const withErrorHandling = WrappedComponent => ({ showError, children }) => {
    return (
      <WrappedComponent>
        {showError && <div className="error-message">Oops! Something went wrong!</div>}
        {children}
      </WrappedComponent>
    );
  };

  export const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)