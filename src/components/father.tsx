function Father({ children, childNumber, setToZeroClick }: { children?: React.ReactNode; childNumber?: number; setToZeroClick: (info: string) => void }) {
  return (
    <>
      <div>Father: childNumber: {childNumber}</div>
      <button onClick={() => setToZeroClick('haha, i`m from father')}>set to 0</button>
      {children}
    </>
  );
}

export default Father;
