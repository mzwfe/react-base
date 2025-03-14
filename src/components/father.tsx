function Father({ children }: { children?: React.ReactNode  }) {
  return (
    <>
      <div>Father</div>
      {children}
    </>
  );
}

export default Father;
